import BookingButton from "@/components/BookingButton";

const services = [
  { id: "01", name: "Beard Shave/Trim", duration: "30 min" },
  { id: "02", name: "Haircut", duration: "45 min" },
  { id: "03", name: "Haircut + Beard", duration: "1 hr" },
  { id: "04", name: "Full Scissor Haircut", duration: "1 hr" },
  { id: "05", name: "Full Scissor Haircut and Beard", duration: "1 hr" },
  { id: "06", name: "Full Set", duration: "1 hr" },
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
          borderBottom: "1px solid rgba(245,237,220,0.06)",
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
                color: "rgba(245,237,220,0.4)",
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
                color: "rgba(245,237,220,0.4)",
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
            background: "rgba(245,237,220,0.06)",
          }}
        >
          {services.map((s) => (
            <div
              key={s.id}
              className="service-card"
              style={{ padding: "48px 36px", position: "relative" }}
            >
              {/* Number */}
              <span
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  color: "rgba(245,237,220,0.2)",
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
                  marginBottom: "28px",
                  lineHeight: "1.2",
                }}
              >
                {s.name}
              </h3>

              {/* Duration */}
              <div
                style={{
                  borderTop: "1px solid rgba(245,237,220,0.07)",
                  paddingTop: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(245,237,220,0.4)",
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
          backgroundColor: "#F5EDDC",
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
            color: "rgba(10,10,10,0.4)",
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
            color: "#0a0a0a",
            marginBottom: "40px",
          }}
        >
          Let&apos;s Get to Work.
        </h2>
        <BookingButton
          className="btn-glass-accent"
          style={{ backgroundColor: "#0a0a0a", borderColor: "#0a0a0a", color: "#F5EDDC" }}
        >
          Book Now
        </BookingButton>
      </section>
    </>
  );
}
