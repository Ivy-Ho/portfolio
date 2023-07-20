import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { sideProjectData } from "../constants";
import { textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";


const SideProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Side-projects.</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {sideProjectData.map((sideProject, index) => (
          <ProjectCard key={`sideProject-${index}`} index={index} {...sideProject} git={true} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SideProjects, "");