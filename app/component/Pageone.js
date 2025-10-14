'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import threetimes from './image/2e7e7c7eed6cf07b08285139ae987827.gif';
import onetime from './image/Gif 2.gif';
import towtime from './image/b32a16c488796f6bedacffe2f113e517.gif';
import linerone from './image/linerone.png';
import numbeingss from './image/numbeingss.png';

gsap.registerPlugin(ScrollTrigger);



const Pageone = () => {
  const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item (text content)
  const acquireRef = useRef(null); // Second grid item (image)

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
                start: 'top 100%',
                end: 'bottom 100%', // Adjusted for smoother completion
                scrub: 0.8,
              },
            });

            // Main wrapper animation (left to right)
            tl.fromTo(
              wrapperRef.current,
              { x: -100, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
              },
              0 // Start at timeline's beginning
            );

            // First grid item (text content) animation (left to right)
            tl.fromTo(
              gridItem1Ref.current,
              { x: -50, opacity: 0, scale: 0.95 },
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
        <div  id='About'  className='relative'>
            <div   className=''>
              <div ref={wrapperRef} className='container mx-auto px-[24px] sm:px-0'>
                <div className='bacxkgaAS mx-auto py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[90px] relative sm:gap-0 gap-12'>
                  <div  className='flex items-center justify-between sm:flex-row flex-col pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[64px]'>
                    <h2 className='tradines  sm:!text-left text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px]'>The Gateway to Solana <br/> Blockchain AI</h2>
                    <p className='bitstartpsss text-white/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[30px] text-center sm:text-left'>Step into the future with the ultimate gateway <br/> to AI on the Solana blockchain.</p>
                  </div>
                <div ref={acquireRef} className='col-span-12 sm:col-span-7 flex items-center '>
                  <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px]'>
                    <div className='col-span-1 row-span-2 relative borderingandpadding !bg-[#010214] overflow-hidden justify-between'>
                      <Image className='absolute top-0 right-0' src={linerone} alt='Loading...'/>
                      <Image className='w-8/10 mx-auto' src={numbeingss} alt='Loading...'/>
                      <div className='pl-[14px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[32px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>
                        <h3 className='numberingtest text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] pb-[10px] sm:pb-[11px] md:pb-[12px]'>Solana&apos;s Flagship AI Market</h3>
                        <p className='Tradealltypinws text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Trade all types of AI commodities and agent tokens from <br/> Solana&apos;s largest marketplaces, all in one place.</p>
                      </div>
                    </div>
                    <div className='col-span-1 row-span-1 relative borderingandpadding !bg-[#010214] overflow-hidden justify-between'>
                      {/* <Image className='absolute top-0 right-0 z-[1]' src={linerone} alt='Loading...'/> */}
                      <Image className='w-5/10 mx-auto contrast-94 absolute top-0 right-0 z-0' src={onetime} alt='Loading...'/>
                      <Image className='w-4/10 mx-auto brightness-100 opacity-0' src={onetime} alt='Loading...'/>
                      <div className='relative z-[1] pl-[14px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[32px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>
                        <h3 className='numberingtest text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] pb-[10px] sm:pb-[11px] md:pb-[12px]'>AI Market</h3>
                        <p className='Tradealltypinws text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Your one stop access to the entire ecosystem.</p>
                      </div>
                    </div>
                    <div className='col-span-1 row-span-1 relative borderingandpadding !bg-[#010214] overflow-hidden justify-between'>
                      {/* <Image className='absolute top-0 right-0' src={linerone} alt='Loading...'/> */}
                      <Image className='w-5/10 mx-auto absolute top-0 right-0 z-0' src={towtime} alt='Loading...'/>
                      <Image className='w-4/10 mx-auto brightness-100 opacity-0' src={towtime} alt='Loading...'/>
                      <div className='relative z-[1] pl-[14px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[32px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>
                        <h3 className='numberingtest text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] pb-[10px] sm:pb-[11px] md:pb-[12px]'>Search Engine &#x7b;TGPT&#x7d;</h3>
                        <p className='Tradealltypinws text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Your one stop access to the entire ecosystem.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between relative borderingandpadding !bg-[#010214] overflow-hidden mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]'>
                      {/* <Image className='absolute top-0 right-0 z-[1]' src={linerone} alt='Loading...'/> */}
                      {/* <Image className='w-5/10 mx-auto contrast-94 absolute top-0 right-0 z-0' src={threetimes} alt='Loading...'/> */}
                      <div className='relative z-[1] pl-[14px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[32px] py-[25px]'>
                        <h3 className='numberingtest text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[38px]'>Solana’s AI Market</h3>
                        <p className='Tradealltypinws text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px] pt-[10px] sm:pt-[11px] md:pt-[12px]'>Deploy, tokenize and trade AI Agents across Solana’s <br className='sm:block hidden'/> biggest marketplaces.</p>
                        <button className='buttonauditelt relative  cursor-pointer text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] flex items-center py-[10px] sm:py-[11px] md:py-[12px] px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px] group gap-[7.50px]'>
                              <div
                                class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-b from-[#fff]/50 via-[#C044FF]/50 to-[#C044FF]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"
                            ></div>
                            Launch Now &#8594;
                        </button>
                      </div>
                      <Image className='w-4/10 mx-full' src={threetimes} alt='Loading...'/>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Pageone;