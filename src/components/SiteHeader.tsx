"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { navLinks } from "@/data/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="wrap flex items-center justify-between py-4">
        <Link href="/" aria-label="Untied Scenes — home" onClick={() => setOpen(false)}>
          <Logo className="h-5 w-auto sm:h-6" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hoofdmenu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-subheading text-sm transition-colors hover:text-ink ${
                isActive(link.href) ? "text-ink underline" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-accent !py-2.5 !px-5 text-sm">
            Plan een gesprek
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Sluit menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
            {open ? (
              <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobiel menu */}
      <div
        className={`overflow-hidden border-line transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-80 border-t" : "max-h-0"
        }`}
      >
        <nav className="wrap flex flex-col gap-1 py-4" aria-label="Mobiel menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-2 font-subheading text-lg ${
                isActive(link.href) ? "underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-accent mt-3 self-start"
          >
            Plan een gesprek
          </Link>
        </nav>
      </div>
    </header>
  );
}
