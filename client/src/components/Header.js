import logo from '../assets/images/gcLogo.png'

import {useState} from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'

export default function Header() {

const [toggle, setToggle] = useState(false)

const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

    return (
        <>
        <nav className=" bg-orange-50">
            {/* <!-- Flex container for all items --> */}
            <div className="flex items-center px-10 py-2 justify-between">
                {/* <!-- Flex container for logo and left menu --> */}
                <div className="flex items center space-x-10">
                    {/* <!-- Logo --> */}
                    <Link to="/"><img src={logo} alt="logo" className='h-10'/></Link>
                    {/* <!-- Left menu --> */}
                    <div className="hidden pt-1 space-x-10 font-bold lg:flex">
                        <Link to="/About" className="hover:opacity-70 uppercase">About</Link>
                        <Link to="/Testimonies" className="hover:opacity-70 uppercase">Testimonies</Link>
                        <Link to="/Contact" className="hover:opacity-70 uppercase">Contact</Link>
                    </div>
                </div>
    
                {/* <!-- Right buttons menu --> */}
                {Auth.loggedIn() ? (
                    <div className="hidden items-center space-x-6 font-bold lg:flex">
                    <Link to="/Profile" className="hover:opacity-70 uppercase">My Profile</Link>
                    <a href="/" onClick={logout} className="px-3 py-2 font-bold text-white bg-black rounded hover:opacity-70 uppercase">Logout</a>
                </div>
                ) : (

                    <div className="hidden items-center space-x-6 font-bold lg:flex">
                        <Link to="/Login" className="hover:opacity-70 uppercase">Login</Link>
                        <Link to="/SignUp" className="px-3 py-2 font-bold text-white bg-black rounded hover:opacity-70 uppercase">Sign Up</Link>
                    </div>
                )}
                {/* <!-- todo:hamburger menu --> */}
            </div>
            {/* <!-- todo: mobile menu --> */}
        </nav>
        </>
    )
}