import React from 'react';
import { BiArrowBack, BiDownArrowCircle, BiPieChart } from 'react-icons/bi'
import { CiShare1 } from 'react-icons/ci'
import { AiFillStar } from 'react-icons/ai'
import { IoIosRadioButtonOn } from 'react-icons/io'
import { RiAuctionLine, RiMoneyDollarCircleLine } from 'react-icons/ri'

import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'
import img5 from '../assets/img-5.png'
import vector12 from '../assets/Vector 12.png'
import vector from '../assets/Vector.png'
import rectangle from '../assets/rectangle.png'
import { Link } from 'react-router-dom';



const AddItem = () => {
    return (
        <div className='mx-5  '>
            <div className='p-6 bg-white'>
                <button className='flex items-center'><BiArrowBack size={20} /> Back</button>
                <div className='flex mt-6 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                    </div>
                    <div className='w-[17rem] overflow-hidden'>
                        <img src={img1} alt="" className='w-full' />
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-green-500 text-xl mb-2'>Royal ACDC Outdoor</h3>
                                <h3 className='text-green-500 text-sm flex items-center gap-2'>Gold Leaf Flowers <CiShare1 className='text-green-500 font-bold' /></h3>
                            </div>
                            <div className='flex flex-col items-end'>
                                <div className='flex gap-2'>
                                    <AiFillStar className='text-yellow-400' />
                                    <AiFillStar className='text-yellow-400' />
                                    <AiFillStar className='text-yellow-400' />
                                    <AiFillStar className='text-yellow-400' />
                                    <AiFillStar className='text-yellow-400' />
                                </div>
                                <p className='text-sm text-gray-500'>4.9 (2130 reviews)</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-4 text-sm'>
                            <p>Category: Flowers</p>
                            <p>Strains: Indica</p>
                            <p>Terpenes: 10</p>
                            <p>Canabinoids: 15</p>
                        </div>
                        <hr className='my-2' />
                        <div className='flex justify-between text-sm'>
                            <p>Cultivation: Indoor</p>
                            <p>THC: 0.5%</p>
                            <p>Batch No: B54U</p>
                            <p>Brand: Gold</p>
                        </div>
                        <div className=' flex  mt-5 gap-3 justify-between'>
                            <div className='bg-green-500 rounded-md p-6 text-white text-center shadow-lg'>
                                <IoIosRadioButtonOn className='mx-auto' />
                                <p className='text-xs'>Total Stock</p>
                                <p className='font-bold'>100lb</p>
                            </div>
                            <div className='relative rounded-md overflow-hidden shadow-lg p-2 px-6'>
                                <img src={vector12} alt="" className='absolute left-0 bottom-0' />
                                <div className='flex justify-between  gap-5'>
                                    <p className='text-green-500 flex items-center font-bold'><img src={vector} alt="" className='w-full' /> Marketplace</p>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <input type="checkbox" checked className="checkbox w-5 h-5 checkbox-success" />
                                            <label htmlFor="" className='text-sm'>lb</label>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <input type="checkbox" className="checkbox w-5 h-5 checkbox-accent" />
                                            <label htmlFor="" className='text-sm'>g</label>
                                        </div>
                                    </div>

                                </div>
                                <div className='mt-3 flex gap-4'>
                                    <div className='flex flex-col'>
                                        <BiPieChart size={20} />
                                        <p className='text-[8px] text-gray-500'>Allocated</p>
                                        <p className='font-bold text-xs text-gray-800'>100lb</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <BiDownArrowCircle size={20} />
                                        <p className='text-[8px] text-gray-500'>Min Qty</p>
                                        <p className='font-bold text-xs text-gray-800'>5lb</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <RiMoneyDollarCircleLine size={20} />
                                        <p className='text-[8px] text-gray-500'>Price</p>
                                        <p className='font-bold text-xs text-gray-800'>$600/lb</p>
                                    </div>

                                    <div className=''>
                                        <div className="radial-progress text-secondary" style={{ "--value": "100", "--size": "3rem", "--thickness": "5px" }}>
                                            <div className="radial-progress text-primary z-20" style={{ "--value": "70", "--size": "3rem", "--thickness": "5px" }}>

                                            </div>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div className='flex items-center gap-1'>
                                                <div className='h-3 w-3 bg-secondary'>

                                                </div>
                                                <span className='text-[8px]'>Stock</span>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <div className='h-3 w-3 bg-green-500'>

                                                </div>
                                                <span className='text-[8px]'>Allocated</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative shadow-lg py-2 px-6  rounded-md overflow-hidden flex gap-3 '>
                                <img src={rectangle} alt="" className='absolute top-0 right-0 w-32' />
                                <div className=''>
                                    <p className='flex items-center ga-1 text-green-500 font-bold'>
                                        <RiAuctionLine />
                                        Auction
                                    </p>
                                    <div className='flex  gap-1 mt-3'>
                                        <div className='flex flex-col'>
                                            <BiPieChart size={20} />
                                            <p className='text-[8px] text-gray-500'>Allocated</p>
                                            <p className='font-bold text-sm text-gray-800'>100lb</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <BiDownArrowCircle size={20} />
                                            <p className='text-[8px] text-gray-500'>Min Qty</p>
                                            <p className='font-bold text-sm text-gray-800'>5lb</p>
                                        </div>
                                    </div>



                                </div>
                                <div className='mt-3 '>
                                    <div className='flex items-center gap-1'>
                                        <div className='flex items-center gap-1'>
                                            <div className='h-3 w-3 bg-white  z-20'>

                                            </div>
                                            <span className='text-[8px]'>Stock</span>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div className='h-3 w-3 bg-green-500'>

                                            </div>
                                            <span className='text-[8px]'>Allocated</span>
                                        </div>

                                    </div>
                                    <div className="radial-progress text-white mt-2" style={{ "--value": "100", "--size": "3rem", "--thickness": "5px" }}>
                                        <div className="radial-progress text-primary z-20" style={{ "--value": "70", "--size": "3rem", "--thickness": "5px" }}>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='p-6 bg-white mt-3'>
                <ul className='flex items-center gap-6'>
                    <li ><Link className=''>Message</Link></li>
                    <li ><Link className=''>Auction</Link></li>
                    <li ><Link className=''>Marketplace</Link></li>
                    <li ><Link className='border-b-4 pb-3 border-green-500'>Feedback</Link></li>
                </ul>
                <hr className='my-3' />
                <div>

                </div>
                <hr className='my-3' />
                <hr className='my-3' />





            </div >



        </div>
    );
};

export default AddItem;