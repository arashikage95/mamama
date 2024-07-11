import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Logo Maker.", "Website Developer.", "Video Editor."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WEBSITE</h4>
        <h1 className="text-6xl font-bold text-black">
          Hi, I'm <span className="text-designColor capitalize">Mark Vincent</span>
        </h1>
        <h2 className="text-4xl font-bold text-black">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-black">
          a versatile creative professional specializing in video editing, logo design, and website development. With a keen eye for detail and a passion for bringing ideas to life, I transform concepts into captivating visuals and functional digital experiences. Explore my work and see how I can help you achieve your creative goals.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner