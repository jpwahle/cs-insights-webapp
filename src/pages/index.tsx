import Cta from "@/partials/Cta";
import FeaturesHome from "@/partials/FeaturesHome";
import FeaturesWorld from "@/partials/FeaturesWorld";
import Footer from "@/partials/Footer";
import HeroHome from "@/partials/HeroHome";
import Header from "@/partials/LandingHeader";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="grow">
        <HeroHome />
        <FeaturesHome />
        <FeaturesWorld />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
