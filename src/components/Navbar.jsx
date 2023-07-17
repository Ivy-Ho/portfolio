import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets'

const Navbar = () => {

  let location = useLocation();

  const [ toggle, setToggle ] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* logo */}
        <Link  
          to="/portfolio/" 
          onClick={()=> {
            window.scrollTo(0, 0)
          }}
          className='text-white text-[18px] font-bold cursor-pointer flex lg:hover:text-violet-500'
        >
          <span className='text-violet-500'>&lt;&thinsp;</span>
          ivycodefive
          <span className='text-violet-500'>&thinsp;&frasl;&gt;</span>
        </Link>

        {/* link */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'
            >
              {
                location.pathname === '/portfolio/' ? (
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                ) :
               (
                location.pathname === `/portfolio/${link.id}` ? (
                  <Link 
                    to={`/portfolio/${link.id}`}
                    onClick={()=> {
                      window.scrollTo(0, 0)
                    }}
                  >
                    {link.title}
                  </Link>
                ):
                  <Link to={`/portfolio/${link.id}`}>
                    {link.title}
                  </Link>
                )
              }
            </li>
          ))}
        </ul>

        {/* side menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id} className='text-secondary font-poppins text-[16px] font-medium cursor-pointer'
                onClick={() => {
                  setToggle(!toggle);
                }}
                >
                  {
                    location.pathname === '/portfolio/' ? (
                      <a href={`#${link.id}`}>
                        {link.title}
                      </a>
                    ) :
                  (
                    location.pathname === `/portfolio/${link.id}` ? (
                      <Link 
                        to={`/portfolio/${link.id}`}
                        onClick={()=> {
                          window.scrollTo(0, 0)
                        }}
                      >
                        {link.title}
                      </Link>
                    ):
                      <Link to={`/portfolio/${link.id}`}>
                        {link.title}
                      </Link>
                    )
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar