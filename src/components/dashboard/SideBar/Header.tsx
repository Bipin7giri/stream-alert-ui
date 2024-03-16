"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { menu } from "../Header/Header";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="bg-background 2xl:w-[100%] xl:[100%] lg:w-[100%] sticky top-0 z-20 flex w-full drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="w-full flex flex-grow items-center justify-between py-4 px-4 shadow-2 lg:px-6 2xl:px-11">
        <div className="w-full flex items-center gap-2 lg:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <RxHamburgerMenu />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link
            className="lg:block lg:flex-shrink-0  flex items-center justify-between gap-2 lg:hidden"
            href="/"
          >
            <Image
              src={"/image/newlogo.png"}
              height={47}
              width={44}
              alt="logo"
            />

            <div>
              <h1 className="text-primary leading-both uppercase font-manrope font-extrabold text-capitalize text-[23px]">
                Streamer
              </h1>
              <p className="text-primary leading-both capitalize font-normal text-[16px]">
                Alert
              </p>
            </div>
          </Link>
        </div>

        <div className="hidden lg:block  w-full">
          <div className="flex justify-end items-center xl:gap-12 lg:gap-8 lg:gap-6  lg:gap-2">
            <div className="flex justify-between items-center gap-5">
              <div className="bg-slate-50 rounded-xl">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="23.5"
                    fill="white"
                    stroke="#E5E5E5"
                  />
                  <g clipPath="url(#clip0_140_7188)">
                    <path
                      d="M32 12H16C14.9391 12 13.9217 12.4214 13.1716 13.1716C12.4214 13.9217 12 14.9391 12 16V28C12 29.0609 12.4214 30.0783 13.1716 30.8284C13.9217 31.5786 14.9391 32 16 32H18.9L23.351 35.763C23.5316 35.9158 23.7605 35.9997 23.997 35.9997C24.2335 35.9997 24.4624 35.9158 24.643 35.763L29.1 32H32C33.0609 32 34.0783 31.5786 34.8284 30.8284C35.5786 30.0783 36 29.0609 36 28V16C36 14.9391 35.5786 13.9217 34.8284 13.1716C34.0783 12.4214 33.0609 12 32 12V12ZM34 28C34 28.5304 33.7893 29.0391 33.4142 29.4142C33.0391 29.7893 32.5304 30 32 30H29.1C28.6273 30.0001 28.1699 30.1677 27.809 30.473L24 33.69L20.193 30.473C19.8316 30.1673 19.3734 29.9997 18.9 30H16C15.4696 30 14.9609 29.7893 14.5858 29.4142C14.2107 29.0391 14 28.5304 14 28V16C14 15.4696 14.2107 14.9609 14.5858 14.5858C14.9609 14.2107 15.4696 14 16 14H32C32.5304 14 33.0391 14.2107 33.4142 14.5858C33.7893 14.9609 34 15.4696 34 16V28Z"
                      fill="#3564A8"
                    />
                    <path
                      d="M19 19H24C24.2652 19 24.5196 18.8946 24.7071 18.7071C24.8946 18.5196 25 18.2652 25 18C25 17.7348 24.8946 17.4804 24.7071 17.2929C24.5196 17.1054 24.2652 17 24 17H19C18.7348 17 18.4804 17.1054 18.2929 17.2929C18.1054 17.4804 18 17.7348 18 18C18 18.2652 18.1054 18.5196 18.2929 18.7071C18.4804 18.8946 18.7348 19 19 19Z"
                      fill="#3564A8"
                    />
                    <path
                      d="M29 21H19C18.7348 21 18.4804 21.1054 18.2929 21.2929C18.1054 21.4804 18 21.7348 18 22C18 22.2652 18.1054 22.5196 18.2929 22.7071C18.4804 22.8946 18.7348 23 19 23H29C29.2652 23 29.5196 22.8946 29.7071 22.7071C29.8946 22.5196 30 22.2652 30 22C30 21.7348 29.8946 21.4804 29.7071 21.2929C29.5196 21.1054 29.2652 21 29 21Z"
                      fill="#3564A8"
                    />
                    <path
                      d="M29 25H19C18.7348 25 18.4804 25.1054 18.2929 25.2929C18.1054 25.4804 18 25.7348 18 26C18 26.2652 18.1054 26.5196 18.2929 26.7071C18.4804 26.8947 18.7348 27 19 27H29C29.2652 27 29.5196 26.8947 29.7071 26.7071C29.8946 26.5196 30 26.2652 30 26C30 25.7348 29.8946 25.4804 29.7071 25.2929C29.5196 25.1054 29.2652 25 29 25Z"
                      fill="#3564A8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_140_7188">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(12 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-slate-50 rounded-xl">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="23.5"
                    fill="white"
                    stroke="#E5E5E5"
                  />
                  <g clipPath="url(#clip0_140_7191)">
                    <path
                      d="M34.555 25.6622L32.655 18.8262C32.0981 16.8235 30.8877 15.0645 29.2163 13.8286C27.5449 12.5928 25.5084 11.9512 23.4304 12.0056C21.3525 12.0601 19.3524 12.8076 17.748 14.1293C16.1437 15.451 15.0272 17.2711 14.576 19.3002L13.105 25.9152C12.9425 26.6461 12.9463 27.4042 13.116 28.1335C13.2857 28.8628 13.617 29.5446 14.0856 30.1287C14.5541 30.7128 15.1478 31.1842 15.8229 31.5081C16.498 31.832 17.2372 32.0002 17.986 32.0002H19.1C19.3295 33.1305 19.9427 34.1467 20.8357 34.8766C21.7287 35.6065 22.8466 36.0052 24 36.0052C25.1533 36.0052 26.2712 35.6065 27.1642 34.8766C28.0573 34.1467 28.6705 33.1305 28.9 32.0002H29.738C30.5088 32.0002 31.2692 31.8221 31.9597 31.4796C32.6503 31.1372 33.2523 30.6397 33.7188 30.026C34.1853 29.4124 34.5036 28.6992 34.6488 27.9422C34.794 27.1852 34.7622 26.4049 34.556 25.6622H34.555ZM24 34.0002C23.3817 33.9976 22.7794 33.8041 22.2753 33.4461C21.7712 33.0881 21.3901 32.5831 21.184 32.0002H26.816C26.6099 32.5831 26.2288 33.0881 25.7247 33.4461C25.2206 33.8041 24.6182 33.9976 24 34.0002ZM32.126 28.8152C31.8473 29.1848 31.4863 29.4844 31.0716 29.6901C30.6569 29.8958 30.1999 30.002 29.737 30.0002H17.986C17.5368 30.0001 17.0933 29.8991 16.6883 29.7048C16.2833 29.5104 15.9272 29.2275 15.6461 28.8771C15.3651 28.5266 15.1663 28.1176 15.0645 27.68C14.9627 27.2425 14.9605 26.7877 15.058 26.3492L16.528 19.7332C16.8823 18.1394 17.7593 16.7098 19.0194 15.6716C20.2796 14.6335 21.8506 14.0464 23.4828 14.0036C25.1149 13.9608 26.7145 14.4649 28.0273 15.4356C29.3401 16.4064 30.2907 17.7881 30.728 19.3612L32.628 26.1972C32.7535 26.6426 32.7735 27.1111 32.6864 27.5655C32.5992 28.02 32.4074 28.4478 32.126 28.8152Z"
                      fill="#3564A8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_140_7191">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(12 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="border-2 w-full border-[#E5E5E5] rounded-[60px]  flex items-center">
                <p
                  className="text-black font-manrope text-[16px] font-bold px-[16px] py-[8px] flex justify-center items-center"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {/* {fullName} */}
                  Bipin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
