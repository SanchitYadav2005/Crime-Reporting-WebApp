import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import AboveFooter from './AboveFooter'


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection/>
      <AboveFooter/>
    </>
  );
}

export default Home;
