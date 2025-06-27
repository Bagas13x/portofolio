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
  const [isAllowed, setIsAllowed] = useState(true);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* Background Squares */}
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#444A29'
          hoverFillColor='#32CD32'
        />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto h-screen relative z-10">
        {/* Overlay Gelap hanya untuk potrait */}
        <div className="absolute inset-0 z-[5] bg-gradient-to-b from-black/80 via-black/60 to-transparent pointer-events-none block md:hidden"></div>

        <div className="grid grid-cols-12">
          {/* Lanyard sebagai background */}
          <div className="col-span-12 md:col-span-6 relative z-0">
            <div className="absolute inset-0 flex justify-center items-start">
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            </div>
          </div>

          {/* Teks utama */}
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
                text="Saya seorang Pelajar aktif yang sedang mengembangkan keterampilan di bidang Front-end Development. Saya memiliki pengalaman terbuka untuk Kelas Privat di Bidang Coding, Bisnis, dan Pengembangan lainnya."
                delay={90}
                animateBy="words"
                direction="top"
                className="text-xl mb-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Strip scroll */}
      <ScrollVelocity texts={['XXX - XXX - XXX -']} />

      {/* Section: SIAPA SAYA */}
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 w-full h-full z-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={400}
            particleSpread={30}
            speed={0.1}
            particleBaseSize={200}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10 space-y-10">
          <ScrollFloat
            animationDuration={4}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.1}
            textClassName="text-5xl md:text-7xl font-semibold text-white"
          >
            SIAPA SAYA
          </ScrollFloat>

          <ScrambledText
            className="scrambled-text-demo text-base md:text-lg max-w-4xl text-white"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            Hai, Saya [Bagas] <br /><br />
            Saya adalah seorang siswa di SMKN 2 Kota Bekasi, mengambil Jurusan Rekayasa Perangkat Lunak (RPL). 
            Saya adalah pribadi yang suka berinteraksi, terbuka dengan hal-hal baru, dan punya semangat tinggi untuk terus belajar dan berkembang.
            Saya juga punya hobi dalam Dunia Bisnis. Saat ini, saya sedang fokus membangun berbagai peluang usaha salah satunya adalah 
            Bisnis Kelas Private dengan materi pembelajaran yang praktis, Layanan Digital, dan masih banyak lagi:
          </ScrambledText>
        </div>
      </div>

      {/* Projek */}
      <ScrollVelocity texts={['', 'PROJEK']} />
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <ScrollVelocity texts={['SOON']} />
    </div>
  );
}
