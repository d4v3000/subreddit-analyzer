import React from "react";
import { ReactSVG } from "react-svg";
import SvgLogo from "../logo/logo.svg";

function NavBar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 pt-2 rounden dark:bg-gray-800">
        <div className="container mx-auto flex flex-wrap items-center justify-between pt-6">
          <a href="/">
            <ReactSVG src={SvgLogo} />
          </a>
          <div className="flex pt-1 space-x-25 text-gray-500 leading-5 font-mono">
            <a href="/search">Search</a>
            <a href="/#how-it-works">How it works</a>
            <a href="/#about">About</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
