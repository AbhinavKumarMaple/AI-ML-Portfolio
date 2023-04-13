import React from "react";
import Creative from "../assets/creative.svg";
import Brands from "./home/Brands";
import ContactUs from "./home/ContactUs";
import SectionFour from "./home/SectionFour";
import SectionOne from "./home/SectionOne";
import SectionThree from "./home/SectionThree";
import SectionTwo from "./home/SectionTwo";
import Stats from "./home/Stats";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <ContactUs />
    </div>
  );
}
