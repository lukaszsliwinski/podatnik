import moment from 'moment';
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
  const contacts: [string, IconDefinition, string][] = [
    ['tel:664781030', faPhone, '+48 664 781 030'],
    ['mailto:br_podatnik@interia.pl', faEnvelope, 'br_podatnik@interia.pl'],
    ['#adres', faLocationDot, 'Dąbrowskiego 58/6, Chorzów']
  ];

  return (
    <footer
      className="relative md:h-96 flex justify-center bg-dark-bg text-light-text font-normal"
      id="contact"
    >
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-y-9 md:gap-2 sm:w-full sm:max-w-6xl mb-20 mt-10 md:mt-20 mx-10">
        
        <div className="col-span-2 md:col-span-1 flex md:justify-center">
          <div className="">
            <h4 className="mb-4 text-lg font-medium">KONTAKT:</h4>
            <div className="max-sm:min-w-54">
              <div className="mb-3 text-base">Wieńczysława Śliwińska</div>
              {contacts.map((item, idx) => (
                <a key={idx} href={`${item[0]}`} className="block mb-1 hover:text-hover-text">
                  <FontAwesomeIcon icon={item[1]} fixedWidth className="mr-3" />
                  {item[2]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex md:justify-center">
          <div className="">
            <h4 className="mb-4 text-lg font-medium">BIURO CZYNNE:</h4>
            <p className="max-sm:min-w-38">
              <span className="inline-block w-16">wt:</span>14:00 - 20:00
              <br />
              <span className="inline-block w-16">śr:</span>14:00 - 20:00
              <br />
              <span className="inline-block w-16">czw:</span>&ensp;9:00 - 14:00
              <br />
              <span className="inline-block w-16">pt:</span>&ensp;9:00 - 14:00
              <br />
            </p>
          </div>
        </div>

        <div className="hidden md:flex md:justify-center">
          <div className="">
            <h4 className="mb-4 text-lg font-medium">USŁUGI:</h4>
            <ul className="list-disc">
              <li className="ml-6">księgowość</li>
              <li className="ml-6">płace</li>
              <li className="ml-6">kadry</li>
              <li className="ml-6">ZUS</li>
            </ul>
          </div>
        </div>

      </div>
      <div className="absolute bottom-4 flex justify-center w-full select-none">
        <p className="text-xs">
          &copy; {years} <span className="hidden sm:inline">BIURO RACHUNKOWE</span> PODATNIK CHORZÓW
        </p>
      </div>
    </footer>
  );
}
