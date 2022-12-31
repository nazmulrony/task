import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FiLogOut } from 'react-icons/fi'
import { FaRegCommentDots } from 'react-icons/fa'
import { IoIosNotificationsOutline } from 'react-icons/io'


const Navbar = () => {
    // console.log(user);
    const NavLinks = <>
        <li><Link to="/"><IoIosNotificationsOutline size={25} /></Link></li>
        <li><Link to="/"><FaRegCommentDots size={25} /></Link></li>
        <li><Link to="/"><FiLogOut size={25} /></Link></li>
    </>
    return (
        <div className="navbar bg-white px-4 md:px-10 lg:px-24 justify-between  mx-auto lg:max-w-screen-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className=" menu-compact menu gap-1 font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <Link to="/" className="normal-case flex-col  font-bold flex text-navy items-center ml-2">
                    <img src={logo} alt="" className='h-20 ' />
                </Link>
            </div>
            <div className="navbar-end hidden  lg:flex">
                <ul className=" menu menu-horizontal gap-1 font-semibold">
                    {NavLinks}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;