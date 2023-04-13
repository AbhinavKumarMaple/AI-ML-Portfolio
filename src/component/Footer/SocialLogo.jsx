import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function SocialLogo() {
  return (
    <div className="flex items-center gap-4 sm:gap-5 justify-center">
      <div className="w-25 h-25 rounded-full bg-yellow-500 flex  items-center justify-center">
        <FaFacebookF
          size={50}
          color={"#262626"}
          className="text-bg bg-yellow rounded-full  p-3 sm:hidden"
        />
        <FaFacebookF
          size={50}
          color={"#262626"}
          className="text-bg bg-yellow rounded-full  p-3 hidden sm:block"
        />
      </div>
      <div className="w-25 h-25 rounded-full bg-yellow-500 flex items-center justify-center">
        <FaTwitter
          size={50}
          color={"#262626"}
          className="text-bg bg-yellow rounded-full p-3 sm:hidden"
        />
        <FaTwitter
          size={50}
          color={"#262626"}
          className="text-bg bg-yellow rounded-full p-3 hidden sm:block"
        />
      </div>
      <div className="w-25 h-25 rounded-full bg-yellow-500 flex items-center justify-center">
        <FaYoutube
          size={50}
          color={"#262626"}
          className="text-bg bg-yellow rounded-full p-3 sm:hidden"
        />
        <FaYoutube
          size={50}
          color={"#262626"}
          className="text-bg bg-yellow rounded-full p-3 hidden sm:block"
        />
      </div>
      <div className="w-25 h-25 rounded-full bg-yellow-500 flex items-center justify-center">
        <FaInstagram
          size={50}
          color={"#262626"}
          className="text-bg bg-yellow rounded-full p-3 sm:hidden"
        />
        <FaInstagram
          size={50}
          color={"#262626"}
          className="text-bg bg-yellow rounded-full p-3 hidden sm:block"
        />
      </div>
    </div>
  );
}
