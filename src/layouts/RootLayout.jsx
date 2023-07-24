import { useState } from "react";
import ScrollToTop from "../helpers/ScrollToTop";
import { Outlet } from 'react-router-dom'
import { Footer, Navbar, GoTop, LoadingScreen } from '../components';


export default function RootLayout() {

  const [started, setStarted] = useState(false);

 return (
  <div className="root-layout">
    <LoadingScreen started={started} setStarted={setStarted} />  
    <Navbar />
    <ScrollToTop />
    <main>
      <Outlet />
    </main>
    <GoTop />
    <Footer />
  </div>
 )
}