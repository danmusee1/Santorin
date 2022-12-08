import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";

import Image from 'next/image';
import Link from 'next/link';
import BackgroundCircles from './Backgroundcircles';

type Props = {}

export default function Hero({}: Props) {
    const[text,count] = useTypewriter({
        words:[
            "SANTORIN",
            "DECENTRALIZED MULTIPURPOSE COMPANY",
            "<WELCOME/>",
        ],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src="/images/santorin-logo.png" alt="profileimg" height="130" width="130" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                blockchain innit
            </h2>
            <h1 className='text-5xl lg:text-5xl font-semibold px-10'>
            <span className="mr-3 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">{text}</span>
            <Cursor cursorColor='#F7ABBA'/>
        </h1>
      
        <button className="tracking-[15px] m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">DISCOVER</button>
        </div>
        
    </div>
  )
}