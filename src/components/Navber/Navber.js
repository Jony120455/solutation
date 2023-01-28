import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import './Navber.css'

const Navber = () => {

    const [navbar, setNavber]= useState(false)

    const handleNav = () =>{
        setNavber(!navbar)
    }
    return (
        <div className='w-screen h-[80px] z-10 fixed  bg-zinc-200 drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='lg:text-3xl font-bold mr-4 sm:text-3xl text-2xl'>SOLUTION.</h1>
                    <ul className='hidden md:flex'>
                        
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#support'>Support</a></li>
                        <li><a href='#platforms'>Platforms</a></li>
                        <li><a href='#pricing'>Pricing</a></li>
                        
                        
                    </ul>
                </div>

                <div className='hidden md:flex'>
                    <button className='border-none bg-transparent mr-4 text-black'>Sign in</button>
                    <button className='px-4 mr-6 py-2'>Sign Up</button>
                </div>

                <div className='md:hidden' onClick={handleNav}>
                    {
                        !navbar ? <AiOutlineMenu className='text-3xl mr-3 cursor-pointer'></AiOutlineMenu>:<RxCross2 className='text-3xl mr-2 cursor-pointer'></RxCross2>
                    }
                    
                </div>

            </div>
            <ul className={!navbar ? "hidden" :'absolute bg-zinc-200 w-full mr-6 px-8'}>
                        <li className='border-b-2 border-zinc-300 w-full'><a href='#home'>Home</a></li>
                        <li className='border-b-2 border-zinc-300 w-full'><a href='#about'>About</a></li>
                        <li className='border-b-2 border-zinc-300 w-full'><a href='#support'>Support</a></li>
                        <li className='border-b-2 border-zinc-300 w-full'><a href='#platforms'>Platforms</a></li>
                        <li className='border-b-2 border-zinc-300 w-full'><a href='#pricing'>Pricing</a></li>

                        <div className='flex  flex-col py-4'>
                            <button className='bg-transparent text-indigo-500 px-4 py-2 mb-4'>Sign in</button>
                            <button className='px-4  py-2'>Sign Up</button>
                        </div>
            </ul>
        </div>
    );
};

export default Navber;