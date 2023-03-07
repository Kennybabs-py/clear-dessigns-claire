import { StaticImageData } from "next/image";

export type TextImageWrapType = {
  textRight?: boolean;
  heading: string;
  paragraph?: string;
  imageSrc: string | StaticImageData;
  solidBox?: boolean;
};

export type CarouselType = {
  data: { id: number; staticImg: string | StaticImageData }[];
};
