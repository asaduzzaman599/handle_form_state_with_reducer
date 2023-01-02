import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../nav/Navbar';

const Header = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet />
        </div>
    );
};

export default Header;