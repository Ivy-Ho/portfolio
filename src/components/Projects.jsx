import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projectData } from "../constants";
import { textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {projectData.map((project, index) => (
          (project.id <= 10) &&
          <ProjectCard key={`project-${index}`} index={index} {...project} git={false}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "project");