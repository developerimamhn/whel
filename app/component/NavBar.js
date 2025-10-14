"use client";


import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); // For background styling
    const [isVisible, setIsVisible] = useState(true); // For show/hide
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks scroll direction

    // Handle clicks outside to close the menu
    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Smooth scroll to section
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth",
            });
            setToggle(false);
        }
    };

    // Scroll logic for show/hide and background change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Update scrolled state for background styling
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollPos < 50) {
                setIsVisible(true); // Show near the top
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToTop   = (e, targetId) => {
        e.preventDefault();
        if (targetId === "") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      

    return (
        <div className={` header ${scrolled ? "scrolled" : " "}  w-full header backgronsdvg   ${
            isVisible ? "translate-y-0 transition-transform duration-300" : "-translate-y-full transition-transform duration-300 "
        }`}>
            
            <header className='px-[24px] sm:px-[40px] md:px-[48px] lg:px-[64px] xl:px-[96px] 2xl:px-[114px] border-amber-600  flex justify-between items-center py-[12px] sm:py-[14px] lg:py-[16px] relative  sm:overflow-hidden'>
            <dev className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></dev>
            <Link onClick={(e) => handleScrollToTop(e, "")} href='/' className='cursor-pointer flex items-center justify-start Froggo-Logo'>
                <Image className='w-full h-[20px] sm:h-[26px] 2xl:h-[30px]' src={logo} alt=''/></Link>
                <div className='sm:hidden relative top-[-11px] -left-6'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                 

                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:left-0 sm:relative duration-1000 z-[999] sm:opacity-100 flex justif-start sm:justify-start items-start sm:items-center gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] 2xl:gap-[40px] sm:bg-transparent bg-[#15161B] sm:flex-row flex-col p-[20px] sm:p-[0] sm:w-fit w-full h-screen sm:h-full pl-[24px] sm:pl-[32px] md:pl-[36px] lg:pl-[40px] xl:pl-[48px] 2xl:pl-[60px]
                    ${toggle ? 'left-[0]' :'left-[120%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#About" onClick={(e) => handleScroll(e, "About")}>
                    About</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#TGPT" onClick={(e) => handleScroll(e, "TGPT")}>
                    TGPT </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Sona" onClick={(e) => handleScroll(e, "Sona")}>
                    Sona</a>
                    
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Research" onClick={(e) => handleScroll(e, "Research")}>
                    Research</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Staking" onClick={(e) => handleScroll(e, "Staking")}>
                    Staking</a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#AIMarket" onClick={(e) => handleScroll(e, "AIMarket")}>
                    AI Market</a>

                    <ul className='sm:hidden flex flex-col ml-atuo gap-4'>
                    <button className='buttonauditelt relative  cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center py-[10px] sm:py-[11px] md:py-[12px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] group gap-[7.50px]'>
                              <div
                                class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-b from-[#fff]/50 via-[#C044FF]/50 to-[#C044FF]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"
                            ></div>
                            Connect Wallet
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[18px]' viewBox="0 0 18 18" fill="none">
                            <path d="M5.81641 3.525C3.05498 3.525 0.816406 5.76358 0.816406 8.525C0.816406 11.2864 3.05498 13.525 5.81641 13.525C8.57783 13.525 10.8164 11.2864 10.8164 8.525C10.8164 7.8139 10.668 7.13746 10.4004 6.525" stroke="white" stroke-linecap="square"/>
                            <path d="M11.8164 13.525C14.5778 13.525 16.8164 11.2864 16.8164 8.525C16.8164 5.76358 14.5778 3.525 11.8164 3.525C9.05498 3.525 6.81641 5.76358 6.81641 8.525C6.81641 9.2058 6.95247 9.8548 7.19889 10.4464" stroke="white" stroke-linecap="square"/>
                            </svg>
                        </button>
                    </ul>
                </nav>
                
                <ul className='sm:flex hidden gap-4'>
                        <button className='buttonauditelt relative  cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center py-[10px] sm:py-[11px] md:py-[12px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] group gap-[7.50px]'>
                              <div
                                class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-b from-[#fff]/50 via-[#C044FF]/50 to-[#C044FF]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"
                            ></div>
                            Connect Wallet
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[18px]' viewBox="0 0 18 18" fill="none">
                            <path d="M5.81641 3.525C3.05498 3.525 0.816406 5.76358 0.816406 8.525C0.816406 11.2864 3.05498 13.525 5.81641 13.525C8.57783 13.525 10.8164 11.2864 10.8164 8.525C10.8164 7.8139 10.668 7.13746 10.4004 6.525" stroke="white" stroke-linecap="square"/>
                            <path d="M11.8164 13.525C14.5778 13.525 16.8164 11.2864 16.8164 8.525C16.8164 5.76358 14.5778 3.525 11.8164 3.525C9.05498 3.525 6.81641 5.76358 6.81641 8.525C6.81641 9.2058 6.95247 9.8548 7.19889 10.4464" stroke="white" stroke-linecap="square"/>
                            </svg>
                        </button>
                </ul>
                
                
            </header>
            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;