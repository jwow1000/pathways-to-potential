import Link from "next/link";



export default function Footer() {
  return (
    <footer
      className="absolute bottom-0 translate-y-[100%] w-full h-8 border-t-[1px] border-b-[1px] px-2 py-1 flex flex-row items-center gap-4 text-xs sm:text-s"
    >
      <Link className="font-serif" href={`/`}>Pathways to Potential ©2025</Link>
      <Link 
        className="hidden sm:block" 
        href={"https://www.jeremywy.com/"}
        target="_blank" 
        rel="noreferrer" 
      >website: Jeremy Wiles-Young</Link>
      <div className="absolute right-2 flex flex-row gap-3">
        <Link
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
        >{`Services`}</Link>
      </div>
      
    </footer>
  );

}

