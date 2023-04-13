import React from "react";
import Creative from "../../assets/creative.svg";
import Brands from "./Brands";
import Stats from "./Stats";

//
import Logo1 from "../../assets/Home/Brand Logo/image 1.png";
import Logo2 from "../../assets/Home/Brand Logo/image 2.png";
import Logo3 from "../../assets/Home/Brand Logo/image 4.png";
import Logo4 from "../../assets/Home/Brand Logo/image 8.png";
import Logo5 from "../../assets/Home/Brand Logo/image 5.png";
import Logo6 from "../../assets/Home/Brand Logo/image 6.png";
import Logo7 from "../../assets/Home/Brand Logo/image 7.png";
//

export default function SectionOne() {
  return (
    <div className="bg-bg">
      <div className="Homepage ">
        <div className="sm:p-12 p-8 gradient_rightBot  sm:pt-36 bg-gradient-to-tr from-bg from-25%  to-grayDark ">
          <div className=" pt-8 sm:pt-0">
            <div className="flex flex-row  justify-center space-x-8  ">
              <div className="flex-row text-white  mt-14 space-y-10  sm:w-6/12">
                <img src={Creative} className="sm:hidden m-auto" />
                <div>
                  <p className="text-[24px] font-futuraMdBt sm:text-[50px]  sm:leading-snug	">
                    Lorem ipsum dolor sit amet,
                    <span className="pb-1 border-b-4 border-yellow">
                      {" "}
                      consectetur
                    </span>
                    <span className="text-[24px] sm:text-[50px] font-futur">
                      {" "}
                      adipiscing elit.
                    </span>
                  </p>
                </div>
                <p className="Dpara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean elementum interdum sapien, ac dictum nulla dictum
                  lacinia. Doorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean elementum interdum sapien, ac dictum nulla dictum
                  lacinia. Donec faucibus pulvinar rutrum. Donec cursus nulla a
                  arcu ultrices, vitae gravida leo efficitur.nec faucibus
                  pulvinar rutrum.
                </p>
                <div>
                  <p className="text-[18px] font-futuraBkBt  sm:font-futuraBkBt sm:text-[26px]">
                    Wanna get in touch?{" "}
                    <span className="border-b-4 font-futuraMdBt border-yellow">
                      Let's talk
                    </span>
                  </p>
                </div>
                <div className=" sm:hidden space-y-8">
                  <Stats />

                  <Brands />
                </div>
                <div className="hidden sm:block ">
                  <Stats />
                </div>
              </div>
              <img
                src={Creative}
                className=" hidden sm:block sm:object-contain  sm:h-auto  sm:w-5/12 justify-center lg:h-auto"
              />
            </div>
            <div className="hidden sm:block sm:pb-8 my-auto ">
              <Brands
                items={[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
