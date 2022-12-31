import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdOutlineInventory2, MdSpaceDashboard } from 'react-icons/md';
import { BsArrowLeftRight, BsShop } from 'react-icons/bs';
import { RiAuctionLine } from 'react-icons/ri';
import { BiCalendarCheck } from 'react-icons/bi';
import { FaCaravan } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';


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
                <ul className="menu p-4 w-48 bg-base-100 text-base-content gap-1">
                    <li className='bg-green-500 text-white text-center font-bold'>Grower</li>
                    <li> <Link><MdSpaceDashboard size={25} />Dashboard</Link></li>
                    <li> <Link><MdOutlineInventory2 size={25} />Inventory</Link></li>
                    <li> <Link><BsShop size={25} />Marketplace</Link></li>
                    <li> <Link><RiAuctionLine size={25} />Auction</Link></li>
                    <li> <Link><BiCalendarCheck size={25} />Orders</Link></li>
                    <li> <Link><FaCaravan size={25} />Transports</Link></li>
                    <li> <Link><BsArrowLeftRight size={25} />Transaction</Link></li>
                    <li> <Link><FiSettings size={25} />Settings</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;