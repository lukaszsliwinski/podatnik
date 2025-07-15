import { useEffect, useRef } from 'react';
import { motion, useAnimation, easeOut } from 'framer-motion';
import { faUsers, faCoins, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import List from '../components/list';
import Pictogram from '../components/pictogram';

export default function Offer() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const list1Controls = useAnimation();
  const picto1Controls = useAnimation();

  const list2Controls = useAnimation();
  const picto2Controls = useAnimation();

  const list3Controls = useAnimation();
  const picto3Controls = useAnimation();

  const leftVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  const pictogramVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut }
    }
  };

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          list1Controls.start('visible');
          picto1Controls.start('visible');
        }
      },
      { threshold: 0.3 }
    );
    if (ref1.current) observer1.observe(ref1.current);
    return () => {
      if (ref1.current) observer1.unobserve(ref1.current);
    };
  }, [list1Controls, picto1Controls]);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          list2Controls.start('visible');
          picto2Controls.start('visible');
        }
      },
      { threshold: 0.3 }
    );
    if (ref2.current) observer2.observe(ref2.current);
    return () => {
      if (ref2.current) observer2.unobserve(ref2.current);
    };
  }, [list2Controls, picto2Controls]);

  useEffect(() => {
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          list3Controls.start('visible');
          picto3Controls.start('visible');
        }
      },
      { threshold: 0.3 }
    );
    if (ref3.current) observer3.observe(ref3.current);
    return () => {
      if (ref3.current) observer3.unobserve(ref3.current);
    };
  }, [list3Controls, picto3Controls]);

  return (
    <section className="flex justify-center items-center" id="offer">
      <div className="grid sm:grid-cols-4 sm:gap-10 md:gap-20 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mt-12 sm:my-16 md:my-24">
        <motion.div
          ref={ref1}
          className="sm:col-span-3 my-4 ms:my-0"
          initial="hidden"
          animate={list1Controls}
          variants={leftVariants}
        >
          <List
            header={'USŁUGI KSIĘGOWE'}
            items={[
              'jednoosobowych działalności gospodarczych: KPIR, ryczałt',
              'spółek jawnych SP.J.',
              'spółek cywilnych S.C.',
              'spółek z ograniczoną odpowiedzialnością sp. z o.o.',
              'spółek komandytowych sp.kom.',
              'spółek komandytowo-akcyjnych S.K.A.',
              'spółek akcyjnych S.A.',
              'spółek prostych akcyjnych P.S.A.',
              'fundacji i stowarzyszeń'
            ]}
          />
        </motion.div>
        <motion.div
          className="hidden sm:block scale-80 md:scale-100"
          initial="hidden"
          animate={picto1Controls}
          variants={pictogramVariants}
        >
          <Pictogram icon={faBriefcase} />
        </motion.div>

        <motion.div
          className="hidden sm:block scale-80 md:scale-100"
          initial="hidden"
          animate={picto2Controls}
          variants={pictogramVariants}
        >
          <Pictogram icon={faCoins} />
        </motion.div>
        <motion.div
          ref={ref2}
          className="sm:col-span-3 my-4 ms:my-0"
          initial="hidden"
          animate={list2Controls}
          variants={rightVariants}
        >
          <List
            header={'USŁUGI PŁACOWE'}
            items={[
              'naliczanie wynagrodzeń także w walutach obcych',
              'sporządzanie deklaracji rocznych PIT-11 ; PIT-4R, PIT-8AR;'
            ]}
          />
        </motion.div>

        <motion.div
          ref={ref3}
          className="sm:col-span-3 my-4 ms:my-0"
          initial="hidden"
          animate={list3Controls}
          variants={leftVariants}
        >
          <List
            header={'USŁUGI KADROWE'}
            items={[
              'prowadzenie elektronicznych akt osobowych pracowników',
              'Przygotowanie dokumentacji pracowniczych : umów o pracę, umów zleceń, umów o dzieło,',
              'Rozliczanie urlopów, prowadzenie ewidencji zwolnień lekarskich',
              'Pełna obsługa ZUS'
            ]}
          />
        </motion.div>
        <motion.div
          className="hidden sm:block scale-80 md:scale-100"
          initial="hidden"
          animate={picto3Controls}
          variants={pictogramVariants}
        >
          <Pictogram icon={faUsers} />
        </motion.div>
      </div>
    </section>
  );
}
