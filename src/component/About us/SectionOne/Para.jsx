import React from "react";

export default function Para({ title1, title2, para, fullpara }) {
  return (
    <div className="space-y-4 sm:space-y-0 pb-10">
      <h1 className=" titleWithYellow sm:pt-4 ">
        {title1} <span className="text-yellow">{title2}</span>
      </h1>
      <p className=" mPara14">{para}</p>
      <div className=" sm:py-0">
        <p className=" paraXl sm:pb-6 ">{fullpara}</p>
      </div>
    </div>
  );
}
