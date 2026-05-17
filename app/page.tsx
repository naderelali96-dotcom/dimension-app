"use client"

import Link from "next/link";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0 48px",
          paddingTop: "120px",
          paddingBottom: "96px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle red glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(178,38,14,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "900px" }}>
          {/* Pre-label */}
          <div
            className="fade-up fade-up-delay-1"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <span className="line-accent" />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              Premium Barbershop · Est. 2020
            </span>
          </div>

          {/* Headline */}
          <h1
            className="fade-up fade-up-delay-2"
            style={{
              fontSize: "clamp(56px, 9vw, 128px)",
              fontWeight: 800,
              lineHeight: "0.92",
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "48px",
              textTransform: "uppercase",
            }}
          >
            Precision
            <br />
            <span style={{ color: "rgba(255,255,255,0.18)" }}>is the</span>
            <br />
            Standard.
          </h1>

          {/* Sub */}
          <p
            className="fade-up fade-up-delay-3"
            style={{
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "440px",
              marginBottom: "56px",
              letterSpacing: "0.01em",
            }}
          >
            Every cut, a statement. Every visit, an experience.
            <br />
            Where craft meets culture.
          </p>

          {/* CTA */}
          <div
            className="fade-up fade-up-delay-4"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <LiquidButton
              onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#ffffff",
              }}
            >
              Book Your Session
            </LiquidButton>
            <Link href="/services" className="btn-glass" style={{ color: "rgba(255,255,255,0.5)" }}>
              View Services
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)",
            }}
          />
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "18px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            gap: "0",
            animation: "marquee 28s linear infinite",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              style={{
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.18)",
                paddingRight: "64px",
              }}
            >
              Precision Cuts &nbsp;·&nbsp; Fades &nbsp;·&nbsp; Lineups &nbsp;·&nbsp; Beard Grooming &nbsp;·&nbsp; Hot Towel Shave &nbsp;·&nbsp; Dimension Barbershop &nbsp;·&nbsp;
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ── INTRO SECTION ───────────────────────────────── */}
      <section
        style={{
          padding: "140px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "96px",
          alignItems: "center",
        }}
      >
        <div>
          <span className="line-accent" style={{ marginBottom: "28px" }} />
          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 700,
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              marginTop: "28px",
              marginBottom: "28px",
            }}
          >
            The Art of
            <br />
            the Cut
          </h2>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "40px",
            }}
          >
            Dimension is built on one principle — excellence without compromise.
            Every service is delivered with razor-sharp technique, genuine
            attention, and a standard that never settles.
          </p>
          <Link href="/about" className="btn-glass">
            Our Story
          </Link>
        </div>

        {/* Stats block */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {[
            { num: "5+", label: "Years in business" },
            { num: "10K+", label: "Clients served" },
            { num: "4", label: "Master barbers" },
            { num: "100%", label: "Satisfaction" },
          ].map(({ num, label }) => (
            <div
              key={label}
              style={{
                padding: "48px 36px",
                background: "#0a0a0a",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(32px, 3vw, 44px)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOOK SECTION ────────────────────────────────── */}
      <section
        id="book"
        style={{
          padding: "120px 48px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            display: "block",
            marginBottom: "28px",
          }}
        >
          Ready?
        </span>
        <h2
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 800,
            lineHeight: "1",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          Book Your Seat.
        </h2>
        <LiquidButton
          onClick={() => { window.location.href = "tel:+15550001234" }}
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#ffffff",
          }}
        >
          Call to Book — (555) 000-1234
        </LiquidButton>
      </section>
    </>
  );
}
