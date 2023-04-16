import React from "react";
import StudyCard from "./SectionThree/StudyCard";
import Pic1 from "../../assets/Home/StudyCard/Rectangle 7-1.png";
import Pic2 from "../../assets/Home/StudyCard/Rectangle 7.png";
import Pic3 from "../../assets/Home/StudyCard/Rectangle 8.png";
import Pic4 from "../../assets/Home/StudyCard/Rectangle 9.png";

export default function SectionThree() {
  return (
    <div className="bg-bg">
      <div className="gradient_leftTop">
        <div className=" p-8 sm:p-20 sm:pt-36 sm:px-28 gradient_rightBot">
          <div className=" text-white space-y-4 sm:space-y-8  ">
            <div className="sm:space-y-10 sm:max-w-2xl space-y-8">
              <h1 className=" maintitlebkbt ">
                <span className="ul">our</span> works
              </h1>
              <div className="space-y-8 w-10/12 sm:w-full">
                <h1 className="titleWithYellow w-full sm:w-full">
                  Case Studies,{" "}
                  <span className="text-yellow ">
                    a selection of successful
                  </span>{" "}
                  projects.
                </h1>
                <div className="space-y-4">
                  <p className="Dpara w-full sm:w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean elementum interdum sapien, ac dictum nulla dictum
                    lacinia.
                  </p>
                  <button className="uppercase ">
                    <span className="ul titlewithUl24 ">
                      view al case study
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:grid pt-5 sm:grid-cols-2 text-white gap-x-20">
            <StudyCard
              src={Pic2}
              title="Title goes here"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum interdum sapien, ac dictum nulla dictum lacinia. "
            />
            <StudyCard
              src={Pic1}
              title="Title goes here"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum interdum sapien, ac dictum nulla dictum lacinia. "
            />
            <StudyCard
              src={Pic3}
              title="Title goes here"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum interdum sapien, ac dictum nulla dictum lacinia. "
            />
            <StudyCard
              src={Pic4}
              title="Title goes here"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum interdum sapien, ac dictum nulla dictum lacinia. "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
