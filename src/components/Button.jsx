import { Link } from 'react-router-dom'
Link

const Button = ({path, target, text}) => {
  return (
    <Link
      to={path}
      target={target}
      className='ml-auto font-medium px-5 py-2 rounded-3xl border-2 text-secondary border-secondary hover:text-white hover:border-white w-[120px] text-center block'
    >
      <span className='w-full'>{text}</span>
    </Link>
  )
}

export default Button