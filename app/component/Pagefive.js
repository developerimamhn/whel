'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import cursorGlow from './image/cursor-glow.svg';
import numbeingss from './image/numbeingss.png';
import image9 from './image/slide5.png';

gsap.registerPlugin(ScrollTrigger);


const Pagefive = () => {
  const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item (text content)
  const acquireRef = useRef(null); // Second grid item (image)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    // Create GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            // Create a timeline for better control and sequencing
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top 80%',
                end: 'bottom 10%', // Desktop-specific values
                scrub: 0.8,
              },
            });
            tl.fromTo(
              wrapperRef.current,
              { x: -100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
              },
              0 
            );
            tl.fromTo(
              gridItem1Ref.current,
              { x: 150, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
              },
              0.1 // Slight stagger
            );

            // Second grid item (image) animation (faster right to left)
            tl.fromTo(
              acquireRef.current,
              { x: 50, opacity: 0, scale: 0.95 },
              {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6, // Faster animation
                ease: 'power3.out',
              },
              0.25 // Stagger for visual hierarchy
            );
          }
        }
      );
    }, wrapperRef); // Scope animations to wrapperRef for React's strict mode

    // Cleanup GSAP context and animations
    return () => ctx.revert();
  }, []);
    return (
        <div id='Blog' className='relative py-[80px] sm:py-[60px] md:py-[70px] lg:py-[90px] xl:py-[120px] 2xl:py-[150px]'>
            <div ref={wrapperRef} className='relative container mx-auto'>
              <h2 className="tradines text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] !text-center pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[64px]">
                One-Click Agent <br/> Deployment
              </h2>
                <div className="grid grid-cols-1 sm:grid-cols-12 items-center sm:px-0 px-6 justify-between gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]">
                  <div className='ourthreeline cursor-none col-span-4 pt-[30px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] overflow-hidden'
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  >
                    <div
                        class="absolute inset-0 block h-full z-10 w-full animate-gradient bg-gradient-to-t from-[#ffffff38] via-[#FFFFFF29] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[2px] ![mask-composite:subtract]"
                    ></div>
                    <Image className='w-full absolute top-0 left-0 h-full z-[1] ' src={image9} alt='Loading...'/>
                    <div className='relative z-10'>
                    <Image className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[60px] mx-auto sm:mx-0' src={numbeingss} alt='loading...'/>
                    <h2 className="tradines text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]  sm:!text-left">
                      Instant Tokenization
                    </h2>
                    <p className="Tradealltypinws text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[7px] sm:pt-[8px] md:pt-[9px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[12px] text-center sm:!text-left">
                      Create your first tokenized agent in less than 5 minutes.
                    </p>
                    </div>
                    
                  </div>
                  
                  <div className='ourthreeline cursor-none col-span-4 pt-[30px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] overflow-hidden'
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  >
                    <div
                        class="absolute inset-0 block h-full z-10 w-full animate-gradient bg-gradient-to-t from-[#ffffff38] via-[#FFFFFF29] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[2px] ![mask-composite:subtract]"
                    ></div>
                    <Image className='w-full absolute top-0 left-0 h-full z-[1]' src={image9} alt='Loading...'/>
                    <div className='relative z-10'>
                    <Image className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[60px] mx-auto sm:mx-0' src={numbeingss} alt='loading...'/>
                    <h2 className="tradines text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] sm:!text-left">
                      Fair Stealth Launch
                    </h2>
                    <p className="Tradealltypinws text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[7px] sm:pt-[8px] md:pt-[9px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[12px] text-center sm:!text-left">
                      Launch your token with a custom randomization algorithm for maximum launch protection.
                    </p>
                    </div>
                    
                  </div>
                  <div className='ourthreeline cursor-none col-span-4 pt-[30px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] overflow-hidden'
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  >
                    <div
                        class="absolute inset-0 block h-full z-10 w-full animate-gradient bg-gradient-to-t from-[#ffffff38] via-[#FFFFFF29] bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[2px] ![mask-composite:subtract]"
                    ></div>
                    <Image className='w-full absolute top-0 left-0 h-full z-[1]' src={image9} alt='Loading...'/>
                    <div className='relative z-10'>
                    <Image className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[60px] mx-auto sm:mx-0' src={numbeingss} alt='loading...'/>
                    <h2 className="tradines text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] sm:!text-left">
                      Build Now, Tokenize Later
                    </h2>
                    <p className="Tradealltypinws text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[7px] sm:pt-[8px] md:pt-[9px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[12px] text-center sm:!text-left">
                      Build your agent and prime it&apos;s growth before releasing it&apos;s native token.
                    </p>
                    </div>
                    
                  </div>
                </div>
            </div>
            {hovering && (
            <Image
              src={cursorGlow}
              alt="cursor"
              className="pointer-events-none fixed w-[200px] h-[200px] z-[999] transition-transform duration-100 ease-out"
              style={{
                top: cursorPos.y,
                left: cursorPos.x,
                transform: 'translate(-50%, -50%)',
              }}
              />
              )}
        </div>
    );
};

export default Pagefive;