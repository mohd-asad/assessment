import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-gray-900/90 text-gray-200 backdrop-blur after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <h2 className="text-lg font-semibold tracking-tight text-white">
                Image <span className="text-indigo-400">Search</span>
              </h2>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/login"
              aria-label="Login"
              className="group flex items-center gap-2 rounded-full px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-6 w-6"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6A2.25 2.25 0 0015.75 18.75V15"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9l3 3m0 0l-3 3m3-3H8.25"
                />
              </svg>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium whitespace-nowrap">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
