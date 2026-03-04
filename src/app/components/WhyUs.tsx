import { Building, ClipboardList, Headset } from "lucide-react";

const reasons = [
  {
    icon: Building,
    title: "Системное управление объектами",
    desc: "От ежедневной эксплуатации до координации подрядчиков и контроля стандартов обслуживания.",
  },
  {
    icon: ClipboardList,
    title: "Прозрачность в процессах и отчетности",
    desc: "Понятные регламенты, фиксированные задачи и ясная финансовая картина по каждому объекту.",
  },
  {
    icon: Headset,
    title: "Оперативная коммуникация",
    desc: "Единый канал связи и быстрые решения по вопросам собственников, партнеров и обслуживающих команд.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="section-anchor"
      style={{
        background: "#f7f7f8",
        padding: "96px 20px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="whyus-header" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 52px" }}>
          <p
            style={{
              margin: 0,
              color: "#cea82f",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Почему выбирают
          </p>
          <h2
            style={{
              margin: "14px 0 0",
              color: "#101828",
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.08,
              fontWeight: 700,
              textTransform: "uppercase",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Практичный сервис без лишних обещаний
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="whyus-card"
                style={{
                  background: "#ffffff",
                  borderRadius: 24,
                  padding: "32px 28px",
                  border: "1px solid #e6e7ea",
                  boxShadow: "0 18px 44px rgba(15, 23, 42, 0.05)",
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                <div
                  className="whyus-card-icon"
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 18,
                    background: "rgba(206, 168, 47, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={28} color="#cea82f" strokeWidth={1.8} />
                </div>
                <div className="whyus-card-content">
                  <h3 className="whyus-card-title" style={{ margin: 0, color: "#101828", fontSize: 22, lineHeight: 1.25, fontWeight: 700 }}>
                    {reason.title}
                  </h3>
                  <p className="whyus-card-copy" style={{ margin: "14px 0 0", color: "#475467", fontSize: 16, lineHeight: 1.7 }}>
                    {reason.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .whyus-header {
            margin-bottom: 36px !important;
          }

          .whyus-card {
            flex-direction: column;
            align-items: stretch !important;
            gap: 12px !important;
            padding: 18px 16px !important;
            border-radius: 20px !important;
          }

          .whyus-card-icon {
            align-self: center;
            width: 48px !important;
            height: 48px !important;
            border-radius: 14px !important;
          }

          .whyus-card-content {
            width: 100%;
          }

          .whyus-card-title {
            font-size: 17px !important;
            line-height: 1.22 !important;
            letter-spacing: -0.01em !important;
          }

          .whyus-card-copy {
            margin-top: 8px !important;
            font-size: 14px !important;
            line-height: 1.52 !important;
          }
        }
      `}</style>
    </section>
  );
}
