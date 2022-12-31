import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';

const Main = () => {
    return (
        <div className='bg-slate-100 min-h-screen'>
            <Navbar />
            <Outlet />

        </div>
    );
};

export default Main;