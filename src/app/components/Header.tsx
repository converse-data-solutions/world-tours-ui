"use client";
import React from "react";
import Link from "next/link";

// <========== icons ==========>
import {
  faAngleDown,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

// <========== images ==========>
import Image from "next/image";

const Header = () => {
  return (
    <div className="">
      <div className="top-head hidden  lg:inline-flex justify-center bg-[#029E9D] h-10 w-full text-white">
        <div className="w-[90%]  lg:max-w-[1296px] flex justify-between">
          <div className="flex items-center ">
            <div className="border-r-[1px] border-[#35B0AF] pr-[15px] flex  ">
              <CalendarMonthOutlinedIcon
                className=""
                style={{ width: "19px", height: "16px" }}
              />{" "}
              <span className="">Thursday, Mar 26, 2021</span>
            </div>
            <div className="border-r-[1px] border-[#35B0AF] px-[15px] flex items-center">
              <LocationOnOutlinedIcon
                className=""
                style={{ width: "19px", height: "17px" }}
              />
              <span>Hollywood, America</span>
            </div>
            <div className="pl-[15px] flex items-center">
              <div>
                <WatchLaterOutlinedIcon
                  className=""
                  style={{ width: "19px", height: "17px" }}
                />
              </div>
              <div>Mon-Fri: 10 AM-5 PM</div>
            </div>
          </div>
          <div>
            <div className="flex h-full justify-center items-center">
              <div className=" px-[14px]   border-r-[1px] border-[#35B0AF]">
                <FacebookOutlinedIcon
                  style={{ width: "19px", height: "17px" }}
                />
              </div>
              <div className=" px-[15px] border-r-[1px] border-[#35B0AF]">
                <TwitterIcon style={{ width: "19px", height: "17px" }} />
              </div>
              <div className=" px-[15px]  border-r-[1px] border-[#35B0AF]">
                <InstagramIcon style={{ width: "19px", height: "17px" }} />
              </div>
              <div className=" pl-[14px] ">
                <LinkedInIcon style={{ width: "19px", height: "17px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="h-[100px] bg-white  flex justify-center items-center relative">
        <div className="flex w-[90%] justify-between md:max-w-[696px] lg:max-w-[1296px] ">
          <div className="xl:inline-flex items-center">
            <div className="pt-[1px]">
              <Image
                src="/images/header-image/logo.png"
                alt="Travelin"
                height={1000}
                width={1000}
                className="logo"
              />
            </div>
          </div>

          <div className="hidden xl:inline-flex w-auto items-center gap-x-5">
            <span className="nav">
              <Link href="/">HOME</Link>
            </span>
            <span className="nav">ABOUT US</span>

            <div className="dropdown inline-block relative">
              <button className="nav font-semibold py-2  rounded inline-flex items-center">
                <span>
                  DESTINATION{" "}
                  <span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </span>
              </button>

              <ul className="dropdown-content absolute hidden nav w-[180px]  pt-1 z-10">
                <li>
                  <Link
                    className="rounded-t bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    DESTINATION LIST
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    DESTINATION DETAIL
                  </Link>
                </li>
              </ul>
            </div>

            <div className="dropdown inline-block relative">
              <button className="nav font-semibold py-2  rounded inline-flex items-center">
                <span>
                  TOURS{" "}
                  <span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </span>
              </button>

              <ul className="dropdown-content absolute hidden nav w-[180px]  pt-1 z-10">
                <li className="dropdown w-full">
                  <Link
                    className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    TOUR LIST
                  </Link>
                  <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        <span>
                          <span></span>
                          <span></span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        <span>
                          <span></span>
                          <span></span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        <span>
                          <span></span>
                          <span></span>
                        </span>
                      </Link>
                    </li>{" "}
                  </ul>
                </li>
                <li className="dropdown w-full">
                  <Link
                    className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    TOUR GRID
                  </Link>
                  <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="/leftGrid"
                      >
                        <span>Tour Grid Leftsidebar</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        <span>Tour Grid Rightsidebar</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        <span>Tour Grid Fullwidth</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown w-full">
                  <Link
                    className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    TOUR SINGLE
                  </Link>
                  <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        <span>
                          <span></span>
                          <span></span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        <span>
                          <span></span>
                          <span></span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        <span>
                          <span></span>
                          <span></span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="dropdown inline-block relative">
              <button className="nav font-semibold py-2  rounded inline-flex items-center">
                <span>
                  PAGES{" "}
                  <span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </span>
              </button>

              <ul className="dropdown-content absolute hidden nav w-[180px]  pt-1 z-10">
                <li>
                  <Link
                    className="rounded-t bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Guide
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Booking
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Confirmation
                  </Link>
                </li>
                <li className="dropdown">
                  <Link
                    className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <span>
                      <span>Services</span>
                      <span></span>
                    </span>
                  </Link>
                  <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Services List
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Services Detail
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <span></span>Gallery
                    <span>
                      <span></span>
                    </span>
                  </Link>
                  <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Gallery Masonary
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <span>
                      <span>Error</span>
                      <span></span>
                    </span>
                  </Link>
                  <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Error 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Error 2
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="rounded-b bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Login / Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-t bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Coming Soon
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-t bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div className="dropdown inline-block relative">
              <button className="nav font-semibold py-2  rounded inline-flex items-center">
                <span>
                  BLOG{" "}
                  <span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </span>
              </button>

              <ul className="dropdown-content absolute hidden nav w-[180px]  pt-1 z-10">
                <li className="dropdown">
                  <Link
                    className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <span>
                      <span>Blog Grid</span>
                      <span></span>
                    </span>
                  </Link>
                  <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Services List
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Services Detail
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <span>
                      <span>Services</span>
                      <span></span>
                    </span>
                  </Link>
                  <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Services List
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Services Detail
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    className="bg-white hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <span>
                      <span>Services</span>
                      <span></span>
                    </span>
                  </Link>
                  <ul className="dropdown-content w-[150px] absolute hidden text-gray-700 pl-5 ml-[162px] -mt-10">
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Services List
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white  hover:text-white hover:bg-[#868686] py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Services Detail
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="nav text-[12px]"
              />
            </div>
          </div>
          <div className="flex">
            <FontAwesomeIcon
              icon={faBars}
              className="fa-Bars self-center h-[20px] "
            />
            <div className="hidden xl:inline-flex items-center gap-2">
              <span className="text-[#868686] mr-4 text-[15px]">
                <PersonOutlineOutlinedIcon className="mb-[7px] " />
                LOGIN/REGISTER
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
