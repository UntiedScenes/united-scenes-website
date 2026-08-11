"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const WORDS = ["product ads", "storytelling"];

export default function HeroHeadline() {
  const staticRef = useRef<HTMLDivElement>(null);
  const switchRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const staticHeading = staticRef.current;
    const switchHeading = switchRef.current;
    const words = wordRefs.current;
    if (!staticHeading || !switchHeading || words.length === 0) return;

    const staticSpan = staticHeading.querySelector("span");

    gsap.set(words, { yPercent: 120, autoAlpha: 0 });
    gsap.set(words[0], { yPercent: 120, autoAlpha: 1 });
    gsap.set([staticHeading, switchHeading], { autoAlpha: 1, visibility: "visible" });

    let loopTween: gsap.core.Timeline | null = null;

    function loop(index: number) {
      const nextIndex = (index + 1) % words.length;
      const current = words[index];
      const next = words[nextIndex];

      loopTween = gsap.timeline({ delay: 2 });
      loopTween
        .to(current, { yPercent: -120, autoAlpha: 0, duration: 0.8, ease: "power2.inOut" })
        .fromTo(
          next,
          { yPercent: 120, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => loop(nextIndex),
          },
          "<",
        );
    }

    const intro = gsap.timeline({ delay: 0.5 });
    intro
      .to([staticHeading, switchHeading], {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.2,
        ease: "power3.out",
      })
      .to(
        [staticSpan, words[0]].filter(Boolean),
        {
          yPercent: 0,
          duration: 1.2,
          ease: "power3.out",
          onComplete: () => loop(0),
        },
        "<",
      );

    return () => {
      intro.kill();
      loopTween?.kill();
      gsap.killTweensOf(words);
    };
  }, []);

  return (
    <div className="space-y-2">
      <div
        ref={staticRef}
        className="reveal heading text-[clamp(2.5rem,7vw,5.5rem)] italic opacity-0"
      >
        <span>we disrupt</span>
      </div>

      <div
        ref={switchRef}
        className="reveal heading grid h-[1.15em] grid-cols-1 grid-rows-1 overflow-hidden text-[clamp(2.5rem,7vw,5.5rem)] opacity-0"
        style={{ verticalAlign: "bottom" }}
      >
        {WORDS.map((word, index) => (
          <span
            key={word}
            ref={(el) => {
              if (el) wordRefs.current[index] = el;
            }}
            className="invisible col-start-1 row-start-1 block whitespace-nowrap"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
