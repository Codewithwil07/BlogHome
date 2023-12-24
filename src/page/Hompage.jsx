import React from 'react';
import Header from '../component/Header';
import Hero from '../component/Hero';
import Main from '../component/Content';

const Hompage = () => {
    return (
        <section className='grid grid-rows-1 overflow-x-hidden'>
            <Header />
            <Hero />
            <Main />
        </section>
    );
};

export default Hompage;
