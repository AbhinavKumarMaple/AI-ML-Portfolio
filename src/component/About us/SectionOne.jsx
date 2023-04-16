import React from "react";
import TeamProfile from "./SectionOne/TeamProfile";
import Team1 from "../../assets/AboutUs/1.png";
import Team2 from "../../assets/AboutUs/2.png";
import Team3 from "../../assets/AboutUs/3.png";
import Team4 from "../../assets/AboutUs/4.png";
import Team5 from "../../assets/AboutUs/5.png";

export default function SectionOne() {
  return (
    <div className="bg-bg  ">
      <div className="Homepage">
        <div className=" gradient_rightBot mgradient_rightTop">
          <div className="text-white flex flex-col  text-left gap-8  p-8  sm:p-24 sm:pt-48 pt-24  ">
            <h1 className="titleWithUl">
              <span className="ul">about</span> us
            </h1>
            <h1 className=" titleWithYellow sm:pb-8 max-w-[261px] sm:max-w-[700px]">
              Meet <span className=" text-yellow">out team. </span>
              Our unique Operating philosophy
            </h1>

            <div className="grid grid-cols-2 m-full gap-7 sm:gap-9 sm:flex sm:flex-row ">
              <TeamProfile src={Team1} title="dieter scholz" post="Founder" />
              <TeamProfile
                src={Team2}
                title="zachary bates"
                post="Co - Founder"
              />
              <TeamProfile src={Team3} title="Inès Martinez" post="CEO" />
              <TeamProfile src={Team4} title="Morgane Dubois" post="Director" />
              <TeamProfile
                src={Team5}
                title="Matthew Richardson"
                post="Assistant Director"
                size="xl:text-[20px]"
              />
            </div>
            <p className="mPara14 pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            </p>
            <p className="paraXl text-center">
              Proident culpa in deserunt ex qui veniam occaecat Lorem enim
              cupidatat qui aliqua fugiat. Reprehenderit voluptate deserunt
              occaecat ad ex consequat et incididunt id deserunt anim fugiat.
              Mollit ipsum adipisicing magna aliquip ullamco consequat commodo
              proident ullamco occaecat dolor. Fugiat nostrud quis laboris
              voluptate ut excepteur eu occaecat nostrud do ea. Elit eiusmod
              pariatur ullamco sunt irure laboris minim deserunt commodo eu ut.
              Laboris eu consequat ut duis elit Lorem reprehenderit. Sunt
              incididunt do anim laborum id dolor. In sit Lorem eu officia non
              nulla voluptate sit reprehenderit do culpa ipsum. Ullamco est elit
              adipisicing nostrud enim sunt veniam pariatur excepteur culpa
              cillum ea fugiat. Labore aliquip occaecat nostrud non ea excepteur
              ullamco pariatur ex adipisicing proident ipsum nisi. Tempor enim
              qui sit veniam commodo cillum quis proident id id.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
