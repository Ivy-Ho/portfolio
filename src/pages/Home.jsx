
import { About, ContactArea, Hero, Tech , Projects, SideProjects,  StarsCanvas} from '../components';

const Home = () => {

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />

      {/* <Tech /> */}
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
