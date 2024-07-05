import Image from 'next/image'
import React from 'react'

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const MidFooter = () => {
  return (
    <>
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
    </>
  )
}

export default MidFooter;