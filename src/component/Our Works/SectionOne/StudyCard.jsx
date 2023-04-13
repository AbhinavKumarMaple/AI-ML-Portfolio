import React from "react";

export default function StudyCard({ src, title, desc, list }) {
  return (
    <div className="pt-6 sm:mx-10">
      <img src={src} className="rounded-xl w-full" />
      <div className="space-y-4 pr-20 pt-4">
        <h1 className="font-bold text-xl sm:text-4xl sm:font-medium">
          {title}
        </h1>
        <p className="font-light sm:text-xl">{desc}</p>
        <ul className="marker:text-yellow list-disc space-y-4 list-inside ">
          {list.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
        <p className="font-light sm:text-xl">{desc}</p>
        <button className=" hidden sm:block font-light text-3xl border-b-4 sm:pb-1 border-yellow">
          Learn more
        </button>
      </div>
    </div>
  );
}
