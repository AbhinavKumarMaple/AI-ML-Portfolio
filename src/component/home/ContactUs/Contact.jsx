import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";
import "../../ContactUs/style.css";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // do something with the form data here, like sending it to an API
  };
  const [value, setValue] = useState();

  return (
    <div className="">
      <form>
        <div className="flex flex-row gap-6 sm:gap-16 justify-between">
          <div className="mb-4 flex-auto">
            <label htmlFor="firstName" className="forumlable">
              First Name
            </label>
            <input
              placeholder="John"
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleInputChange}
              className="foruminput  md:bg-gradient-to-tl md:from-footGray md:via-footGray  md:to-gray26 "
            />
          </div>
          <div className="mb-4 flex-auto ">
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
          <div className="mb-4 flex-1">
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
        <div className="mb-4">
          <label htmlFor="message" className="forumlable">
            Message(Optional)
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
