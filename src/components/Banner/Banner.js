import React from 'react';
import img1 from '../../assets/cyber-bg.png'
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { BsServer } from 'react-icons/bs';
import { AiFillDatabase } from 'react-icons/ai';
import { FaPiedPiperSquare } from 'react-icons/fa';



const Banner = () => {
    return (
       <div id='home'>
             <div name='home' className='w-full h-screen flex flex-col justify-between '>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto sm:grid-cols-1'>
                <div className='n justify-center md:items-start w-full px-2 py-7'>
                    <p className='text-2xl'>Unique sequience & Production</p>
                    <h1 className='py-3 md:text-5xl lg:text-5xl text-3xl font-bold'>Cloud management</h1>
                    <p className='text-2xl'>This is our teach brand</p>
                    <button className='py-3 px-6 my-4 mt-2 sm:w-[60%]'>Get start</button>
                </div>

                <div>
                    <img className='w-full' src={img1} alt=''></img>
                </div>
                <div className='absolute flex flex-col py-8 md:max-w-[760px] bottom-[5%] mx-1 sm:left-2 md:left-1/4 transform  bg-zinc-200  border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p>Data Services</p>
                    <div className='flex justify-between flex-wrap px-4'>
                            <p className='flex px-4 py-2 text-slate-500' ><BsFillCloudUploadFill className='h-6 text-indigo-600'></BsFillCloudUploadFill> App Security</p>
                            <p className='flex px-4 py-2 text-slate-500' ><BsServer className='h-6 text-indigo-600'></BsServer> Dashboard design</p>
                            <p className='flex px-4 py-2 text-slate-500' ><AiFillDatabase className='h-6 text-indigo-600'></AiFillDatabase> Cloud Data</p>
                            <p className='flex px-4 py-2 text-slate-500' ><FaPiedPiperSquare className='h-6 text-indigo-600'></FaPiedPiperSquare> API</p>
                    </div>

                </div>
            </div> 
        </div>
       </div>
    );
};

export default Banner;