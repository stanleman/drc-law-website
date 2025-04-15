"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DesktopNavbar() {
  let pathname = usePathname();

  return (
    <div className="w-full hidden md:flex flex-wrap justify-between items-center text-lg text-[#152F52] mt-6 px-10">
      <Image
        src="/navbar-logo-no-bg.png"
        width={170}
        height={170}
        alt="logo"
        className="flex-shrink-0"
      />

      <div className="flex flex-wrap gap-10 xl:gap-16 justify-center items-center min-w-0">
        {["/", "/about", "/works", "/people"].map((path) => {
          if (path == "/about") {
            return (
              <a
                className={` ${
                  pathname === path
                    ? "font-bold scale-105"
                    : "hover:scale-105 duration-150"
                } whitespace-nowrap`}
                href="#about"
                key="about"
              >
                About
              </a>
            );
          } else
            return (
              <Link key={path} href={path}>
                <p
                  className={` ${
                    pathname === path
                      ? "font-bold scale-105"
                      : "hover:scale-105 duration-150"
                  } whitespace-nowrap`}
                >
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                      path.slice(2)}
                </p>
              </Link>
            );
        })}
      </div>

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
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
  );
}
