// carousel
import CarouselImgOne from "@/assets/home/viewworks_img_one.png";
import CarouselImgTwo from "@/assets/home/viewworks_img_two.png";
import CarouselImgThree from "@/assets/home/viewworks_img_three.png";

// testimonials
import clientImgOne from "@/assets/home/client_one.png";
import clientImgTwo from "@/assets/home/client_two.png";
import clientImgThree from "@/assets/home/client_one.png";
import clientImgFour from "@/assets/home/client_two.png";

//artworks
import artworkImgOne from "@/assets/products/artwork_one.png";
import artworkImgTwo from "@/assets/products/artwork_two.png";
import artworkImgThree from "@/assets/products/artwork_three.png";

//frames
import framesImgOne from "@/assets/products/frames_one.png";
import framesImgTwo from "@/assets/products/frames_two.png";
import framesImgThree from "@/assets/products/frames_three.png";

export const homeCarousel = [
  { id: 0, staticImg: CarouselImgOne },
  { id: 1, staticImg: CarouselImgTwo },
  { id: 2, staticImg: CarouselImgThree },
  { id: 3, staticImg: CarouselImgTwo },
  { id: 4, staticImg: CarouselImgThree },
  { id: 5, staticImg: CarouselImgTwo },
  { id: 6, staticImg: CarouselImgThree },
  { id: 7, staticImg: CarouselImgTwo },
  { id: 8, staticImg: CarouselImgThree },
];

export const testimonialsData = [
  {
    id: 0,
    staticImg: clientImgOne,
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
  amet sint. Velit officia consequat duis enim velit mollit.
  Exercitation veniam consequat sunt`,
    name: "peter drey",
  },
  {
    id: 1,
    staticImg: clientImgTwo,
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
  amet sint. Velit officia consequat duis enim velit mollit.
  Exercitation veniam consequat sunt`,
    name: "sam tee",
  },
  {
    id: 2,
    staticImg: clientImgThree,
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
  amet sint. Velit officia consequat duis enim velit mollit.
  Exercitation veniam consequat sunt`,
    name: "dorian grey",
  },
  {
    id: 43,
    staticImg: clientImgFour,
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
  amet sint. Velit officia consequat duis enim velit mollit.
  Exercitation veniam consequat sunt`,
    name: "charles mark",
  },
];

export const valuesData = [
  {
    id: 0,
    title: "innovative",
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
  amet sint. Velit officia consequat duis enim velit mollit.
  Exercitation veniam consequat sunt`,
  },
  {
    id: 1,
    title: "competence",
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
  amet sint. Velit officia consequat duis enim velit mollit.
  Exercitation veniam consequat sunt`,
  },
  {
    id: 2,
    title: "trust",
    text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
  amet sint. Velit officia consequat duis enim velit mollit.
  Exercitation veniam consequat sunt`,
  },
];

export const artworksData = [
  { id: 0, staticImg: artworkImgOne },
  { id: 1, staticImg: artworkImgTwo },
  { id: 2, staticImg: artworkImgThree },
];

export const framesData = [
  { id: 0, staticImg: framesImgOne },
  { id: 1, staticImg: framesImgTwo },
  { id: 2, staticImg: framesImgThree },
];
