import {
  Facebook,
  Twitter,
  Linkedin,
  House,
  Clock5,
  Phone,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#1E2938] text-[#DBD9D9] px-10 py-10 text-sm lg:text-base">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center items-start text-center md:text-center">
        <div>
          <div className="flex gap-2 justify-center">
            <House />
            <h1 className="text-lg font-bold text-white mb-1">Address</h1>
          </div>
          <p>
            3rd Floor Power Realty Building, 1012 Arnaiz Avenue, San Lorenzo,
            Makati City, Metro Manila, Philippines
          </p>
        </div>

        <div>
          <div className="flex gap-2 justify-center">
            <Clock5 />
            <h1 className="text-lg font-bold text-white mb-1">Office hours</h1>
          </div>

          <p>8:00 AM to 5:30 PM</p>
        </div>

        <div>
          <div className="flex gap-2 justify-center">
            <Phone />
            <h1 className="text-lg font-bold text-white mb-1">Contact</h1>
          </div>

          <p>+639175921092</p>
          <p>office@dclaw.ph</p>
          <p>(02) 871 65 93</p>
        </div>
      </div>

      <div className="border-t border-gray-500 my-6"></div>

      <div className="flex flex-row justify-between items-center">
        <h1 className="text-sm md:text-base lg:text-lg font-semibold text-[#BF8033]">
          © 2025 Dela Rosa & Casilla Law
        </h1>

        <a
          href="https://irglobal.com/article/dela-rosa-casilla-law-joins-ir-global-as-an-exclusive-member-in-philippines/
"
        >
          <Image
            src="/IR-logo.png"
            width={120}
            height={120}
            alt="logo"
            className="flex-shrink-0"
          />
        </a>

        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/DRCLaw/"
            className="text-[#DBD9D9] hover:text-[#0866FF] hover:scale-110 duration-150"
          >
            <Facebook size={20} />
          </a>

          <a
            href="https://www.linkedin.com/company/dela-rosa-casilla-vi%C3%B1as/"
            className="text-[#DBD9D9] hover:text-[#0A66C2] hover:scale-110 duration-150"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
