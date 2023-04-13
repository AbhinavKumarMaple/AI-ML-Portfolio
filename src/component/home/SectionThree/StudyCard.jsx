import React from "react";

export default function StudyCard({ src, title, desc }) {
  return (
    <div className="pt-6 pb-6 ">
      <img src={src} className="rounded-2xl w-full" />
      <div className="space-y-4  pt-4">
        <div className="sm:pt-5">

        <h1 className="titlehvbt">{title}</h1>
        <p className="Dpara w-10/12">{desc}</p>
        </div>
        <button className="uppercase hidden sm:block font-futuraLt text-[24px] border-b-4 sm:pb-1 border-yellow">
          Learn More
        </button>
      </div>
    </div>
  );
}
