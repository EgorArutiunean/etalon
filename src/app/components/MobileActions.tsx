import { Send } from "lucide-react";

const CONTACT_PHONE_URL = "tel:+70000000000";

export function MobileActions() {
  return (
    <div
      className="mobile-actions"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        display: "none",
        padding: "12px 16px calc(12px + env(safe-area-inset-bottom))",
        background: "rgba(17, 17, 19, 0.96)",
        backdropFilter: "blur(14px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 -10px 28px rgba(0, 0, 0, 0.22)",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <a
        href={CONTACT_PHONE_URL}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          width: "100%",
          maxWidth: 680,
          margin: "0 auto",
          background: "#cea82f",
          color: "#0b0b0c",
          textDecoration: "none",
          borderRadius: 999,
          padding: "15px 20px",
          fontSize: 16,
          fontWeight: 700,
          boxShadow: "0 12px 28px rgba(206, 168, 47, 0.24)",
        }}
      >
        <Send size={18} strokeWidth={1.8} />
        Связаться
      </a>

      <style>{`
        @media (max-width: 768px) {
          .mobile-actions {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
