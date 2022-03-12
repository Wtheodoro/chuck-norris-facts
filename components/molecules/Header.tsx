import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Header = () => (
    <div className="relative flex justify-center items-center pt-4 md:pt-5 px-4 md:px-12">
        <div className="flex items-center flex-col md:flex-row">
            <p>Chuck Norris</p>
            <p>Facts</p>
        </div>
        <div className="flex absolute right-5 space-x-2">
            <a href='https://www.linkedin.com/in/walisonteodoro/' target="_blank" rel='noreferrer'>
                <BsLinkedin className='h-7 w-7'/>
            </a>
            <a href='https://github.com/Wtheodoro' target="_blank" rel='noreferrer'>
                <BsGithub className='h-7 w-7'/>
            </a>
        </div>
    </div>
)

export default Header