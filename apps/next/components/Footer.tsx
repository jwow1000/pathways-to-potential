'use client'

import Link from "next/link";



export default function Footer() {
  
  return (
    <div className="w-full p-0 my-6 mx-1 py-6">
      <div className="flex flex-col md:flex-row p-6 gap-6 justify-around">
        <div className="flex flex-col items-center">
          <h3 className="font-bold">Location: Brooklyn + New York State</h3>
          <p>Virtual Sessions Only</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold">Hours:</h3>
          <p>Monday-Friday</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold">Contact:</h3>
          <p>email@email.com</p>
        </div>

      </div>
      <footer
        className="translate-y-[100%] w-full h-8 border-[1px] px-2 py-1 flex flex-row items-center gap-4 text-xs sm:text-sm"
      >
        <Link className="font-serif" href={`/`}>Pathways to Potential ©2025</Link>
        <Link 
          className="hidden sm:block" 
          href={"https://www.jeremywy.com/"}
          target="_blank" 
          rel="noreferrer" 
        >website: Jeremy Wiles-Young</Link>
        <div className="absolute right-6 flex flex-row gap-3">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className=""
          >{`Back to Top ↑`}</button>
          {/* <Link
            href={`/about`}
            aria-label="About Us"
          >{`About Us`}</Link>
          <Link
            href={`/`}
            aria-label="Contact"
          >{`Contact`}</Link>
          <Link
            href={`/`}
            aria-label="Services"
          >{`Services`}</Link> */}
        </div>
        
      </footer>
    </div>
  );

}

