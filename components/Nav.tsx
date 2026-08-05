"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BookingButton from "@/components/BookingButton";
import { useLanguage } from "@/lib/LanguageContext";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.team },
  ];

  return (
    <>
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "24px 48px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        backgroundColor: "#F0EEE9",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(10,10,10,0.08)",
      }}
    >
      {/* Nav links (desktop) */}
      <nav className="nav-desktop-links" style={{ justifySelf: "start" }}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link${pathname === href ? " active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Hamburger (mobile) */}
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        className="nav-hamburger"
        style={{ justifySelf: "start" }}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Wordmark */}
      <Link href="/" style={{ display: "flex", alignItems: "center", justifySelf: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-wordmark-dark.svg"
          alt="Dimension"
          style={{ height: "20px", width: "auto" }}
        />
      </Link>

      {/* Book CTA + language toggle */}
      <div style={{ justifySelf: "end", display: "flex", alignItems: "center", gap: "20px" }}>
        <button type="button" className="lang-toggle lang-toggle-header" onClick={toggleLang}>
          {lang === "en" ? "FR" : "EN"}
        </button>
        <BookingButton className="btn-glass-accent">{t.nav.bookNow}</BookingButton>
      </div>
    </header>

    {/* Mobile menu */}
    <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`nav-link${pathname === href ? " active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </Link>
      ))}
      <button type="button" className="lang-toggle" onClick={toggleLang}>
        {lang === "en" ? "Français" : "English"}
      </button>
    </div>
    </>
  );
}
