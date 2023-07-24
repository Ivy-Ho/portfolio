import { BallCanvas } from './canvas';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center lg:justify-start gap-5'>
      {technologies.map((technology) => (
        <div className='w-14 h-14 md:w-20 md:h-20' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))

      }
    </div>
  )
}

export default Tech;