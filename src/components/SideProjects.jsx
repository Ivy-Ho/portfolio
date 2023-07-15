import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { sideProjectData } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";
// import ProjectCard from "../components"


const SideProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Side-projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        </motion.p>
      </div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {sideProjectData.map((sideProject, index) => (
          <ProjectCard key={`sideProject-${index}`} index={index} {...sideProject} git={true} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SideProjects, "");