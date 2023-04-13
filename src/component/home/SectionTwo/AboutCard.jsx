import React from "react";

export default function AboutCard(props) {
  return (
    <div className="flex flex-col sm:gap-8 justify-center sm:items-start gap-3 pt-8 sm:mx-12">
      <img
        src={props.src}
        className="w-24 h-24 mx-auto sm:mx-0 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
      />
      <div className="flex flex-col gap-3">

      <h1 className="titlehvbt">{props.title}</h1>
      <p className="Dpara">{props.desc}</p>
      </div>
      
      <button className="titlewithUl24">
        <span className="ul">LEARN MORE</span>
      </button>
    </div>
  );
}
