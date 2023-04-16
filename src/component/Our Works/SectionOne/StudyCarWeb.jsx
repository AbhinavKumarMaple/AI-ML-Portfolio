import React from "react";

export default function StudyCarWeb({ title, para, list, para2, img }) {
  return (
    <div className="flex  pt-8 pb-10 ">
      <div className="w-6/12 pr-6 space-y-5 ">
        <h1 className="titlehvbt font-futur leading-snug">{title}</h1>
        <p className=" Dpara">{para}</p>
        <ul className="marker:text-yellow xl:text-[20px] lg:text-[16px] sm:text-[14px] text-xl font-light list-disc space-y-4 list-inside">
          {list.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
        <p className="Dpara">{para2}</p>
      </div>
      <div className=" w-9/12  overflow-hidden ml-auto">
        <img src={img} className="rounded-3xl mx-auto" />
      </div>
    </div>
  );
}
