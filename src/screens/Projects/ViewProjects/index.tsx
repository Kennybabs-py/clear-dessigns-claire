import React from "react";
import ProjectsWrap from "@/components/ProjectsWrap";

import projectImgOne from "@/assets/projects/project_one.png";
import projectImgTwo from "@/assets/projects/project_two.png";
import projectImgThree from "@/assets/projects/project_three.png";

import styles from "./styles.module.scss";

export default function ViewProjects() {
  return (
    <section className={styles.view__projects}>
      <h2>
        View Some of Our <span>Projects</span>
      </h2>

      <ProjectsWrap headingTwo="Living Room Design" imageSrc={projectImgOne} />

      <ProjectsWrap
        headingTwo="Bedroom Room Design"
        imageSrc={projectImgTwo}
        textRight
      />

      <ProjectsWrap
        headingTwo="Dining Room Design"
        imageSrc={projectImgThree}
      />
    </section>
  );
}
