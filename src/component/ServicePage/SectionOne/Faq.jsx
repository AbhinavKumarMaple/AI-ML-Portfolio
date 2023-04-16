import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Faq({
  title,
  fullTitle,
  para,
  para2,
  list,
  index,
  img,
  maxL,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" ">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full focus:outline-none "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex sm:flex-row items-center gap-2 sm:gap-12 py-6">
          <p className="bg-yellow rounded-full w-14 h-14 lg:w-28 lg:h-28 flex justify-center items-center text-bg font-futuraHvBt text-[24px] lg:text-[50px]">
            {index}.
          </p>
          <p className="titleWithYellow ">{title}</p>
        </div>
        <div className="">
          <MdOutlineKeyboardArrowDown
            size={50}
            className={`w-8 sm:w-16 sm:h-16 text-gray-600 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`${
          isOpen || index == maxL
            ? "border-white  border-b-[1px] border-opacity-50 sm:pt-8 ml-16 sm:ml-32 hidden sm:block"
            : "border-white  border-b-[1px] border-opacity-50 sm:pt-8 ml-16 sm:ml-32"
        }`}
      ></div>

      {isOpen && (
        <div className="space-y-6 pt-0 sm:pt-24 flex sm:flex-row flex-col  lg:gap-4 ">
          <div className="flex sm:w-7/12 items-end ">
            <img src={img} className=" w-full " />
          </div>

          <div className="sm:flex flex-col gap-10 sm:w-5/12">
            <h1 className="titlehvbt sm:text-[36px] max-w-[290px] sm:max-w-[600px] ">
              {fullTitle}
            </h1>{" "}
            <div>
              <p className="font-futuraLt sm:text-[24px] text-[14px] leading-normal  pb-4">
                {para}
              </p>
              <ul className="marker:text-yellow pl-4  Dpara list-disc space-y-4  list-inside">
                {list.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
              <p className="Dpara  leading-normal pt-4">{para2}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
