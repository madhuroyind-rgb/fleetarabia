"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

// Scroll-in fade as progressive enhancement only. The server always renders
// the content visible; after hydration, sections that are still below the
// fold are marked "pending" (hidden by CSS) and revealed as they scroll in.
// No JS, a failed hydration, reduced motion or no IntersectionObserver all
// leave the content exactly as the server rendered it: visible.
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen: never hide what the visitor can see.
    if (el.getBoundingClientRect().top < window.innerHeight - 80) return;

    el.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.dataset.reveal = "";
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
