import React from "react";
import Article from "./Article";
import HeroSection from "./HeroSection";

import HomepageAbout from "./HomepageAbout";

import NationalPresence from "./NationalPresence/NationalPresence";
import News from "./News";

const Home = () => {
  return (
    <>
      <HeroSection />
      <NationalPresence />
      <HomepageAbout />
      <News />
      <Article />
    </>
  );
};

export default Home;
