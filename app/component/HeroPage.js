'use client';


import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import righticon from './image/nohat_upscaled_x4_e7d52472b0e5d3c 1.png';
import logoimage1 from './image/Semantic 1 → k2BhPfyA4952AQUxSBMBVlWfD8.png.png';
import logoimage2 from './image/svg809245722_2501.png';
import logoimage3 from './image/svg2023024819_14944.png';
import logoimage4 from './image/Orange Dao 2 → 396p5qUkBUQf9QmbvTE2grO5PQ.png.png';


const HeroPage = () => {

  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Check if the screen width is greater than 768px (non-mobile)
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      // Animation for text elements
      gsap.from(textRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animation for buttons
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Animation for image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);

  const itemRefs = useRef([]);

  // GSAP animation effect
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1, // Delay between each item
          }
        );
      });
    }
  }, []);

// ref={buttonRef}
    return (
        <div id="hero"  className='relative container mx-auto'>
          <div className='relative z-[2]'>
            <div className='pt-[40px] sm:pt-[40px] md:pt-[50px] lg:pt-[60px] xl:pt-[80px] 2xl:pt-[170px] sm:pb-0 pb-[50px] container mx-auto px-[24px] sm:px-0 w-full '>
                  
                <div  className='flex items-center justify-between pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[0px]'>
                  <div className='transitionh2'>
                    <h2 className='tradines text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[84px]'>Your money,</h2>
                    <h2 className='tradines text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[84px]'>working harder.</h2>
                  </div>
                  <div className='transitionh3'>
                    <p className='bitstartp text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>An integrated AI app ecosystem designed to serve 1M+ <br/> users on the Solana blockchain.</p>
                    <div className='flex items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[28px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[24px]'>
                      <button className='getstared Link-manu-bar cursor-pointer font-medium !text-[#fff] hover:!text-[#fff] px-[11px] sm:px-[12px] md:px-[13px] lg:px-[14px] xl:px-[15px] 2xl:px-[17px] py-[4px] lg:py-[8px]'>Get Started</button>
                      <button className='getstaredss Link-manu-bar cursor-pointer font-medium px-[11px] sm:px-[12px] md:px-[13px] lg:px-[14px] xl:px-[15px] 2xl:px-[17px] py-[4px] lg:py-[8px] flex items-center gap-1.5'>Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                          <path d="M4.91992 1.5H11.4199V8H10.4199V3.207L3.27392 10.354L2.56592 9.646L9.71292 2.5H4.91992V1.5Z" fill="#666666"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex items-start justify-between '>
                  <div className='pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[92px] transitionh2'>
                    <p className='pointapy text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px]'><span className='text-[#7433FF] font-bold'>11.00%</span> APY</p>
                  </div>
                  <div className=''>
                    <Image className='rightmouse object-cover rounded-[9999px] mx-auto z-10 top-0 w-1/2 h-1/2' src={righticon} alt=''/>
                  </div>
                  <div className='earniusdsa text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[108px] transitionh3'>Earn with paraUSD</div>
                </div>
            </div>
            <div className='logoandpaddingsec flex items-center sm:flex-row flex-col justify-between gap-[132px] sm:gap-[136px] md:gap-[140px] lg:gap-[148px] xl:gap-[164px] 2xl:gap-[196px]'>
              <div className='transitionh2'>
                <p className='earniusdsa text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>Backed by the best companies <br/>and visionary angels.</p>
              </div>
              <div className='flex items-center gap-[20px] sm:gap-[24px] md:gap-[32px] lg:gap-[36px] xl:gap-[40px] 2xl:gap-[44px] transitionh3'>
                <Image className='h-[14px] sm:h-[15px] md:h-[16px] lg:h-[20px] xl:h-[24px] 2xl:h-[26px] w-fit hover:scale-105 cursor-pointer duration-300' src={logoimage1} alt='loading...'/>
                <Image className='h-[14px] sm:h-[15px] md:h-[16px] lg:h-[20px] xl:h-[24px] 2xl:h-[26px] w-fit hover:scale-105 cursor-pointer duration-300' src={logoimage2} alt='loading...'/>
                <Image className='h-[14px] sm:h-[15px] md:h-[16px] lg:h-[20px] xl:h-[24px] 2xl:h-[26px] w-fit hover:scale-105 cursor-pointer duration-300' src={logoimage3} alt='loading...'/>
                <Image className='h-[14px] sm:h-[15px] md:h-[16px] lg:h-[20px] xl:h-[24px] 2xl:h-[26px] w-fit hover:scale-105 cursor-pointer duration-300' src={logoimage4} alt='loading...'/>
              </div>
            </div>
          </div>
        </div>
    );
};

export default HeroPage;