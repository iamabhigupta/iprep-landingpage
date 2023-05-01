'use client';

import styles from '../styles';
import CountDown from './CountDown';

const Hero = () => (
  <div className="bg-primary-black text-white h-screen relative">
    {/* Navbar  */}
    <nav className="">
      <div className={`${styles.xPaddings} py-8 relative`}>
        <div className="absolute md:w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <h2 className="font-extrabold text-2xl md:text-4xl text-white">
            iPrep.Ai
          </h2>
        </div>
      </div>
    </nav>
    {/* <div className="absolute z-0 w-[40%] h-[35%] top-28 right-20 gradient-02" /> */}
    {/* <div className="absolute z-10 w-[80%] h-[80%] rounded-full bottom-40 white__gradient" /> */}
    <div className="absolute z-0 md:w-[50%] w-[60%] md:h-[50%] h-[60%] right-20 bottom-20 blue__gradient" />
    <div className={`${styles.xPaddings} py-8 relative flex-1`}>
      <div className="flex flex-col gap-8 md:gap-10 justify-center items-center ">
        <h2 className="text-5xl md:text-7xl font-bold text-center mt-6">
          Launching <br className="block md:hidden" /> Soon
        </h2>
        <p className="text-lg md:text-xl text-center md:mx-auto px-5 md:w-3/5 -mx-3 max-w-4xl">
          AI-powered mock interview platform that's not just for IT folks, but
          for professionals across all industries! 🌍
        </p>
        <CountDown />
        <div className="flex flex-col gap-4 md:gap-0 md:w-1/2 md:relative justify-center items-center max-w-3xl">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="md:w-full w-80 relative bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300 text-lg outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out py-2.5 px-7"
          />
          <button
            type="button"
            className="w-full md:w-fit right-0 md:absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 mx-auto border border-gray-300 text-white font-bold text-lg rounded-full lg:rounded-r-full py-3 px-12 "
          >
            Notify me
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
