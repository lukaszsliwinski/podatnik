import { IList } from '../../types/types';

export default function List({ header, items }: IList) {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="mb-2 text-2xl font-semibold">{header}</h3>
      <ul className="list-disc ml-6">
        {items && items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}
