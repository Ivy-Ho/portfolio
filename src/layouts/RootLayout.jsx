import ScrollToTop from "../helpers/ScrollToTop";
import { Outlet } from 'react-router-dom'
import { Footer, Navbar, GoTop } from '../components';

export default function RootLayout() {
 return (
  <div className="root-layout">
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