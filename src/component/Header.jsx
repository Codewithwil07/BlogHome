/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Logo from '/src/assets/icons/Logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState('work');
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollDown = prevScrollPos < currentScrollPos
            setVisible(!(isScrollDown && currentScrollPos > 50));
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prevScrollPos]);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };
    return (
        <nav className={` ${visible ? 'translate-y-0' : '-translate-y-full'} px-32 flex justify-between items-center bg-transparent bg-opacity-30 backdrop-blur-md z-50 fixed w-screen h-20`}>
            <img src={Logo} alt='' className='h-36' />
            <div className='flex gap-10'>
                <NavLink
                    to=''
                    onClick={() => handleMenuClick('work')}
                    className={` ${
                        activeMenu === 'work'
                            ? 'border-b-4 pb-1 border-b-black'
                            : ''
                    } text-xl text-black font-semibold`}
                >
                    Work
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => handleMenuClick('about')}
                    className={` ${
                        activeMenu === 'about'
                            ? 'border-b-4 pb-1 border-b-black'
                            : ''
                    } text-xl text-black font-semibold`}
                >
                    About
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => handleMenuClick('services')}
                    className={` ${
                        activeMenu === 'services'
                            ? 'border-b-4 pb-1 border-b-black'
                            : ''
                    } text-xl text-black font-semibold`}
                >
                    Services
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => handleMenuClick('ideas')}
                    className={` ${
                        activeMenu === 'ideas'
                            ? 'border-b-4 pb-1 border-b-black'
                            : ''
                    } text-xl text-black font-semibold`}
                >
                    Ideas
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => handleMenuClick('careers')}
                    className={` ${
                        activeMenu === 'careers'
                            ? 'border-b-4 pb-1 border-b-black'
                            : ''
                    } text-xl text-black font-semibold`}
                >
                    Careers
                </NavLink>
                <NavLink
                    to=''
                    onClick={() => handleMenuClick('contact')}
                    className={` ${
                        activeMenu === 'contact'
                            ? 'border-b-4 pb-1 border-b-black'
                            : ''
                    } text-xl text-black font-semibold`}
                >
                    Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;
