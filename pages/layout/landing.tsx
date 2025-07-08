import { useState, useEffect } from 'react';
import { motion, useAnimation, easeInOut, easeIn } from "framer-motion";

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

  const contacts: [string, IconDefinition, string][]  = [
    ['#adres', faLocationDot, 'Dąbrowskiego 58/6, Chorzów'],
    ['tel:664781030', faPhone, '+48 664 781 030'],
    ['mailto:podatnik@domain.pl', faEnvelope, 'podatnik@domain.pl']
  ]

  const sections = [
    ['about', 'O mnie'],
    ['office', 'Biuro'],
    ['offer', 'Oferta'],
    ['rodo', 'Rodo'],
    ['contact', 'Kontakt'],
  ];

  const phrases = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    'Contrary to popular belief, Lorem Ipsum is not simply random text',
    'There are many variations of passages of Lorem Ipsum available'
  ]


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
  }

  const contactVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0, delay: 0.2 }
    }
  }

  const navVariants = {
    hidden: { y: -150 },
    visible: {
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  const phrasesContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.55,
        delayChildren: 0.1,
      },
    }
  }

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
        ease: easeInOut,
      },
    },
  };

  // Animation queue
  useEffect(() => {
    (async () => {
      backgroundControls.start('visible');
      contactControls.start('visible');

      await navControls.start('visible');
      await phrasesControls.start("visible");
      await buttonControls.start("visible");
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
          className="list-none text-light-text text-sm font-light tracking-normal max-w-3xl h-15 mx-auto flex justify-between items-center"
          initial="hidden"
          animate={contactControls}
          variants={contactVariants}
        >
          {contacts.map((item, idx) => (
            <li key={idx}>
              <a
                href={`${item[0]}`}
                className="inline-block hover:text-hover-text"
              >
                <FontAwesomeIcon icon={item[1]} fixedWidth  className="mr-2" size="lg" />
                {item[2]}</a>
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
        <div className="bg-main text-light-text max-w-4xl text-base font-normal h-22 mx-auto shadow-lg flex justify-between items-center">
          <div className="w-52 h-22 p-2 bg-light-bg logo-container flex">
            <div className="text-mid-text/70 my-auto ml-4">Biuro Rachunkowe Podatnik</div>
          </div>
          <ul className="list-none pr-6 flex">
            {sections.map((section, idx) => (
              <li key={idx}>
                <a
                  href={`#${section[0]}`}
                  className="inline-block mx-2 px-3 py-4 hover:text-hover-text"
                >{section[1]}</a>
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
        <div className="min-h-[70vh] flex flex-col justify-center items-center landing-gradient text-xl text-mid-text">
          <motion.div
            initial="hidden"
            animate={phrasesControls}
            variants={phrasesContainerVariants}
          >
            {phrases.map((phrase, idx) => (
              <motion.h2
                key={idx}
                className="mt-12"
                variants={phrasesVariants}
              >
                <FontAwesomeIcon icon={faCheck} fixedWidth  className="mr-3 text-main" size="lg" />
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
          >oferta</motion.a>
        </div>
      </motion.div>
    </section>
  );
}