"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BookingButton from "@/components/BookingButton";

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
        padding: "24px 48px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        backgroundColor: "rgba(245, 237, 220, 0.35)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(10,10,10,0.08)",
      }}
    >
      {/* Nav links */}
      <nav style={{ display: "flex", gap: "40px", alignItems: "center", justifySelf: "start" }}>
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
      </nav>

      {/* Wordmark */}
      <Link href="/" style={{ display: "flex", alignItems: "center", justifySelf: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-wordmark-dark.svg"
          alt="Dimension"
          style={{ height: "20px", width: "auto" }}
        />
      </Link>

      {/* Book CTA */}
      <div style={{ justifySelf: "end" }}>
        <BookingButton className="btn-glass-accent">Book Now</BookingButton>
      </div>
    </header>
  );
}
