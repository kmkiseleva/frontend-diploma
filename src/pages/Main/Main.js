import React from "react";
import "./main.css";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Information from "../../components/Information/Information";
import Footer from "../../components/Footer/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <About />
      <Information />
      <Footer />
    </>
  );
}
