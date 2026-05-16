import Link from "next/link";

const services = [
  {
    id: "01",
    name: "The Signature Cut",
    description: "Our flagship service. Precision scissor or clipper cut tailored to your face shape, lifestyle, and personal aesthetic.",
    duration: "45 min",
    price: "$55",
    tag: "Most Popular",
  },
  {
    id: "02",
    name: "The Fade",
    description: "Skin to length — seamless gradient fades, high fades, low fades, mid fades. Executed without compromise.",
    duration: "40 min",
    price: "$50",
    tag: null,
  },
  {
    id: "03",
    name: "The Lineup",
    description: "Razor-sharp edges, crisp temples and neckline. The finishing touch that defines everything.",
    duration: "20 min",
    price: "$25",
    tag: null,
  },
  {
    id: "04",
    name: "Beard Sculpt",
    description: "Full beard shaping, detailing, and conditioning. Defined lines, clean edges, intentional shape.",
    duration: "30 min",
    price: "$35",
    tag: null,
  },
  {
    id: "05",
    name: "Hot Towel Shave",
    description: "The ritual. Steam, lather, single-pass straight razor shave. Skin care included.",
    duration: "45 min",
    price: "$60",
    tag: "Experience",
  },
  {
    id: "06",
    name: "Cut & Beard",
    description: "Full service — signature cut paired with beard sculpting. The complete transformation.",
    duration: "75 min",
    price: "$80",
    tag: "Best Value",
  },
  {
    id: "07",
    name: "Kids Cut",
    description: "Patient, skilled cuts for the next generation. Ages 12 and under.",
    duration: "30 min",
    price: "$35",
    tag: null,
  },
  {
    id: "08",
    name: "The Design",
    description: "Custom hair art and geometric designs. Bring a reference or let us create something original.",
    duration: "60 min",
    price: "From $70",
    tag: "Custom",
  },
  {
    id: "09",
    name: "Scalp Treatment",
    description: "Deep conditioning scalp massage and treatment. Restoration from root to tip.",
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
              What We Do
            </span>
          </div>

          <div
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
                fontSize: "clamp(48px, 7vw, 96px)",
                fontWeight: 800,
                lineHeight: "0.9",
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
              }}
            >
              Services
            </h1>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.4)",
                maxWidth: "340px",
                textAlign: "right",
              }}
            >
              Every service is deliberate.
              <br />
              Every detail accounted for.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE GRID ────────────────────────────────── */}
      <section
        style={{
          padding: "80px 48px 120px",
          maxWidth: "1200px",
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
          {services.map((s) => (
            <div
              key={s.id}
              className="service-card"
              style={{ padding: "48px 36px", position: "relative" }}
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
                    border: "1px solid rgba(178,38,14,0.35)",
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
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.2)",
                  marginBottom: "24px",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.id}
              </span>

              {/* Name */}
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

              {/* Description */}
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: "1.7",
                  color: "rgba(255,255,255,0.45)",
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
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  paddingTop: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "#ffffff",
                  }}
                >
                  {s.price}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.28)",
                  }}
                >
                  {s.duration}
                </span>
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
        <p
          style={{
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "24px",
          }}
        >
          Ready to sit down?
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            marginBottom: "40px",
          }}
        >
          Let&apos;s Get to Work.
        </h2>
        <Link href="/#book" className="btn-glass">
          Book Now
        </Link>
      </section>
    </>
  );
}
