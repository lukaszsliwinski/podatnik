import { useEffect, useRef } from 'react';
import { motion, useAnimation, easeOut } from 'framer-motion';
import { faUsers, faCoins, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import List from '@/components/List';
import Pictogram from '@/components/Pictogram';

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
              'Jednoosobowe działalności gospodarczych: KPiR, ryczałt, karta podatkowa',
              'Spółki cywilne',
              'Spółki prawa handlowego: Sp.\u00A0z\u00A0o.o., S.A',
              'Fundacje i\u00A0Stowarzyszenia'
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
              'Sporządzanie rocznych rozliczeń: PIT-36, PIT-37, PIT-38, PIT-39',
              'Sporządzanie rocznych rozliczeń przychodów zagranicznych w\u00A0Polsce: Niemcy, Holandia',
              'Sporządzanie sprawozdań finansowych'
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
              'Pełna obsługa kadr i\u00A0płac',
              'Pełna obsługa ZUS',
              'Pomoc w\u00A0założeniu działalności gospodarczej',
              'Pomoc w\u00A0sporządzeniu wniosków o dotację na rozpoczęcie działalności gospodarczej'
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
