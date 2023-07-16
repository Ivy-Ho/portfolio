import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer, Navbar, GoTop } from "./components"
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/portfolio/' element={<Home />} />
        <Route path='/portfolio/about' element={<About />} />
        <Route path='/portfolio/project' element={<Project />} />
        <Route path='/portfolio/project/:id' element={<ProjectDetail />} />
        <Route path='/portfolio/contact' element={<Contact />} />
      </Routes>
      <GoTop />
      <Footer />
    </BrowserRouter>
  )
}

export default App
