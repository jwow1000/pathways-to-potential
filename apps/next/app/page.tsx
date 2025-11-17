import { getLandingPage } from "@/sanity/lib/fetch";
import CustomImage from "@/components/CustomImage";
import RichText from "@/components/RichText";
import ContactForm from "@/components/ContactForm";
import { CustomImage as CustomImageType, TeamMember as TeamMemberType } from "../../studio/sanity.types";
import TeamMember from "@/components/TeamMember";

interface Part {
  number: number;
  title: string;
  blurb: string;
  image: CustomImageType;
}

export default async function Home() {
  const info = await getLandingPage(); 
  console.log("info: ", info) 
  
  return (
    <div className="relative w-full flex min-h-screen bg-gray">
      <main className="w-full h-full font-sans">
        <section className="relative bg-blue text-orange w-full px-4 gap-4 py-16 min-h-[500px] flex flex-row justify-between">
          <h1 className="text-[45px] md:text-[64px] font-bold z-40 p-1">Pathways to Potential</h1>
          <div className="absolute md:hidden top-0 left-0 w-full h-[280px] bg-gradient-to-b from-dark-blue to-transparent z-20"></div>
          <div className="absolute md:relative top-0 left-0 w-full h-[500px] md:w-1/2 opacity-100 md:opacity-100 z-0 fill-blue">
            <CustomImage 
              src={info.about.image} 
              alt={"alt text baby"} 
              className="rounded" 
              overlay={true}
            />
          </div>
        </section>

        <section className="relative w-full min-h-[600px] bg-gray text-dark-blue px-4 py-16 flex flex-col md:flex-row justify-between md:justify-around gap-8 border-t-[1px] border-b-[1px]">
          <div className="hidden md:block relative w-full fill-gray min-h-[300px] md:w-1/2 opacity-100">
            <CustomImage 
              src={info.about.image} 
              alt={"alt text baby"} 
              className="rounded"
              overlay={true}
            />
          </div>
          <div className="w-1/2">
            <h2 className="w-full mb-8 text-[40px] font-serif font-bold">{info.about.title}</h2>
            <RichText value={info.about.body} />
          </div>
          <div className="md:hidden relative w-full min-h-[300px] md:w-1/2 opacity-100">
            <CustomImage src={info.about.image} alt={"alt text baby"} />
          </div>
        </section>

        <section className="relative w-full min-h-[500px] bg-blue text-black p-4 flex flex-col md:flex-row justify-between gap-8 py-16">
          <div className="relative w-full">
            <h2 className="w-full mb-8 text-[40px] text-orange font-serif font-bold">{info.howItWorks.title}</h2>
            <div className="w-full italic text-lite-orange mb-8">
              <RichText value={info.howItWorks.body} />
            </div >
            <div className="relative w-full max-w-[500px] mx-auto lg:max-w-none h-auto text-lite-orange lg:flex lg:flex-row lg:justify-center gap-8 lg:items-start lg:justify-around">
              {
                info.howItWorks.parts &&
                info.howItWorks.parts.map((part: Part, idx: number) => (
                  <div className="relative w-full flex-grow lg:flex lg:flex-row gap-4 lg:gap-8" key={`part ${idx}`}>
                    <div className="w-full h-full">
                      <h3 className="font-bold mb-3">{`${part.number}. `}{part.title}</h3>
                      <p className="ml-4 lg:ml-0 max-w-[60ch]">{part.blurb}</p>
                      {
                        part.image &&
                        <div className="relative w-1/3 lg:w-full aspect-square mt-8 mx-auto fill-orange bg-blue">
                          <CustomImage src={part.image} alt={part.image.alt || ""} objectFit="contain"/>
                        </div>
                      }
                    </div>
                    {
                      (idx < 3) &&
                      <div className="flex justify-center items-center text-orange">
                        <p className="lg:hidden block text-center mx-auto my-8 text-[64px]">↓</p>
                        <p className="hidden lg:block text-center text-[64px]">→</p>
                      </div>
                    }
                  </div>
                )) 
              }
            </div>
          </div> 
        </section>

        <section className="relative w-full min-h-[500px] bg-gray text-dark-blue p-4 flex flex-col md:flex-row justify-between md:justify-around gap-8 border-t-[1px] py-16">
          <div className="hidden md:block relative w-full min-h-[300px] md:w-1/2 opacity-100">
            <CustomImage src={info.contact.image} alt={"alt text baby"} />
          </div>
          <div className="w-full md:w-1/2 max-w-[55ch] mx-auto">
            <h2 className="w-full mb-0 text-[40px] font-serif font-bold">{info.contact.title}</h2>
            <RichText value={info.contact.body} />
            <ContactForm />
          </div>
          <div className="md:hidden relative w-full min-h-[300px] md:w-1/2 opacity-100">
            <CustomImage src={info.contact.image} alt={"alt text baby"} />
          </div>
        </section>

        <section className="relative w-full min-h-[500px] bg-blue text-black p-4 flex flex-col md:flex-row justify-between gap-8 py-16 text-orange">
          <div>
            <h2 className="w-full mb-8 text-[40px] text-orange font-serif font-bold">{info.meetTeam.title}</h2>
            <RichText value={info.meetTeam.body} />
          </div>

          <div className="w-full flex">
            {
              info.meetTeam.teamMembers.map((member: TeamMemberType) => (
                <TeamMember 
                  member={member} 
                  key={`Team-Member-${member.name}`}
                  className="w-[350px] mx-auto p-0 md:w-[460px] md:h-[230px]"
                />
              ))
            }
          </div>
        </section>
        
      </main>
    </div>
  );
} 
