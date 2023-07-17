import { motion } from 'framer-motion'

import { styles } from '../styles'
import TechAvatarCanvas from './canvas/TechAvatar'
import { socialLinks } from '../constants'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto borer-2'>

      {/* text content  */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        {/* deco */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-violet-500' />
            <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-500 to-transparent ' />
        </div>

        {/* header */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Ivy</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a frontend developer <br className='sm:block hidden' /> based in Taichung, Taiwan.
          </p>

          {/* button grouup */}
          <div className='flex gap-3 mt-5'>
            {socialLinks.map((link) => (
              <Link
                key={`${link.name}-link`}
                to={link.url}
                className=''
              >
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(link.url, "_blank")
                  }}
                  
                  className='border-secondary border-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img
                    src={link.img}
                    alt={link.name}
                    className='w-1/2 h-1/2 object-contain lg:hover:opacity-70'
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full md:w-2/4 md:ml-auto h-screen'>
        <TechAvatarCanvas  />
      </div>

      {/* scroll down button */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center group'>
        <a href="#about" className='before:content-["click"] before:block lg:before:hidden before:text-secondary before:font-medium before:mb-1'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 lg:group-hover:border-white'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5, 
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary lg:group-hover:bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero