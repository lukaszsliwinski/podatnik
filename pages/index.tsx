import { Inter } from 'next/font/google';

// Layout imports
import Landing from '@/sections/Landing';
import About from '@/sections/About';
import Office from '@/sections/Office';
import Offer from '@/sections/Offer';
import Contact from '@/sections/Contact';
import Rodo from '@/sections/Rodo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Home() {
  return (
    <div
      className={`${inter.className} bg-light-bg text-mid-text font-[family-name:var(--font-inter)] tracking-wider leading-6.5 font-light max-sm:text-xs/5`}
    >
      <Landing />
      <main className="w-screen px-3 xs:px-6 md:px-12 lg:px-0">
        <About />
        <Office />
        <Offer />
        <Rodo />
      </main>
      <Contact />
    </div>
  );
}
