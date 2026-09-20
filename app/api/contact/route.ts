import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Matches the maxLength values on the form; anything longer is not a real submission.
const MAX_LENGTH = { name: 120, company: 160, email: 200, phone: 40, area: 80, message: 4000 };

// Best-effort, per-instance throttle so the form cannot be used to flood the inbox
// or burn the email quota. Not a substitute for a shared store if this ever scales out.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recentRequests = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (recentRequests.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  hits.push(now);
  recentRequests.set(ip, hits);

  if (recentRequests.size > 5000) {
    for (const [key, times] of recentRequests) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) recentRequests.delete(key);
    }
  }

  return hits.length > RATE_LIMIT;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "";

  // If the host does not forward a client IP, every visitor would share one bucket
  // and real leads could be refused — so only throttle when the IP is known.
  if (ip && isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a few minutes or email us directly." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const area = typeof body.area === "string" ? body.area.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const honeypot = typeof body.website === "string" ? body.website.trim() : "";

  // Honeypot field: real users never fill this in, bots often do.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !company || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, company, email and message are required." },
      { status: 400 }
    );
  }

  if (
    name.length > MAX_LENGTH.name ||
    company.length > MAX_LENGTH.company ||
    email.length > MAX_LENGTH.email ||
    phone.length > MAX_LENGTH.phone ||
    area.length > MAX_LENGTH.area ||
    message.length > MAX_LENGTH.message
  ) {
    return NextResponse.json(
      { ok: false, error: "One of the fields is too long. Please shorten it and try again." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@fleetarabia.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact form cannot send email.");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured yet. Please email us directly." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `FleetArabia Website <${fromEmail}>`,
    to: [toEmail],
    replyTo: email,
    subject: `Website Inquiry: ${area || "General"} — ${name}`,
    text: [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      `Inquiry Area: ${area || "N/A"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
