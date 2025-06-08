// App.jsx
import React from "react";
import getBrand from "./brands/brandSelector";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/Hero";
import Features from "./components/features/Features";
import AboutUs from "./components/about-us/AboutUs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./themes/base.css";

const brand = "drop";
const brandInfo = getBrand(brand);

// Map component names to actual React components
const componentMap = {
  features: Features,
  "about-us": AboutUs,
  contact: Contact,
};

const App = () => {
  console.log("brandInfo", brandInfo);
  return (
    <>
      <Header logo={brandInfo.logo} />
      <main>
        <section id="hero">
          <HeroSection />
        </section>

        {brandInfo.components?.map((componentKey) => {
          const Component = componentMap[componentKey];
          return Component ? (
            <section id={componentKey} key={componentKey}>
              <Component />
            </section>
          ) : null;
        })}
      </main>
      <Footer />
    </>
  );
};

export default App;
