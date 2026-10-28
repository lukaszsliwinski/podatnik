import { motion, easeOut } from 'framer-motion';

import OfferItem from '@/components/OfferItem';
import { IOfferItem } from '@/types/types';

const slideIn = (x: number) => ({
  hidden: { opacity: 0, x },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }
});

const leftVariants = slideIn(-150);
const rightVariants = slideIn(150);

const offers: IOfferItem[] = [
  {
    header: 'Usługi księgowe',
    items: [
      'jednoosobowych działalności gospodarczych: KPiR, ryczałt, karta podatkowa',
      'spółek cywilnych',
      'spółek prawa handlowego: Sp. z o.o., S.A',
      'fundacji i stowarzyszeń'
    ]
  },
  {
    header: 'Sporządzanie rocznych rozliczeń',
    items: ['PIT-36', 'PIT-37', 'PIT-38', 'PIT-39']
  },
  {
    header: 'Sporządzanie rocznych rozliczeń przychodów zagranicznych w Polsce',
    items: ['Niemcy', 'Holandia']
  },
  {
    header: 'Rozliczanie transakcji',
    items: ['WNT', 'WDT', 'export/import usług']
  },
  {
    header: 'Pozostałe',
    items: [
      'sporządzanie sprawozdań finansowych',
      'pełna obsługa kadr i płac',
      'pełna obsługa ZUS',
      'pomoc w założeniu działalności gospodarczej',
      'pomoc w sporządzeniu wniosków o dotację na rozpoczęcie działalności gospodarczej'
    ]
  }
];

export default function Offer() {
  return (
    <section className="flex justify-center items-center" id="offer">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 mt-24 sm:my-16 md:my-24 max-w-4xl">
        {offers.map((offer, idx) => (
          <motion.div
            key={offer.header}
            className={idx === offers.length - 1 ? 'md:col-span-2' : undefined}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={idx % 2 ? rightVariants : leftVariants}
          >
            <OfferItem {...offer} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
