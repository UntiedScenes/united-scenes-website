"use client";

import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealTag = "h1" | "h2" | "h3" | "p" | "div";

type RevealProps = {
  as?: RevealTag;
  className?: string;
  children: ReactNode;
};

export default function Reveal({ as = "div", className = "", children }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const Tag = as as React.ElementType;

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      <span>{children}</span>
    </Tag>
  );
}
