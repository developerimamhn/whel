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
          <svg className="w-full absolute top-0 left-0" viewBox="0 0 1745 1015" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="1390.03" cy="374.948" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="308.704" cy="643.275" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1188.04" cy="607.895" r="1.21175" fill="white" fill-opacity="0.6"/>
<circle cx="130.499" cy="937.191" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="1062.15" cy="729.997" r="1.21175" fill="white" fill-opacity="0.6"/>
<circle cx="1687.34" cy="864.477" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1258.96" cy="213.342" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="1476.56" cy="457.084" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="1330.14" cy="836.623" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1037.06" cy="603.404" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="51.7801" cy="338.689" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1282.3" cy="571.489" r="1.21175" fill="white" fill-opacity="0.15"/>
<circle cx="835.428" cy="564.167" r="1.21175" fill="white" fill-opacity="0.7"/>
<circle cx="533.393" cy="582.392" r="1.21175" fill="white" fill-opacity="0.15"/>
<circle cx="1447.27" cy="129.511" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="269.869" cy="706.455" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="1328.38" cy="872.443" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1078.35" cy="330.437" r="1.21175" fill="white" fill-opacity="0.15"/>
<circle cx="909.339" cy="258.033" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="612.452" cy="333.162" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="1361.79" cy="802.002" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1059.91" cy="89.9851" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="318.48" cy="178.71" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="17.0828" cy="459.059" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="112.08" cy="872.169" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="1666.74" cy="416.531" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="834.587" cy="95.5548" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1193.95" cy="999.652" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1612.21" cy="313.107" r="1.21175" fill="white" fill-opacity="0.15"/>
<circle cx="1367.46" cy="299.605" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="801.708" cy="255.675" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1411.98" cy="907.02" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="1248.36" cy="770.83" r="1.21175" fill="white" fill-opacity="0.6"/>
<circle cx="669.235" cy="156.762" r="1.21175" fill="white" fill-opacity="0.15"/>
<circle cx="1700.47" cy="198.415" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1625.14" cy="99.4497" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1314.35" cy="166.447" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="1117.19" cy="869.544" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="197.048" cy="474.154" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="534.717" cy="819.292" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="250.699" cy="530.968" r="1.21175" fill="white" fill-opacity="0.6"/>
<circle cx="542.219" cy="132.848" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="109.473" cy="933.215" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="969.837" cy="492.439" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="1280.34" cy="995.587" r="1.21175" fill="white" fill-opacity="0.15"/>
<circle cx="224.388" cy="471.611" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="694.211" cy="656.277" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="236.005" cy="251.118" r="1.21175" fill="white" fill-opacity="0.15"/>
<circle cx="554.7" cy="480.916" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="690.456" cy="290.222" r="1.21175" fill="white" fill-opacity="0.1"/>
<circle cx="1648.21" cy="925.434" r="1.21175" fill="white" fill-opacity="0.3"/>
<circle cx="574.331" cy="362.138" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="494.062" cy="340.038" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="1594.2" cy="964.771" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="1273.46" cy="389.91" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="1457.16" cy="71.09" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="535.273" cy="949.718" r="1.81763" fill="white" fill-opacity="0.15"/>
<circle cx="1627.2" cy="281.012" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="897.73" cy="343.927" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="550.808" cy="266.961" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="503.584" cy="355.308" r="1.81763" fill="white" fill-opacity="0.15"/>
<circle cx="262.652" cy="314.028" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="1602.58" cy="420.421" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="1455.43" cy="188.148" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="544.671" cy="439.887" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="1531.93" cy="710.64" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="1664.38" cy="974.911" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="579.217" cy="463.957" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="1455.22" cy="160.122" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="280.708" cy="208.982" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="1155.92" cy="412.71" r="1.81763" fill="white" fill-opacity="0.7"/>
<circle cx="1473.55" cy="264.406" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="67.551" cy="660.919" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="1206.58" cy="868.04" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="810.302" cy="92.8669" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="1463.7" cy="566.147" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="1475.94" cy="926.303" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="1651.03" cy="764.497" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="485.916" cy="844.562" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="1215.33" cy="626.863" r="1.81763" fill="white" fill-opacity="0.6"/>
<circle cx="578.965" cy="947.701" r="1.81763" fill="white" fill-opacity="0.7"/>
<circle cx="1230.38" cy="24.0636" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="15.2185" cy="747.116" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="1557.71" cy="796.406" r="1.81763" fill="white" fill-opacity="0.7"/>
<circle cx="1729.32" cy="904.755" r="1.81763" fill="white" fill-opacity="0.3"/>
<circle cx="1313.82" cy="934.621" r="1.81763" fill="white" fill-opacity="0.1"/>
<circle cx="674.899" cy="529.952" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="699.455" cy="243.489" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="43.0264" cy="367.889" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1435.37" cy="365.918" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="331.275" cy="68.8836" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="564.5" cy="648.023" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="244.503" cy="836.739" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1571.08" cy="657.519" r="0.605482" fill="white" fill-opacity="0.7"/>
<circle cx="792.707" cy="565.647" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1183.64" cy="917.068" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1435.65" cy="1011" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1345.33" cy="868.641" r="0.605482" fill="white" fill-opacity="0.7"/>
<circle cx="118.172" cy="633.475" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="133.855" cy="37.9758" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1630.83" cy="542.72" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="310.809" cy="242.221" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="374.554" cy="320.324" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="314.917" cy="367.735" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="963.399" cy="861.863" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="1146.08" cy="857.976" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="922.353" cy="464.391" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1359.52" cy="546.412" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1.66115" cy="455.684" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="573.345" cy="732.269" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1416.47" cy="96.9413" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1182.39" cy="228.315" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="49.2178" cy="29.9761" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1731.02" cy="93.9567" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="826.974" cy="219.782" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="848.723" cy="872.243" r="0.605482" fill="white" fill-opacity="0.7"/>
<circle cx="1037.8" cy="338.022" r="0.605482" fill="white" fill-opacity="0.8"/>
<circle cx="674.634" cy="52.6574" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="204.836" cy="676.25" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1604.41" cy="535.825" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="415.268" cy="572.239" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1625.16" cy="523.836" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1536.88" cy="924.442" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="1118.21" cy="405.347" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="157.306" cy="26.8092" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="365.811" cy="710.968" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1060.84" cy="1011.69" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1572.26" cy="998.371" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1019.34" cy="92.7621" r="0.605482" fill="white" fill-opacity="0.7"/>
<circle cx="695.774" cy="387.879" r="0.605482" fill="white" fill-opacity="0.8"/>
<circle cx="625.971" cy="59.2879" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="89.9561" cy="298.303" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="1195.32" cy="173.68" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1033.91" cy="158.285" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1322.2" cy="662.636" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="205.187" cy="960.316" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="448.039" cy="724.261" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="457.806" cy="421.71" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="994.646" cy="716.779" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="237.368" cy="745.027" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="979.401" cy="461.387" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="737.542" cy="140.306" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="240.169" cy="153.267" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="43.021" cy="728.062" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1238.48" cy="768.196" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="208.363" cy="919.177" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1201.85" cy="69.9502" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="976.741" cy="697.349" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="399.071" cy="219.742" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="1307.67" cy="912.389" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="160.582" cy="592.014" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="60.0703" cy="777.946" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1602.11" cy="991.365" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1689.55" cy="829.624" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="757.29" cy="63.8836" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="7.77931" cy="299.823" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="623.817" cy="781.763" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="765.58" cy="152.737" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1067.62" cy="673.793" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="78.7373" cy="201.452" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1719.19" cy="100.2" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="108.84" cy="290.031" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="630.219" cy="57.5568" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1145.8" cy="824.66" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1602.39" cy="469.301" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1410.89" cy="781.264" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1041.7" cy="421.442" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1217.37" cy="447.522" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="7.98439" cy="311.816" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="498.076" cy="331.463" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1611.61" cy="773.311" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1048.05" cy="68.9144" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1054.16" cy="782.001" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1683.08" cy="12.5073" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="28.8662" cy="95.8789" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="673.352" cy="274.07" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="516.199" cy="890.848" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="498.748" cy="394.033" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="399.467" cy="117.282" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="894.247" cy="84.1206" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="643.484" cy="32.686" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1160.39" cy="33.2398" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1009.91" cy="229.012" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="156.603" cy="1009.14" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1627.9" cy="784.822" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="249.729" cy="604.882" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1478.88" cy="488.639" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="390.06" cy="276.74" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1018.84" cy="769.66" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="334.848" cy="964.698" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1485.92" cy="615.849" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="825.498" cy="369.142" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="443.007" cy="87.6598" r="0.605482" fill="white" fill-opacity="0.7"/>
<circle cx="713.304" cy="94.5066" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="593.691" cy="67.7317" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1652.87" cy="700.229" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1071.93" cy="166.403" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1003.27" cy="23.4172" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="848.263" cy="813.349" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1050.06" cy="201.772" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1239.28" cy="423.726" r="0.605482" fill="white" fill-opacity="0.7"/>
<circle cx="1512.21" cy="125.202" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="408.233" cy="579.99" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="556.618" cy="117.942" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1485.25" cy="946.476" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="983.798" cy="162.058" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="632.449" cy="177.3" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1601.23" cy="420.888" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1359.34" cy="416.603" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1210.11" cy="904.621" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="459.041" cy="770.658" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1643.1" cy="852.68" r="0.605482" fill="white" fill-opacity="0.7"/>
<circle cx="65.96" cy="177.583" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="807.442" cy="279.078" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="982.94" cy="721.456" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="515.047" cy="3.35609" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="966.581" cy="836.841" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1719.69" cy="71.8993" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="703.326" cy="579.764" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="395.66" cy="436.209" r="0.605482" fill="white" fill-opacity="0.7"/>
<circle cx="544.841" cy="114.901" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1501.94" cy="636.099" r="0.605482" fill="white" fill-opacity="0.7"/>
<circle cx="1141.38" cy="488.267" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="110.013" cy="681.008" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="323.383" cy="961.521" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1004.26" cy="1001.46" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="473.926" cy="553.473" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="677.981" cy="98.8798" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="107.447" cy="943.384" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1727.53" cy="594.776" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1538.96" cy="239.618" r="0.605482" fill="white" fill-opacity="0.7"/>
<circle cx="810.711" cy="7.09791" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="266.021" cy="827.594" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1034.17" cy="266.936" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1693.69" cy="481.646" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1735.6" cy="406.83" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="1340.07" cy="45.5304" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="1557.95" cy="218.625" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="353.164" cy="795.707" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="134.121" cy="242.745" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="838.916" cy="446.948" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1577.6" cy="142.273" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1389.97" cy="535.977" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="674.718" cy="942.686" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1502.87" cy="731.618" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1251.07" cy="891.257" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="330.896" cy="730.928" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="536.29" cy="371.552" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="523.233" cy="168.422" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1007.77" cy="530.216" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1401.38" cy="560.012" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="341.397" cy="910.414" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="846.872" cy="987.387" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="397.004" cy="365.067" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1380.11" cy="224.981" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1217.63" cy="857.482" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1340.19" cy="699.396" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="90.5498" cy="643.964" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="645.739" cy="599.95" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="696.39" cy="251.156" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="745.486" cy="773.879" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="397.043" cy="448.082" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="378.721" cy="440.785" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1048.83" cy="329.415" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="133.306" cy="18.5562" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1198.49" cy="401.132" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="1193.27" cy="241.946" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1669.16" cy="92.7966" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="194.857" cy="860.062" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="734.14" cy="84.1621" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1093.2" cy="136.241" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="166.775" cy="182.221" r="0.605482" fill="white" fill-opacity="0.8"/>
<circle cx="1073.22" cy="277.818" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1700.42" cy="856.947" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="95.7354" cy="621.046" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1055.4" cy="702.69" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1508" cy="1002.13" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1636.79" cy="959.223" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="518.281" cy="659.535" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="542.623" cy="674.841" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="905.357" cy="458.82" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="970.834" cy="125.823" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1227.99" cy="812.909" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1178.32" cy="394.433" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1683.13" cy="577.359" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1520.68" cy="649.719" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="80.7271" cy="474.463" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1509.82" cy="574.248" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="1089" cy="221.532" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1371.13" cy="788.226" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="789.782" cy="752.431" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1190.45" cy="14.3506" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="657.128" cy="895.795" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="81.4268" cy="767.137" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="415.627" cy="922.155" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="857.9" cy="61.4209" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="320.384" cy="141.714" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="709.871" cy="774.887" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1288.23" cy="201.789" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1571.61" cy="510.442" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1506.33" cy="1013.87" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="424.356" cy="486.271" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="99.5547" cy="255.696" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1733.46" cy="48.4994" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="357.804" cy="201.454" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1188.78" cy="82.9773" r="0.605482" fill="white" fill-opacity="0.6"/>
<circle cx="1406.68" cy="337.69" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1615.2" cy="256.074" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1408.09" cy="472.53" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1605.53" cy="881.273" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="677.943" cy="825.537" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="118.221" cy="1008.69" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1701.87" cy="111.478" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1414.6" cy="685.892" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="776.911" cy="261.488" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="570.228" cy="682.205" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1504.9" cy="326.154" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1538.29" cy="98.1817" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="303.137" cy="580.616" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1651.09" cy="218.366" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1182.75" cy="543.89" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1566.06" cy="970.805" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1298.84" cy="343.739" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1743.53" cy="791.776" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1412.22" cy="835.309" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1671.3" cy="584.82" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1742.55" cy="134.521" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1698.74" cy="707.236" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1669.4" cy="201.886" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1080.2" cy="95.1093" r="0.605482" fill="white" fill-opacity="0.7"/>
<circle cx="1644.32" cy="107.384" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1503.84" cy="847.425" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1538.97" cy="40.7051" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="1721.13" cy="889.819" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="677.203" cy="255.735" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="913.007" cy="107.797" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="539.712" cy="524.179" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1705.77" cy="893.418" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="826.851" cy="116.468" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="0.605482" cy="968.255" r="0.605482" fill="white" fill-opacity="0.1"/>
<circle cx="1063.51" cy="0.605482" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="212.853" cy="684.297" r="0.605482" fill="white" fill-opacity="0.15"/>
<circle cx="1084.84" cy="719.784" r="0.605482" fill="white" fill-opacity="0.3"/>
<circle cx="879.356" cy="933.718" r="0.605482" fill="white" fill-opacity="0.1"/>
<path d="M1477.02 82.8658L1478.07 84.6835H1475.97L1477.02 82.8658Z" fill="white" fill-opacity="0.3"/>
<path d="M865.843 807.9L866.892 809.718H864.793L865.843 807.9Z" fill="white" fill-opacity="0.1"/>
<path d="M793.179 626.566L794.228 628.384H792.13L793.179 626.566Z" fill="white" fill-opacity="0.15"/>
<path d="M1291.91 867.102L1292.96 868.919H1290.86L1291.91 867.102Z" fill="white" fill-opacity="0.1"/>
<path d="M1381.89 446.227L1382.94 448.045H1380.84L1381.89 446.227Z" fill="white" fill-opacity="0.1"/>
<path d="M306.562 877.325L307.612 879.142H305.513L306.562 877.325Z" fill="white" fill-opacity="0.1"/>
<path d="M755.799 558.813L756.849 560.63H754.75L755.799 558.813Z" fill="white" fill-opacity="0.1"/>
<path d="M665.148 993.428L666.198 995.246H664.099L665.148 993.428Z" fill="white" fill-opacity="0.3"/>
<path d="M214.629 328.34L215.679 330.158H213.58L214.629 328.34Z" fill="white" fill-opacity="0.1"/>
<path d="M1495.13 112.919L1496.18 114.737H1494.08L1495.13 112.919Z" fill="white" fill-opacity="0.3"/>
<path d="M1533.96 231.221L1535.01 233.038H1532.91L1533.96 231.221Z" fill="white" fill-opacity="0.1"/>
<path d="M278.382 980.668L279.431 982.485H277.332L278.382 980.668Z" fill="white" fill-opacity="0.6"/>
<path d="M888.789 106.079L889.838 107.897H887.739L888.789 106.079Z" fill="white" fill-opacity="0.1"/>
<path d="M1265.97 328.888L1267.02 330.706H1264.92L1265.97 328.888Z" fill="white" fill-opacity="0.3"/>
<path d="M841.202 901.311L842.252 903.129H840.153L841.202 901.311Z" fill="white" fill-opacity="0.1"/>
<path d="M1520.72 504.297L1521.77 506.115H1519.67L1520.72 504.297Z" fill="white" fill-opacity="0.1"/>
<path d="M1632.95 800.338L1634 802.156H1631.9L1632.95 800.338Z" fill="white" fill-opacity="0.3"/>
<path d="M1062.8 896.138L1063.85 897.955H1061.75L1062.8 896.138Z" fill="white" fill-opacity="0.3"/>
<path d="M984.226 721.479L985.276 723.297H983.177L984.226 721.479Z" fill="white" fill-opacity="0.1"/>
<path d="M1624.4 361.064L1625.45 362.881H1623.35L1624.4 361.064Z" fill="white" fill-opacity="0.3"/>
<path d="M292.461 641.782L293.51 643.599H291.411L292.461 641.782Z" fill="white" fill-opacity="0.3"/>
<path d="M667.386 788.896L668.435 790.714H666.337L667.386 788.896Z" fill="white" fill-opacity="0.1"/>
<path d="M642.757 932.113L643.806 933.93H641.707L642.757 932.113Z" fill="white" fill-opacity="0.1"/>
<path d="M167.259 480.782L167.516 481.737L168.47 481.994L167.516 482.251L167.259 483.206L167.002 482.251L166.047 481.994L167.002 481.737L167.259 480.782Z" fill="white" fill-opacity="0.1"/>
<path d="M1411.07 689.115L1411.33 690.07L1412.28 690.327L1411.33 690.584L1411.07 691.538L1410.81 690.584L1409.86 690.327L1410.81 690.07L1411.07 689.115Z" fill="white" fill-opacity="0.3"/>
<path d="M1399.11 204.842L1399.36 205.796L1400.32 206.053L1399.36 206.31L1399.11 207.265L1398.85 206.31L1397.9 206.053L1398.85 205.796L1399.11 204.842Z" fill="white" fill-opacity="0.3"/>
<path d="M822.726 106.964L822.983 107.919L823.938 108.176L822.983 108.433L822.726 109.388L822.469 108.433L821.515 108.176L822.469 107.919L822.726 106.964Z" fill="white" fill-opacity="0.3"/>
<path d="M764.465 396.047L764.722 397.002L765.676 397.259L764.722 397.516L764.465 398.471L764.208 397.516L763.253 397.259L764.208 397.002L764.465 396.047Z" fill="white" fill-opacity="0.1"/>
<path d="M1103.85 617.754L1104.1 618.708L1105.06 618.965L1104.1 619.222L1103.85 620.177L1103.59 619.222L1102.63 618.965L1103.59 618.708L1103.85 617.754Z" fill="white" fill-opacity="0.1"/>
<path d="M280.569 63.3037L280.826 64.2584L281.781 64.5155L280.826 64.7725L280.569 65.7272L280.312 64.7725L279.357 64.5155L280.312 64.2584L280.569 63.3037Z" fill="white" fill-opacity="0.1"/>
<path d="M27.0843 341.978L27.3414 342.933L28.2961 343.19L27.3414 343.447L27.0843 344.402L26.8273 343.447L25.8726 343.19L26.8273 342.933L27.0843 341.978Z" fill="white" fill-opacity="0.3"/>
<path d="M1196.48 386.231L1196.73 387.185L1197.69 387.442L1196.73 387.699L1196.48 388.654L1196.22 387.699L1195.26 387.442L1196.22 387.185L1196.48 386.231Z" fill="white" fill-opacity="0.1"/>
<path d="M318.097 780.696L318.354 781.651L319.308 781.908L318.354 782.165L318.097 783.12L317.839 782.165L316.885 781.908L317.839 781.651L318.097 780.696Z" fill="white" fill-opacity="0.3"/>
<path d="M676.544 826.003L676.801 826.958L677.756 827.215L676.801 827.472L676.544 828.427L676.287 827.472L675.333 827.215L676.287 826.958L676.544 826.003Z" fill="white" fill-opacity="0.1"/>
<path d="M585.838 527.617L586.095 528.571L587.05 528.828L586.095 529.085L585.838 530.04L585.581 529.085L584.626 528.828L585.581 528.571L585.838 527.617Z" fill="white" fill-opacity="0.1"/>
<path d="M1432.12 52.9684L1432.37 53.9231L1433.33 54.1801L1432.37 54.4372L1432.12 55.3919L1431.86 54.4372L1430.91 54.1801L1431.86 53.9231L1432.12 52.9684Z" fill="white" fill-opacity="0.1"/>
<path d="M462.256 835.95L462.513 836.904L463.467 837.161L462.513 837.419L462.256 838.373L461.999 837.419L461.044 837.161L461.999 836.904L462.256 835.95Z" fill="white" fill-opacity="0.3"/>
<path d="M917.383 593.585L917.64 594.54L918.595 594.797L917.64 595.054L917.383 596.009L917.126 595.054L916.171 594.797L917.126 594.54L917.383 593.585Z" fill="white" fill-opacity="0.3"/>
<path d="M1191.87 528.597L1192.13 529.551L1193.08 529.808L1192.13 530.065L1191.87 531.02L1191.61 530.065L1190.66 529.808L1191.61 529.551L1191.87 528.597Z" fill="white" fill-opacity="0.6"/>
<path d="M395.423 345.004L395.68 345.958L396.635 346.215L395.68 346.472L395.423 347.427L395.166 346.472L394.211 346.215L395.166 345.958L395.423 345.004Z" fill="white" fill-opacity="0.15"/>
<path d="M498.893 464.12L499.15 465.074L500.105 465.331L499.15 465.588L498.893 466.543L498.636 465.588L497.682 465.331L498.636 465.074L498.893 464.12Z" fill="white" fill-opacity="0.3"/>
<path d="M650.565 126.655L650.822 127.61L651.777 127.867L650.822 128.124L650.565 129.078L650.308 128.124L649.353 127.867L650.308 127.61L650.565 126.655Z" fill="white" fill-opacity="0.1"/>
<path d="M1685.57 290.794L1685.82 291.749L1686.78 292.006L1685.82 292.263L1685.57 293.217L1685.31 292.263L1684.35 292.006L1685.31 291.749L1685.57 290.794Z" fill="white" fill-opacity="0.1"/>
<path d="M1689.65 961.111L1689.91 962.066L1690.86 962.323L1689.91 962.58L1689.65 963.534L1689.4 962.58L1688.44 962.323L1689.4 962.066L1689.65 961.111Z" fill="white" fill-opacity="0.1"/>
<path d="M357.793 551.209L358.05 552.164L359.005 552.421L358.05 552.678L357.793 553.633L357.536 552.678L356.582 552.421L357.536 552.164L357.793 551.209Z" fill="white" fill-opacity="0.6"/>
<path d="M436.493 431.668L436.75 432.623L437.705 432.88L436.75 433.137L436.493 434.092L436.236 433.137L435.281 432.88L436.236 432.623L436.493 431.668Z" fill="white" fill-opacity="0.1"/>
<path d="M452.349 763.392L452.606 764.347L453.561 764.604L452.606 764.861L452.349 765.816L452.092 764.861L451.138 764.604L452.092 764.347L452.349 763.392Z" fill="white" fill-opacity="0.1"/>
<path d="M1248.74 503.3L1249 504.254L1249.96 504.511L1249 504.768L1248.74 505.723L1248.49 504.768L1247.53 504.511L1248.49 504.254L1248.74 503.3Z" fill="white" fill-opacity="0.1"/>
<path d="M379.018 503.339L379.275 504.293L380.23 504.55L379.275 504.807L379.018 505.762L378.761 504.807L377.807 504.55L378.761 504.293L379.018 503.339Z" fill="white" fill-opacity="0.8"/>
<path d="M400.172 829.04L400.429 829.995L401.383 830.252L400.429 830.509L400.172 831.464L399.915 830.509L398.96 830.252L399.915 829.995L400.172 829.04Z" fill="white" fill-opacity="0.1"/>
<path d="M944.955 142.467L945.212 143.421L946.167 143.678L945.212 143.935L944.955 144.89L944.698 143.935L943.743 143.678L944.698 143.421L944.955 142.467Z" fill="white" fill-opacity="0.15"/>
</svg>

            <Image className="w-3/6 absolute top-0 left-0" src={largecomet} alt="largecomet...."/>
            <Image className="w-3/6 absolute top-0 right-0" src={largecomet1} alt="largecomet1...."/>
            <Image className="w-2/5 absolute top-0 left-1/2 -translate-x-1/2" src={Div} alt="Div...."/>
            <svg className="w-full container mx-auto absolute top-[7%] left-1/2 -translate-x-1/2" viewBox="0 0 1350 610" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M612.8 527.266C654.194 526.382 695.617 526.378 737.012 527.254" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M489 446C612.747 441.341 737.251 441.333 861 445.979" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M985 362C779.504 358.002 570.499 358 365 361.994" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M242.771 268.174C527.952 277.045 822.735 277.041 1107.91 268.165" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M121.165 159.011C483.816 201.817 866.877 201.806 1229.52 158.976" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M1 27C437.914 134.333 912.086 134.333 1349 27" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M1229 0V268" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M1107 0V362" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M985 0C985 148.337 985 296.673 985 445" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M861 0C861 175.333 861 350.667 861 526" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M737 0V610" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M613 0V610" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M489 0V526" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M365 0C365 148.337 365 296.673 365 445" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M243 0V362" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M121 0V268" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M1.25 0L1.25001 159" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            <path d="M1349.25 0V159" stroke="white" stroke-opacity="0.2" stroke-width="0.5" stroke-miterlimit="10"/>
            </svg>

            <NavBar/>
            <HeroPage/>
        </div>
    );
};

export default Header;