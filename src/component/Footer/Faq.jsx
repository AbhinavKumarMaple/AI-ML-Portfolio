import { useState } from "react";

export default function Faq({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-2 focus:outline-none "
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="footFaq">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="Dpara">{children}</p>
        </div>
      )}
    </div>
  );
}
