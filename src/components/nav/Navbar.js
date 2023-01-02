import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-slate-600 w-full p-6'>
            <ul className='flex gap-6 font-bold text-white'>
                <Link to='/'>Home</Link>
                <Link to='/signup'>Sign Up</Link>
            </ul>
        </div>
    );
};

export default Navbar;