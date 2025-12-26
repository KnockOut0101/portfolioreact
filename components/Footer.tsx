import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center text-white">
        <h1 className="heading heading text-3xl md:text-6xl sm:text-6xl text-wrap text-white font-bold gap-x-2">
          So how was your <span className="text-purple-300">experience?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Like what you see or have a project in mind? Let's connect and
          explore how we can work together to bring your ideas to life.
        </p>
        <a href="https://in.linkedin.com/in/kshitij-ohri-911980103?original_referer=https%3A%2F%2Fwww.linkedin.com%2F">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center text-white">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Kshitij Ohri. All rights reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;