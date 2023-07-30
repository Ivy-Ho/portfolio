import { useParams } from "react-router-dom";
import { projectData, sideProjectData } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { useContext } from "react";
import { ScreenContext } from "../contexts/ScreenContext";

const ProjectDetail = () => {

  const { id } = useParams();

  const { isMobile } = useContext(ScreenContext);

  let data = [];

  if(parseInt(id) <= 10 ) {
    data = projectData.find((item) => {
      return item.id === id;
    });

  }else if (parseInt(id) > 10 ) {

    data = sideProjectData.find((item) => {
      return item.id === id;
    });
  }

  return (
    <div className="pt-5">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>{data.name}</h2>

        <img 
          src={data.image} 
          alt={data.name}
          className="rounded-md mt-5 w-full lg:max-w-5xl"
          />

        <div className="max-w-5xl mb-20">
          <ul className="mt-5 list-none space-y-2">
            {data.description.map((point, index) => (
              <li
                key={`project-point-${index}`}
                className="text-secondary text-[16px] pl-1 tracking-wider flex gap-2 items-center before:w-3 before:h-1 before:bg-violet-500 before:rounded-lg"
              >
                {point}
              </li>
            ))}
          </ul>
          
          <div className='mt-4 flex flex-wrap gap-2'>
            {data.tags.map((tag) => (
              <p
                key={`${data.name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          <Button
            path={`${data.site_url}`}
            target={"_blank" }
            text={"view site"}
          />
          
        </div>
               
        {/* gallery */}
        {
          (!isMobile) && (
            <div className="flex md:mt-10  md:flex-no-wrap md:justify-start md:gap-9">

              {
                data.gallery.map((img, i) =>(
                  <div key={i} className="">
                    <img 
                      src={img}
                      alt="work image"
                      className="rounded-md"
                    />
                  </div>
                ))
              }
            </div>
          )
        }

      </motion.div>
    </div>
  )
  
}

export default SectionWrapper(ProjectDetail, "");
