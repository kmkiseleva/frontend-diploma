import React from "react";
import HeaderMain from './../../components/Header/HeaderMain';
import About from "../../components/About/About";
import Information from "../../components/Information/Information";
import Reviews from "../../components/Reviews/Reviews";

export default function LandingPage() {
  return (
    <>
      <HeaderMain />
      <About />
      <Information />
      <Reviews />
    </>
  );
}
