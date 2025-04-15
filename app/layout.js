import { Montserrat } from "next/font/google";
import "./globals.css";
import DesktopNavbar from "./components/desktopNavbar";
import MobileNavbar from "./components/mobileNavbar";
import Footer from "./components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Dela Rosa & Casilla Law",
  description: "Dela Rosa & Casilla Law",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth
"
    >
      <body className={`${montserrat.className} antialiased`}>
        <DesktopNavbar />
        <MobileNavbar />
        <div className="pt-16 md:pt-0 z-0 flex flex-col min-h-screen">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
