"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          textAlign: "center",
          padding: "0 clamp(20px, 6vw, 48px)",
          paddingTop: "120px",
          paddingBottom: "140px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.25) 40%, rgba(10,10,10,0.9) 100%)",
            zIndex: 1,
          }}
        />

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
            zIndex: 1,
          }}
        />

        <div style={{ maxWidth: "900px", position: "relative", zIndex: 2 }}>
          {/* Headline */}
          <h1
            className="fade-up fade-up-delay-2"
            style={{
              fontSize: "clamp(36px, 6vw, 84px)",
              fontWeight: 800,
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
              color: "#F5EDDC",
              marginBottom: "48px",
              textTransform: "uppercase",
            }}
          >
            {t.home.headline1}
            <br />
            {t.home.headline2}
          </h1>

          {/* Sub */}
          <p
            className="fade-up fade-up-delay-3"
            style={{
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "1.7",
              color: "rgba(245,237,220,0.45)",
              maxWidth: "440px",
              margin: "0 auto 56px",
              letterSpacing: "0.01em",
            }}
          >
            {t.home.sub1}
            <br />
            {t.home.sub2}
          </p>
        </div>
      </section>

      {/* ── INTRO SECTION ───────────────────────────────── */}
      <section
        className="grid-2"
        style={{
          padding: "clamp(80px, 15vw, 140px) clamp(20px, 6vw, 48px)",
          maxWidth: "1200px",
          margin: "0 auto",
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
            {t.home.introHeading1}
            <br />
            {t.home.introHeading2}
          </h2>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: "1.8",
              color: "rgba(10,10,10,0.55)",
              marginBottom: "40px",
            }}
          >
            {t.home.introBody}
          </p>
          <Link href="/about" className="btn-glass">
            {t.home.ourStory}
          </Link>
        </div>

        {/* Stats block */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "rgba(10,10,10,0.08)",
            border: "1px solid rgba(10,10,10,0.08)",
          }}
        >
          {t.home.stats.map(({ num, label }) => (
            <div
              key={label}
              style={{
                padding: "48px 36px",
                background: "#F0EEE9",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(32px, 3vw, 44px)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#0a0a0a",
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
                  color: "rgba(10,10,10,0.45)",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section
        style={{
          padding: "0 clamp(20px, 6vw, 48px) 140px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          <span className="line-accent" />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.45)",
            }}
          >
            {t.home.whatWeDo}
          </span>
        </div>

        <div
          className="grid-3"
          style={{
            gap: "1px",
            background: "rgba(10,10,10,0.08)",
            border: "1px solid rgba(10,10,10,0.08)",
          }}
        >
          {t.servicesList.map((s) => (
            <div
              key={s.name}
              className="service-card"
              style={{ padding: "48px 36px" }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginBottom: "16px",
                  lineHeight: "1.2",
                }}
              >
                {s.name}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: "1.7",
                  color: "rgba(10,10,10,0.5)",
                }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
