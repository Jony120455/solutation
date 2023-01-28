import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
const Pricing = () => {
    return (
        <div id='pricing'>
            <div className='w-full text-white my-24 mt-0'>
            <div className='w-full h-[700px] bg-slate-900 absolute mix-blend-overlay'></div>

            <div className='max-w-[1240px] pt-28 mx-auto py-12 relative'> 
                <div className='text-center py-8 text-slate-300'>
                    <h2 className='sm:text-3xl md:text-3xl text-xl uppercase'>Pricing</h2>
                    <h3 className='sm:text-5xl md:text-5xl text-2xl my-2 font-bold text-white'>The right price for your research</h3>
                    <p className='my-2 py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>

                <div className='grid md:grid-cols-2'>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded shadow-2xl'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standare</span>
                        <div>
                            <p className='text-5xl font-bold py-4 flex'>$50 <span className='text-xl text-slate-500 flex justify-end flex-col'>/mo</span></p>
                        </div>
                            <p className='text-2xl py-4 text-gray-400'>Lorem Ipsum is simply dummy text</p>
                        <div>
                            <p className=' text-lg py-2 flex items-center '><BsArrowRight className='w-9 mr-5 ml-0 text-green-600'></BsArrowRight>Lorem Ipsum is simply</p>
                            <p className=' text-lg py-2 flex items-center '><BsArrowRight className='w-9 mr-5 ml-0 text-green-600'></BsArrowRight>Lorem Ipsum is simply</p>
                            <p className=' text-lg py-2 flex items-center '><BsArrowRight className='w-9 mr-5 ml-0 text-green-600'></BsArrowRight>Lorem Ipsum is simply</p>
                            <p className=' text-lg py-2 flex items-center '><BsArrowRight className='w-9 mr-5 ml-0 text-green-600'></BsArrowRight>Lorem Ipsum is simply</p>
                            <p className=' text-lg py-2 flex items-center '><BsArrowRight className='w-9 mr-5 ml-0 text-green-600'></BsArrowRight>Lorem Ipsum is simply</p>
                            <button className='py-3 mt-6  w-full'>Get start</button>
                        </div>
                    </div>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded shadow-2xl'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>premium</span>
                        <div>
                            <p className='text-5xl font-bold py-4 flex'>$50 <span className='text-xl text-slate-500 flex justify-end flex-col'>/mo</span></p>
                        </div>
                            <p className='text-2xl py-4 text-gray-400'>Lorem Ipsum is simply dummy text</p>
                        <div>
                            <p className=' text-lg py-2 flex items-center '><BsArrowRight className='w-9 mr-5 ml-0 text-green-600'></BsArrowRight>Lorem Ipsum is simply</p>
                            <p className=' text-lg py-2 flex items-center '><BsArrowRight className='w-9 mr-5 ml-0 text-green-600'></BsArrowRight>Lorem Ipsum is simply</p>
                            <p className=' text-lg py-2 flex items-center '><BsArrowRight className='w-9 mr-5 ml-0 text-green-600'></BsArrowRight>Lorem Ipsum is simply</p>
                            <p className=' text-lg py-2 flex items-center '><BsArrowRight className='w-9 mr-5 ml-0 text-green-600'></BsArrowRight>Lorem Ipsum is simply</p>
                            <p className=' text-lg py-2 flex items-center '><BsArrowRight className='w-9 mr-5 ml-0 text-green-600'></BsArrowRight>Lorem Ipsum is simply</p>
                            <button className='py-3 mt-6  w-full'>Get start</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Pricing;