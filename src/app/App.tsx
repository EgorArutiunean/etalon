import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Montserrat, sans-serif",
        color: "#1f2933",
        background: "#0b0b0c",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
