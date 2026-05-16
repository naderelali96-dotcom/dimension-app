"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "28px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(10, 10, 10, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Wordmark */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          Dimension
        </span>
      </Link>

      {/* Nav links */}
      <nav style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        <Link
          href="/"
          className={`nav-link${pathname === "/" ? " active" : ""}`}
        >
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
