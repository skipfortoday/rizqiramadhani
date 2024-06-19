import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { Block } from "./Block";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

export const IntegrationsBlock = () => (
  <Block className="col-span-3 overflow-hidden md:col-span-2">
    <CardTitle>Connect with me 🧙🏻‍♀️</CardTitle>
    <CardSubtitle>
      you can create issue, contribute pullrequest, message or discussion or
      whatever you want on my social media.
    </CardSubtitle>

    <div className="relative -mx-6 -mb-6 mt-6 grid grid-cols-3 place-content-center rounded-t-none border-t-2 border-zinc-900">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/rizqipratamar"
        className="grid w-full cursor-pointer place-content-center  border-r-2 border-zinc-900 bg-zinc-900 py-8 text-white hover:translate-x-[-12px] hover:translate-y-[-12px]  hover:shadow-[12px_12px_0px_black] active:translate-x-[0px] active:translate-y-[0px]  active:shadow-none"
      >
        <SiGithub className="text-4xl" />
      </a>
      <div
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/rizqi-ramadhani/"
        className="grid w-full place-content-center  bg-blue-500 py-8 text-white hover:translate-x-[-12px] hover:translate-y-[-12px]  hover:shadow-[12px_12px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
      >
        <SiLinkedin className="text-4xl" />
      </div>
      <div
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/rizqipratamar1"
        className="grid w-full place-content-center bg-pink-500 py-8 text-white hover:translate-x-[-12px] hover:translate-y-[-12px]   hover:shadow-[12px_12px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none"
      >
        <SiInstagram className="text-4xl" />
      </div>
    </div>
  </Block>
);
