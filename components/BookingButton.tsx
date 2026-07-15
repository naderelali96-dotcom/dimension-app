"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/site-config";

export default function BookingButton({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} style={style}>
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book an appointment"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#fff",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <span
              style={{
                width: "32px",
                height: "1px",
                background: "#B2260E",
                display: "block",
                margin: "0 auto 28px",
              }}
            />

            <h3
              style={{
                fontSize: "26px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Ready to Book?
            </h3>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 300,
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "32px",
              }}
            >
              You&apos;ll continue to our secure online booking calendar to
              pick your barber, service, and time.
            </p>

            <a
              href={BOOKING_URL}
              className="btn-glass-accent"
              style={{ width: "100%" }}
            >
              Continue to Booking
            </a>
          </div>
        </div>
      )}
    </>
  );
}
