import React from "react";
import Faq from "./SectionOne/Faq";
import img from "../../assets/OurService/3.svg";

export default function SectionOne() {
  const points = [
    "Lorem ipsum dolor sit amet, ",
    "Lorem ipsum dolor sit amet, ",
    "Lorem ipsum dolor sit amet, ",
    "Lorem ipsum dolor sit amet, ",
  ];

  const Items = [
    {
      title: "Artificial Intelligence",
      fulltitle: `Unlocking You ━ UX Heuristic 8 of 10: "Aesthetics and Minimalist Design",applied to you.`,
      para: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
   culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
   pariatur ut laborum aliquip culpa laboris. Do id consequat ad
   eiusmod exercitation `,
      para2: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
   culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
   pariatur ut laborum aliquip culpa laboris. Do id consequat ad
   eiusmod exercitation `,
      list: [
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
      ],
    },
    {
      title: "Machine Learning",
      fulltitle: `Unlocking You ━ UX Heuristic 8 of 10: "Aesthetics and Minimalist Design",applied to you.`,

      para: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
     culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
     pariatur ut laborum aliquip culpa laboris. Do id consequat ad
     eiusmod exercitation irure qui dolor occaecat anim culpa aliquip do
     ipsum. Anim ullamco pariatur consequat exercitation dolor ipsum.`,
      para2: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
   culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
   pariatur ut laborum aliquip culpa laboris. Do id consequat ad
   eiusmod exercitation `,

      list: [
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
      ],
    },
    {
      title: "Digital Designe Service",
      fulltitle: `Unlocking You ━ UX Heuristic 8 of 10: "Aesthetics and Minimalist Design",applied to you.`,

      para: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
     culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
     pariatur ut laborum aliquip culpa laboris. Do id consequat ad
     eiusmod exercitation irure qui dolor occaecat anim culpa aliquip do
     ipsum. Anim ullamco pariatur consequat exercitation dolor ipsum.`,
      para2: ` Nostrud amet labore nisi ut esse. Deserunt ipsum qui sint Lorem
     culpa cillum sunt culpa amet eu amet. Velit labore eiusmod ut aliqua
     pariatur ut laborum aliquip culpa laboris. Do id consequat ad
     eiusmod exercitation irure qui dolor occaecat anim culpa aliquip do
     ipsum. Anim ullamco pariatur consequat exercitation dolor ipsum.`,

      list: [
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
        "Lorem ipsum dolor sit amet, ",
      ],
    },
  ];
  const length = Items.length;

  return (
    <div className="bg-bg">
      <div className="mgradient_rightTop gradient_rightBot">
        <div className=" Homepage  text-white flex flex-col  text-left sm:gap-12  p-4 sm:p-24 sm:pt-56 pt-32  ">
          <div className="flex flex-col gap-4 pb-10 sm:p-0">
            <h1 className="titleWithUl">
              <span className="border-b-2 border-yellow">Our</span> Services
            </h1>
            <h1 className="titleWithYellow w-2/3 lg:max-w-xl">
              We offer <span className="text-yellow">high-quality </span>
              services
            </h1>
          </div>
          <div />
          {Items.map((e, index) => (
            <div key={index} className="">
              <Faq
                title={e.title}
                fullTitle={e.fulltitle}
                index={index + 1}
                img={img}
                para={e.para}
                para2={e.para2}
                list={e.list}
                maxL={length}
              >
                {e.para}
              </Faq>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
