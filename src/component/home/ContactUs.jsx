import React from "react";
import Contact from "./ContactUs/Contact";

export default function ContactUs() {
  return (
    <div className=" ">
      <div className=" xs:bg-bg">
        <div className="gradient_leftTop mgradient_rightBot">
          <div className="text-white mgradient_rightTopSmall gradient_rightBot text-left space-y-8 p-8 sm:p-28 sm:pt-36 sm:space-y-8 ">
            <h1 className="maintitlebkbt sm:max-w-xl">
              <span className="ul">contact</span> us
            </h1>
            <h1 className="titleWithYellow w-10/12 sm:max-w-[600px]">
              Interested in{" "}
              <span className="text-yellow">working with us? </span>
              Contact us now!
            </h1>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
