import {
  faUsers,
  faCoins,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';

import List from '../components/list';
import Pictogram from '../components/pictogram';


export default function Offer() {
  return (
    <section className="flex justify-center items-center bg-light-bg" id="offer">
      <div className="grid grid-cols-4 gap-20 max-w-5xl my-24">
        <List
          header={'USŁUGI KADROWE'}
          items={[
            'prowadzenie elektronicznych akt osobowych pracowników',
            'Przygotowanie dokumentacji pracowniczych : umów o pracę, umów zleceń, umów o dzieło,',
            'Rozliczanie urlopów, prowadzenie ewidencji zwolnień lekarskich',
            'Pełna obsługa ZUS'
          ]}
        />
        <Pictogram icon={faUsers}/>
        <Pictogram icon={faCoins} />
        <List
          header={'USŁUGI PŁACOWE'}
          items={[
            'naliczanie wynagrodzeń także w walutach obcych',
            'sporządzanie deklaracji rocznych PIT-11 ; PIT-4R, PIT-8AR;'
          ]}
        />
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
        <Pictogram icon={faBriefcase}/>
      </div>
    </section>
  );
}
