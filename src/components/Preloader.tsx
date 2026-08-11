"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LINES = [
  { emphasis: "Feel", rest: "undefeated" },
  { emphasis: "Think", rest: "unstoppable" },
  { emphasis: "Get", rest: "untied" },
];

export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const headings = Array.from(root.querySelectorAll<HTMLElement>("[data-line]"));
    const alreadyShown = sessionStorage.getItem("preloaderShown");

    if (alreadyShown) {
      const tween = gsap.to(root, { yPercent: -100, duration: 0.7, ease: "power2.inOut" });
      return () => tween.kill();
    }

    sessionStorage.setItem("preloaderShown", "true");

    const tl = gsap.timeline({ delay: 0.2, defaults: { duration: 0.9, ease: "power3.out" } });

    tl.set(document.body, { overflow: "hidden" })
      .set(headings, { yPercent: 110, autoAlpha: 1 })
      .to(headings[0], { yPercent: 0 })
      .to(headings[0], { yPercent: -110 }, "<+=0.7")
      .to(headings[1], { yPercent: 0 }, "<")
      .to(headings[1], { yPercent: -110 }, "<+=0.7")
      .to(headings[2], { yPercent: 0 }, "<")
      .to(root, { yPercent: -100, duration: 1.1, ease: "power2.inOut" }, "<+=0.7")
      .set(document.body, { overflow: "auto" });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className="fixed inset-0 z-[60] flex items-center justify-center bg-accent">
      <div className="relative h-[1.3em] w-full max-w-2xl px-6">
        {LINES.map((line) => (
          <div
            key={line.rest}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden text-center"
          >
            <p
              data-line
              className="heading whitespace-nowrap text-[clamp(1.75rem,6vw,3.5rem)] text-ink opacity-0"
            >
              <em className="italic">{line.emphasis}</em> {line.rest}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
