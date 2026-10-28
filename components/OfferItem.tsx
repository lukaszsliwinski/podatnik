import { IOfferItem } from '@/types/types';

export default function OfferItem({ header, items }: IOfferItem) {
  return (
    <div className="relative flex flex-col h-full shadow-md bg-light-bg">
      <div className="px-4 py-8">
        {header && <h3 className="text-base lg:text-xl font-normal mb-4">{header}</h3>}
        <div className="h-0.5 w-18 -ml-4 bg-dark-bg/20"></div>
        <ul className="list-disc ml-6 mt-7 pr-5">
          {items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>


      <div className="absolute bottom-0 h-0.75 w-full bg-main"></div>
    </div>
  );
}
