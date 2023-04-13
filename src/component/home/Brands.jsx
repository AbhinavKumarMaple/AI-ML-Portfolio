import React from "react";
import Logo1 from "../../assets/Home/Brand Logo/image 1.png";
import Logo2 from "../../assets/Home/Brand Logo/image 2.png";
import Logo3 from "../../assets/Home/Brand Logo/image 4.png";
import Logo4 from "../../assets/Home/Brand Logo/image 8.png";
import Logo5 from "../../assets/Home/Brand Logo/image 5.png";
import Logo6 from "../../assets/Home/Brand Logo/image 6.png";
import Logo7 from "../../assets/Home/Brand Logo/image 7.png";

import Creative from "../../assets/creative.svg";

export default function Brands({ items }) {
  return (
    <div className="py-4 w-full">
      <div className="flex sm:hidden flex-row justify-between align-middle ">
        <img src={Logo1} className="object-contain  w-20 h-20 text-yellow" />
        <img src={Logo2} className="object-contain  w-20 h-20 text-yellow" />
        <img src={Logo3} className="object-contain  w-20 h-20 text-yellow" />
        <img src={Logo4} className="object-contain  w-20 h-20 text-yellow" />
      </div>
      <div className=" hidden sm:block px-16 py-16">
        <div className="flex flex-row flex-wrap justify-between">
          {items &&
            items.map((item, index) => (
              <img key={index} src={item} className="Brand" />
            ))}
          {console.log(items)}
        </div>
      </div>
    </div>
  );
}
