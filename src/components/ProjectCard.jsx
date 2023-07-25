import { github } from "../assets";
import Tilt from "react-parallax-tilt"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ index, id, name, description, tags, image, source_code_link, git }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        scale={1.1} 
        transitionSpeed={2500}
        className='bg-tertiary p-5 rounded-2xl sm:w-[340px] w-full h-full group'
      >
        <Link to={`/portfolio/project/${id}`}>
          <div className='relative w-full h-[230px]'>
            <img
              // loading="lazy"
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl lg:grayscale lg:group-hover:grayscale-0 transition duration-500 ease-in-out'
            />
            {/* github button */}
            {git && (
              <div className='absolute top-3 right-3'>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(source_code_link, "_blank")
                  }}
                  
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain hover:opacity-70'
                  />
                </div>
              </div>
            )}
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            {/* <p className='mt-2 text-secondary text-[14px]'>{description}</p> */}
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard