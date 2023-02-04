import logo from '../assets/images/gcLogo.png'

import {useState} from 'react';
export default function Header() {
const [toggle, setToggle] = useState(false)

    return (
        <>
    
        <nav className=" bg-orange-50">
            {/* <!-- Flex container for all items --> */}
            <div className="flex items-center px-10 py-2 justify-between">
                {/* <!-- Flex container for logo and left menu --> */}
                <div className="flex items center space-x-10">
                    {/* <!-- Logo --> */}
                    <img src={logo} alt="" className='h-10'/>
                    {/* <!-- Left menu --> */}
                    <div className="hidden pt-1 space-x-10 font-bold lg:flex">
                        <a href="#" className="hover:opacity-70 uppercase">About</a>
                        <a href="#" className="hover:opacity-70 uppercase">Testimonies</a>
                        <a href="#" className="hover:opacity-70 uppercase">Contact</a>
                    </div>
                </div>
    
                {/* <!-- Right buttons menu --> */}
                <div className="hidden items-center space-x-6 font-bold lg:flex">
                    <div className="hover:opacity-70 uppercase">Login</div>
                    <a href="#" className="px-3 py-2 font-bold text-white bg-black rounded hover:opacity-70 uppercase">Sign Up</a>
                </div>
                {/* <!-- todo:hamburger menu --> */}
            </div>
            {/* <!-- todo: mobile menu --> */}
        </nav>
        </>
    )
}