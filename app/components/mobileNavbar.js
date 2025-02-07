"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex md:hidden justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 z-50 bg-white">
      <Image src="/logo.png" width={50} height={50} alt="logo" />

      <button onClick={() => setIsOpen(!isOpen)} className="z-50">
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <div
        className={`fixed top-0 right-0 w-3/4 h-full  transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 border border-1 bg-white`}
      >
        <div className="flex flex-col justify-between h-full px-6">
          <nav className="flex flex-col items-start mt-20 space-y-8 text-lg text-[#152F52]">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/works" onClick={() => setIsOpen(false)}>
              Works
            </Link>
            <Link href="/people" onClick={() => setIsOpen(false)}>
              People
            </Link>
          </nav>

          <button className="my-4 w-full px-5 py-2 bg-[#152F52] text-white text-base rounded-full font-semibold">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}
