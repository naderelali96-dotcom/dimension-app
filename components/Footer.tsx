import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "clamp(40px, 5vh, 64px) clamp(24px, 5.5vw, 96px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "32px",
          marginBottom: "40px",
          paddingBottom: "40px",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            fontSize: "36px",
            letterSpacing: "0.08em",
            color: "#ffffff",
            textTransform: "uppercase",
            lineHeight: 1,
            display: "block",
          }}
        >
          Dimension
        </span>

        <nav style={{ display: "flex", gap: "32px" }}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          © {new Date().getFullYear()} Dimension Barbershop
        </p>
        <p
          style={{
            fontSize: "10px",
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          New York City · Est. 2020
        </p>
      </div>
    </footer>
  );
}
