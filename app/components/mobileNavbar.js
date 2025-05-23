"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex md:hidden justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 z-50 bg-white">
      <Image src="/navbar-logo-no-bg.png" width={110} height={110} alt="logo" />

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
            <Link href="/#about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/expertise" onClick={() => setIsOpen(false)}>
              Expertise
            </Link>
            <Link href="/people" onClick={() => setIsOpen(false)}>
              People
            </Link>
          </nav>

          <Dialog>
            <DialogTrigger>
              <div className="px-6 py-2 rounded-full bg-[#152F52] text-white font-semibold text-base whitespace-nowrap">
                Contact us
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
              <DialogHeader>
                <DialogTitle className="text-3xl  text-gray-900">
                  Contact us
                </DialogTitle>
              </DialogHeader>
              <form className="">
                <label className="font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="font-medium text-gray-700 ">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    rows="4"
                    className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#152F52] text-white py-2 rounded-md font-semibold hover:bg-[#1c3b6f] transition"
                >
                  Submit
                </button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
