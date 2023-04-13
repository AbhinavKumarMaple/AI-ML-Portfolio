import React from "react";
import Contact from "./ContactUs/Contact";

export default function ContactUs() {
  return (
    <div className="bg-bg pt-14 sm:pt-0 ">
      <div className="gradient_rightBot mgradient_rightTop">
        <div className="text-white Homepage mgradient_rightBotSmall text-left space-y-6 p-8  sm:p-24 sm:pt-56">
          <h1 className="titleWithUl ">
            <span className="ul">contact</span> us
          </h1>
          <h1 className="titleWithYellow w-[280px] sm:min-w-[620px]  sm:max-w-[1000px]">
            Interested in <span className="text-yellow">working with us? </span>
            Contact us now!
          </h1>
          <Contact />
        </div>
      </div>
    </div>
  );
}
