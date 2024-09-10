import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import AboveFooter from "../components/AboveFooter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <AboveFooter />
      <Footer />
    </>
  );
}

export default Home;
