import React from 'react';
import img2 from '../../assets/support.jpg'
import { BsArrowRight } from 'react-icons/bs';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { BsFillCpuFill } from 'react-icons/bs';
import { CgData } from 'react-icons/cg';

const Support = () => {
    return (
        <div id='support'>
            <div className='w-full mt-24'>
            <div className='w-full h-[600px] bg-gray-900/90 absolute '>
                <img className='w-full h-full object-cover mix-blend-overlay' src={img2} alt='/'/>
            </div>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-3xl md:text-5xl lg:text-5xl font-bold py-4 text-center'>Finding the right team</h3>
                    <p className=' text-lg text-center text-slate-300'>Lorem Ipsum is simply dummy text of the printing <span className='hidden md:block lg:block'>and typesetting industry.</span> </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:mx-2 lg:grid-cols-3 relative gap-x-6 mt-10 gap-y-16 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white mx-2 rounded-xl md:shadow-2xl'>
                        <div className='p-8'>
                            <BsFillTelephoneInboundFill
                            className='w-16 h-16 text-4xl p-4 z-10 bg-indigo-600 text-white rounded-lg mt-[-4rem]'></BsFillTelephoneInboundFill>
                            <h3 className='text-2xl font-bold my-6'>Sales</h3>
                            <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className='pl-8 py-4 '>
                            <a className='flex items-center text-indigo-600' href='#contact'>Contact Now <BsArrowRight className='ml-2'></BsArrowRight></a>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl md:shadow-2xl'>
                        <div className='p-8'>
                            <BsFillCpuFill
                            className='w-16 h-16 text-4xl p-4 z-10 bg-indigo-600 text-white rounded-lg mt-[-4rem]'></BsFillCpuFill>
                            <h3 className='text-2xl font-bold my-6'>Technical Support</h3>
                            <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className=' pl-8 py-4 '>
                            <a className='flex items-center text-indigo-600' href='#contact'>Contact Now <BsArrowRight className='ml-2'></BsArrowRight></a>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl md:shadow-2xl'>
                        <div className='p-8'>
                            <CgData
                            className='w-16 h-16 text-4xl p-4 z-10 bg-indigo-600 text-white rounded-lg mt-[-4rem]'></CgData>
                            <h3 className='text-2xl font-bold my-6'>Media Inquere</h3>
                            <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className=' pl-8 py-4 '>
                            <a className='flex items-center text-indigo-600' href='#contact'>Contact Now <BsArrowRight className='ml-2'></BsArrowRight></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Support;