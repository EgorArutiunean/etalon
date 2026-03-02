import {
  BadgeCheck,
  Building2,
  FileText,
  HandCoins,
  MessageSquareMore,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Техническое содержание объектов",
    desc: "Профессиональное обслуживание оборудования, коммуникаций и инфраструктуры паркингов",
  },
  {
    icon: Sparkles,
    title: "Организация уборки и поддержание порядка",
    desc: "Чистота и порядок на всей территории — без хлопот для собственников",
  },
  {
    icon: FileText,
    title: "Юридическое сопровождение и прозрачная отчетность",
    desc: "Профессиональная правовая поддержка и ясная финансовая отчетность",
  },
  {
    icon: BadgeCheck,
    title: "Работа с ТСН, кооперативами и частными собственниками",
    desc: "Комплексное сопровождение для любых форм собственности и управления",
  },
  {
    icon: HandCoins,
    title: "Оптимизация расходов без потери качества обслуживания",
    desc: "Рациональное управление бюджетом с сохранением высокого уровня сервиса",
  },
  {
    icon: MessageSquareMore,
    title: "Всегда на связи",
    desc: "Оперативная поддержка и быстрые решения для партнеров",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-[#f7f7f8] py-24"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto 56px" }}>
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
            Услуги
          </p>
          <h2
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.08,
              color: "#101828",
              fontWeight: 700,
              textTransform: "uppercase",
              fontFamily: "Montserrat, Manrope, sans-serif",
            }}
          >
            Полный комплекс сопровождения объектов
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-10 shadow-sm"
                style={{
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(206, 168, 47, 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.05)";
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 18,
                    background: "rgba(206, 168, 47, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <Icon size={26} color="#cea82f" strokeWidth={1.8} />
                </div>
                <h3 style={{ margin: 0, color: "#101828", fontSize: 21, lineHeight: 1.3, fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p style={{ margin: "14px 0 0", color: "#475467", fontSize: 16, lineHeight: 1.7 }}>
                  {service.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
