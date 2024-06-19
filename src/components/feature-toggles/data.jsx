import React from "react";
import { AiFillBug } from "react-icons/ai";
import { BsFillCursorFill } from "react-icons/bs";
import {
  FiAlignLeft,
  FiAnchor,
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiEdit,
  FiEye,
  FiItalic,
} from "react-icons/fi";

const IssuesComponent = () => {
  return (
    <div className="h-full w-full p-4">
      <div className="mb-6 flex items-center gap-1.5 text-sm">
        <span className="text-zinc-600">Ajaib</span>
        <FiChevronRight />
        <div className="flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-red-900">
          <AiFillBug />
          <span>Bugs</span>
        </div>
      </div>
      <div className="-ml-1.5 mb-4 flex items-center gap-1.5">
        <img
          src="https://api.dicebear.com/8.x/notionists/svg"
          alt="avatar"
          className="ml-1.5 size-8 rounded bg-sky-200 shadow-inner"
        />
        <div>
          <span className="block text-sm font-medium">
            Rizqi Pratama Ramadhani
          </span>
          <span className="block text-xs text-zinc-600">
            Frontend Web Engineer
          </span>
        </div>
      </div>
      <div className="mb-1 line-clamp-1 text-xl font-medium">
        As a Frontend Engineer React, NextJS
      </div>
      <span className="line-clamp-6 text-sm leading-relaxed text-zinc-600">
        Build trading apps, webview, internal tools, chart, game etc, Implement
        Micro frontend, cereate design system component, webview, raise unit
        test coverage.
      </span>
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-1.5 bg-white/50 p-4 backdrop-blur">
        <span className="flex w-fit items-center gap-1 rounded bg-yellow-100 px-1.5 py-0.5 text-sm text-yellow-900">
          <FiClock />
          <span>TODO</span>
        </span>
        <span className="flex w-fit items-center gap-1 rounded bg-zinc-200 px-1.5 py-0.5 text-sm text-zinc-900">
          <FiArrowRight />
          <span>Medium</span>
        </span>
      </div>
    </div>
  );
};

const IssuesComponent2 = () => {
  return (
    <div className="h-full w-full p-4">
      <div className="mb-6 flex items-center gap-1.5 text-sm">
        <span className="text-zinc-600">Irefox</span>
        <FiChevronRight />
        <div className="flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-red-900">
          <AiFillBug />
          <span>Bugs</span>
        </div>
      </div>
      <div className="-ml-1.5 mb-4 flex items-center gap-1.5">
        <img
          src="https://api.dicebear.com/8.x/notionists/svg"
          alt="avatar"
          className="ml-1.5 size-8 rounded bg-sky-200 shadow-inner"
        />
        <div>
          <span className="block text-sm font-medium">
            Rizqi Pratama Ramadhani
          </span>
          <span className="block text-xs text-zinc-600">
            Frontend Web Engineer
          </span>
        </div>
      </div>
      <div className="mb-1 line-clamp-1 text-xl font-medium">
        As a Frontend Engineer React, NextJS
      </div>
      <span className="line-clamp-6 text-sm leading-relaxed text-zinc-600">
        Build POS apps, Landing Page, CMS, CRM for client. works with several
        client and teammates. As a frontend engieer on a IT consultant we build
        some apps for so;ving the problems that client have.
      </span>
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-1.5 bg-white/50 p-4 backdrop-blur">
        <span className="flex w-fit items-center gap-1 rounded bg-yellow-100 px-1.5 py-0.5 text-sm text-yellow-900">
          <FiClock />
          <span>TODO</span>
        </span>
        <span className="flex w-fit items-center gap-1 rounded bg-zinc-200 px-1.5 py-0.5 text-sm text-zinc-900">
          <FiArrowRight />
          <span>Medium</span>
        </span>
      </div>
    </div>
  );
};

