'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import GradientText from "./components/GradientText/GradientText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import ScrollFloat from './components/ScrollFloat/ScrollFloat';
import ScrambledText from './components/ScrambledText/ScrambledText';
import TiltedCard from './components/TiltedCard/TiltedCard';
import CircularGallery from './components/CircularGallery/CircularGallery';

export default function Home() {
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Izinkan jika layar lebar (misalnya > 768) atau landscape
      if (width >= 768 || width > height) {
        setIsAllowed(true);
      } else {
        setIsAllowed(false);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    window.addEventListener("orientationchange", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
      window.removeEventListener("orientationchange", checkScreen);
    };
  }, []);

  if (!isAllowed) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Akses Ditolak</h1>
        <p className="text-lg">
          Website ini hanya dapat dibuka menggunakan <strong>Mode Landscape</strong>, 
          atau <strong>Situs Desktop</strong> di browser Anda.
          <br /><br />
          Silakan ubah Orientasi Layar atau Gunakan Situs Desktop untuk memaksimalkan Performa Website.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#444A29'
          hoverFillColor='#32CD32'
        />
      </div>

      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>

          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl text-white font-bold"></h1>
                    <RotatingText
                      texts={['Design', 'Coding', 'Business', 'Development']}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#32CD32] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                      staggerFrom="last"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>

                <div className="flex flex-col items-start">
                  <SplitText
                    text="R BAGAS T.P"
                    className="text-6xl font-semibold text-start"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>

                <BlurText
                  text="Saya seorang Pelajar aktif yang sedang mengembangkan keterampilan di bidang Front-end Development. Saya memiliki pengalaman terbuka untuk Kelas Privat di Bidang Coding, Bisnis, dan Pengembangan lainnya."
                  delay={75}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollVelocity texts={['XXX - XXX - XXX -']} />

      <section className="py-10 flex justify-center items-center">
        <ScrollFloat
          animationDuration={4}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.1}
          textClassName="text-7xl font-semibold text-white"
        >
          SIAPA SAYA
        </ScrollFloat>
      </section>

      <div className="-mt-10 px-4">
        <ScrambledText
          className="scrambled-text-demo text-lg max-w-4xl mx-auto"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          Hai, Saya [Bagas] <br /><br />
          Saya adalah seorang siswa di SMKN 2 Kota Bekasi, mengambil Jurusan Rekayasa Perangkat Lunak (RPL). Saya adalah pribadi yang suka berinteraksi, terbuka dengan hal-hal baru, dan punya semangat tinggi untuk terus belajar dan berkembang.
          Saya juga punya hobi dalam Dunia Bisnis. Saat ini, saya sedang fokus membangun berbagai peluang usaha salah satunya adalah Bisnis Kelas Private dengan materi pembelajaran yang praktis, Layanan Digital masih banyak lagi, berikut Usaha Bisnis saya: <br /><br />
        </ScrambledText>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* TiltedCard list */}
          <a href="https://wa.me/6281319865384?text=Halo!%20Saya%20dari%20Website%20Portofolio%20anda,%20apa%20benar%20anda%20menjual%20kelas%20private?" target="_blank" rel="noopener noreferrer">
            <TiltedCard
              imageSrc="./bisnis.png"
              altText="Kelas Bisnis"
              captionText="DayCohere"
              containerHeight="200px"
              containerWidth="200px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-sm text-center px-2 py-1 rounded-[5px] bg-white/20 backdrop-blur-md text-black font-bold">
                  Bisnis Kelas - Private
                </p>
              }
            />
          </a>
          <a href="https://wa.me/6281319865384?text=Halo!%20Saya%20dari%20Website%20Portofolio%20anda,%20apa%20benar%20anda%20menjual%20Akun%20Premium?" target="_blank" rel="noopener noreferrer">
            <TiltedCard
              imageSrc="./list.png"
              altText="4 Prelist"
              captionText="Akun Premium"
              containerHeight="200px"
              containerWidth="200px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-sm text-center px-2 py-1 rounded-[5px] bg-white/20 backdrop-blur-md text-black font-bold">
                  4 Prelist
                </p>
              }
            />
          </a>
          <a href="https://wa.me/6281319865384?text=Halo!%20Saya%20dari%20Website%20Portofolio%20anda,%20apa%20benar%20anda%20membuka%20Kelas%20Freelance?" target="_blank" rel="noopener noreferrer">
            <TiltedCard
              imageSrc="./freelance.png"
              altText="Freelance"
              captionText="DayCohere"
              containerHeight="200px"
              containerWidth="200px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-sm text-center px-2 py-1 rounded-[5px] bg-white/20 backdrop-blur-md text-black font-bold">
                  Freelance
                </p>
              }
            />
          </a>
          <a href="https://wa.me/6281319865384?text=Halo!%20Saya%20dari%20Website%20Portofolio%20anda,%20apa%20benar%20anda%20menjual%20Jasa?" target="_blank" rel="noopener noreferrer">
            <TiltedCard
              imageSrc="./jasa.png"
              altText="Jasa"
              captionText="DayCohere"
              containerHeight="200px"
              containerWidth="200px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-sm text-center px-2 py-1 rounded-[5px] bg-white/20 backdrop-blur-md text-black font-bold">
                  Jasa
                </p>
              }
            />
          </a>
        </div>
      </div>

      <div>
        <ScrollVelocity texts={['xxx - xxx - xxx -', 'PROJEK']} />
      </div>

      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>

      <div>
        <ScrollVelocity texts={['SOON']} />
      </div>
    </div>
  );
}
