// import { Geist, Geist_Mono } from "next/font/google";

// Layout imports
import Landing from "./layout/landing";
import About from "./layout/about";
import Office from "./layout/office";
import Calculation from "./layout/calculation";
import Contact from "./layout/contact";

// Fonts

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

usage:
<div className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`} >

*/


export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Office />
      <Calculation />
      <Contact />
    </div>
  );
}
