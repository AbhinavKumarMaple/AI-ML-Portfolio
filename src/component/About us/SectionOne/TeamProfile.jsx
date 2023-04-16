import React from "react";

export default function TeamProfile({ src, title, post, size }) {
  return (
    <div className="space-y-2 sm:space-y-6 w-full">
      <img src={src} className="w-full sm:w-full" />
      <h1
        className={`flex uppercase text-left font-futuraMdBt lg:text-[20px] xl:text-[24px] text-[16px] ${size}`}
      >
        {title}
      </h1>
      <p className="font-futuraLt text-left sm:text-2xl">{post}</p>
    </div>
  );
}
