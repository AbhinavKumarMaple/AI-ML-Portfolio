import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  XMarkIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import twoBar from "../assets/navbar/bar.svg";
import mobLogo from "../assets/navbar/MobLogo.svg";

import deskLogo from "../assets/navbar/deskLogo.svg";
import { Link, NavLink, useParams } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/about", current: false },
  { name: "Our Services", href: "/service", current: false },
  { name: "Portfolio", href: "/work", current: false },
  { name: "Contact Us", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { id } = useParams();
  console.log(id);
  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 sm:bg-opacity-0 absolute w-full sm:px-24 sm:pt-10"
    >
      {({ open, close }) => (
        <>
          <div
            className="
          "
          >
            <div className="relative flex h-16 items-center justify-center bg-grayDark sm:bg-opacity-0">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 px-8 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <img src={twoBar} aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1  items-center  justify-center sm:justify-between sm:items-center ">
                <div className="flex flex-shrink-0 items-center ">
                  <div className="hidden sm:block">
                    <img
                      src={deskLogo}
                      className="sm:w-full sm:h-4 lg:w-full lg:h-6"
                    />
                  </div>
                  <div className="sm:hidden pb-8">
                    <NavLink to="/">
                      <img src={mobLogo} />
                    </NavLink>
                  </div>
                </div>
                <div className="hidden sm:block ">
                  <div className="flex text-white lg:justify-between ">
                    {/* desktop Nav */}
                    <div className="flex gap-8 xl:mx-auto ">
                      {navigation.map((item) => (
                        <NavLink
                          to={item.href}
                          key={item.name}
                          className={({ isActive }) =>
                            isActive
                              ? "sm:text-[14px] lg:text-[20px] xl:text-[26px] font-futuraMdBt"
                              : "sm:text-[14px] lg:text-[20px] xl:text-[26px] font-futuraLt"
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                  <button
                    type="button"
                    className="sm:text-[20px]  sm:px-5 sm:py-2 bg-yellow lg:px-10 lg:p-3 lg:text-bg lg:font-futuraMdBt lg:text-[26px] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Get a quote
                  </button>

                  {/* Profile dropdown */}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="h-screen " onClick={close}>
              <div className="space-y-1 px-2 pb-3 pt-2 text-white bg-gray">
                {/* moble Nav */}
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    <Link to={item.href} onClick={close}>
                      {item.name}
                    </Link>
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
