import React from "react";
import { motion } from "framer-motion";
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
  SiReact,
  SiGooglecloud,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiMicrosoftsqlserver,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiLlvm,
  SiTailwindcss,
  SiMaterialdesign,
  SiDaisyui,
  SiAntdesign,
  SiVercel,
  SiNewrelic,
  SiDocker,
  SiGrafana,
  SiTensorflow,
  SiStorybook,
  SiJest,
  SiJenkins,
  SiCypress,
  SiDocusaurus,
  SiJira,
  SiGithubactions,
  SiGitlab,
  SiMixpanel,
  SiSvelte,
  SiVuedotjs,
} from "react-icons/si";
import { IconType } from "react-icons";
import { GiAmplitude } from "react-icons/gi";

export const Logos = () => {
  return (
    <section className="relative -mt-2 -rotate-1 scale-[1.01] border-y-2 border-zinc-900 bg-white">
      <div className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="relative z-0 flex overflow-hidden">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-white/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-white/0" />
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name }) => {
  return (
    <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
      <Icon className="text-2xl text-sky-600 md:text-3xl" />
      <span className="whitespace-nowrap text-xl font-semibold uppercase md:text-2xl">
        {name}
      </span>
    </span>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiReact} name="React" />
    <LogoItem Icon={SiGooglecloud} name="GCP" />
    <LogoItem Icon={SiNextdotjs} name="NEXT.JS" />
    <LogoItem Icon={SiJavascript} name="Javascript" />
    <LogoItem Icon={SiTypescript} name="Typescript" />
    <LogoItem Icon={SiNestjs} name="Nestjs" />
    <LogoItem Icon={SiExpress} name="Express" />
    <LogoItem Icon={SiMicrosoftsqlserver} name="SQL Server" />
    <LogoItem Icon={SiMysql} name="MySQL" />
    <LogoItem Icon={SiPostgresql} name="PostgreSQL" />
    <LogoItem Icon={SiStorybook} name="Storybook" />
    <LogoItem Icon={SiJenkins} name="Jenkins" />
    <LogoItem Icon={SiDocusaurus} name="Docusaurus" />
    <LogoItem Icon={SiGithubactions} name="Github Actions" />
    <LogoItem Icon={GiAmplitude} name="Amplitude" />
    <LogoItem Icon={SiSvelte} name="Svelte" />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiFirebase} name="Firebase" />
    <LogoItem Icon={SiTailwindcss} name="Tailwind" />
    <LogoItem Icon={SiMaterialdesign} name="Material UI" />
    <LogoItem Icon={SiDaisyui} name="Daisyui" />
    <LogoItem Icon={SiAntdesign} name="ANTD" />
    <LogoItem Icon={SiVercel} name="Vercel" />
    <LogoItem Icon={SiNewrelic} name="Newrelic" />
    <LogoItem Icon={SiDocker} name="Docker" />
    <LogoItem Icon={SiGrafana} name="Grafana" />
    <LogoItem Icon={SiTensorflow} name="Tensorflow" />
    <LogoItem Icon={SiJest} name="Jest" />
    <LogoItem Icon={SiCypress} name="Cypress" />
    <LogoItem Icon={SiJira} name="Jira" />
    <LogoItem Icon={SiGitlab} name="Gitlab" />
    <LogoItem Icon={SiMixpanel} name="Mixpanel" />
    <LogoItem Icon={SiVuedotjs} name="Vue" />
  </>
);
