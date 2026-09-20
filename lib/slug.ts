// Turns a card title into a stable anchor id, e.g.
// "Vehicle Damage & Claims (VDR)" -> "vehicle-damage-claims-vdr".
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
