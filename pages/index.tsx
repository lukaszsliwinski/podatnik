import { Open_Sans } from "next/font/google";

// Layout imports
import Landing from "./layout/landing";
import About from "./layout/about";
import Office from "./layout/office";
import Offer from "./layout/offer";
import Contact from "./layout/contact";
import Rodo from "./layout/rodo";

// Fonts
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${openSans.className} bg-light-bg text-dark-text font-[family-name:var(--font-open-sans)] tracking-main font-light text-xs/5 sm:text-sm/6`}>
      <Landing />
      <main className="px-3 xs:px-6 md:px-12 lg:px-0">
        <About />
        <Office />
        <Offer />
        <Rodo />
      </main>
      <Contact />
    </div>
  );
}
