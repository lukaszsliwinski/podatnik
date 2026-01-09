import { useEffect, useRef } from 'react';
import { motion, useAnimation, easeOut } from 'framer-motion';
import Image from 'next/image';

import cert1 from '@/public/cert1.jpg';
import cert2 from '@/public/cert2.jpg';
import kibr from '@/public/kibr.jpg';
import orly from '@/public/orly.png';

import Counter from '@/components/Counter';
import Header from '@/components/Header';

export default function About() {
  const ref = useRef(null);

  // animation controls
  const textControls = useAnimation();
  const cert1Controls = useAnimation();
  const cert2Controls = useAnimation();

  // motion variants
  const textVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  const cert1Variants = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  const cert2Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textControls.start('visible');
          cert1Controls.start('visible');
          cert2Controls.start('visible');
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [textControls, cert1Controls, cert2Controls]);

  return (
    <section className="flex flex-col justify-center items-center" id="about">
      <div
        ref={ref}
        className="grid lg:grid-cols-2 sm:gap-y-8 mt-12 sm:my-16 md:my-24 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
      >
        <motion.div
          className="my-auto"
          initial="hidden"
          animate={textControls}
          variants={textVariants}
        >
          <Header text="O MNIE" />
          <p className="text-justify font-light">
            Nazywam się <span className="font-semibold">Wieńczysława Śliwińska</span> i&nbsp;od wielu lat specjalizuję się w&nbsp;kompleksowej obsłudze księgowej firm - niezależnie od ich branży czy formy działalności. Posiadam <span className="font-semibold">certyfikat księgowy Ministerstwa Finansów</span> (nr 43037/2010), dyplom Akademii Ekonomicznej w&nbsp;Katowicach oraz ponad 20&nbsp;lat doświadczenia na stanowisku Głównej Księgowej. Jestem członkiem założycielem <span className="font-semibold">Krajowej Izby Biur Rachunkowych</span> oraz członkiem <span className="font-semibold">Stowarzyszenia Księgowych w&nbsp;Polsce</span>, oddział w&nbsp;Katowicach. Regularnie poszerzam wiedzę, uczestnicząc w&nbsp;specjalistycznych szkoleniach i&nbsp;na bieżąco śledząc zmiany w&nbsp;przepisach.
            <br /><br />
            Od ponad 15&nbsp;lat prowadzę <span className="font-semibold">Biuro Rachunkowe „Podatnik”</span> w&nbsp;Chorzowie, gdzie z&nbsp;pełnym zaangażowaniem wspieram przedsiębiorców w&nbsp;bezpiecznym, zgodnym z&nbsp;przepisami i&nbsp;efektywnym prowadzeniu ich finansów. Księgowość to dla mnie nie tylko zawód, ale także pasja i&nbsp;realny sposób, by pomagać firmom rosnąć, podejmować świadome decyzje i&nbsp;działać spokojnie w&nbsp;dynamicznie zmieniającym się otoczeniu prawnym. Moim priorytetem jest odciążenie klientów z&nbsp;obowiązków księgowych, aby mogli skupić się na tym, co najważniejsze — rozwoju swojej działalności.
            <br /><br />
            Zapraszam do współpracy firmy poszukujące solidnego wsparcia księgowego opartego na profesjonalizmie i&nbsp;zaangażowaniu.
          </p>
        </motion.div>

        <motion.div className="flex items-center max-w-xl lg:max-w-sm mx-auto max-lg:px-2 max-lg:py-4" initial="hidden" animate={cert1Controls} variants={cert1Variants}>
          <Image
            className="shadow"
            src={cert1}
            alt="cert 1"
          />
        </motion.div>

        <motion.div className="lg:col-span-2 max-w-xl mx-auto max-lg:px-2 max-lg:pb-4" initial="hidden" animate={cert2Controls} variants={cert2Variants}>
          <Image
            className="shadow"
            src={cert2}
            alt="cert 2"
          />
        </motion.div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-around h-56 md:h-48 lg:h-64 w-[95vw] max-w-7xl bg-main-bg rounded-xl shadow-xl">
        <div className="mx-auto md:w-full flex justify-around items-center px-4 xl:px-20">
          <a className="mx-2" href="https://www.kibr.pl/" target="_blank" rel="noopener noreferrer">
            <Image className="h-16 md:h-24 lg:h-28 w-auto" src={kibr} alt="kibr" />
          </a>
          <a
            className="mx-2"
            href="https://orlyrachunkowosci.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="h-16 md:h-24 lg:h-28 w-auto" src={orly} alt="orly" />
          </a>
        </div>
        <div className="hidden md:block w-px bg-light-bg my-8"></div>
        <div className="xs:w-sm sm:w-xl mx-auto md:w-full flex justify-around items-center px-4 xl:px-20 text-light-text">
          <Counter number={35} text={'lat doświadczenia'} animationTime={1500} />
          <Counter number={120} text={'zadowolonych klientów'} animationTime={1500} />
        </div>
      </div>
    </section>
  );
}
