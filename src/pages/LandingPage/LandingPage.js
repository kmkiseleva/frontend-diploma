import React from "react";
import "./LandingPage.css";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Information from "../../components/Information/Information";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <About />
      <Information />
      <Reviews />
      <Footer />
    </>
  );
}