const KanbanComponent = () => {
  return (
    <div className="relative grid h-full w-full min-w-96 grid-cols-2 gap-2 p-4 pb-0 pr-0">
      <div className="relative z-0 h-full w-full rounded-t-xl bg-zinc-100 p-4">
        <div className="flex items-center justify-between">
          <span className="flex w-fit items-center gap-1 rounded bg-blue-100 px-1.5 py-0.5 text-sm text-blue-900">
            <FiEye />
            <span>Doing</span>
          </span>
          <FiChevronDown />
        </div>
        <div className="mt-4 space-y-2">
          <BGTask />
          <BGTask />
          <BGTask />
        </div>
      </div>
      <div className="relative z-0 h-full w-full rounded-t-xl bg-zinc-100 p-4">
        <div className="flex items-center justify-between">
          <span className="green-yellow-900 flex w-fit items-center gap-1 rounded bg-green-100 px-1.5 py-0.5 text-sm">
            <FiCheck />
            <span>Done</span>
          </span>
          <FiChevronDown />
        </div>
        <div className="mt-4 space-y-2">
          <BGTask />
        </div>
      </div>

      <OverlayTask />
    </div>
  );
};

const BGTask = () => {
  return (
    <div className="w-full rounded-lg bg-white p-4 text-[0.5rem] text-zinc-400 shadow blur-[1px] sm:text-xs">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  );
};

const OverlayTask = () => {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 w-64 -translate-x-1/2 -translate-y-1/2 rotate-3 rounded-lg border-2 border-sky-600 bg-white p-4 shadow-xl shadow-sky-600/20">
      <div className="mb-2 flex items-center gap-1.5 text-xs">
        <span className="text-zinc-600">Design Team</span>
        <FiChevronRight />
        <div className="flex items-center gap-1 rounded bg-sky-100 px-1.5 py-0.5 text-sky-900">
          <FiAnchor />
          <span>Features</span>
        </div>
      </div>
      <span className="mb-0.5 block text-lg font-medium">
        Launch landing page
      </span>
      <span className="block text-sm text-zinc-600">December 4th, 2023</span>
    </div>
  );
};

const GanttComponent = () => {
  return (
    <div className="relative h-full min-w-96 p-4 pb-0 pt-0">
      <div className="grid h-full grid-cols-5">
        <span className="block h-full w-full pt-4 text-center text-sm">
          Sat
        </span>
        <span className="block h-full w-full bg-zinc-100 pt-4 text-center text-sm">
          Sun
        </span>
        <span className="block h-full w-full pt-4 text-center text-sm">
          Mon
        </span>
        <span className="block h-full w-full bg-zinc-100 pt-4 text-center text-sm">
          Tue
        </span>
        <span className="block h-full w-full pt-4 text-center text-sm">
          Wed
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-10 space-y-4 p-4">
        <div className="h-4 w-2/5 rounded-full bg-purple-500" />
        <div className="ml-[20%] h-4 w-3/5 rounded-full bg-blue-500" />
        <div className="flex w-full">
          <div className="h-4 w-3/5 rounded-full bg-green-500" />
          <div className="h-4 w-1/5 rounded-full bg-blue-500" />
        </div>
        <div className="ml-[60%] h-4 w-2/5 rounded-full bg-amber-500" />
        <div className="h-4 w-1/5 rounded-full bg-pink-500" />
        <div className="flex w-full">
          <div className="ml-[60%] h-4 w-1/5 rounded-full bg-purple-500" />
          <div className="h-4 w-1/5 rounded-full bg-pink-500" />
        </div>
        <div className="ml-[60%] h-4 w-2/5 rounded-full bg-green-500" />
        <div className="ml-[20%] h-4 w-3/5 rounded-full bg-amber-500" />
        <div className="flex w-full">
          <div className="h-4 w-2/5 rounded-full bg-red-500" />
          <div className="ml-[20%] h-4 w-1/5 rounded-full bg-red-500" />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/3 top-0 w-0.5 bg-sky-600">
        <span className="absolute left-0 top-0 -translate-x-1/2 rounded-b bg-sky-500 px-1.5 pb-0.5 text-xs font-medium text-white">
          Now
        </span>
      </div>
    </div>
  );
};

