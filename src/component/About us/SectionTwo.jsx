import React from "react";
import Para from "./SectionOne/Para";
import Img from "../../assets/AboutUs/vector.png";

export default function SectionTwo() {
  return (
    <div className="bg-bg ">
      <div className="gradient_rightTopE ">
        <div className=" text-white p-8 mgradient_rightBotSmall sm:pt-6 sm:p-24 gradient_rightBot">
          <div className="sm:space-y-12 ">
            <Para
              title1="Our"
              title2="Mission"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident,"
              fullpara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet sem et nulla maximus, a lacinia arcu molestie. Aliquam malesuada lorem eget diam viverra, quis varius ante bibendum. Sed non turpis sit amet nisl suscipit lobortis a ac lacus. Vivamus congue purus et lectus feugiat, vel mattis turpis efficitur. Duis vitae lectus eget metus ultricies convallis eu sit amet nulla. Integer sodales dolor sit amet velit vulputate, vitae interdum dolor vestibulum. Sed mollis enim eget sapien convallis iaculis. Praesent vitae nisi quis metus dapibus iaculis. Sed fringilla blandit ipsum, at fermentum risus tincidunt a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eget rhoncus lacus, non malesuada tellus. Nullam vitae tristique mauris, vel dignissim felis. Quisque dignissim, sapien eu blandit sollicitudin, sapien lectus bibendum nisl, sit amet suscipit nulla dolor nec lorem. Sed suscipit augue non blandit consectetur. Nam gravida maximus sapien, sed eleifend velit tincidunt eu."
            />
            <div className="border-b-2 hidden sm:block border-grayDark"></div>
            <Para
              title1="Our"
              title2="Values"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident,"
              fullpara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet sem et nulla maximus, a lacinia arcu molestie. Aliquam malesuada lorem eget diam viverra, quis varius ante bibendum. Sed non turpis sit amet nisl suscipit lobortis a ac lacus. Vivamus congue purus et lectus feugiat, vel mattis turpis efficitur. Duis vitae lectus eget metus ultricies convallis eu sit amet nulla. Integer sodales dolor sit amet velit vulputate, vitae interdum dolor vestibulum. Sed mollis enim eget sapien convallis iaculis. Praesent vitae nisi quis metus dapibus iaculis. Sed fringilla blandit ipsum, at fermentum risus tincidunt a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eget rhoncus lacus, non malesuada tellus. Nullam vitae tristique mauris, vel dignissim felis. Quisque dignissim, sapien eu blandit sollicitudin, sapien lectus bibendum nisl, sit amet suscipit nulla dolor nec lorem. Sed suscipit augue non blandit consectetur. Nam gravida maximus sapien, sed eleifend velit tincidunt eu."
            />
            <div className="border-b-2 hidden sm:block  border-grayDark"></div>

            <Para
              title1="Our"
              title2="History"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident,"
              fullpara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet sem et nulla maximus, a lacinia arcu molestie. Aliquam malesuada lorem eget diam viverra, quis varius ante bibendum. Sed non turpis sit amet nisl suscipit lobortis a ac lacus. Vivamus congue purus et lectus feugiat, vel mattis turpis efficitur. Duis vitae lectus eget metus ultricies convallis eu sit amet nulla. Integer sodales dolor sit amet velit vulputate, vitae interdum dolor vestibulum. Sed mollis enim eget sapien convallis iaculis. Praesent vitae nisi quis metus dapibus iaculis. Sed fringilla blandit ipsum, at fermentum risus tincidunt a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eget rhoncus lacus, non malesuada tellus. Nullam vitae tristique mauris, vel dignissim felis. Quisque dignissim, sapien eu blandit sollicitudin, sapien lectus bibendum nisl, sit amet suscipit nulla dolor nec lorem. Sed suscipit augue non blandit consectetur. Nam gravida maximus sapien, sed eleifend velit tincidunt eu."
            />
          </div>
          <div className="flex justify-center pb-8 sm:pb-0 sm:max-w-12xl ">
            <img src={Img} />
          </div>
        </div>
      </div>
    </div>
  );
}
