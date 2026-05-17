import Link from "next/link";
import Reveal from "@/components/Reveal";

const barbers = [
  {
    initials: "NK",
    name: "Nader K.",
    title: "Founder & Head Barber",
    bio: "With over 12 years behind the chair, Nader built Dimension from a single station into one of the city's most respected shops. Trained in New York and London, his work speaks in clean lines and intentional shape.",
    specialties: ["Scissor Work", "Fades", "Beard Sculpting"],
  },
  {
    initials: "JM",
    name: "Jordan M.",
    title: "Master Barber",
    bio: "Jordan brings a fine-art sensibility to every cut. A former illustrator turned barber, he approaches hair as canvas — studying structure, texture, and movement before touching a blade.",
    specialties: ["Design Work", "Texture Cuts", "Hot Towel Shave"],
  },
  {
    initials: "CR",
    name: "Carlos R.",
    title: "Senior Barber",
    bio: "Carlos built his reputation in the Dominican tradition of barbering — high volume, high precision, unmatched speed. In seven years at Dimension, he has never missed a fade.",
    specialties: ["High Fades", "Lineups", "Classic Cuts"],
  },
  {
    initials: "TP",
    name: "Tariq P.",
    title: "Barber",
    bio: "Tariq joined Dimension three years ago with a decade of experience in Atlanta's barbershop culture. His clients follow him for his instinctive sense of shape and effortless conversation.",
    specialties: ["Skin Fades", "Beard Care", "Kids Cuts"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding:
            "0 clamp(24px, 5.5vw, 96px) clamp(56px, 7vh, 96px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ghost word */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-1vw",
            bottom: "-4vh",
            fontSize: "clamp(100px, 22vw, 340px)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.025)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            pointerEvents: "none",
            userSelect: "none",
            textTransform: "uppercase",
          }}
        >
          About
        </div>

        <div className="fade-up fade-up-delay-1" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "clamp(24px, 3vh, 40px)" }}>
          <span className="line-accent" />
          <span style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            Who We Are
          </span>
        </div>

        <h1
          className="fade-up fade-up-delay-2"
          style={{
            fontSize: "clamp(64px, 12vw, 180px)",
            fontWeight: 900,
            lineHeight: "0.88",
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
          }}
        >
          Our
          <br />
          Story.
        </h1>
      </section>

      {/* ── STORY ───────────────────────────────────────── */}
      <section
        style={{
          padding:
            "clamp(80px, 11vh, 148px) clamp(24px, 5.5vw, 96px)",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(48px, 8vw, 128px)",
          alignItems: "start",
        }}
      >
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 900,
              lineHeight: "0.95",
              letterSpacing: "-0.035em",
              textTransform: "uppercase",
            }}
          >
            Built on
            <br />
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "rgba(255,255,255,0.16)",
                textTransform: "none",
                fontSize: "0.88em",
                letterSpacing: "-0.01em",
              }}
            >
              a single
            </span>
            <br />
            belief.
          </h2>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: "1.9",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "28px",
              }}
            >
              Dimension was founded in 2020 with one conviction: that the
              barbershop could be something more. Not just a place to get a
              haircut — a place where attention to detail is non-negotiable,
              where every client leaves feeling like the best version of
              themselves.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: "1.9",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "28px",
              }}
            >
              We built this shop the hard way — refusing to rush, refusing to
              compromise, and refusing to treat any head of hair as ordinary.
              That standard has never changed.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: "1.9",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Dimension is more than a name. It&apos;s a reminder that craft
              lives in the details — in the depth of a fade, the angle of a
              line, the confidence a clean cut gives a person walking out the
              door.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "clamp(64px, 8vh, 112px) clamp(24px, 5.5vw, 96px)",
        }}
      >
        <Reveal style={{ marginBottom: "clamp(48px, 6vh, 80px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase" }}>
              02
            </span>
            <span className="line-accent" />
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase" }}>
              Our Values
            </span>
          </div>
        </Reveal>

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {[
            {
              title: "Precision",
              body: "Every line is intentional. Every fade is seamless. We take the time to get it right — every single time.",
            },
            {
              title: "Respect",
              body: "Your time, your look, your culture. We honor all of it. The chair is yours.",
            },
            {
              title: "Craft",
              body: "Barbering is a discipline. We treat it as one — studying technique, investing in tools, and never stopping the pursuit.",
            },
          ].map(({ title, body }, i) => (
            <Reveal key={title} delay={i * 100} style={{ background: "#0a0a0a" }}>
              <div style={{ padding: "clamp(40px, 5vw, 64px) clamp(28px, 3.5vw, 48px)" }}>
                <span className="line-accent" style={{ marginBottom: "28px" }} />
                <h3
                  style={{
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: 800,
                    letterSpacing: "-0.01em",
                    marginTop: "28px",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: "1.85",
                    color: "rgba(255,255,255,0.42)",
                  }}
                >
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── TEAM ────────────────────────────────────────── */}
      <section
        style={{
          padding:
            "clamp(80px, 11vh, 148px) clamp(24px, 5.5vw, 96px)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Reveal style={{ marginBottom: "clamp(48px, 6vh, 80px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase" }}>
              03
            </span>
            <span className="line-accent" />
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase" }}>
              The Team
            </span>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {barbers.map((b, i) => (
            <Reveal key={b.name} delay={i * 80} style={{ background: "#0a0a0a" }}>
              <div
                className="service-card"
                style={{
                  padding: "clamp(40px, 5vw, 64px) clamp(28px, 4vw, 56px)",
                  background: "#0a0a0a",
                  transition: "background 0.3s ease",
                  height: "100%",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "32px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {b.initials}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    marginBottom: "6px",
                  }}
                >
                  {b.name}
                </h3>
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#B2260E",
                    marginBottom: "28px",
                  }}
                >
                  {b.title}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: "1.85",
                    color: "rgba(255,255,255,0.42)",
                    marginBottom: "32px",
                  }}
                >
                  {b.bio}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {b.specialties.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: "9px",
                        fontWeight: 400,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.3)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        padding: "5px 12px",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "clamp(80px, 11vh, 148px) clamp(24px, 5.5vw, 96px)",
          textAlign: "center",
        }}
      >
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.035em",
              lineHeight: "0.95",
              marginBottom: "48px",
            }}
          >
            Come Meet
            <br />
            the Team.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <Link href="/#book" className="btn-glass">
            Book a Session
          </Link>
        </Reveal>
      </section>
    </>
  );
}
