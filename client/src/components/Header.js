import janJenningLogo from '../assets/images/JanJennings.png'

import {useState} from 'react';
export default function Header() {
const [toggle, setToggle] = useState(false)

    return (
        <section className="bg-gradient-to-b from-blue-50 to-sky-500">
        {/* <!-- Hero --> */}
        <div className="container max-w-6xl mx-auto px-6 py-12">
            {/* <!-- Menu/Logo Container --> */}
            <nav className="flex items-center justify-between font-bold text-white">
                {/* <!-- Logo --> */}
                <a href="/"><img className="" src={janJenningLogo} alt="Jan Jennings logo" /></a>
                {/* <!-- Menu --> */}
                <div className="hidden h-10 md:flex md:space-x-8">
                    <div className="group">
                        <a href="/Contact">About</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div className="group">
                        <a href="/Events">Testimonies</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div className="group">
                        <a href="/Lessons">Contact</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    
                    {/* button container */}
                <div className="group">
                    <a href="/Contact" className="btn my-10 ">Log In</a>
                </div>
                {/* button container */}
                <div className="group">
                    <a href="/Contact" className="btn my-10 ">Sign Up</a>
                </div>

                </div>
                {/* <!-- hamburger button  --> */}
                <div className="md:hidden">
                    <button id="menu-btn" type="button" className={toggle ? "z-40 block hamburger md:hidden focus:outline-none open" : "z-40 block hamburger md:hidden focus:outline-none"} onClick={()=> setToggle(!toggle)}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </nav>
            {/* <!-- mobile menu --> */}
            <div id="menu" className={toggle ? "absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black" : "absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"}>
                <a href="/Contact" className="hover:text-pink-500">About</a>
                <a href="/Events" className="hover:text-pink-500">Testimonies</a>
                <a href="/Lessons" className="hover:text-pink-500">Contact</a>
                <a href="/Listen" className="hover:text-pink-500">Listen</a>
                <a href="/About" className="hover:text-pink-500">About</a>
            </div>

            
        </div>
    </section>
    )
}