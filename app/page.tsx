"use client"

import Link from "next/link";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 clamp(24px, 5.5vw, 96px) clamp(48px, 6vh, 88px)",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 70% 55% at 30% 110%, rgba(178,38,14,0.07) 0%, transparent 60%)",
          }}
        />

        {/* Top label */}
        <div
          className="fade-up fade-up-delay-1"
          style={{
            position: "absolute",
            top: "clamp(96px, 9vh, 130px)",
            left: "clamp(24px, 5.5vw, 96px)",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span className="line-accent" />
          <span
            style={{
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Premium Barbershop · Est. 2020
          </span>
        </div>

        {/* Right vertical text */}
        <div
          style={{
            position: "absolute",
            right: "clamp(24px, 5.5vw, 96px)",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <span
            style={{
              writingMode: "vertical-rl",
              fontSize: "9px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.13)",
              userSelect: "none",
            }}
          >
            Precision · Craft · Culture
          </span>
        </div>

        {/* Headline */}
        <div>
          <h1
            className="fade-up fade-up-delay-2"
            style={{
              fontSize: "clamp(72px, 14vw, 210px)",
              fontWeight: 900,
              lineHeight: "0.87",
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              marginBottom: "clamp(32px, 4vh, 60px)",
            }}
          >
            Preci
            <br />
            <em
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "0.82em",
                color: "rgba(255,255,255,0.11)",
                textTransform: "none",
                letterSpacing: "-0.01em",
              }}
            >
              is the
            </em>
            <br />
            sion.
          </h1>

          {/* Sub row */}
          <div
            className="fade-up fade-up-delay-3"
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "clamp(24px, 4vw, 72px)",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontSize: "clamp(13px, 1.1vw, 16px)",
                fontWeight: 300,
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.38)",
                maxWidth: "300px",
              }}
            >
              Every cut, a statement.
              <br />
              Every visit, an experience.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
                flexWrap: "wrap",
              }}
            >
              <LiquidButton
                onClick={() =>
                  document
                    .getElementById("book")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
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
              <Link
                href="/services"
                className="nav-link"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                Services &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="fade-up fade-up-delay-4"
          style={{
            position: "absolute",
            bottom: "clamp(28px, 3.5vh, 48px)",
            left: "clamp(24px, 5.5vw, 96px)",
            right: "clamp(24px, 5.5vw, 96px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "20px",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.18)",
            }}
          >
            New York City
          </span>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.18)",
            }}
          >
            Scroll &darr;
          </span>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "20px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            animation: "marquee 32s linear infinite",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              style={{
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.14)",
                paddingRight: "80px",
              }}
            >
              Precision Cuts &nbsp;&middot;&nbsp; Fades &nbsp;&middot;&nbsp;
              Lineups &nbsp;&middot;&nbsp; Beard Grooming &nbsp;&middot;&nbsp;
              Hot Towel Shave &nbsp;&middot;&nbsp; Dimension Barbershop
              &nbsp;&middot;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── INTRO ───────────────────────────────────────── */}
      <section
        style={{
          padding:
            "clamp(80px, 12vh, 160px) clamp(24px, 5.5vw, 96px)",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(48px, 8vw, 128px)",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <Reveal>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  color: "rgba(255,255,255,0.22)",
                  textTransform: "uppercase",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                01
              </span>
              <span className="line-accent" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2
              style={{
                fontSize: "clamp(40px, 5.5vw, 80px)",
                fontWeight: 900,
                lineHeight: "0.95",
                letterSpacing: "-0.035em",
                textTransform: "uppercase",
                marginBottom: "36px",
              }}
            >
              The Art
              <br />
              <span style={{ color: "rgba(255,255,255,0.16)" }}>of the</span>
              <br />
              Cut.
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: "1.9",
                color: "rgba(255,255,255,0.42)",
                marginBottom: "44px",
                maxWidth: "380px",
              }}
            >
              Dimension is built on one principle — excellence without
              compromise. Every service delivered with razor-sharp technique and
              a standard that never settles.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <Link href="/about" className="btn-glass">
              Our Story
            </Link>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={80}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            {[
              { num: "5+", label: "Years" },
              { num: "10K+", label: "Clients" },
              { num: "4", label: "Barbers" },
              { num: "100%", label: "Satisfaction" },
            ].map(({ num, label }) => (
              <div
                key={label}
                style={{
                  padding: "clamp(32px, 4vw, 56px) clamp(24px, 3vw, 40px)",
                  background: "#0a0a0a",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(44px, 5.5vw, 72px)",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    marginBottom: "10px",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.28)",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── BOOK SECTION ────────────────────────────────── */}
      <section
        id="book"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding:
            "clamp(80px, 12vh, 160px) clamp(24px, 5.5vw, 96px)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ghost number */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-2vw",
            bottom: "-5vh",
            fontSize: "clamp(200px, 38vw, 600px)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.022)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          02
        </div>

        <Reveal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.22)",
                textTransform: "uppercase",
              }}
            >
              02
            </span>
            <span className="line-accent" />
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.22)",
                textTransform: "uppercase",
              }}
            >
              Ready to sit down?
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2
            style={{
              fontSize: "clamp(64px, 13vw, 190px)",
              fontWeight: 900,
              lineHeight: "0.88",
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              marginBottom: "clamp(44px, 6vh, 88px)",
            }}
          >
            Book
            <br />
            Your
            <br />
            <span style={{ color: "#B2260E" }}>Seat.</span>
          </h2>
        </Reveal>

        <Reveal delay={240}>
          <LiquidButton
            onClick={() => {
              window.location.href = "tel:+15550001234";
            }}
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
        </Reveal>
      </section>
    </>
  );
}
