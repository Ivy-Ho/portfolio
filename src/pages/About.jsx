import { Link } from "react-router-dom";
import { Experience } from '../components';
import { SectionWrapper } from "../hoc";


const About = () => {
  return (
    <div className="pt-10">
      <Experience />
    </div>
  )
}

export default SectionWrapper(About, "");
