import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import { styles } from '../styles';
import { fadeIn, textVariant  } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Tech from './Tech';
 
const About = () => {

  return (
    <div className='w-full lg:h-[calc(100vh-120px)] flex flex-col gap-5 '>
      <div className='flex-1'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>
            Overview.
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("","", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-2xl leading-[30px] mb-10 flex flex-col'
        >
          <p className='tracking-wide'>
            <span className='block text-violet-500 text-xl font-medium'>「真的好想做出那個酷東西！」</span>
            基於對動態網頁製作的熱愛，開始摸索相關技術，希望做出與使用者產生更多互動，也更富趣味性的網站。也期許自己能善用 React, Vue 等技術，製作出更多富有人性化的介面、為使用者帶來便利的網站、應用程式和系統。
          </p>
          <Link
            to='/portfolio/about'
            className='ml-auto mt-8 font-medium hover:text-white hover:border-white flex items-center px-5 py-2 rounded-3xl border-2 border-secondary w-[120px] text-center'
          >
            <span className='w-full'>Details</span>
          </Link>
        </motion.div>
      </div>

      <div className='flex-1'>
        <Tech />
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about");