import React from "react";
import { FiMail } from "react-icons/fi";

export const EmailCapture = () => {
  return (
    <section className="relative bg-zinc-900 py-24 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-2 md:flex-row md:px-4">
        <div></div>
      </div>

      <div className="absolute left-0 right-0 top-0 h-8 rounded-b-2xl bg-zinc-50" />
      <div className="absolute bottom-0 left-0 right-0 h-8 rounded-t-2xl bg-white" />
    </section>
  );
};
