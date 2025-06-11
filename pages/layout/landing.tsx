import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faPhone,
  faEnvelope,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logo from '../../public/logo.jpg';

export default function Landing() {
  // State to track if the window is scrolled to the top
  const [windowTop, setWindowTop] = useState(true);

  const contacts: [string, IconDefinition, string][]  = [
    ['#adres', faLocationDot, 'Dąbrowskiego 58/6, Chorzów'],
    ['tel:664781030', faPhone, '+48 664 781 030'],
    ['mailto:podatnik@domain.pl', faEnvelope, 'podatnik@domain.pl']
  ]

  const sections = [
    ['about', 'O mnie'],
    ['office', 'Biuro'],
    ['offer', 'Oferta'],
    ['contact', 'Kontakt'],
  ];

  // Effect to handle window scroll event
  useEffect(() => {
    const handleScroll = () => (window.scrollY === 0 ? setWindowTop(true) : setWindowTop(false));
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowTop]);
  
  return (
    <section className="w-screen" id="home">
      <div className="h-26 bg-dark-bg">
        <ul className="list-none text-light-text text-sm font-light tracking-normal max-w-3xl h-15 mx-auto flex justify-between items-center">
          {contacts.map((item, idx) => (
            <li key={idx}>
              <a
                href={`${item[0]}`}
                className="inline-block hover:text-hover-dark"
              >
                <FontAwesomeIcon icon={item[1]} fixedWidth  className="mr-2" size="lg" />
                {item[2]}</a>
            </li>
          ))}
        </ul>
      </div>
      <nav className={`
        fixed w-screen z-20 transition-all
        ${windowTop ? 'top-15' : 'top-0'}
      `}>
        <div className="bg-main text-light-text max-w-4xl text-base font-normal h-22 mx-auto shadow-lg flex justify-between items-center">
          <div className="w-72 p-2 bg-light-bg logo-container flex">
            <Image
              className="w-18"
              src={logo}
              alt="logo"
            />
            <div className="text-dark-text my-auto ml-4">Biuro Rachunkowe Podatnik</div>
          </div>
          <ul className="list-none pr-6 flex">
            {sections.map((section, idx) => (
              <li key={idx}>
                <a
                  href={`#${section[0]}`}
                  className="inline-block mx-2 px-3 py-4 hover:text-hover-main"
                >{section[1]}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="relative bg-cover bg-center bg-no-repeat bg-[url('../public/landing.webp')]" id="home">
        <div className="min-h-[70vh] flex justify-center items-center bg-neutral-800/80">
            
        </div>
      </div>
    </section>
  );
}