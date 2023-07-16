import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/portfolio/' element={<Home />} />
          <Route path='/portfolio/about' element={<About />} />
          <Route path='/portfolio/project' element={<Project />} />
          <Route path='/portfolio/project/:id' element={<ProjectDetail />} />
          <Route path='/portfolio/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
