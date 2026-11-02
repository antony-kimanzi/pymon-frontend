"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center w-[75%] h-[50px] px-20 py-2 border border-primary/20 rounded-md bg-primary/10 backdrop-blur-md shadow-md shadow-primary/50">
      <div className="flex flex-row gap-2 items-center">
        <Image
          src="/logo.png"
          alt="pymon logo"
          width={30}
          height={30}
          loading="eager"
        />
        <span className="font-sans text-lg font-bold text-primary">PyMon</span>
      </div>

      <div className="flex flex-row items-center gap-10">
        <nav className="flex flex-row gap-4">
          <Link
            href="#"
            className="font-sans text-white font-medium text-md hover:pointer hover:text-primary transition delay-150 duration-300"
          >
            Try it
          </Link>
          <Link
            href="#"
            className="font-sans text-white font-medium text-md hover:pointer hover:text-primary transition delay-150 duration-300"
          >
            Docs
          </Link>
        </nav>
        <div className="flex flex-row gap-6 ml-4">
          <button className="font-sans text-white font-medium text-sm border border-white px-2 py-1 hover:pointer hover:text-primary hover:bg-white transition delay-150 duration-300 rounded-xs">
            Start
          </button>
          <button className="font-sans text-primary-dark font-medium text-sm bg-white border border-primary px-2 py-1 hover:pointer hover:text-white hover:bg-primary-dark hover:border-primary-dark transition delay-150 duration-300 rounded-xs">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
