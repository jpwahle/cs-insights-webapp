import AboutIntro from "../partials/AboutIntro";
import AboutStory from "../partials/AboutStory";
import CtaAlternative from "../partials/CtaAlternative";
import Footer from "../partials/Footer";
import Header from "../partials/LandingHeader";
import Team from "../partials/Team";

function About() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <AboutIntro />
        <AboutStory />
        <Team />
        <CtaAlternative />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default About;
