import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faPhone,
  faEnvelope,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const years = moment().year().toString() === '2025' ? '2025' : `2025-${moment().year()}`;
  
  // TODO: wszystkie stałe do osobnego pliku
  const contacts: [string, IconDefinition, string][]  = [
    ['tel:664781030', faPhone, '+48 664 781 030'],
    ['mailto:podatnik@domain.pl', faEnvelope, 'podatnik@domain.pl'],
    ['#adres', faLocationDot, 'Dąbrowskiego 58/6, Chorzów']
  ]

  return (
    <footer className="relative h-96 flex justify-center bg-dark-bg text-light-text font-normal" id="contact">
      <div className="grid grid-cols-6 w-full max-w-5xl my-20">
        <div className="col-span-3">
          <h4 className="mb-4 text-lg font-medium">KONTAKT:</h4>
          <div>
            <div className="mb-3 text-base">Wieńczysława Śliwińska</div>
            {contacts.map((item, idx) => (
              <a
                key={idx}
                href={`${item[0]}`}
                className="block mb-1 hover:text-hover-dark"
              >
                <FontAwesomeIcon icon={item[1]} fixedWidth  className="mr-3" />
                {item[2]}</a>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <h4 className="mb-4 text-lg font-medium">BIURO CZYNNE:</h4>
          <p>
            <span className="inline-block w-16">pn:</span>14:00 - 20:00<br />
            <span className="inline-block w-16">wt:</span>14:00 - 20:00<br />
            <span className="inline-block w-16">śr:</span>14:00 - 20:00<br />
            <span className="inline-block w-16">czw:</span>&ensp;9:00 - 20:00<br />
            <span className="inline-block w-16">pt:</span>&ensp;9:00 - 20:00<br />
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="mb-4 text-lg font-medium">USŁUGI:</h4>
          <ul className="list-disc">
            <li className="ml-6">kadry</li>
            <li className="ml-6">płace</li>
            <li className="ml-6">księgowość</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-4 flex justify-center w-full select-none">
        <p className="text-xs">&copy; {years} BIURO RACHUNKOWE PODATNIK CHORZÓW</p>
      </div>
    </footer>
  );
}