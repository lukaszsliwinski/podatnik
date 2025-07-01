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
    <div className={`${openSans.className} bg-light-bg text-dark-text font-[family-name:var(--font-open-sans)] tracking-main font-light text-sm/7`}>
      <Landing />
      <About />
      <Office />
      <Offer />
      <Rodo />
      <Contact />
    </div>
  );
}
