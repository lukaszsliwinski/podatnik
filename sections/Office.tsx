import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, easeOut } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/office-photo-1.jpg',
  '/office-photo-2.jpg',
  '/office-photo-3.jpg',
  '/office-photo-4.jpg'
];

export default function Office() {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(images.length - 1);

  const ref = useRef(null);

  // animation controls
  const textControls = useAnimation();
  const galleryControls = useAnimation();

  // motion variants
  const textVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  const galleryVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textControls.start('visible');
          galleryControls.start('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [textControls, galleryControls]);

  return (
    <section className="flex flex-col justify-center items-center" id="office">
      <div
        ref={ref}
        className="lg:max-w-4xl mt-12 sm:my-16 md:my-24"
      >
        <motion.div
          className="col-span-2 order-1 xl:order-2 my-auto"
          initial="hidden"
          animate={textControls}
          variants={textVariants}
        >
          <h2 className="mb-4 text-3xl font-semibold">BIURO</h2>
          <p className="text-justify font-light">
            Oferuję kompleksową obsługę księgową dla firm z różnych branż. Prowadzę <span className="font-semibold">księgi rachunkowe, podatkową księgę przychodów i rozchodów, ryczałt od przychodów ewidencjonowanych</span>, a także pełną <span className="font-semibold">obsługę kadr i płac</span> oraz <span className="font-semibold">rozliczeń podatkowych i ZUS</span> — wszystko w pełnej zgodności z obowiązującymi przepisami.
            <br /><br />
            W codziennej pracy stawiam na <span className="font-semibold">indywidualne podejście, terminowość i rzetelność</span>. Dbam o <span className="font-semibold">skrupulatność, poufność danych i przejrzystą komunikację</span> — zawiłe przepisy przekładam na proste i praktyczne rozwiązania, tak aby ułatwiać przedsiębiorcom pewne i świadome prowadzenie biznesu.
            <br /><br />
            Obsługuję firmy m.in. z branży: <span className="font-semibold">budowlanej, samochodowej, medycznej, paramedycznej, IT, architektonicznej, projektowej, handlowej, finansowej, ubezpieczeniowej, sportowej, beauty oraz motoryzacyjnej.</span>
            <br /><br />
          </p>
        </motion.div>
        <motion.div
          className="flex col-span-3 max-w-4xl w-full overflow-hidden mx-auto -my-10 sm:my-0 rounded-xl scale-y-60 sm:scale-y-70 md:scale-y-85 lg:scale-y-100"
          onMouseLeave={() => setActivePhotoIdx(activePhotoIdx)}
          initial="hidden"
          animate={galleryControls}
          variants={galleryVariants}
        >
          {images
            .slice()
            .reverse()
            .map((image, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActivePhotoIdx(idx)}
                className={`
                relative flex-shrink-0 h-96 transition-all duration-500 ease-in-out
                ${activePhotoIdx === idx ? 'w-2/3 opacity-100' : 'w-1/9 opacity-30'}
                ${idx !== 0 ? 'border-l-4 border-light-bg' : ''}
              `}
              >
                <Image
                  src={image}
                  alt="Office photo"
                  fill
                  className="object-cover pointer-events-none"
                />
                <div className="absolute inset-0 transition-all duration-500 ease-in-out"></div>
              </div>
            ))}
        </motion.div>
      </div>

      <div className="flex justify-around h-68 xs:h-96 w-[95vw] max-w-7xl bg-main-bg rounded-xl shadow-xl">
        <div
          className="md:px-10 w-80 xs:w-sm sm:w-md lg:w-full flex justify-center items-center scroll-mt-24"
          id="adres"
        >
          <iframe
            className="-mx-6 xs:mx-0 scale-75 xs:scale-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.037176696586!2d18.945484376953587!3d50.29123389881446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d27094acb749%3A0x62b31822dc0b905b!2sBiuro%20Rachunkowe%20Podatnik%20Wie%C5%84czys%C5%82awa%20%C5%9Aliwi%C5%84ska!5e0!3m2!1spl!2spl!4v1748707893270!5m2!1spl!2spl"
            width="550"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="hidden md:block w-px bg-light-bg my-8"></div>
        <div className="hidden md:flex w-4/5 h-48 flex-col justify-around pl-10 lg:pl-18 my-auto text-light-text">
          <p>
            ul. Dąbrowskiego 58/6
            <br />
            41-500 Chorzów
          </p>
          <p>
            pn-śr: 14:00-20:00
            <br />
            czw-pt: 9:00-20:00
          </p>
        </div>
      </div>
    </section>
  );
}
