import React from "react";

export default function NotFound() {
  return (
    <div className="h-screen  bg-gradient-to-tr from-bg from-35%  to-gray sm:bg-gradient-to-tl sm:from-bg sm:from-35%  sm:to-gray sm:-top-16 ">
      <div className="text-center py-96 text-white text-xl font-semibold lg:text-5xl">
        Page Not Found{" "}
        <span className="text-xl font-bold text-yellow lg:text-5xl">
          404 Error
        </span>
      </div>
    </div>
  );
}
