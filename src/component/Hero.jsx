/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Banner from '/src/assets/images/Hero.jpg';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
const Hero = () => {
    return (
        <ParallaxProvider>
            <Parallax className='h-1/2' y={[-90, 90]}>
                <div className='flex flex-col items-center absolute z-10 pt-20 inset-32'>
                    <p className='text-5xl font-semibold text-white'>Ideas</p>
                    <p className='text-3xl font-semibold text-white'>
                        Where all our great things begin
                    </p>
                </div>
                <img
                    src={Banner}
                    className='w-full h-[30rem] object-cover filter brightness-50 -z-10'
                    alt=''
                />
                <div className='relative bg-white -translate-y-32 w-screen h-60 -skew-y-6 transform'></div>
            </Parallax>
        </ParallaxProvider>
    );
};

export default Hero;
