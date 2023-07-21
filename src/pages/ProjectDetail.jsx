import { useParams } from "react-router-dom";
import { projectData, sideProjectData } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const ProjectDetail = () => {

  const { id } = useParams();
  console.log((parseInt(id)) > 10)

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
          <p className="mt-5 max-w-2xl leading-7 text-secondary tracking-wide">
            { data.description }
          </p>
          
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

          <a href={data.site_url} target="_blank" className="ml-auto font-medium px-5 py-2 rounded-3xl border-2 text-secondary border-secondary hover:text-white hover:border-white w-[120px] text-center block" rel="noreferrer">
            view site
          </a>
        </div>
               
        {/* gallery */}
        <div className="hidden md:flex md:mt-10  md:flex-no-wrap md:justify-start md:gap-9">

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

      </motion.div>
    </div>
  )
  
}

export default SectionWrapper(ProjectDetail, "");
