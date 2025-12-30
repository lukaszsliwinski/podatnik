import { useState, useEffect } from 'react';
import { motion, useAnimation, easeInOut } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faPhone,
  faEnvelope,
  faLocationDot,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

export default function Landing() {
  // State to track if the window is scrolled to the top
  const [windowTop, setWindowTop] = useState(true);

  const contacts: [string, IconDefinition, string][] = [
    ['#adres', faLocationDot, 'Dąbrowskiego 58/6, Chorzów'],
    ['tel:664781030', faPhone, '+48 664 781 030'],
    ['mailto:br_podatnik@interia.pl', faEnvelope, 'br_podatnik@interia.pl']
  ];

  const sections = [
    ['about', 'O mnie', ''],
    ['office', 'Biuro', ''],
    ['offer', 'Oferta', ''],
    ['rodo', 'Rodo', 'mobile-hidden'],
    ['contact', 'Kontakt', '']
  ];

  const phrases = [
    'Wsparcie rozwoju, a nie tylko rozliczenia - księgowość, to coś więcej niż liczby',
    'Partnerska współpraca, która daje pewność, spokój i przestrzeń do działania'
  ];

  // animation controls
  const backgroundControls = useAnimation();
  const contactControls = useAnimation();
  const navControls = useAnimation();
  const phrasesControls = useAnimation();
  const buttonControls = useAnimation();

  // motion variants
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 }
    }
  };

  const contactVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0, delay: 0.2 }
    }
  };

  const navVariants = {
    hidden: { y: -150 },
    visible: {
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const phrasesContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.55,
        delayChildren: 0.1
      }
    }
  };

  const phrasesVariants = {
    hidden: { x: -2000 },
    visible: {
      x: 0,
      transition: { duration: 0.5, ease: easeInOut }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: easeInOut
      }
    }
  };

  // Animation queue
  useEffect(() => {
    (async () => {
      backgroundControls.start('visible');
      contactControls.start('visible');

      await navControls.start('visible');
      await phrasesControls.start('visible');
      await buttonControls.start('visible');
    })();
  }, []);

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
        <motion.ul
          className="list-none text-light-text text-xs md:text-sm font-light tracking-normal max-w-52 sm:max-w-3xl h-15 mx-auto sm:pr-4 flex justify-around items-center"
          initial="hidden"
          animate={contactControls}
          variants={contactVariants}
        >
          {contacts.map((item, idx) => (
            <li key={idx}>
              <a href={`${item[0]}`} className="inline-block hover:text-hover-text">
                <FontAwesomeIcon
                  icon={item[1]}
                  fixedWidth
                  className="sm:mr-2 scale-150 sm:scale-100"
                  size="lg"
                />
                <span className="hidden sm:inline-block">{item[2]}</span>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
      <motion.nav
        initial="hidden"
        animate={navControls}
        variants={navVariants}
        className={`
          fixed w-screen z-20 transition-[top] duration-300
          ${windowTop ? 'top-15' : 'top-0'}
        `}
      >
        <div className="bg-main text-light-text lg:max-w-4xl lg:text-base font-normal sm:h-22 mx-auto shadow-lg flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-46 p-1 lg:p-2 bg-light-bg logo-container flex">
            <div className="text-mid-text lg:text-mid-text/70 mx-auto lg:mx-0 lg:my-auto lg:ml-4">
              Biuro Rachunkowe Podatnik
            </div>
          </div>

          <ul className="list-none pr-2 sm:pr-6 flex">
            {sections.map((section, idx) => (
              <li key={idx}>
                <a
                  href={`#${section[0]}`}
                  className={`${section[2] === 'mobile-hidden' ? 'hidden xs:inline-block' : 'inline-block'} mx-2 sm:mx-5 my-4 hover:text-hover-text`}
                >
                  {section[1]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
      <motion.div
        className="relative bg-cover bg-center bg-no-repeat bg-[url('../public/landing.webp')]"
        id="home"
        initial="hidden"
        animate={backgroundControls}
        variants={backgroundVariants}
      >
        <div className="min-h-[55vh] flex flex-col justify-center items-center landing-gradient text-base lg:text-xl text-mid-text px-8 mt-20">
          <motion.div
            initial="hidden"
            animate={phrasesControls}
            variants={phrasesContainerVariants}
          >
            {phrases.map((phrase, idx) => (
              <motion.h2 key={idx} className="flex items-center mt-12" variants={phrasesVariants}>
                <FontAwesomeIcon icon={faCheck} fixedWidth className="mr-3 text-main" size="lg" />
                {phrase}
              </motion.h2>
            ))}
          </motion.div>
          <motion.a
            href="#offer"
            className="mt-16 bg-main text-light-text hover:rounded-xl shadow-lg px-8 py-3 transition-all"
            initial="hidden"
            animate={buttonControls}
            variants={buttonVariants}
          >
            oferta
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
