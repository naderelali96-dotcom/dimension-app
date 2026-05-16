import Link from "next/link";

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
          paddingTop: "160px",
          paddingBottom: "80px",
          paddingLeft: "48px",
          paddingRight: "48px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "36px",
            }}
          >
            <span className="line-accent" />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Who We Are
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 800,
              lineHeight: "0.9",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
            }}
          >
            About
          </h1>
        </div>
      </section>

      {/* ── STORY ───────────────────────────────────────── */}
      <section
        style={{
          padding: "100px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "96px",
          alignItems: "start",
        }}
      >
        {/* Left col — large statement */}
        <div>
          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 58px)",
              fontWeight: 800,
              lineHeight: "1.05",
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              marginBottom: "0",
            }}
          >
            Built on
            <br />
            <span style={{ color: "rgba(255,255,255,0.2)" }}>a single</span>
            <br />
            belief.
          </h2>
        </div>

        {/* Right col — story text */}
        <div>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: "1.9",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "28px",
            }}
          >
            Dimension was founded in 2020 with one conviction: that the
            barbershop could be something more. Not just a place to get a
            haircut — a place where attention to detail is non-negotiable, where
            every client leaves feeling like the best version of themselves.
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: "1.9",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "28px",
            }}
          >
            We built this shop the hard way — refusing to rush, refusing to
            compromise, and refusing to treat any head of hair as ordinary. That
            standard has never changed.
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: "1.9",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Dimension is more than a name. It&apos;s a reminder that craft
            lives in the details — in the depth of a fade, the angle of a line,
            the confidence a clean cut gives a person walking out the door.
          </p>
        </div>
      </section>

      {/* ── DIVIDER + VALUES ────────────────────────────── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "80px 48px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
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
          ].map(({ title, body }) => (
            <div key={title} style={{ padding: "56px 40px", background: "#0a0a0a" }}>
              <span className="line-accent" style={{ marginBottom: "24px" }} />
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginTop: "24px",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: "1.8",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BARBER PROFILES ─────────────────────────────── */}
      <section
        style={{
          padding: "100px 48px 120px",
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
              color: "rgba(255,255,255,0.4)",
            }}
          >
            The Team
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {barbers.map((b) => (
            <div
              key={b.name}
              style={{
                padding: "56px 48px",
                background: "#0a0a0a",
                transition: "background 0.3s ease",
              }}
              className="service-card"
            >
              {/* Avatar */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {b.initials}
                </span>
              </div>

              {/* Name + title */}
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginBottom: "6px",
                }}
              >
                {b.name}
              </h3>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#B2260E",
                  marginBottom: "24px",
                }}
              >
                {b.title}
              </p>

              {/* Bio */}
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: "1.8",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "28px",
                }}
              >
                {b.bio}
              </p>

              {/* Specialties */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {b.specialties.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "10px",
                      fontWeight: 400,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "5px 12px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "100px 48px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            marginBottom: "40px",
          }}
        >
          Come Meet the Team.
        </h2>
        <Link href="/#book" className="btn-glass">
          Book a Session
        </Link>
      </section>
    </>
  );
}
