import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    id: "01",
    name: "The Signature Cut",
    description:
      "Our flagship service. Precision scissor or clipper cut tailored to your face shape, lifestyle, and personal aesthetic.",
    duration: "45 min",
    price: "$55",
    tag: "Most Popular",
  },
  {
    id: "02",
    name: "The Fade",
    description:
      "Skin to length — seamless gradient fades, high fades, low fades, mid fades. Executed without compromise.",
    duration: "40 min",
    price: "$50",
    tag: null,
  },
  {
    id: "03",
    name: "The Lineup",
    description:
      "Razor-sharp edges, crisp temples and neckline. The finishing touch that defines everything.",
    duration: "20 min",
    price: "$25",
    tag: null,
  },
  {
    id: "04",
    name: "Beard Sculpt",
    description:
      "Full beard shaping, detailing, and conditioning. Defined lines, clean edges, intentional shape.",
    duration: "30 min",
    price: "$35",
    tag: null,
  },
  {
    id: "05",
    name: "Hot Towel Shave",
    description:
      "The ritual. Steam, lather, single-pass straight razor shave. Skin care included.",
    duration: "45 min",
    price: "$60",
    tag: "Experience",
  },
  {
    id: "06",
    name: "Cut & Beard",
    description:
      "Full service — signature cut paired with beard sculpting. The complete transformation.",
    duration: "75 min",
    price: "$80",
    tag: "Best Value",
  },
  {
    id: "07",
    name: "Kids Cut",
    description:
      "Patient, skilled cuts for the next generation. Ages 12 and under.",
    duration: "30 min",
    price: "$35",
    tag: null,
  },
  {
    id: "08",
    name: "The Design",
    description:
      "Custom hair art and geometric designs. Bring a reference or let us create something original.",
    duration: "60 min",
    price: "From $70",
    tag: "Custom",
  },
  {
    id: "09",
    name: "Scalp Treatment",
    description:
      "Deep conditioning scalp massage and treatment. Restoration from root to tip.",
    duration: "30 min",
    price: "$40",
    tag: null,
  },
];

export default function ServicesPage() {
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
            fontSize: "clamp(80px, 18vw, 280px)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.025)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            pointerEvents: "none",
            userSelect: "none",
            textTransform: "uppercase",
          }}
        >
          Services
        </div>

        <div
          className="fade-up fade-up-delay-1"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "clamp(24px, 3vh, 40px)",
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
            What We Do
          </span>
        </div>

        <div
          className="fade-up fade-up-delay-2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <h1
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
            Work.
          </h1>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.38)",
              maxWidth: "300px",
              textAlign: "right",
            }}
          >
            Every service is deliberate.
            <br />
            Every detail accounted for.
          </p>
        </div>
      </section>

      {/* ── SERVICE GRID ────────────────────────────────── */}
      <section
        style={{
          padding:
            "clamp(64px, 8vh, 112px) clamp(24px, 5.5vw, 96px) clamp(80px, 11vh, 148px)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 80} style={{ background: "#0a0a0a" }}>
              <div
                className="service-card"
                style={{
                  padding: "clamp(32px, 4vw, 52px) clamp(24px, 3vw, 40px)",
                  position: "relative",
                  height: "100%",
                  background: "#0a0a0a",
                }}
              >
                {/* Tag */}
                {s.tag && (
                  <span
                    style={{
                      position: "absolute",
                      top: "24px",
                      right: "24px",
                      fontSize: "9px",
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#B2260E",
                      border: "1px solid rgba(178,38,14,0.3)",
                      padding: "4px 10px",
                    }}
                  >
                    {s.tag}
                  </span>
                )}

                {/* Number */}
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.18)",
                    marginBottom: "28px",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {s.id}
                </span>

                {/* Name */}
                <h3
                  style={{
                    fontSize: "clamp(17px, 1.6vw, 22px)",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    marginBottom: "16px",
                    lineHeight: "1.2",
                  }}
                >
                  {s.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: "1.8",
                    color: "rgba(255,255,255,0.42)",
                    marginBottom: "36px",
                  }}
                >
                  {s.description}
                </p>

                {/* Price + duration */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: "20px",
                    marginTop: "auto",
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(18px, 2vw, 24px)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.price}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 400,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.25)",
                    }}
                  >
                    {s.duration}
                  </span>
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
          padding:
            "clamp(80px, 11vh, 148px) clamp(24px, 5.5vw, 96px)",
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
            Let&apos;s Get
            <br />
            to Work.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <Link href="/#book" className="btn-glass">
            Book Now
          </Link>
        </Reveal>
      </section>
    </>
  );
}
