import React from "react";
import Logo from "../assets/brands/image 1.png";
import mobLogo from "../assets/navbar/MobLogo.svg";

import deskLogo from "../assets/navbar/deskLogo.svg";
import Faq from "./Footer/Faq";
import SocialLogo from "./Footer/SocialLogo";
import { TbPhoneCall, TbMail, TbMapPin } from "react-icons/tb";

export default function Footer() {
  const useFullLinks = {
    title: "Useful Links",
    links: [
      { url: "", text: "Home" },
      {
        url: "",
        text: "About us",
      },
      { url: "", text: "Contact us" },
      { url: "", text: "Portfolio" },
    ],
  };
  const ourServices = {
    title: "our Services",
    links: [
      { url: "", text: "AI" },
      {
        url: "",
        text: "ML",
      },
      { url: "", text: "Digital design" },
      { url: "", text: "UI Services" },
    ],
  };
  const contactDetails = {
    title: "contact Details",
    links: [
      { url: "", text: "+91 987 654 3210", icon: <TbPhoneCall size={24} /> },
      {
        url: "",
        text: "youremail@example.com",
        icon: <TbMail size={24} />,
      },
      {
        url: "",
        text: "nowhere street, dummy road, example street, NY, 123456",
        icon: <TbMapPin size={26} />,
      },
    ],
  };

  return (
    <div className="">
      <div className="sm:hidden text-white sm:bg-gradient-to-tr sm:from-gray   sm:via-gray26 sm:to-grayDark ">
        {/* */}
        <div className=" p-8 pt-16 bg-gradient-to-tr from-gray26 from-70% to-gray36 sm:bg-opacity-0 flex flex-col sm:flex-row  space-y-4 sm:space-x-8">
          <div className="text-center  sm:text-left flex flex-col sm:flex-col space-y-4">
            <div className="flex justify-center">
              <img src={mobLogo} />
            </div>
            <p className="mPara14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum interdum sapien, ac dictum nulla dictum lacinia. Doorem
              ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum interdum sapien, ac dictum nulla dictum lacinia. Donec
              faucibus pulvinar rutrum. Donec cursus nulla a arcu ultrices,
              vitae gravida leo efficitur.nec faucibus pulvinar rutrum.
            </p>
            <div></div>
          </div>
          <div className="sm:hidden">
            <SocialLogo />
          </div>
          <div className="sm:hidden border-b-2 border-grayDark pb-4">
            <Faq title="usefull Links">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Faq>
            <Faq title="our services">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Faq>
            <Faq title="contact details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Faq>
          </div>
          <div></div>
          <div className="bg-gray26  ">
            <p className="text-center font-light">© All rights reserved 2023</p>
          </div>
        </div>
        <div className="border-r-1 border-grayDark"></div>
        {/* */}
        {/* */}
        {/* */}
      </div>
      <div className="bg-footGray">
        <div className=" hidden gradient_rightTop sm:block text-white mx-auto px-16 pt-16  ">
          <div className=" ">
            <div className="pt-16   ">
              <div className="grid mb-8 lg:grid-cols-7 ">
                <div className="  lg:col-span-3 ">
                  {/*  */}
                  <div className="text-sm sm:text-left  flex flex-col  gap-12 items-start">
                    <div className="hidden sm:block">
                      <img src={deskLogo} />
                    </div>
                    <div className="sm:hidden">
                      <img src={mobLogo} />
                    </div>
                    <p className="text-[24px] font-futuraLt  max-w-[550px] leading-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className="hidden sm:block ">
                      <SocialLogo />
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="grid gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3 ">
                  <div className="h-full">
                    <p className="titleWithUl">
                      <span className="ul">usefull</span> link
                    </p>

                    <ul className="flex flex-col gap-8">
                      {useFullLinks.links.map((link, index) => (
                        <li key={index} className=" text-[24px] font-futuraLt">
                          <a
                            href={link.url}
                            className="text-blue-600 hover:underline"
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-full">
                    <p className="titleWithUl">
                      <span className="ul">Our</span> services
                    </p>
                    <ul className="flex flex-col gap-8">
                      {ourServices.links.map((link, index) => (
                        <li key={index} className=" text-[24px] font-futuraLt">
                          <a
                            href={link.url}
                            className="text-blue-600 hover:underline"
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-full ">
                    <div>
                      <p className="titleWithUl">
                        <span className="ul">contact</span> details
                      </p>
                    </div>

                    <ul className=" space-y-8">
                      <li className="flex  items-center text-[24px] font-futuraLt">
                        <div>{contactDetails.links[0].icon}</div>

                        <a
                          href={"/"}
                          className="text-blue-600 hover:underline ml-2"
                        >
                          {contactDetails.links[0].text}
                        </a>
                      </li>
                      <li className="flex items-center text-[24px] font-futuraLt">
                        <div>{contactDetails.links[1].icon}</div>

                        <a
                          href={"/"}
                          className="text-blue-600 hover:underline ml-2"
                        >
                          {contactDetails.links[1].text}
                        </a>
                      </li>
                      <li className="flex my-8  text-[24px] font-futuraLt">
                        <div className="pt-3">
                          {contactDetails.links[2].icon}
                        </div>

                        <a
                          href={"/"}
                          className="text-blue-600 hover:underline ml-2 leading-loose"
                        >
                          {contactDetails.links[2].text}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-16 justify-between border-t-2 border-grayDark sm:flex-row">
                <div className="flex ">
                  <p className="text-[24px] font-futuraLt text-white">
                    ©All rights reserved 2023.
                  </p>
                </div>
                <div className="flex space-x-4 text-[24px] font-futuraLt pt-">
                  <a href="/">Privacy Policy</a>
                  <div className="border-r-2 border-grayDark "> </div>
                  <a href="/">Terms of services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
