import React from 'react';

const About = () => {
    return (
        <div id='about'>
            <div  className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='md:text-5xl text-3xl mx-2 font-bold sm:text-4xl'>Trusted by developers  </h2>
                    <h2 className='md:text-5xl text-3xl font-bold sm:text-4xl '>across the world</h2>
                    <p className='text-lg py-4 mb-6 p-6 text-gray-500'>Lorem Ipsum is simply dummy text of the printing and <span className='hidden md:block lg:block'>typesetting industry.</span> </p>
                </div>
               <div className='grid md:grid-cols-3 gap-6 md:mx-0 lg:mx-0 mx-2 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100%</p>
                        <p className='text-gray-400 mt-2'>Complete</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>24/8</p>
                        <p className='text-gray-400 mt-2'>Delevery</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>200K</p>
                        <p className='text-gray-400 mt-2'>Transactions</p>
                    </div>
               </div>
            </div>
        </div>
        </div>
    );
};

export default About;