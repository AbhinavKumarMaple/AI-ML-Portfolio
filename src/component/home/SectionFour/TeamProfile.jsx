import React from "react";

export default function TeamProfile({ src, title, post, size }) {
  return (
    <div className="space-y-7 sm:space-y-6  w-full">
      <img src={src} className="w-full sm:w-full" />
      <div className="flex flex-col sm:gap-3 gap-2">

      <h1 className={`fmd16 ${size}`}>{title}</h1>
      <p className="font-futuraLt text-left sm:text-2xl">{post}</p>
      </div>
    </div>
  );
}
