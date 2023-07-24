import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant  } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Tech from './Tech';
import Button from './Button';
import { slideIn } from '../utils/motion'

 
const About = () => {

  return (
    <div className='w-full lg:h-[calc(100vh-120px)] flex flex-col gap-5 '>
      <div>
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
          <p className='tracking-wide mb-8'>
            <span className='block text-violet-500 text-xl font-medium mb-4'>「好想做出那個酷東西！」</span>
            基於對動態網頁製作的熱愛，開始摸索相關技術，希望做出與使用者產生互動，富趣味性的網站。也期許自己能善用 React, Vue 等技術，製作出更多富有人性化的介面、為使用者帶來便利的網站、應用程式和系統。
          </p>
          <Button
            path={'/portfolio/about'}
            target={"" }
            text={"Details"}
          />
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
      >
        <Tech />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(About, "about");