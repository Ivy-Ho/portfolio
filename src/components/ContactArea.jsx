import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import ContactAvatarCanvas from './canvas/ContactAvatar';

const ContactArea = () => {
  
  const fromRef = useRef();
  
  const [form, setForm ] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading ] = useState(false);

  const handleChange = (e) => {
    const { name, value} = e.target;

    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    if(form.name === '') {
      alert('Name is Required')
      setLoading(false);
    }else if(form.email === '') {
      alert('Email is Required')
      setLoading(false);
    }else if(form.message === ''){
      alert('Message is Required')
      setLoading(false);
    }else {
      emailjs.send(
        'service_52v2j2q',
        'template_hvsfqqf',
        {
          form_name: form.name,
          to_name: 'Ivy Ho',
          from_email: form.email,
          to_email: 'ivycodefive@gmail.com',
          message: form.message,
        },
        'IWsKGUKqz8rJWO4sP'
      )
      .then(()=> {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
  
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
  
        console.log(error);
  
        alert('Something went wrong.')
      })
    }
  }

  return (
    <div className='flex-col-reverse flex gap-10 overflow-hidden xl:mt-12 lg:flex-row'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <span className='hash-span' id="contact">
          &nbsp;
        </span>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={fromRef}
          onSubmit={handleSubmit}
          className='mt-13 flex flex-col gap-8'
        >
          {/* my email */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              My Email
            </span>
            <p className='bg-tertiary py-4 px-6 text-violet-400 font-medium'>ivycodefive@gmail.com</p>
          </label>
          {/* name */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>
            <input 
              type='name'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          {/* email */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          {/* message */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>
            <textarea 
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ml-auto'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='lg:flex-1 lg:h-auto md:h-[550px] h-screen relative'
      >
        
        <div className='h-full lg:w-full z-20 relative'>

          {/* text content */}
          <div className='absolute top-0 w-full items-center z-20 flex justify-center md:justify-start lg:justify-end lg:top-24'>
            <div className='leading-relaxed text-secondary font-medium'>
              <p className='text-violet-400 text-lg lg:text-sm lg:font-medium lg:text-secondary lg:tracking-wide flex items-start'>Thank you for visiting my portfolio!
                <motion.span 
                  className='hidden lg:inline-block'
                  animate={{
                    opacity: [1, 0 , 1]
                  }}
                  transition={{
                    duration: 0.8, 
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay: 2,
                  }}>
                    <span className='ml-1 inline-block w-1 h-3 bg-violet-400'></span>
                  </motion.span>
              </p>
              <p className='lg:hidden'>Would you like to leave a message?</p>
              <p className='lg:hidden'>I'm excited to hear from you </p>
              <p className='lg:hidden flex'>and  can't wait for your feedback.
                <motion.div 
                  className='lg:inline-block lg:hidden'
                  animate={{
                    opacity: [1, 0 , 1]
                  }}
                  transition={{
                    duration: 0.8, 
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}>
                    <span className='ml-1 inline-block w-1 h-3 bg-violet-400'></span>
                  </motion.div>
            </p>
            </div>
          </div>

          <ContactAvatarCanvas />

          {/* scroll down button */}
          <div className='absolute md:hidden bottom-16 w-full flex justify-center items-center group z-20'>
            <a 
              href="#contact"
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
        </div>
      
      </motion.div>
    </div>
  )
}

export default SectionWrapper(ContactArea, "")