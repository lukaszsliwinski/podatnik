import { IPictogram } from '@/types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pictogram({ icon }: IPictogram) {
  return (
    <div className="flex justify-center items-center h-full opacity-5">
      <FontAwesomeIcon icon={icon} size="8x" />
    </div>
  );
}
