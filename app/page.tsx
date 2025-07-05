'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import Marquee from "react-fast-marquee";

export default function Home() {
  const [isPortrait, setIsPortrait] = useState(false);
  const [activeTab, setActiveTab] = useState("project");

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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [...Array(6)].map((_, i) => ({
    title: `Project ${i + 1}`,
    image: `/your-images/project-${i + 1}.jpg`,
    description: "Pemula ey"
  }));

  const certificates = [...Array(6)].map((_, i) => ({
    title: `Certificate ${i + 1}`,
    image: `/your-images/certificate-${i + 1}.jpg`,
    description: "Gabutan ey"
  }));

  const galleryItems = activeTab === "project" ? projects : certificates;

  const cardFade = {
  hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
  visible: (i: number): any => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: i * 0.2,
      ease: [0.25, 0.1, 0.25, 1], // FIXED!
    },
  }),
};


  const infoCards = [
    { label: "Born In", value: "Indonesia" },
    { label: "Experience", value: "6 Years" },
    { label: "Date of Birth", value: "13 Nov 2007" },
  ];

  return (
    <div className="bg-black text-white min-h-screen transition-colors duration-500 overflow-x-hidden w-full relative">
      {/* HERO SECTION */}
      <div className="relative w-full h-screen z-10" id="home">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Squares speed={0.5} squareSize={40} direction='diagonal' borderColor='#444A29' hoverFillColor='#32CD32' />
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-black/60" />

        <div className="grid grid-cols-12 w-full h-full relative z-10">
          <div className="col-span-12 md:col-span-6 relative">
            <div className="absolute inset-0 flex justify-center items-start">
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
              {isPortrait && <div className="absolute inset-0 z-50 pointer-events-auto bg-transparent" />}
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex h-full relative">
            <div className={`flex flex-col gap-6 px-4 w-full ${isPortrait ? 'pt-4 relative' : 'md:pt-32 pt-12'}`}>
              {isPortrait && <div className="absolute inset-0 bg-black/60 z-0 rounded-xl" />}

              <div className="relative z-10 flex items-center gap-2">
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

              <div className="relative z-10 text-left w-full">
                <SplitText
                 text="R BAGAS T.P"
  className="text-3xl sm:text-4xl md:text-7xl font-bold !text-left !items-start !justify-start"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  threshold={0.2}
                  rootMargin="-40px"
                />
              </div>

              <div className="relative z-10">
                <BlurText
                  text="I'm a Front-End Developer in the Making Passionate About Tech, Teaching, and Building Digital Solutions."
                  delay={90}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-4"
                />

                <div className="w-full z-10">
  <div className="flex flex-wrap justify-between gap-4 mt-4">
  {infoCards.map((item, index) => (
    <motion.div
      key={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
      }}
      className="flex-1 min-w-[100px] max-w-[180px] group relative backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-4 text-center shadow-md transition duration-300"
    >
      <div className="absolute inset-0 bg-green-300/10 rounded-xl opacity-0 group-hover:opacity-50 transition duration-300 pointer-events-none" />
      <p className="text-sm text-gray-300 z-10 relative">{item.label}</p>
      <p className="text-lg font-semibold text-white mt-1 z-10 relative">{item.value}</p>
    </motion.div>
  ))}
</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollVelocity texts={['XXX - XXX - XXX -']} />

      {/* STORY SECTION */}
      <div className="relative w-full z-10" id="story">
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

        <div className="relative w-full min-h-screen">
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10 space-y-10">
            <ScrollFloat
              animationDuration={4}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.1}
              textClassName="text-3xl sm:text-4xl md:text-5xl font-semibold text-white"

            >
              MY STORY
            </ScrollFloat>

            <ScrambledText
              className="scrambled-text-demo text-base md:text-lg max-w-8xl text-white"
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

            <ScrambledText
              className="scrambled-text-demo text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-10"

              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              LIVE PROJECT
              <p className="mt-4 text-gray-400 text-lg">More Video Project still Progress</p>
            </ScrambledText>
          </div>
        </div>

        <div className="w-full h-[600px] relative z-10">
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>

        {/* MARQUEE */}
        <div className="w-full relative z-10 overflow-hidden bg-white/5 backdrop-blur-md backdrop-saturate-150 border-t border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
          <Marquee
            speed={50}
            delay={0}
            loop={0}
            direction="right"
            pauseOnHover={true}
            className="py-6 px-4 gap-10 text-white text-2xl font-medium tracking-widest"
          >
            <span className="mx-6">CRAIJSX</span>
            <span className="mx-6">DAYFIT</span>
            <span className="mx-6">DAYCO</span>
            <span className="mx-6">GADEV</span>
             <span className="mx-6">CRAIJSX</span>
              <span className="mx-6">DAYFIT</span>
            <span className="mx-6">DAYCO</span>
            <span className="mx-6">GADEV</span>
            <span className="mx-6">CRAIJSX</span>
          </Marquee>

          {/* PROJECT & CERTIFICATE */}
          <div className="py-20 px-4 w-full z-10 relative" id="project">
            <div className="text-center mb-10">
             <h2 className="text-5xl sm:text-6xl md:text-6xl font-bold text-white">Project & Certificate</h2>
              <p className="mt-4 text-gray-400 text-lg">One more project completed, one more proof that I can do this.</p>
              <p className="text-gray-500">More project are coming soon.</p>
            </div>

            <div className="flex justify-center gap-4 flex-wrap mb-12">
              <button onClick={() => setActiveTab("project")} className={`px-6 py-2 rounded-full font-semibold transition ${activeTab === "project" ? "bg-green-400 text-black" : "bg-white/10 text-white border border-white/10"}`}>
                Project
              </button>
              <button onClick={() => setActiveTab("certificate")} className={`px-6 py-2 rounded-full font-semibold transition ${activeTab === "certificate" ? "bg-green-400 text-black" : "bg-white/10 text-white border border-white/10"}`}>
                Certificate
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardFade}
                  className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-green-400/40 transition-shadow"
                >
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ BOTTOM NAVBAR MELENGKUNG FIXED */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
       <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg 
  px-8 py-3 flex gap-8 items-center justify-center 
  text-white text-base sm:text-lg font-semibold 
  rounded-full transition-all duration-300">
          {['home', 'story', 'project'].map((id, i) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
              className="capitalize hover:text-green-300 transition"
            >
              {id}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
