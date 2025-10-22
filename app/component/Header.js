'use client';

import { gsap } from "gsap";
import Image from 'next/image';
import { useEffect, useRef } from "react";
import HeroPage from './HeroPage';
import Div from './image/Div.png';
import largecomet from './image/large-comet.png';
import largecomet1 from './image/large-comet1.png';
import NavBar from './NavBar';


const Header = () => {
    const svgRef = useRef(null);

    useEffect(() => {
      // Ensure GSAP runs only on the client-side
      if (typeof window === "undefined") return;
  
      const svg = svgRef.current;
      if (!svg) return; // Guard against null ref
  
      // Target SVG elements directly with querySelectorAll
      const verticalLines = svg.querySelectorAll(".vertical-lines path");
      const horizontalLines = svg.querySelectorAll(".horizontal-lines path");
      const rectangles = svg.querySelectorAll(".rect-1, .rect-2, .rect-3");
      const highlightLines = svg.querySelectorAll(
        ".highlight-line, .vertical-highlight"
      );
  
      // Animate vertical lines
      gsap.from(verticalLines, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
      });
  
      // Animate horizontal lines
      gsap.from(horizontalLines, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.5,
      });
  
      // Animate rectangles
      gsap.from(rectangles, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.3,
        delay: 1,
      });
  
      // Animate highlight lines
      gsap.fromTo(
        highlightLines,
        { opacity: 0.5 },
        {
          opacity: 1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.2,
          delay: 1.5,
        }
      );
    }, []);
    return (
        <div className='relative overflow-hidden'>
            <NavBar/>
            <HeroPage/>
        </div>
    );
};

export default Header;