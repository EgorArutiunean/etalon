import { BadgeCheck, Clock, MapPin } from "lucide-react";

const highlights = [
  { label: "Москва и МО", icon: MapPin },
  { label: "Поддержка 24/7", icon: Clock },
  { label: "Регламенты и контроль качества", icon: BadgeCheck },
];

const title = "Управление объектами с акцентом на порядок и доверие";
const firstParagraph =
  "Мы выстраиваем работу управляющей компании так, чтобы собственники видели понятный результат: стабильную эксплуатацию, контроль подрядчиков и прозрачную коммуникацию по каждому объекту.";
const secondParagraph =
  "Фокус команды на регламентах, оперативной поддержке и аккуратном сервисе без лишнего шума. Это позволяет держать качество обслуживания на одном уровне и в жилых домах, и в паркингах, и в объединениях собственников.";

export function About() {
  return (
    <section
      id="about"
      style={{
        background: "#f7f7f8",
        padding: "96px 20px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="lg:hidden">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.1fr) minmax(320px, 0.9fr)",
              gap: 32,
              alignItems: "stretch",
            }}
            className="about-grid"
          >
            <div
              className="about-main-card"
              style={{
                background: "#ffffff",
                borderRadius: 28,
                padding: "40px",
                border: "1px solid #e6e7ea",
                boxShadow: "0 24px 60px rgba(15, 23, 42, 0.04)",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: "linear-gradient(135deg, #cea82f 0%, #b89227 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  boxShadow: "0 14px 28px rgba(206, 168, 47, 0.24)",
                }}
              >
                <svg width="36" height="36" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2L18 8V18H13V13H7V18H2V8L10 2Z" fill="#0b0b0c" />
                </svg>
              </div>

              <p
                className="about-label"
                style={{
                  margin: 0,
                  color: "#cea82f",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                О компании
              </p>
              <h2
                className="about-title"
                style={{
                  margin: "14px 0 20px",
                  color: "#101828",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  fontFamily: "Montserrat, sans-serif",
                  textTransform: "uppercase",
                }}
              >
                {title}
              </h2>
              <p className="about-copy" style={{ margin: 0, color: "#475467", fontSize: 18, lineHeight: 1.8 }}>
                {firstParagraph}
              </p>
              <p className="about-copy about-copy-second" style={{ margin: "18px 0 0", color: "#475467", fontSize: 18, lineHeight: 1.8 }}>
                {secondParagraph}
              </p>
            </div>

            <div
              className="about-highlights"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 18,
              }}
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="about-highlight-card"
                    style={{
                      background: "#ffffff",
                      borderRadius: 24,
                      padding: "26px 24px",
                      border: "1px solid #e6e7ea",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      minHeight: 110,
                      boxShadow: "0 18px 40px rgba(15, 23, 42, 0.04)",
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 16,
                        background: "rgba(206, 168, 47, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={24} color="#cea82f" strokeWidth={1.8} />
                    </div>
                    <div style={{ color: "#101828", fontSize: 18, fontWeight: 700, lineHeight: 1.35 }}>
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="mx-auto max-w-[1200px] px-10">
            <div className="rounded-3xl border border-black/5 bg-white p-14 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
              <p className="text-center text-[12px] uppercase tracking-[0.14em] text-[#CEA82F]">
                О компании
              </p>
              <h2 className="mx-auto mt-4 max-w-[900px] text-center font-[Montserrat] text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0B0B0C]">
                {title}
              </h2>

              <div className="mx-auto mt-8 max-w-[760px]">
                <p className="text-center text-[18px] leading-[1.75] text-[#555]">
                  {firstParagraph}
                </p>
                <p className="mt-6 text-center text-[18px] leading-[1.75] text-[#555]">
                  {secondParagraph}
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-8"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4EFE6]">
                      <Icon size={22} strokeWidth={1.8} color="#CEA82F" />
                    </div>
                    <div className="text-[18px] font-semibold text-[#0B0B0C]">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 767px) {
          .about-main-card {
            padding: 26px !important;
            border-radius: 24px !important;
          }

          .about-label {
            font-size: 11px !important;
            letter-spacing: 0.12em !important;
          }

          .about-title {
            margin: 12px 0 16px !important;
            font-size: 28px !important;
            line-height: 1.12 !important;
            letter-spacing: -0.01em !important;
          }

          .about-copy {
            font-size: 15px !important;
            line-height: 1.62 !important;
            max-width: 34ch;
          }

          .about-copy-second {
            margin-top: 14px !important;
          }

          .about-highlights {
            gap: 12px !important;
          }

          .about-highlight-card {
            padding: 18px 16px !important;
            min-height: 88px !important;
            border-radius: 20px !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
