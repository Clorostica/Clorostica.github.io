import { m, LazyMotion, domAnimation } from "framer-motion";
import HeroText from "../Components/HeroText";
import HeroParticles from "../Components/Particles/HeroParticles";
import HeroScroller from "../Components/elements/HeroScroller";
const Hero = () => {
  return (
    <div id="hero" className="w-full flex justify-center overflow-hidden-web relative">
    <LazyMotion features={domAnimation} strict>
      <m.div
        id="hero"
        className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
      >
        <HeroText />
        <HeroParticles />
      </m.div>
      <HeroScroller />
    </LazyMotion>
    </div>
  );
};
export default Hero; import { useState, useEffect } from "react";
export function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);
  return position;
}
