import { Open_Sans } from 'next/font/google';

// Layout imports
import Landing from '@/sections/Landing';
import About from '@/sections/About';
import Office from '@/sections/Office';
import Offer from '@/sections/Offer';
import Contact from '@/sections/Contact';
import Rodo from '@/sections/Rodo';

// Fonts
const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin']
});

export default function Home() {
  return (
    <div
      className={`${openSans.className} bg-light-bg text-dark-text font-[family-name:var(--font-open-sans)] tracking-main font-light text-xs/5 sm:text-sm/6`}
    >
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
