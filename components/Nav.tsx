"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: `${scrolled ? "20px" : "28px"} clamp(24px, 5.5vw, 96px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.05)"
          : "1px solid transparent",
        transition:
          "padding 0.4s ease, background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Wordmark */}
      <Link href="/" style={{ textDecoration: "none", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            fontSize: "32px",
            letterSpacing: "0.08em",
            color: "#ffffff",
            textTransform: "uppercase",
            lineHeight: 1,
            display: "block",
          }}
        >
          Dimension
        </span>
      </Link>

      {/* Nav links */}
      <nav style={{ display: "flex", gap: "36px", alignItems: "center" }}>
        <Link href="/" className={`nav-link${pathname === "/" ? " active" : ""}`}>
          Home
        </Link>
        <Link
          href="/services"
          className={`nav-link${pathname === "/services" ? " active" : ""}`}
        >
          Services
        </Link>
        <Link
          href="/about"
          className={`nav-link${pathname === "/about" ? " active" : ""}`}
        >
          About
        </Link>
        <Link href="/#book" className="btn-glass-accent">
          Book Now
        </Link>
      </nav>
    </header>
  );
}
