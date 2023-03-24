import dynamic from "next/dynamic";

// const HomeHero = dynamic(() => import("@/screens/Home/HomeHero"));
// const Works = dynamic(() => import("@/screens/Home/Works"));
// const ViewWorks = dynamic(() => import("@/screens/Home/ViewWorks"));
// const Testimonials = dynamic(() => import("@/screens/Home/Testimonials"));
// const BetterInterior = dynamic(() => import("@/screens/Home/BetterInterior"));

import {
  HomeHero,
  Works,
  ViewWorks,
  Testimonials,
  BetterInterior,
} from "@/screens/Home";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Works />
      <ViewWorks />
      <Testimonials />
      <BetterInterior />
    </>
  );
}
