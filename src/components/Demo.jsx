import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={() => {}}
        >
          <img
            src={linkIcon}
            alt="Link Icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Enter a URL"
            value=""
            onChange={() => {}}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="16 12 12 8 8 12" />
              <line x1="12" y1="16" x2="12" y2="8" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
