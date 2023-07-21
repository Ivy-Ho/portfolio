
import { About, ContactArea, Hero, Projects, SideProjects,  StarsCanvas} from '../components';

const Home = () => {

  return (
    <div className="relative z-0 bg-primary">
      <div className="relative z-0 w-full pad-hero-height lg:h-screen mx-auto">
        <Hero />
        <StarsCanvas />
      </div>
      <About />
      <Projects />
      <SideProjects />
      <div className="relative z-0">
        <ContactArea />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default Home;
