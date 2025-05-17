import React from 'react';
import main_logo from './images/vitalview_logo.png';

const Navbar = () => {
    return (
        <nav className="w-full h-20 flex items-center justify-between px-8 bg-white shadow-md">
            <div className="flex items-center space-x-6">
                <a href="/about" className="text-gray-700 hover:text-blue-500 font-medium">About</a>
                <a href="/Testimonials" className="text-gray-700 hover:text-blue-500 font-medium">Testimonials</a>
            </div>

            <div className="flex-shrink-0">
                <img src={main_logo} alt="logo" className="h-10 w-auto" />
            </div>
            <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-300">
                    Log In
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-grey-800 transition-colors duration-300">
                    Sign Up
                </button>
            </div>

        </nav>
    );
};

export default Navbar;