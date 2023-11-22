"use client";
// <========== icons ==========>

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

// <========== swipper ==========>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// <========== hooks ==========>
import { useState, useEffect } from "react";

// <========== images ==========>
import Image from "next/image";

import React from "react";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(4);

  const updateWindowWidth = () => {
    const screenWidth = window.innerWidth;

    if (425 >= screenWidth) {
      setWindowWidth(2);
    } else if (768 >= screenWidth) {
      setWindowWidth(3);
    } else if (1024 >= screenWidth) {
      setWindowWidth(4);
    } else {
      setWindowWidth(8);
    }
  };

  useEffect(() => {
    updateWindowWidth();

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <div>
      <div className="flex w-full overflow-hidden">
        <Image
          src="/images/footer-image/mountain.png"
          className="bg-[#17233E] w-full md:w-[50%] lg:w-[33.33%] h-[60px] md:h-[100px] relative top-1"
          alt=""
          width={1000}
          height={100}
        />
        <Image
          src="/images/footer-image/mountain.png"
          className="bg-[#17233E] w-[33.33%] h-[60px] md:h-[100px] relative top-1"
          alt=""
          width={1000}
          height={100}
        />
        <Image
          src="/images/footer-image/mountain.png"
          className="bg-[#17233E]  w-[33.33%] h-[60px] md:h-[100px] relative top-1"
          alt=""
          width={1000}
          height={100}
        />
      </div>

      <div className=" w-full flex flex-col items-center p-4 bg-[#17233E]">
        <div className="w-full lg:max-w-[1290px] grid grid-cols-1 bg-[#17233E]">
          {/* carousel */}

          <div className="bg-[#17233E] h-[131px] md:h-[195px] lg:h-[97px] xl:h-[135px] ">
            <Swiper
              slidesPerView={windowWidth}
              spaceBetween={30}
              centeredSlides={false}
              loop={true}
              autoplay={{
                delay: 100000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
              <SwiperSlide className="flex justify-center overflow-hidden rounded-xl bg-[#17233E]">
                <Image
                  className="image rounded-xl h-[100px] image-box  bg-[#17233E]"
                  src="/images/footer-image/footer5.jpg"
                  alt=""
                  width={1000}
                  height={10}
                />{" "}
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-center relative z-10 top-[-70%] md:top-[-60%] lg:top-[-70%] xl:top-[-60%] outline-[3px] outline-black   m-[2px]">
              <div className="border-[2px] rounded-xl p-[3px] border-white">
                <button className=" bg-white Play-fair rounded-xl gap-1 flex items-center px-[15px] py-[10px]">
                  <div>
                    <InstagramIcon />
                  </div>
                  <div>Follow On Instagram</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="background-travelers bg-[#17233E] grid grid-cols-1 p-4 justify-items-center"
        style={{
          backgroundImage: `url(${"/images/footer-image/peoples.png"})`,
        }}
      >
        <div className="lg:max-w-[1290px] ">
          <div className="grid-width grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4 text-white text-[16px] lg:gap-0">
            {/* col 1 */}
            <div className="flex flex-col lg:px-2">
              <Image
                src="/images/footer-image/logo-white.png"
                alt="logo"
                className="h-[46px] w-[216px]"
                width={1000}
                height={10}
              />
              <p className="my-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                suspendisse leo neque iaculis molestie sagittis maecenas aenean
                eget molestie sagittis.
              </p>
              <div className="flex flex-col gap-4 mb-[32px]">
                <h4>
                  <span className="font-semibold">PO Box :</span>{" "}
                  +47-252-254-2542
                </h4>
                <h4>
                  <span className="font-semibold">Location :</span> Collins
                  Street, sydney, Australia
                </h4>
                <h4>
                  <span className="font-semibold">Email :</span>{" "}
                  info@Travelin.com
                </h4>
                <h4>
                  <span className="font-semibold">Website :</span>{" "}
                  www.Travelin.com
                </h4>
              </div>
            </div>

            {/* col 2 */}
            <div className="mb-[32px] flex flex-col lg:px-2">
              <h2 className="">Quick Link</h2>
              <div className="border-b-[2px] border-white w-[60px] pb-[10px] mb-[30px]"></div>
              <div className="flex flex-col gap-4 md:justify-between h-full ">
                <h3>About Us</h3>
                <h3>Delivery Information</h3>
                <h3>Privacy Policy</h3>
                <h3>Terms & Conditions</h3>
                <h3>Customer Service</h3>
                <h3>Return Policy</h3>
              </div>
            </div>

            {/* col 3 */}
            <div className="mb-[32px] flex flex-col lg:px-2">
              <h2 className=" ">Categories</h2>
              <div className="border-b-[2px] border-white w-[60px] pb-[10px] mb-[30px]"></div>
              <div className="flex flex-col gap-4 md:justify-between h-full ">
                <h3>Travel</h3>
                <h3>Technology</h3>
                <h3>Lifestyle</h3>
                <h3>Destinations</h3>
                <h3>Entertainment</h3>
                <h3>Business</h3>
              </div>
            </div>

            {/* col 4 */}
            <div className="mb-[32px] flex flex-col  lg:px-2">
              <h2 className=" ">Newsletter</h2>
              <div className="border-b-[2px] border-white w-[60px] pb-[10px] mb-[30px]"></div>
              <div className="grid gap-4">
                <p>
                  Jin our community of over 200,000 global readers who receives
                  emails filled with news, promotions, and other good stuff.
                </p>
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-1">
                  <div className="bg-white pl-5 py-3 lg:py-[11px] rounded-lg flex items-center">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="w-full outline-none text-[#000] rounded-lg text-[15px] "
                    />
                  </div>
                  <button className="bg-[#777777] rounded-lg  border-[#3E4253] border-[3px] p-[14px] lg:p-[12px] lg:w-[37%]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-width lg:grid grid-cols-4 px-2 justify-between items-center text-white">
            <div className="flex justify-start gap-2">
              <h3 className="text-[16px]">We Support : </h3>
              <div className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M186.3 258.2c0 12.2-9.7 21.5-22 21.5-9.2 0-16-5.2-16-15 0-12.2 9.5-22 21.7-22 9.3 0 16.3 5.7 16.3 15.5zM80.5 209.7h-4.7c-1.5 0-3 1-3.2 2.7l-4.3 26.7 8.2-.3c11 0 19.5-1.5 21.5-14.2 2.3-13.4-6.2-14.9-17.5-14.9zm284 0H360c-1.8 0-3 1-3.2 2.7l-4.2 26.7 8-.3c13 0 22-3 22-18-.1-10.6-9.6-11.1-18.1-11.1zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM128.3 215.4c0-21-16.2-28-34.7-28h-40c-2.5 0-5 2-5.2 4.7L32 294.2c-.3 2 1.2 4 3.2 4h19c2.7 0 5.2-2.9 5.5-5.7l4.5-26.6c1-7.2 13.2-4.7 18-4.7 28.6 0 46.1-17 46.1-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.2 8.2-5.8-8.5-14.2-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9 0 20.2-4.9 26.5-11.9-.5 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H200c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm40.5 97.9l63.7-92.6c.5-.5.5-1 .5-1.7 0-1.7-1.5-3.5-3.2-3.5h-19.2c-1.7 0-3.5 1-4.5 2.5l-26.5 39-11-37.5c-.8-2.2-3-4-5.5-4h-18.7c-1.7 0-3.2 1.8-3.2 3.5 0 1.2 19.5 56.8 21.2 62.1-2.7 3.8-20.5 28.6-20.5 31.6 0 1.8 1.5 3.2 3.2 3.2h19.2c1.8-.1 3.5-1.1 4.5-2.6zm159.3-106.7c0-21-16.2-28-34.7-28h-39.7c-2.7 0-5.2 2-5.5 4.7l-16.2 102c-.2 2 1.3 4 3.2 4h20.5c2 0 3.5-1.5 4-3.2l4.5-29c1-7.2 13.2-4.7 18-4.7 28.4 0 45.9-17 45.9-45.8zm84.2 8.8h-19c-3.8 0-4 5.5-4.3 8.2-5.5-8.5-14-10-23.7-10-24.5 0-43.2 21.5-43.2 45.2 0 19.5 12.2 32.2 31.7 32.2 9.3 0 20.5-4.9 26.5-11.9-.3 1.5-1 4.7-1 6.2 0 2.3 1 4 3.2 4H484c2.7 0 5-2.9 5.5-5.7l10.2-64.3c.3-1.9-1.2-3.9-3.2-3.9zm47.5-33.3c0-2-1.5-3.5-3.2-3.5h-18.5c-1.5 0-3 1.2-3.2 2.7l-16.2 104-.3.5c0 1.8 1.5 3.5 3.5 3.5h16.5c2.5 0 5-2.9 5.2-5.7L544 191.2v-.3zm-90 51.8c-12.2 0-21.7 9.7-21.7 22 0 9.7 7 15 16.2 15 12 0 21.7-9.2 21.7-21.5.1-9.8-6.9-15.5-16.2-15.5z"
                    fill="white"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M492.4 220.8c-8.9 0-18.7 6.7-18.7 22.7h36.7c0-16-9.3-22.7-18-22.7zM375 223.4c-8.2 0-13.3 2.9-17 7l.2 52.8c3.5 3.7 8.5 6.7 16.8 6.7 13.1 0 21.9-14.3 21.9-33.4 0-18.6-9-33.2-21.9-33.1zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM122.2 281.1c0 25.6-20.3 40.1-49.9 40.3-12.2 0-25.6-2.4-38.8-8.1v-33.9c12 6.4 27.1 11.3 38.9 11.3 7.9 0 13.6-2.1 13.6-8.7 0-17-54-10.6-54-49.9 0-25.2 19.2-40.2 48-40.2 11.8 0 23.5 1.8 35.3 6.5v33.4c-10.8-5.8-24.5-9.1-35.3-9.1-7.5 0-12.1 2.2-12.1 7.7 0 16 54.3 8.4 54.3 50.7zm68.8-56.6h-27V275c0 20.9 22.5 14.4 27 12.6v28.9c-4.7 2.6-13.3 4.7-24.9 4.7-21.1 0-36.9-15.5-36.9-36.5l.2-113.9 34.7-7.4v30.8H191zm74 2.4c-4.5-1.5-18.7-3.6-27.1 7.4v84.4h-35.5V194.2h30.7l2.2 10.5c8.3-15.3 24.9-12.2 29.6-10.5h.1zm44.1 91.8h-35.7V194.2h35.7zm0-142.9l-35.7 7.6v-28.9l35.7-7.6zm74.1 145.5c-12.4 0-20-5.3-25.1-9l-.1 40.2-35.5 7.5V194.2h31.3l1.8 8.8c4.9-4.5 13.9-11.1 27.8-11.1 24.9 0 48.4 22.5 48.4 63.8 0 45.1-23.2 65.5-48.6 65.6zm160.4-51.5h-69.5c1.6 16.6 13.8 21.5 27.6 21.5 14.1 0 25.2-3 34.9-7.9V312c-9.7 5.3-22.4 9.2-39.4 9.2-34.6 0-58.8-21.7-58.8-64.5 0-36.2 20.5-64.9 54.3-64.9 33.7 0 51.3 28.7 51.3 65.1 0 3.5-.3 10.9-.4 12.9z"
                    fill="white"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"
                    fill="white"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M520.4 196.1c0-7.9-5.5-12.1-15.6-12.1h-4.9v24.9h4.7c10.3 0 15.8-4.4 15.8-12.8zM528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-44.1 138.9c22.6 0 52.9-4.1 52.9 24.4 0 12.6-6.6 20.7-18.7 23.2l25.8 34.4h-19.6l-22.2-32.8h-2.2v32.8h-16zm-55.9.1h45.3v14H444v18.2h28.3V217H444v22.2h29.3V253H428zm-68.7 0l21.9 55.2 22.2-55.2h17.5l-35.5 84.2h-8.6l-35-84.2zm-55.9-3c24.7 0 44.6 20 44.6 44.6 0 24.7-20 44.6-44.6 44.6-24.7 0-44.6-20-44.6-44.6 0-24.7 20-44.6 44.6-44.6zm-49.3 6.1v19c-20.1-20.1-46.8-4.7-46.8 19 0 25 27.5 38.5 46.8 19.2v19c-29.7 14.3-63.3-5.7-63.3-38.2 0-31.2 33.1-53 63.3-38zm-97.2 66.3c11.4 0 22.4-15.3-3.3-24.4-15-5.5-20.2-11.4-20.2-22.7 0-23.2 30.6-31.4 49.7-14.3l-8.4 10.8c-10.4-11.6-24.9-6.2-24.9 2.5 0 4.4 2.7 6.9 12.3 10.3 18.2 6.6 23.6 12.5 23.6 25.6 0 29.5-38.8 37.4-56.6 11.3l10.3-9.9c3.7 7.1 9.9 10.8 17.5 10.8zM55.4 253H32v-82h23.4c26.1 0 44.1 17 44.1 41.1 0 18.5-13.2 40.9-44.1 40.9zm67.5 0h-16v-82h16zM544 433c0 8.2-6.8 15-15 15H128c189.6-35.6 382.7-139.2 416-160zM74.1 191.6c-5.2-4.9-11.6-6.6-21.9-6.6H48v54.2h4.2c10.3 0 17-2 21.9-6.4 5.7-5.2 8.9-12.8 8.9-20.7s-3.2-15.5-8.9-20.5z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div></div>
            <div></div>
            <div className="mt-2 flex gap-4  lg:gap-1  lg:mt-0">
              <div className="bg-white px-5 py-3 lg:py-[11px] rounded-lg flex items-center w-[70%]">
                <select
                  name=""
                  id=""
                  className=" custom-dropdown w-full bg-white text-black outline-none"
                >
                  <option value="English" className="">
                    English
                  </option>
                  <option value="Chinese">Chinese</option>
                  <option value="Russian">Russian</option>
                </select>
              </div>

              <select className="bg-white w-[30%] text-black rounded-lg  border-[#3E4253] border-[3px] p-[14px] lg:p-[12px] lg:w-[37%]">
                <option value="$ USD" className="">
                  $ USD
                </option>
                <option value="$ AUDI">$ AUDI</option>
                <option value="$ YEN">$ YEN</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col py-5 md:px-6 rounded-xl mt-6 bg-[#fbfbfb12] md:flex-row justify-between  text-white">
            <div className="flex justify-center items-center">
              {" "}
              <h3>2022 Travelin. All rights reserved.</h3>
            </div>
            <div className="flex gap-5 justify-center items-center">
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%] ">
                <FacebookOutlinedIcon />
              </div>
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                {" "}
                <TwitterIcon />
              </div>
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                <InstagramIcon />
              </div>
              <div className="bg-[#fbfbfb12] p-3 rounded-[50%]">
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Footer;
