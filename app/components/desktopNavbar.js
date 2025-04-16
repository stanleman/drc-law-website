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
        {["/", "/about", "/expertise", "/people"].map((path) => {
          const isActive = pathname === path;
          const label =
            path === "/"
              ? "Home"
              : path.replace("/", "").charAt(0).toUpperCase() +
                path.replace("/", "").slice(1);

          const href = path === "/about" ? "/#about" : path;

          return (
            <Link
              key={path}
              href={href}
              className={`${
                isActive
                  ? "font-bold scale-105"
                  : "hover:scale-105 duration-150"
              } whitespace-nowrap`}
            >
              {label}
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

            <label className="font-medium text-gray-700">Phone number</label>
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
  );
}
