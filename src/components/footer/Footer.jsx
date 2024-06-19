import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { LogoSmall } from "../navigation/Logo";
import { NAV_LINKS } from "../navigation/constants";

export const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="relative mx-auto max-w-6xl overflow-hidden py-12">
        <div className="md:px4 grid grid-cols-12 gap-x-1.5 gap-y-6 px-2">
          <LogoColumn />
          {/* <GenericColumn title="Product" links={NAV_LINKS[0].sublinks} />
          <GenericColumn
            title="Company"
            links={[...NAV_LINKS[3].sublinks, ...NAV_LINKS[4].sublinks]}
          />
          <GenericColumn
            title="Legal"
            links={[
              {
                title: "Terms & Conditions",
                href: "/#",
              },
              {
                title: "Privacy Policy",
                href: "/#",
              },
              {
                title: "Refund Policy",
                href: "/#",
              },
            ]}
          /> */}

          <GenericColumn
            title="Socials"
            links={[
              {
                title: "LinkedIn",
                href: "https://www.linkedin.com/in/rizqi-ramadhani/",
                Icon: SiLinkedin,
              },
              {
                title: "Instagram",
                href: "https://www.instagram.com/rizqipratamar1",
                Icon: SiInstagram,
              },
              {
                title: "Github",
                href: "https://github.com/rizqipratamar",
                Icon: SiGithub,
              },
            ]}
          />
        </div>
      </footer>
    </div>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <LogoSmall />
      <span className="mt-3 inline-block text-xs">
        © Rizqi Pratama Ramadhani - All rights reserved.
      </span>
    </div>
  );
};

const GenericColumn = ({ title, links }) => {
  return (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <span className="block font-bold">{title}</span>
      <div className="flex gap-2">
        {links.map((l) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={l.title}
            href={l.href}
            className="flex items-center gap-1.5 transition-colors hover:text-sky-600 hover:underline"
          >
            {l.Icon && <l.Icon />}
            {l.title}
          </a>
        ))}
      </div>
    </div>
  );
};
