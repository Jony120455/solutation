import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <div id='footer'>
            <div  className='w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div>
                    <h6 className='uppercase font-bold pl-2'>Solutaions</h6>
                    <ul>
                        <li className='py-1'><a href='#home'>Analytics</a></li>
                        <li className='py-1'><a href='#home'>Marketing</a></li>
                        <li className='py-1'><a href='#home'>Data</a></li>
                        <li className='py-1'><a href='#home'>Clauds</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className='uppercase font-bold pl-2'>Support</h6>
                    <ul>
                        <li className='py-1'><a href='#home'>Pricing</a></li>
                        <li className='py-1'><a href='#home'>Documentation</a></li>
                        <li className='py-1'><a href='#home'>Gidnes</a></li>
                        <li className='py-1'><a href='#home'>API Status</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className='uppercase font-bold pl-2'>Company</h6>
                    <ul>
                        <li className='py-1'><a href='#home'>About</a></li>
                        <li className='py-1'><a href='#home'>Blog</a></li>
                        <li className='py-1'><a href='#home'>Jobs</a></li>
                        <li className='py-1'><a href='#home'>Press</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className='uppercase font-bold pl-2'>Legal</h6>
                    <ul>
                        <li className='py-1'><a href='#home'>Claims</a></li>
                        <li className='py-1'><a href='#home'>Privacy</a></li>
                        <li className='py-1'><a href='#home'>Terms</a></li>
                        <li className='py-1'><a href='#home'>Polices</a></li>
                    </ul>
                </div>
                <div className='col-span-2 m-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                    <p className='py-4'>The latest news, articles, and resources, sent to our inbox weekly</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded mb-4' type='email'/>
                        <button className='p-2 mb-4'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='flex md:flex-row lg:flex-row flex-col max-w-[1240px] pt-4 text-center md:text-start lg:text-start mx-auto justify-between sm:flex-row text-gray-400'>
                <p>2022 Workflow ,LLc All rights resrved</p>
                <div className='flex justify-center mt-4 md:mt-0 lg:mt-0  sm:max-w[300px] text-2xl'>
                        <a className='' href='#'><AiFillLinkedin/></a>
                        <a className='ml-5' href='#'><AiFillTwitterCircle/></a>
                        <a className='ml-5' href='#'><BsGithub/></a>
                        <a className='ml-5' href='#'><BsFacebook/></a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;