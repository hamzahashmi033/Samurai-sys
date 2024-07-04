import React from 'react'
import PreFooter from './PreFooter'
// import MidFooter from './MidFooter'
// import CopyRight from './CopyRight'

import Image from 'next/image'

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
const MainFooter = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <PreFooter
          p1="Elevate you Presents"
          span1="Ready TO"
          h1="Elevate Your"
          h2="Digital Strategy?"
          p2="We want your campaigns to thrive. Digital Remedy connects the right data to the highest performing channels to nail your dream KPIs—so you can feel confident your media spend is worth every penny."
        />

        <button type='button' className='bg-black w-[15rem] text-white px-4 py-2 mt-5 font-semibold rounded text-sm sm:text-base lg:text-lg'> Book  Consultation </button>

        <div className="p-6"> {/* Add padding to the main container */}
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className="w-full lg:w-[625px] mb-6 lg:mb-0 text-center justify-center lg:text-left">
              <Image src={'/footer_logo.png'} width={100} height={100} className='mx-auto lg:mx-0 w-[140px]' />

              <p className='pt-6'>Samurai - Team of solution architects, developers, and consultants having only one aim in mind <span className='font-bold'>“deliver the best, nothing else”</span></p>
            </div>

            <div className="w-full lg:w-[594px] text-center lg:text-right p-6 lg:p-0">
              <ul className='flex flex-wrap justify-center lg:justify-end items-center gap-4 lg:gap-7'>
                <li>Terms and Conditions</li>
                <li>Publisher Terms</li>
                <li>Privacy Policy</li>
                <li>Our Partners</li>
              </ul>

              <ul className='flex justify-center lg:justify-end items-center gap-4 lg:gap-10 mt-7'>
                <div className='border border-black w-[60px] h-px flex-grow hidden lg:block' />
                <li><FaInstagram /></li>
                <li><FaLinkedinIn /></li>
                <li><FaFacebookF /></li>
                <li><FaTwitter /></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <MidFooter /> */}
        {/* <CopyRight /> */}

        <p className=' text-center text-white bg-black p-5'>All Rights Reserved | Copyrights ©2024</p>

      </div>
    </>
  )
}

export default MainFooter