export default function Stats() {
  const items = [
    { id: 1, name: "Clients", value: "100+" },
    { id: 2, name: "Projects", value: "100+" },
    { id: 3, name: "Companies", value: "100+" },
  ];
  return (
    <div className="p-4 mx-auto bg-gray26 sm:h-40">
      <div className="flex flex-row justify-evenly  h-full">
        <div className="text-left flex flex-col justify-center gap-4">
          <h6 className="text-[24px] sm:text-[40px] font-futur ">
            {items[0].value}
          </h6>
          <p className="text-[12px] sm:text-[24px] font-futuraBkBt tracking-widest text-gray-800  ">
            {items[0].name}
          </p>
        </div>
        <div className="border-r-2 border-grayDark"></div>
        <div className="text-left flex flex-col justify-center gap-4">
          <h6 className="text-[24px] sm:text-[40px] font-futur">
            {items[1].value}
          </h6>
          <p className="text-[12px] sm:text-[24px] font-futuraBkBt tracking-widest text-gray-800  ">
            {items[1].name}
          </p>
        </div>
        <div className="border-r-2 border-grayDark "></div>
        <div className="text-left flex flex-col justify-center gap-4">
          <h6 className="text-[24px] sm:text-[40px] font-futur">
            {items[2].value}
          </h6>
          <p className="text-[12px] sm:text-[24px] font-futuraBkBt tracking-widest text-gray-800  ">
            {items[2].name}
          </p>
        </div>
      </div>
    </div>
  );
}
