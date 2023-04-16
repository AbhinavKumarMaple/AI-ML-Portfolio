import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";
import "./style.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [value, setValue] = useState();

  const dropdownStyle = {
    ".react-tel-input .selected-flag ": {
      height: "60px",
      width: "100%",
      padding: "1000px",
      background: "white",
    },
  };

  const containerStyle = {
    height: "111px",
    width: "100%",
    display: "flex",
    alignItems: "center",
  };
  const buttonStyle = {
    height: "100%",
    width: "100px",
    padding: "10px",
    background: "#2D2D2D",
    ".react-tel-input .flag": {
      height: "2000px",
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // do something with the form data here, like sending it to an API
  };

  return (
    <div className="">
      <form>
        <div className="flex flex-row gap-6 sm:gap-16 justify-between">
          <div className=" flex-auto">
            <label htmlFor="firstName" className="forumlable">
              First Name
            </label>
            <input
              placeholder="John"
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleInputChange}
              className="foruminput"
            />
          </div>
          <div className=" flex-auto ">
            <label htmlFor="lastName" className="forumlable">
              Last Name
            </label>
            <input
              placeholder="Smith"
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleInputChange}
              className="foruminput "
            />
          </div>
        </div>
        <div className="sm:flex sm:flex-row sm:gap-16 justify-between">
          <div className=" flex-1">
            <label htmlFor="email" className="forumlable">
              Email
            </label>
            <input
              placeholder="Jhon@example.com"
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              className="foruminput "
            />
          </div>
          <div className=" flex-1">
            <label htmlFor="number" className="forumlable">
              Phone
            </label>
            <div className="bg-footGray px-4 border-[1px] border-formBorder">
              <PhoneInput
                placeholder="987 654 3210"
                value={value}
                onChange={setValue}
                limitMaxLength
                maxLength={12}
                defaultCountry="IN"
              />
            </div>
          </div>
        </div>
        <div className="">
          <label htmlFor="message" className="forumlable">
            Message (Optional)
          </label>
          <textarea
            placeholder="Message...."
            id="message"
            name="message"
            rows="4"
            onChange={handleInputChange}
            className="block bg-gradient-to-r from-footGray via-footGray  to-gray text-white w-full h-32   sm:h-60 sm:text-[26px] sm:px-14 px-4 py-2 border border-formBorder  shadow-sm "
          ></textarea>
        </div>
        <button type="submit" className="forumButton" onClick={handleSubmit}>
          Contact Us
        </button>
      </form>
    </div>
  );
}
