import { IList } from '@/types/types';
import Header from '@/components/Header';

export default function List({ header, items }: IList) {
  return (
    <div className="flex flex-col justify-center shadow-lg rounded-sm bg-white p-10 pb-7">
      <Header text={header} underline={false} />
      <div className="w-32 h-px bg-dark-bg/20 -ml-10 my-4"></div>
      <ul className="list-disc ml-6">
        {items && items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}
