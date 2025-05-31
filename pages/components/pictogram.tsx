import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pictogram({ icon }: { icon: IconDefinition }) {
  return (
    <div className="flex justify-center items-center h-full opacity-5">
      <FontAwesomeIcon icon={icon} size="10x" />
    </div>
  );
}