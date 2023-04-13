import React from "react";
import AboutCard from "./SectionTwo/AboutCard";

import Logo1 from "../../assets/brands/Homepage About Card/creative-brain.svg";
import Logo2 from "../../assets/brands/Homepage About Card/machine.svg";
import Logo3 from "../../assets/brands/Homepage About Card/Group.svg";

export default function SectionTwo() {
  return (
    <div className="sm:bg-footGray ">
      <div className="gradient_rightTop MGrayBL">
        <div className=" pt-16 sm:pt-20  gradient_leftBot flex sm:justify-evenly text-center flex-col sm:px-16 px-12 space-y-6  text-white">
          <div className="sm:space-y-8 sm:pb-12 sm:flex sm:flex-col sm:justify-center sm:items-center">
            <p className="maintitlebkbt py-4">
              {" "}
              <span className="ul">creating</span> experiences through
            </p>
            <p className="titleWithYellow sm:max-w-4xl">
              AI, ML, mobile,{" "}
              <span className="text-yellow ">web, Degital UI</span> design and
              UX services
            </p>
          </div>
          <div className=" sm:flex sm:flex-row sm:text-left pb-16 ">
            <AboutCard
              src={Logo1}
              title="Artificial Intelligence"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum interdum sapien, ac dictum nulla dictum lacinia. "
              button="LEARN MORE"
            />
            <div className="border-r-2 border-grayDark"></div>
            <AboutCard
              className=""
              src={Logo2}
              title="Machine learning"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              button="LEARN MORE"
            />
            <div className="border-r-2 border-grayDark"></div>
            <AboutCard
              src={Logo3}
              title="Digital Design"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              button="LEARN MORE"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
