import { useEffect, useState } from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Header = () => {
  const [scrollTop, setScrollTop] = useState<number>(0)

  useEffect(() => {  
    const onScroll = (event: any) => {
      setScrollTop(event.target.documentElement.scrollTop)
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])

  
return (
  <header className={
    !!scrollTop
    ? "grid grid-cols-2 bg-white shadow-md p-5 md:px-10 transform duration-300"
    : "grid grid-cols-2 bg-black p-8 md:px-10 transform duration-300"
  }>
    <div className={
      !!scrollTop
      ? "flex flex-col md:flex-row items-center py-2 text-gray-500"
      : "flex flex-col md:flex-row items-center py-0 text-white"
    }>
      <p>Chuck Norris</p>
      <p>Facts</p>
    </div>

    <div className={
      !!scrollTop
      ? "flex items-center justify-end space-x-4 text-gray-500"
      : "flex items-center justify-end space-x-4 text-white"
    }>
      <a href='https://www.linkedin.com/in/walisonteodoro/' target="_blank" rel='noreferrer'>
        <BsLinkedin className='h-7 w-7'/>
      </a>
      <a href='https://github.com/Wtheodoro' target="_blank" rel='noreferrer'>
        <BsGithub className='h-7 w-7'/>
      </a>
    </div>
  </header>
  )
}

export default Header