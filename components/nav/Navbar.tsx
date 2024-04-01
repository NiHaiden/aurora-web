"use client";

import React, {useEffect, useState} from 'react';
import {Transition} from '@headlessui/react';
import {HammerIcon} from "lucide-react";

function Navbar2() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    });

    return (
        <header
            className={`z-40 bg-blue-900 top-0 w-full animate-fadeInDown ${scroll ? "sticky bg-white" : "bg-none"} `}>
            <nav className={"flex flex-row gap-16 text-xl text-black justify-center"}>
                <div><a href={"#about"}>About</a></div>
                <div><a href={"#features"}>Features</a></div>
                <div><a href={"#downloads"}>Community</a></div>
            </nav>
            <div className={"items-end text-white"}>
                Download
            </div>
        </header>
    );
}

const Navbar = () => {
    const [isTop, setIsTop] = useState(true);
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY > 100;
            setIsTop(!isTop);
        });
    }, []);

    return (
        <nav
            className={`fixed w-full z-30 top-0 text-white transition duration-300 ease-in-out ${isTop ? 'bg-transparent' : 'bg-green-500'}`}>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <a className='title-font font-medium text-white mb-4 md:mb-0'>
                    Aurora
                </a>
                <button
                    className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                    type='button'
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <HammerIcon/>
                </button>
                <Transition
                    show={navbarOpen}
                    enter='transition ease-out duration-100 transform'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='transition ease-in duration-75 transform'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >
                    {(ref) => (
                        <div ref={ref} className='lg:flex flex-grow items-center' id='example-navbar-warning'>
                            <div>Hello World!</div>
                        </div>
                    )}
                </Transition>
            </div>
        </nav>
    );
};
export default Navbar;
