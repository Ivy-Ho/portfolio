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
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project/:id' element={<ProjectDetail />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <GoTop />
      <Footer />
    </BrowserRouter>
  )
}

export default App
