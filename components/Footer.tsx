"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 py-2">
      <div className="w-[75%] h-[0.5px] bg-[#A6B0BF] mx-auto"></div>
      <div className="flex flex-row gap-2">
        <p className="font-sans text-[#A6B0BF] font-light text-sm">
          &copy; {new Date().getFullYear()} PyMon
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          id="Dot--Streamline-Phosphor"
          height="16"
          width="16"
        >
          <desc>Dot Streamline Icon: https://streamlinehq.com</desc>
          <g id="dot-regular">
            <path
              id="Vector"
              fill="#A6B0BF"
              d="M9.175866666666666 8c0 0.9052666666666667 -0.98 1.4710666666666665 -1.7639999999999998 1.0184666666666666 -0.7839733333333332 -0.45266666666666666 -0.7839733333333332 -1.5842666666666665 0 -2.0369333333333333 0.1788 -0.10319999999999999 0.3816 -0.15753333333333333 0.588 -0.15753333333333333 0.6495333333333333 -0.00006666666666666667 1.176 0.5264666666666666 1.176 1.176Z"
              strokeWidth="0.6667"
            ></path>
          </g>
        </svg>
        <Link
          href="#"
          className="font-sans text-[#A6B0BF] font-light text-sm hover:pointer hover:text-primary transition duration-300 delay-150"
        >
          Github
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          id="Dot--Streamline-Phosphor"
          height="16"
          width="16"
        >
          <desc>Dot Streamline Icon: https://streamlinehq.com</desc>
          <g id="dot-regular">
            <path
              id="Vector"
              fill="#A6B0BF"
              d="M9.175866666666666 8c0 0.9052666666666667 -0.98 1.4710666666666665 -1.7639999999999998 1.0184666666666666 -0.7839733333333332 -0.45266666666666666 -0.7839733333333332 -1.5842666666666665 0 -2.0369333333333333 0.1788 -0.10319999999999999 0.3816 -0.15753333333333333 0.588 -0.15753333333333333 0.6495333333333333 -0.00006666666666666667 1.176 0.5264666666666666 1.176 1.176Z"
              strokeWidth="0.6667"
            ></path>
          </g>
        </svg>
        <span className="font-sans text-[#A6B0BF] font-light text-sm">
          All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
