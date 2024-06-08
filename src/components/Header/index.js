"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-2 px-5 flex justify-between sm:justify-normal sm:px-10 items-center">
      <Logo />
      <button
        className="inline-block mr-5 sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <div
        className={`fixed top-12 px-4 rounded-bl-md right-0  flex sm:hidden  flex-col justify-center items-center bg-white dark:bg-dark transition-all duration-500 ${
          click ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav
          className="py-3 px-6 font-medium text-md capitalize items-center flex flex-col bg-white text-black dark:bg-dark dark:text-white backdrop-blur-sm z-50"
        >
          <Link href="/" className="mb-2 border-b-2 border-b-neutral-600">
            Home
          </Link>
          {/* <Link href="/about" className="mb-2 border-b-2 border-b-neutral-600">
            About
          </Link> */}
          {/* <Link href="/contact" className="mb-2 border-b-2 border-b-neutral-600">
            Contact
          </Link> */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <MoonIcon className={"fill-dark"} />
            ) : (
              <SunIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>


      <div className="w-full hidden sm:flex justify-center items-center ">
        <nav
          className="py-3 px-6 font-medium text-md capitalize items-center flex bg-white text-black dark:bg-dark dark:text-white backdrop-blur-sm z-50"
        >
          <Link href="/" className="mr-2">
            Home
          </Link>
          {/* <Link href="/about" className="mx-2">
            About
          </Link> */}
          {/* <Link href="/contact" className="mx-2">
            Contact
          </Link> */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <MoonIcon className={"fill-dark"} />
            ) : (
              <SunIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* <div className="text-white dark:text-black">.</div> */}
    </header>
  );
};

export default Header;
