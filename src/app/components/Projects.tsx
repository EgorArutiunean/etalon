import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectAkademicheskiyImage from "../../assets/images/project-akademicheskiy.jpg";
import projectCentralParkImage from "../../assets/images/project-central-park.jpg";
import projectMeridianImage from "../../assets/images/project-meridian.jpg";
import projectNorthGateImage from "../../assets/images/project-north-gate.jpg";
import projectOrbitImage from "../../assets/images/project-orbit.jpg";
import projectRiverLineImage from "../../assets/images/project-river-line.jpg";

const projects = [
  {
    id: 1,
    title: "Паркинг River Line",
    location: "Москва, Северо-Западный округ",
    image: projectRiverLineImage,
  },
  {
    id: 2,
    title: "Жилой квартал Академический",
    location: "Москва, Юго-Западный округ",
    image: projectAkademicheskiyImage,
  },
  {
    id: 3,
    title: "Клубный дом Meridian",
    location: "Москва, центр",
    image: projectMeridianImage,
  },
  {
    id: 4,
    title: "Подземный паркинг Orbit",
    location: "Химки, Московская область",
    image: projectOrbitImage,
  },
  {
    id: 5,
    title: "Апарт-комплекс North Gate",
    location: "Красногорск, Московская область",
    image: projectNorthGateImage,
  },
  {
    id: 6,
    title: "Жилой дом Central Park",
    location: "Москва, Западный округ",
    image: projectCentralParkImage,
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = projects[currentIndex];

  const showPrevious = () => {
    setCurrentIndex((value) => (value - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    setCurrentIndex((value) => (value + 1) % projects.length);
  };

  return (
    <section
      id="projects"
      className="section-anchor"
      style={{
        background: "#0b0b0c",
        padding: "96px 20px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 840, margin: "0 auto 52px" }}>
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
            Наши объекты
          </p>
          <h2
            style={{
              margin: "14px 0 0",
              color: "#f5f1e8",
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.08,
              fontWeight: 700,
              textTransform: "uppercase",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Галерея действующих объектов
          </h2>
        </div>

        <div
          className="projects-gallery lg:h-[480px]"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 2fr) minmax(280px, 1fr)",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          <article
            className="h-full"
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              minHeight: 420,
              background: "#161618",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <img
              src={current.image}
              alt={current.title}
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
                  "linear-gradient(180deg, rgba(11,11,12,0.04) 12%, rgba(11,11,12,0.42) 58%, rgba(11,11,12,0.92) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 28,
                right: 28,
                bottom: 28,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  width: "fit-content",
                  padding: "8px 12px",
                  borderRadius: 999,
                  background: "rgba(206, 168, 47, 0.14)",
                  color: "#f5f1e8",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Объект {current.id} из {projects.length}
              </div>
              <h3 style={{ margin: 0, color: "#f5f1e8", fontSize: 30, lineHeight: 1.15, fontWeight: 700 }}>
                {current.title}
              </h3>
              <p style={{ margin: 0, color: "rgba(245, 241, 232, 0.76)", fontSize: 16 }}>
                {current.location}
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                display: "flex",
                gap: 12,
              }}
            >
              {[{ label: "Назад", action: showPrevious, icon: ChevronLeft }, { label: "Вперед", action: showNext, icon: ChevronRight }].map(
                ({ label, action, icon: Icon }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={action}
                    aria-label={label}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 999,
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      background: "rgba(11, 11, 12, 0.42)",
                      color: "#cea82f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </button>
                )
              )}
            </div>
          </article>

          <div
            className="h-full"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gridTemplateRows: "repeat(3, minmax(0, 1fr))",
              gap: 16,
              gridAutoRows: "1fr",
            }}
          >
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className="h-full aspect-square lg:aspect-auto"
                style={{
                  position: "relative",
                  border: index === currentIndex ? "2px solid #cea82f" : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 20,
                  overflow: "hidden",
                  padding: 0,
                  cursor: "pointer",
                  background: "#161618",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: index === currentIndex ? 1 : 0.62,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "auto 0 0 0",
                    padding: "14px 14px 12px",
                    background: "linear-gradient(180deg, rgba(11,11,12,0) 0%, rgba(11,11,12,0.88) 100%)",
                    textAlign: "left",
                  }}
                >
                  <div style={{ color: "#f5f1e8", fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>
                    {project.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
          @media (max-width: 768px) {
            .projects-gallery {
              grid-template-columns: 1fr !important;
              height: auto !important;
            }
          }
      `}</style>
    </section>
  );
}
