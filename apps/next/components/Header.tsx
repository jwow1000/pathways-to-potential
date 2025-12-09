"use client";

import { cx } from "class-variance-authority";
import Link from "next/link";
import MenuButton from "./MenuButton";
import { useState } from "react";

interface PCHeaderProps {
  className?: string;
  colorMode?: string;
}

export default function Header({ className = "" }: PCHeaderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  function handleMenuClick() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className="p-0 md:p-2">
      {
        menuOpen &&
        <div className="fixed top-0 left-0 w-full h-full z-50" onClick={handleMenuClick}>
            
        </div>
      }
      <header
        className={cx(
          "relative w-full flex items-center z-50 p-4 h-24 text-inherit md:p-8 fixed left-0 top-0 pointer-events-none fill-mainBlack text-black bg-gray border-black border-[1px] font-serif",

          className
        )}
      >
        <Link
          href="/"
          aria-label="Home"
          className="fill-inherit w-fit text-lg md:text-[30px] inline pointer-events-auto font-light border-blue border-l-[2px] border-b-[2px] bg-orange/45 p-2 rounded"
        >
          {`Pathways to Potential`}
        </Link>

        <div
          className="pointer-events-auto sm:hidden mr-0 ml-auto"
          onClick={handleMenuClick}
        >
          <MenuButton
            open={menuOpen}
            width={50}
            height={30}
            padding={2}
            color={"#00011D"}
          />
        </div>
        <div className="hidden sm:flex text-black text-xl flex-row gap-10 w-fit mr-0 ml-auto pointer-events-auto font-serif" onClick={handleMenuClick}>
          <Link href={`/about`} aria-label="About Us">{`About Us`}</Link>
          <Link href={`/`} aria-label="">{`Contact`}</Link>
          <Link href={`/`} aria-label="Services">{`Services`}</Link>
        </div>
        <div
          className={`
            sm:hidden absolute top-0 right-0 w-1/3 h-full p-1 bg-lite-orange flex flex-col gap-2
            transform transition-all duration-500 ease-in-out 
            
            ${
              menuOpen
                ? "translate-y-[100%] opacity-100 pointer-events-auto"
                : "-translate-y-0 opacity-0 pointer-events-none"
            }
          `}
          onClick={handleMenuClick}
        >
          <Link href={`/about`} aria-label="About Us">{`About Us`}</Link>
          <Link href={`/`} aria-label="Contact">{`Contact`}</Link>
          <Link href={`/`} aria-label="Services">{`Services`}</Link>
        </div>
        
      </header>
    </div>
  );
}
