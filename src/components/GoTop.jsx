import { useEffect, useState } from "react"

export default function GoTop() {

  const [btnShow, setBtnShow ] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          setBtnShow(true)
      } else {
          setBtnShow(false)
      }
    }
  })

  return (
    <button 
    onClick={()=> {
      window.scrollTo(0, 0);
    }}
    title="Go To Top"
    className={`${btnShow ? '' : 'hidden'} fixed z-90 bottom-8 right-8 border-0 w-14 h-14 md:w-16 md:h-16 rounded-full drop-shadow-md bg-violet-500 text-white text-3xl font-bold`}>
      &uarr;
    </button>
  )
}
