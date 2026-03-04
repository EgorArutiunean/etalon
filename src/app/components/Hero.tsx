import { ArrowDown, Send } from "lucide-react";
import heroImage from "../../assets/images/hero.jpg";

const CONTACT_PHONE_URL = "tel:+70000000000";

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <img
        src={heroImage}
        alt="Современный жилой объект под управлением компании"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(11,11,12,0.45) 0%, rgba(11,11,12,0.78) 48%, rgba(11,11,12,0.96) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1440,
          width: "100%",
          margin: "0 auto",
          padding: "132px 20px 88px",
        }}
      >
        <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 28 }}>
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(42px, 7vw, 76px)",
                lineHeight: 1.02,
                fontWeight: 700,
                color: "#f5f1e8",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Эталонный Дом
            </h1>
            <p
              style={{
                margin: "22px 0 0",
                maxWidth: 640,
                fontSize: "clamp(18px, 2.1vw, 24px)",
                lineHeight: 1.65,
                color: "rgba(245, 241, 232, 0.78)",
              }}
            >
              Эксплуатация, порядок и прозрачная коммуникация для жилых объектов,
              паркингов и объединений собственников в Москве и Московской области.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
            <a
              href={CONTACT_PHONE_URL}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "#cea82f",
                color: "#0b0b0c",
                borderRadius: 999,
                padding: "18px 28px",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 14px 34px rgba(206, 168, 47, 0.28)",
                transition: "transform 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#b89227";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#cea82f";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Send size={18} strokeWidth={1.8} />
              Связаться
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        style={{
          position: "absolute",
          left: "50%",
          bottom: 30,
          transform: "translateX(-50%)",
          zIndex: 1,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 52,
          height: 52,
          borderRadius: 999,
          border: "1px solid rgba(206, 168, 47, 0.4)",
          color: "#cea82f",
          background: "rgba(11, 11, 12, 0.38)",
          textDecoration: "none",
        }}
        aria-label="Перейти к секции О компании"
      >
        <ArrowDown size={18} strokeWidth={1.8} />
      </a>
    </section>
  );
}