const DocumentationComponent = () => {
  return (
    <div className="relative p-4">
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEye />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEdit />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiAlignLeft />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiItalic />
        </span>
      </div>
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-900">
          Rizqi Ramadhani
        </span>
        <span className="block w-fit rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-900">
          Fullstack Engineer
        </span>
      </div>
      <span className="relative mb-1.5 inline-block text-lg font-medium">
        Javascript Express, Nextjs, SQL Server
        <span className="inline-block scale-150 animate-pulse text-green-600">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-green-600" />
      </span>
      <br />
      <span className="relative text-xs text-zinc-600 sm:text-sm">
        Build a POS, HRIS and migrating old tools from deplhi & VB to Modern
        apps with reuasble component and restfull api, support Flutter developer
        by serving HRIS and Member API
        <span className="inline-block scale-150 animate-pulse text-blue-600">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-blue-600" />
      </span>
    </div>
  );
};

const DocumentationComponent2 = () => {
  return (
    <div className="relative p-4">
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEye />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEdit />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiAlignLeft />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiItalic />
        </span>
      </div>
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-900">
          Rizqi Ramadhani
        </span>
        <span className="block w-fit rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-900">
          Technician - Marketing
        </span>
      </div>
      <span className="relative mb-1.5 inline-block text-lg font-medium">
        HRIS, Attendance Management, Biometrics
        <span className="inline-block scale-150 animate-pulse text-green-600">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-green-600" />
      </span>
      <br />
      <span className="relative text-xs text-zinc-600 sm:text-sm">
        Give a presentation, sell unit, teaching, and managing connection
        between partners B2B. Give Solution the client problem of attendance
        schedule, reports, and payslips
        <span className="inline-block scale-150 animate-pulse text-blue-600">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-blue-600" />
      </span>
    </div>
  );
};

export const data = [
  {
    id: 1,
    title: "Ajaib",
    Component: IssuesComponent,
    cardTitle: "Ajaib Sekuritas",
    cardSubtitle: (
      <>
        <b>Frontend Engineer </b>
        <i>(Jun 2022 - Current)</i>
        <br />
        Ajaib Sekuritas has become user-friendly platform make it easy to start
        investing in stocks, mutual funds, and ETFs. This 2022 fintech unicorn
        goes beyond just transactions, offering a wealth of educational
        resources to empower Indonesians and foster financial literacy, making
        them a key player in shaping the nation's investment future.
      </>
    ),
  },
  {
    id: 2,
    title: "L'viors",
    Component: DocumentationComponent,
    cardTitle: "Lviors Indonesa (HQ)",
    cardSubtitle: (
      <>
        <b>Fullstack Engineer </b>
        <i>(Okt 2020 - May 2022)</i>
        <br />
        L'viors is an aesthetic clinic that was founded in Surabaya, Indonesia
        on November 5, 2004. The clinic offers a variety of skin treatments,
        from acne and dark spot treatments to anti-aging and body slimming.
        L'Viors has several branches in Indonesia, including Surabaya, Malang,
        Sidoarjo, Gresik, and Jakarta.
      </>
    ),
  },
  {
    id: 3,
    title: "Irefox",
    Component: IssuesComponent2,
    cardTitle: "PT Kisun Kreasi Digital (Irefox)",
    cardSubtitle: (
      <>
        <b>Fullstack Engineer </b>
        <i>(Aug 2021 - Jul 2022)</i>
        <br />
        PT Kisun Kreasi Digital. It is a technology company based in Jakarta,
        Indonesia, specializing in developing digital applications and
        e-commerce solutions. They are particularly known for their expertise in
        online cashier application products.
      </>
    ),
  },
  {
    id: 4,
    title: "Fingerspot",
    Component: DocumentationComponent2,
    cardTitle: "Fingerspot",
    cardSubtitle: (
      <>
        <b>Technician - Marketing </b>
        <i>(Nov 2016 - Oct 2020)</i>
        <br />
        Fingerspot's software solutions include Fingerspot Personnel and
        Fingerspot.io. Fingerspot Personnel is a desktop application that can be
        used to manage attendance data, while Fingerspot.io is a cloud-based
        solution that offers a wider range of features.
      </>
    ),
  },
];
