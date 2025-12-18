"use client";

import { cx } from "class-variance-authority";
import Link from "next/link";
import MenuButton from "./MenuButton";
import { useState } from "react";

interface PCHeaderProps {
  className?: string;
  colorMode?: string;
}

function MainLinks({className}: {className: string}) {
  return (
    <div className={`${className}`}>
      <Link href={`/`} className="hover:bg-blue hover:text-gray p-1" aria-label="Welcome">{`Welcome`}</Link>
      <Link href={`/about`} className="hover:bg-blue hover:text-gray p-1" aria-label="About">{`About`}</Link>
      <Link href={`/services`} className="hover:bg-blue hover:text-gray p-1" aria-label="Services">{`Services`}</Link>
      <Link href={`/specialties`} className="hover:bg-blue hover:text-gray p-1" aria-label="Specialties">{`Specialties`}</Link>
      {/* <Link href={`/blog`} aria-label="blog">{`blog`}</Link> */}
      <Link href={`/faq`} className="hover:bg-blue hover:text-gray p-1" aria-label="FAQ">{`FAQ`}</Link>
      <Link href={`/blog`} className="hover:bg-blue hover:text-gray p-1" aria-label="Blog">{`Blog`}</Link>
      <Link href={`/contact`} className="hover:bg-blue hover:text-gray p-1" aria-label="">{`Contact`}</Link>
    </div>
  )
}

export default function Header({ className = "" }: PCHeaderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  function handleMenuClick() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className="p-0 md:p-2 bg-gray z-50">
      {
        menuOpen &&
        <div className="fixed top-0 left-0 w-full h-full" onClick={handleMenuClick}>
            
        </div>
      }
      <header
        className={cx(
          "relative w-full flex items-center z-50 p-4 h-24 text-inherit md:p-8 fixed left-0 top-0 pointer-events-none fill-mainBlack text-black border-black border-[1px] font-serif",

          className
        )}
      >
        <Link
          href="/"
          aria-label="Home"
          className="fill-inherit w-fit text-lg md:text-[30px] inline pointer-events-auto font-light border-blue border-l-[2px] border-b-[2px] bg-lite-orange p-2 rounded"
        >
          {`Pathways to Potential`}
        </Link>

        <div
          className="absolute right-4 md:right-12 pointer-events-auto lg:hidden mr-0 ml-auto"
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
        <div className="hidden md:flex text-black flex-row gap-10 w-fit mr-0 ml-auto pointer-events-auto font-serif" onClick={handleMenuClick}>
          <MainLinks className="hidden lg:flex text-black text-lg xl:text-xl flex-row gap-6 w-fit mr-0 ml-auto pointer-events-auto font-serif"/> 
        </div>
        <div
          className={`
            lg:hidden absolute top-0 right-[-0.8px] w-1/3 md:w-1/4 h-full bg-none flex flex-col gap-2
            transform transition-all duration-500 ease-in-out z-40
            
            ${
              menuOpen
                ? "translate-y-[100%] opacity-100 pointer-events-auto"
                : "-translate-y-0 opacity-0 pointer-events-none"
            }
          `}
          onClick={handleMenuClick}
        >
          <MainLinks className="absolute w-full flex flex-col gap-2 p-2 m-0 h-fit bg-lite-orange border-[1px] z-40"/>
        </div>
        
      </header>
    </div>
  );
}
