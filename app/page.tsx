'use client';

import { useEffect, useState } from "react";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import ScrollFloat from './components/ScrollFloat/ScrollFloat';
import ScrambledText from './components/ScrambledText/ScrambledText';
import CircularGallery from './components/CircularGallery/CircularGallery';
import Squares from "./components/Squares/Squares";
import Particles from "./components/Particles/Particles";

export default function Home() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const { innerWidth, innerHeight } = window;
      setIsPortrait(innerHeight > innerWidth);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white w-full relative">
      {/* Hero Section Only: Squares */}
      <div className="relative w-full h-screen z-10">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Squares
            speed={0.5}
            squareSize={40}
            direction='diagonal'
            borderColor='#444A29'
            hoverFillColor='#32CD32'
          />
        </div>

        <div className="grid grid-cols-12 w-full h-full">
          <div className="col-span-12 md:col-span-6 relative z-10">
            <div className="absolute inset-0 flex justify-center items-start">
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
              {isPortrait && (
                <div className="absolute inset-0 z-50 pointer-events-auto bg-transparent" />
              )}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex h-full relative z-10">
            <div className="flex flex-col gap-6 px-4 pt-12 md:pt-32">
              <div className="flex items-center gap-2">
                <RotatingText
                  texts={['Design', 'Coding', 'Business', 'Development']}
                  mainClassName="px-2 bg-[#32CD32] text-black overflow-hidden py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>

              <div className="text-left w-full">
                <SplitText
                  text="R BAGAS T.P"
                  className="text-4xl font-semibold !text-left !items-start !justify-start"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  threshold={0.2}
                  rootMargin="-40px"
                />
              </div>

              <BlurText
                text="I'm a Front-End Developer in the Making Passionate About Tech, Teaching, and Building Digital Solutions."
                delay={90}
                animateBy="words"
                direction="top"
                className="text-xl mb-8"
              />
            </div>
          </div>
        </div>
      </div>

      <ScrollVelocity texts={['XXX - XXX - XXX -']} />

      {/* SECTION: MY STORY to MARQUEE (Background Particles) */}
      <div className="relative w-full z-10">
        {/* Particles Behind */}
        <div className="absolute inset-0 -z-10">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={5000}
            particleSpread={50}
            speed={0.1}
            particleBaseSize={400}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        {/* Section: MY STORY */}
        <div className="relative w-full min-h-screen">
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10 space-y-10">
            <ScrollFloat
              animationDuration={4}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.1}
              textClassName="text-6xl md:text-7xl font-semibold text-white"
            >
              MY STORY
            </ScrollFloat>

            <ScrambledText
              className="scrambled-text-demo text-base md:text-lg max-w-4xl text-white"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              Hey, I'm [Bagas] <br /><br />
              I'm a student at SMKN 2 Kota Bekasi, taking Software Engineering.
              I'm the type who loves socializing, always curious about new things, and have a strong drive to keep learning and growing.
              Lately, I’ve been into the business world too currently focusing on building some side hustles, including a private class project that offers practical learning and digital service skills in a fun and chill way.
            </ScrambledText>
          </div>
        </div>

        {/* Projek */}
        <div className="w-full h-[600px] relative z-10">
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>

        {/* GLASSMORPH WRAPPER */}
        <div className="w-full relative z-10 overflow-hidden bg-white/5 backdrop-blur-sm backdrop-saturate-150 border-t border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
          
         {/* MARQUEE */}
<div className="w-full py-6 overflow-hidden relative z-10">
  <div
    className="flex whitespace-nowrap animate-marquee gap-10 px-6 items-center"
    style={{ animation: "marquee 25s linear infinite" }}
  >
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex gap-10 items-center">
        <span className="text-white text-2xl font-medium tracking-widest">MOJAVE</span>
        <span className="text-white text-2xl font-medium tracking-widest">MOJAVE</span>
        <span className="text-white text-2xl font-medium tracking-widest">MOJAVE</span>
        <span className="text-white text-2xl font-medium tracking-widest">MOJAVE</span>
        <span className="text-white text-2xl font-medium tracking-widest">MOJAVE</span>
        <span className="text-white text-2xl font-medium tracking-widest">MOJAVE</span>
      </div>
    ))}
  </div>
</div>


          {/* TEXT BAWAH */}
          <div className="w-full py-12 px-6 flex justify-center">
            <ScrambledText
              className="scrambled-text-demo text-base md:text-lg max-w-4xl text-center text-white"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              Hey, I'm [Bagas] <br /><br />
              I'm a student at SMKN 2 Kota Bekasi, taking Software Engineering.
              I'm the type who loves socializing, always curious about new things, and have a strong drive to keep learning and growing.
              Lately, I’ve been into the business world too currently focusing on building some side hustles, including a private class project that offers practical learning and digital service skills in a fun and chill way.
            </ScrambledText>
          </div>

          <style>
            {`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
}
