import { useEffect, useState } from "react";
import { Menu, Send, X } from "lucide-react";

const TELEGRAM_URL = "https://t.me/USERNAME";

const navItems = [
  { label: "О компании", id: "about" },
  { label: "Услуги", id: "services" },
  { label: "Наши объекты", id: "projects" },
  { label: "Почему выбирают", id: "why-us" },
  { label: "Контакты", id: "contacts" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 50,
        background: scrolled ? "rgba(11, 11, 12, 0.94)" : "rgba(11, 11, 12, 0.72)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(206, 168, 47, 0.18)" : "1px solid rgba(255, 255, 255, 0.08)",
        transition: "background 0.25s ease, border-color 0.25s ease",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 20px",
          minHeight: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <a
          href="#hero"
          onClick={closeMenu}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              background: "linear-gradient(135deg, #cea82f 0%, #b89227 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(206, 168, 47, 0.24)",
              flexShrink: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 2L18 8V18H13V13H7V18H2V8L10 2Z" fill="#0b0b0c" />
            </svg>
          </div>
          <span
            style={{
              color: "#f5f1e8",
              fontSize: 18,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Эталонный <span style={{ color: "#cea82f" }}>Дом</span>
          </span>
        </a>

        <nav className="hidden md:flex" style={{ alignItems: "center", gap: 34 }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                color: "#d7d3ca",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#cea82f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#d7d3ca";
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: 10,
            background: "#cea82f",
            color: "#0b0b0c",
            borderRadius: 999,
            padding: "12px 20px",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 700,
            boxShadow: "0 10px 26px rgba(206, 168, 47, 0.22)",
            transition: "transform 0.2s ease, background 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#b89227";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#cea82f";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <Send size={16} strokeWidth={1.8} />
          Связаться
        </a>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          style={{
            background: "transparent",
            border: "none",
            color: "#f5f1e8",
            padding: 4,
            cursor: "pointer",
          }}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: "#111113",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "12px 20px 20px",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                style={{
                  color: "#f5f1e8",
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: 500,
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              style={{
                marginTop: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "#cea82f",
                color: "#0b0b0c",
                borderRadius: 999,
                padding: "14px 18px",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              <Send size={17} strokeWidth={1.8} />
              Связаться
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
