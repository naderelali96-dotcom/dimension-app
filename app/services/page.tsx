import { SERVICES } from "@/lib/site-config";

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
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className="service-card"
              style={{ padding: "48px 36px", position: "relative" }}
            >
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
                  color: "rgba(245,237,220,0.45)",
                  marginBottom: "28px",
                }}
              >
                {s.description}
              </p>

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
    </>
  );
}
