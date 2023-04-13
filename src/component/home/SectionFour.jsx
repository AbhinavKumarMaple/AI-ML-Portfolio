import React from "react";
import TeamProfile from "./SectionFour/TeamProfile";

import Team1 from "../../assets/AboutUs/1.png";
import Team2 from "../../assets/AboutUs/2.png";
import Team3 from "../../assets/AboutUs/3.png";
import Team4 from "../../assets/AboutUs/4.png";
import Team5 from "../../assets/AboutUs/5.png";

export default function SectionFour() {
  return (
    <div className=" sm:bg-footGray bg-bg">
      <div className="gradient_leftBot  mgradient_rightBotSmall">
        <div className="text-white gradient_rightTop flex flex-col justify-center text-center  space-y-8 p-8 sm:p-20 sm:px-28">
          <h1 className="maintitlebkbt">
            <span className="ul">about</span> us
          </h1>
          <h1 className="titleWithYellow sm:pb-6 ">
            Meet <span className="text-yellow">out team</span>
          </h1>
          <p className="Dpara hidden sm:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
          </p>
          <p className="Dpara sm:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            elementum interdum sapien, ac dictum nulla dictum lacinia. Doorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum
            interdum sapien, ac dictum nulla dictum lacinia. Donec faucibus
            pulvinar rutrum. Donec cursus nulla a arcu ultrices, vitae gravida
            leo efficitur.nec faucibus pulvinar rutrum.
          </p>
          <div className="grid grid-cols-2 sm:gap-10 gap-6 pt-8 w-full sm:flex sm:flex-row">
            <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
            <TeamProfile
              src={Team2}
              title="zachary bates"
              post="Co - Founder"
            />
            <TeamProfile src={Team3} title="Inès Martinez" post="CEO" />
            <TeamProfile
              src={Team4}
              title="Morgane Dubois"
              post="Director"
              size="{text-[5px]}"
            />
            <TeamProfile
              src={Team5}
              title="Matthew Richardson"
              post="Assistant Director"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
