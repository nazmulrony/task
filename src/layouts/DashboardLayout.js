import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';

const DashboardLayout = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <div className='flex justify-end m-4'>
                    <label htmlFor="my-drawer-2" className="btn btn-xs btn-primary drawer-button lg:hidden">Toggle drawer</label>
                </div>
                <Outlet />



            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content gap-1">
                    <li className='bg-green-500 text-white text-center font-bold'>Grower</li>
                    <li> <Link><MdSpaceDashboard size={25} />Dashboard</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;