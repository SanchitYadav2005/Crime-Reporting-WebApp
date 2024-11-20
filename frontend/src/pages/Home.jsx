import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import AboveFooter from "../components/AboveFooter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Responsive Navbar */}
      <header >
        <Navbar />
      </header>

      {/* Hero Section with responsive padding */}
      <main className="flex-grow">
        <section className="bg-cover bg-center py-10 md:py-16 lg:py-24">
          <HeroSection />
        </section>

        {/* Info Section with responsive grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <InfoSection />
        </section>

        {/* Optional Above Footer Section */}
        <section className="bg-gray-100 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <AboveFooter />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 px-4 sm:px-6 lg:px-8">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
