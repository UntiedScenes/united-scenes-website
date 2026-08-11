"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SplitFadeText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let split: SplitType | null = null;
    let triggers: ScrollTrigger[] = [];
    let resizeTimeout: ReturnType<typeof setTimeout>;
    let previousWidth = window.innerWidth;

    function init() {
      gsap.set(el, { autoAlpha: 0 });

      split?.revert();
      triggers.forEach((t) => t.kill());
      triggers = [];

      split = new SplitType(el!, { types: "lines" });

      gsap.set(el, { autoAlpha: 1 });

      split.lines?.forEach((line) => {
        const tween = gsap.from(line, {
          opacity: 0.44,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 68%",
            end: "bottom 68%",
            toggleActions: "play none none none",
          },
        });
        if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      });
    }

    function onResize() {
      if (window.innerWidth !== previousWidth) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(init, 250);
        previousWidth = window.innerWidth;
      }
    }

    init();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimeout);
      split?.revert();
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {children}
    </p>
  );
}
