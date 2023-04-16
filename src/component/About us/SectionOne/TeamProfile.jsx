import React from "react";

export default function TeamProfile({ src, title, post, size }) {
  return (
    <div className="space-y-2 sm:space-y-6 w-full">
      <img src={src} className="w-full sm:w-full" />
      <div className="">
        <p
          className={`uppercase text-left font-futuraMdBt lg:text-[20px] xl:text-[22px] text-[16px] ${size} max-w-full `}
        >
          {title}
        </p>
      </div>
      <p className="font-futuraLt text-left sm:text-2xl">{post}</p>
    </div>
  );
}
