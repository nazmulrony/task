import React from 'react';
import { BiArrowBack } from 'react-icons/bi'
import { CiShare1 } from 'react-icons/ci'
import { AiFillStar } from 'react-icons/ai'
import { IoIosRadioButtonOn } from 'react-icons/io'
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'
import img5 from '../assets/img-5.png'
import vector12 from '../assets/Vector 12.png'
import vector from '../assets/Vector.png'


const AddItem = () => {
    return (
        <div className='mx-6 bg-white '>
            <div className='p-6'>
                <button className='flex items-center'><BiArrowBack size={20} /> Back</button>
                <div className='flex mt-6 gap-8'>
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
                        <div className=' flex mt-5 gap-4'>
                            <div className='bg-green-500 rounded-md p-6 text-white text-center shadow-lg'>
                                <IoIosRadioButtonOn className='mx-auto' />
                                <p className='text-xs'>Total Stock</p>
                                <p className='font-bold'>100lb</p>
                            </div>
                            <div className='relative rounded-md overflow-hidden shadow-lg p-3 '>
                                <img src={vector12} alt="" className='absolute left-0 bottom-0' />
                                <div className='flex justify-between  gap-5'>
                                    <p className='text-green-500 flex items-center font-bold'><img src={vector} alt="" className='w-full' /> Marketplace</p>
                                    <div>
                                        <div className='flex items-center'>
                                            <input type="checkbox" checked className="checkbox checkbox-success" />
                                            <label htmlFor="">lb</label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input type="checkbox" className="checkbox checkbox-success" />
                                            <label htmlFor="">g</label>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AddItem;