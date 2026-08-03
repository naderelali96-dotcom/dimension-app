import { ADDRESS, MAPS_EMBED_URL, MAPS_DIRECTIONS_URL } from "@/lib/site-config";

const barbers = [
  {
    photo: "/team/nader.jpg",
    name: "Nader",
    bio: "Nader loves a good conversation just as much as a clean line. He pays close attention to every detail, from the first consultation to the final trim, so you leave looking exactly how you pictured it.",
  },
  {
    photo: "/team/tony.jpg",
    name: "Tony",
    bio: "Tony keeps things light and easygoing while staying precise with every cut. He listens closely during consultations and always delivers exactly what you asked for.",
  },
  {
    photo: "/team/ralph.jpg",
    name: "Ralph",
    bio: "Ralph has a sharp eye for detail and an easy way with conversation. He takes his time with every cut and makes sure nothing gets overlooked.",
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
          paddingLeft: "clamp(20px, 6vw, 48px)",
          paddingRight: "clamp(20px, 6vw, 48px)",
          borderBottom: "1px solid rgba(10,10,10,0.06)",
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
                color: "rgba(10,10,10,0.4)",
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
        className="grid-2"
        style={{
          padding: "100px clamp(20px, 6vw, 48px)",
          maxWidth: "1200px",
          margin: "0 auto",
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
            <span style={{ color: "rgba(10,10,10,0.2)" }}>a single</span>
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
              color: "rgba(10,10,10,0.55)",
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
              color: "rgba(10,10,10,0.55)",
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
              color: "rgba(10,10,10,0.55)",
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
          borderTop: "1px solid rgba(10,10,10,0.06)",
          borderBottom: "1px solid rgba(10,10,10,0.06)",
          padding: "80px clamp(20px, 6vw, 48px)",
        }}
      >
        <div
          className="grid-3"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            gap: "1px",
            background: "rgba(10,10,10,0.06)",
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
            <div key={title} style={{ padding: "56px 40px", background: "#F0EEE9" }}>
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
                  color: "rgba(10,10,10,0.45)",
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
          padding: "100px clamp(20px, 6vw, 48px) 120px",
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
              color: "rgba(10,10,10,0.4)",
            }}
          >
            The Team
          </span>
        </div>

        <div
          className="grid-3"
          style={{
            gap: "1px",
            background: "rgba(10,10,10,0.06)",
          }}
        >
          {barbers.map((b) => (
            <div
              key={b.name}
              style={{
                background: "#F0EEE9",
                transition: "background 0.3s ease",
              }}
              className="service-card"
            >
              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.photo}
                alt={b.name}
                style={{
                  width: "100%",
                  aspectRatio: "4 / 5",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div style={{ padding: "32px 40px 48px" }}>
                {/* Name */}
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    marginBottom: "16px",
                  }}
                >
                  {b.name}
                </h3>

                {/* Bio */}
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: "1.8",
                    color: "rgba(10,10,10,0.45)",
                  }}
                >
                  {b.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VISIT US ────────────────────────────────────── */}
      <section
        className="grid-2"
        style={{
          borderTop: "1px solid rgba(10,10,10,0.06)",
          padding: "100px clamp(20px, 6vw, 48px) 120px",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "96px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "28px",
            }}
          >
            <span className="line-accent" />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(10,10,10,0.4)",
              }}
            >
              Visit Us
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Come See Us.
          </h2>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: "1.8",
              color: "rgba(10,10,10,0.55)",
              marginBottom: "32px",
            }}
          >
            {ADDRESS}
          </p>
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            Get Directions
          </a>
        </div>

        <div style={{ aspectRatio: "4 / 3", border: "1px solid rgba(10,10,10,0.08)" }}>
          <iframe
            src={MAPS_EMBED_URL}
            title="Dimension Barbershop location"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
