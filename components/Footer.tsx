import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "24px",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-wordmark-white.svg"
        alt="Dimension"
        style={{ height: "16px", width: "auto" }}
      />

      <div style={{ display: "flex", gap: "32px" }}>
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/services" className="nav-link">Services</Link>
        <Link href="/about" className="nav-link">About</Link>
      </div>

      <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em" }}>
        © {new Date().getFullYear()} Dimension Barbershop. All rights reserved.
      </p>
    </footer>
  );
}
