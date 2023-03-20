import { StaticImageData } from "next/image";

export type TextImageWrapType = {
  textRight?: boolean;
  headingOne?: string;
  lastWord?: string;
  headingTwo?: string;
  paragraph?: string;
  imageSrc: string | StaticImageData;
  solidBox?: boolean;
  firstButtonName?: string;
  secondButtonName?: string;
};

export type CarouselType = {
  data: { id: number; staticImg: string | StaticImageData }[];
};
