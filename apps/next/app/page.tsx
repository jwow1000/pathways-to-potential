import { getLandingPage } from "@/sanity/lib/fetch";
import CustomImage from "@/components/CustomImage";

export default async function Home() {
  const info = await getLandingPage(); 
  console.log("info: ", info) 
  
  return (
    <div className="relative w-full flex min-h-screen bg-gray">
      <main className="w-full h-full font-sans">
        <section className="relative bg-blue text-lite-orange w-full p-4 h-[300px] h-[500px] flex flex-row justify-between">
          <h1 className="text-[45px] md:text-[64px] font-bold z-50 p-1">Pathways to Potential</h1>
          <div className="absolute md:hidden top-0 left-0 w-full h-[280px] bg-gradient-to-b from-dark-blue to-transparent z-40"></div>
          <div className="absolute md:relative top-0 left-0 w-full h-full md:w-1/2 opacity-100 md:opacity-100">
            <CustomImage src={info.about.image} alt={"alt text baby"}/>
          </div>
        </section>

        <section className="bg-gray text-black w-full p-4 min-h-[300px] sm:min-h-[500px] flex flex-row justify-between gap-8">
          <div className="relative w-1/2 bg-black opacity-75">
            <CustomImage src={info.about.image} alt={"alt text baby"} />
            <h1 className="text-[40px] font-serif w-full">{info.about.title}</h1>
          </div>
        </section>
        
        {`Home Page`}
      </main>
    </div>
  );
}
