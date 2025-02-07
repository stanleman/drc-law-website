"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNavbar() {
  let pathname = usePathname();

  return (
    <div className="w-full hidden md:flex flex-wrap justify-between items-center text-lg text-[#152F52] mt-6 px-10">
      <Image
        src="/logo2.png"
        width={120}
        height={120}
        alt="logo"
        className="flex-shrink-0"
      />

      <div className="flex flex-wrap gap-10 xl:gap-16 justify-center items-center min-w-0">
        {["/", "/about", "/works", "/people"].map((path) => (
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
                : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </p>
          </Link>
        ))}
      </div>

      <button className="px-6 py-2 rounded-full bg-[#152F52] text-white font-semibold text-base whitespace-nowrap">
        Contact us
      </button>
    </div>
  );
}
