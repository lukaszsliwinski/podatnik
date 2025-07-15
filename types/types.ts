import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ICounter {
  number: number;
  text: string;
  animationTime: number;
}

export interface IList {
  header: string;
  items: string[];
}

export interface IButton {
  label: string;
  href: string;
}

export interface IPictogram {
  icon: IconDefinition;
}