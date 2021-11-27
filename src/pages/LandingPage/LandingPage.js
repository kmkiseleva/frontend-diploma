import React from "react";
import "./LandingPage.css";
import About from "../../components/About/About";
import Information from "../../components/Information/Information";
import Reviews from "../../components/Reviews/Reviews";

export default function LandingPage() {
  return (
    <>
      <About />
      <Information />
      <Reviews />
    </>
  );
}
