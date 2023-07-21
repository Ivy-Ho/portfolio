import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import HeroAvatarCanvas from './canvas/HeroAvatar'
import { socialLinks } from '../constants'

const Hero = () => {
  return (
    <section className='relative '>

      {/* text content  */}
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] lg:top-[120px] max-w-7xl mx-auto max-h-auto flex flex-row items-start gap-5 z-10 lg:z-0`}>

        {/* deco */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-violet-500' />
            <div className='w-1 h-52 sm:h-60 bg-gradient-to-b from-violet-500 to-transparent ' />
        </div>

        {/* header */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Ivy</span></h1>
          <p className={`${styles.heroSubText}`}>
            A Frontend Developer
          </p>
          <p className={`text-[#dfd9ff] text-lg lg:leading-8`}>
             I'm currently seeking job opportunities <br className='sm:block hidden' />
             in Taichung, Taiwan, or remote positions.
          </p>

          {/* button grouup */}
          <div className='flex gap-3 mt-2 lg:mt-5'>
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


      <div className='w-full lg:w-3/5 lg:ml-auto h-screen'>
        <HeroAvatarCanvas  />
      </div>

      {/* scroll down button */}
      <div className='absolute bottom-12 md:bottom-10 w-full flex justify-center items-center group z-20'>
        <a 
          href="#about"
          className='before:content-["click"] before:block lg:before:hidden before:text-white-100 lg:before:text-secondary before:font-medium before:mb-1 block px-3 py-3'
        >
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white-100  lg:border-secondary flex justify-center items-start p-2 lg:group-hover:border-white'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5, 
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-white-100 lg:bg-secondary lg:group-hover:bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero