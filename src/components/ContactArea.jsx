import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import AvatarCanvas from './canvas/Avatar';

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
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
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
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[250px]'
      >
        <AvatarCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(ContactArea, "contact")