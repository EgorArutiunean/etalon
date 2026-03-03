import { MapPin, Mail, Send } from "lucide-react";

const CONTACT_PHONE_URL = "tel:+70000000000";

export function Footer() {
  return (
    <footer
      id="contacts"
      style={{
        background: "#111113",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "72px 20px 32px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) repeat(2, minmax(220px, 1fr))",
            gap: 28,
          }}
          className="footer-grid"
        >
          <div
            style={{
              background: "#111113",
              borderRadius: 28,
              padding: "28px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #cea82f 0%, #b89227 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2L18 8V18H13V13H7V18H2V8L10 2Z" fill="#0b0b0c" />
                </svg>
              </div>
              <span style={{ color: "#f5f1e8", fontSize: 18, fontWeight: 700, textTransform: "uppercase" }}>
                Эталонный Дом
              </span>
            </div>
            <p style={{ margin: 0, color: "rgba(245, 241, 232, 0.74)", fontSize: 16, lineHeight: 1.75 }}>
              Управляющая компания для жилых объектов и паркингов. 
            </p>
          </div>

          <div
            style={{
              background: "#111113",
              borderRadius: 28,
              padding: "28px",
            }}
          >
            <h3 style={{ margin: 0, color: "#f5f1e8", fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Режим работы
            </h3>
            <p style={{ margin: "20px 0 8px", color: "rgba(245, 241, 232, 0.76)", fontSize: 16 }}>
              Пн–Пт: 09:00–18:00
            </p>
            <p style={{ margin: "0 0 8px", color: "rgba(245, 241, 232, 0.76)", fontSize: 16 }}>
              Сб–Вс: выходные
            </p>
            <p style={{ margin: 0, color: "#cea82f", fontSize: 16, fontWeight: 700 }}>
              Оперативная поддержка 24/7
            </p>
          </div>

          <div
            style={{
              background: "#111113",
              borderRadius: 28,
              padding: "28px",
            }}
          >
            <h3 style={{ margin: 0, color: "#f5f1e8", fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Контакты
            </h3>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 12, color: "rgba(245, 241, 232, 0.76)" }}>
                <MapPin size={18} color="#cea82f" strokeWidth={1.8} />
                <span>Москва, адрес уточняется</span>
              </div>
              <div style={{ display: "flex", gap: 12, color: "rgba(245, 241, 232, 0.76)" }}>
                <Mail size={18} color="#cea82f" strokeWidth={1.8} />
                <span>info@example.com</span>
              </div>
              <a
                href={CONTACT_PHONE_URL}
                style={{
                  marginTop: 4,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  width: "fit-content",
                  background: "#cea82f",
                  color: "#0b0b0c",
                  textDecoration: "none",
                  borderRadius: 999,
                  padding: "14px 20px",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                <Send size={17} strokeWidth={1.8} />
                Связаться
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            paddingTop: 22,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p style={{ margin: 0, color: "rgba(245, 241, 232, 0.58)", fontSize: 13 }}>
            © 2026 Эталонный Дом
          </p>
          <p style={{ margin: 0, color: "rgba(245, 241, 232, 0.58)", fontSize: 13 }}>
            Плейсхолдеры контактов и реквизитов можно заменить без изменения структуры.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
