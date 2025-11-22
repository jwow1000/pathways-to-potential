import { getLandingPage } from "@/sanity/lib/fetch";
import CustomImage from "@/components/CustomImage";
import RichText from "@/components/RichText";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { CustomImage as CustomImageType, TeamMember as TeamMemberType } from "../../studio/sanity.types";
import TeamMember from "@/components/TeamMember";

interface Part {
  number: number;
  title: string;
  blurb: string;
  image: CustomImageType;
}

interface Insurance {
  link: string;
  logo: CustomImageType;
  name: string;
}

export default async function Home() {
  const info = await getLandingPage(); 
  console.log("info: ", info) 
  
  return (
    <div className="relative flex min-h-screen bg-gray p-0 lg:p-2">
      <main className="w-full h-full font-sans">
        <section className="relative bg-blue text-orange w-full h-48 gap-4 p-4 flex flex-row justify-center items-center mb-2">
          <h1 className="text-[45px] italic md:text-[58px] leading-none font-bold z-40 p-1 text-lite-blue">Pathways to Potential</h1>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-0% from-black/80 to-black/50 to-100% z-30"></div>
          <div className="absolute w-full h-full top-0 left-0 z-20">
            {
              info.landingPage &&
              <CustomImage 
                src={info.landingPage.banner} 
                alt={info.landingPage.banner.alt} 
                className="rounded" 
                overlay={false}
                objectFit="cover"
                animation={false}
              />
            }

          </div>
        </section>

        <section className="relative bg-blue text-orange w-full p-4 gap-4 min-h-[500px] 
          flex flex-col md:flex-row justify-between 
          lg:px-16"
        >
          
          <div className="w-full md:w-1/2 pt-0 md:pt-6 md:pt-0 flex-col z-30">
            <h2 className="w-full md:w-1/2 my-8 font-bold text-[40px] font-serif z-30">{info.about.title}</h2>
            <div className="w-fill mx-auto">
              <RichText value={info.about.body} />
            </div>

          </div>
          <div className="block md:hidden w-full h-[400px]">
            <CustomImage
              src={info.landingPage.banner} 
              alt={info.landingPage.banner.alt} 
              objectFit="cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 fill-blue">
             <CustomImage 
                src={info.landingPage.banner} 
                alt={info.landingPage.banner.alt} 
                className="rounded" 
                overlay={true}
                waveHeightRatio={0.1}
                objectFit="cover"
              /> 
          </div>
        </section>

        <section className="relative bg-gray text-dark-blue w-full p-4 gap-4 min-h-[800px] flex flex-col md:flex-row justify-between gap-0 md:gap-12 lg:px-16">
          <div className="hidden md:block w-full md:w-1/2 p-6 fill-gray">
             <CustomImage 
                src={info.landingPage.banner} 
                alt={info.landingPage.banner.alt} 
                className="rounded" 
                overlay={true}
                waveHeightRatio={0.1}
                objectFit="cover"
              /> 
          </div>

          <div className="block md:hidden w-full h-[400px]">
            <CustomImage
              src={info.landingPage.banner} 
              alt={info.landingPage.banner.alt} 
              objectFit="cover"
            />
          </div>
          <div className="w-full md:w-1/2 m-0 md:my-8 font-serif z-30">
            <h2 className="m-0 text-[40px] w-fit font-bold">{`Why Choose Us`}</h2>
            <div className="m-0 md:mt-8">
              <RichText value={info.landingPage.whyChooseUsText} />
            </div>

          </div>
        
        </section>


        {/* <section className="relative w-full min-h-[300px] lg:min-h-screen bg-gray text-dark-blue px-4 py-16 flex flex-col md:flex-row justify-between md:justify-around gap-8 border-t-[1px] border-b-[1px]">
          <div className="hidden md:block relative w-full fill-gray min-h-[300px] md:w-1/2 opacity-100">
            <CustomImage 
              src={info.meetTeam?.image} 
              alt={"alt text baby"} 
              className="rounded"
              overlay={true}
              waveHeightRatio={0.2}
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="w-full mb-8 text-[40px] font-serif font-bold">{info.meetTeam.title}</h2>
            <RichText value={info.meetTeam?.body} />
          </div>
          <div className="block md:hidden relative w-full h-[400px]">
            <CustomImage src={info.meetTeam?.image} alt={"alt text baby"} />
          </div>
        </section> */}
        
        <section className="relative w-full min-h-screen bg-blue text-orange p-4 flex flex-col md:flex-row justify-between gap-8 py-16 lg:px-16">
          <div className="w-full md:w-1/2">
            <h2 className="w-full mb-8 text-[40px] text-orange font-serif font-bold">{info.services.title}</h2> 
            <RichText value={info.services.body} />
          </div>
          <div className="block md:hidden w-full h-[400px]">
            <CustomImage src={info.services.image} alt={info.services.image.alt} objectFit="cover"/>
          </div>
          <div className="hidden md:block relative w-full fill-blue min-h-[300px] md:w-1/2 opacity-100">
            <CustomImage 
              src={info.services.image} 
              alt={info.services.image.alt} 
              className="rounded"
              overlay={true}
              waveHeightRatio={0.1}
            />
          </div> 
        </section>

       

        <section className="relative w-full min-h-screen bg-gray text-dark-blue p-4 flex flex-col  justify-between md:justify-around gap-8 border-t-[1px] py-16">
          <h2 className="w-full mb-0 text-[40px] font-serif font-bold">{'Accepted Insurances'}</h2>
          {
            info.services.insurances &&
            <div className="w-full flex flex-row flex-wrap gap-4">
              {
                info.services.insurances.map((insurance: Insurance) => (
                  <Link href={insurance.link} className="w-24 h-24 md:w-38 md:h-38 flex flex-col" key={`accepted-insurance-${insurance.name}`}>
                    <h3>{insurance.name}</h3>
                    <CustomImage 
                      src={insurance.logo} 
                      alt={insurance.logo.alt || "no alt text provided"}
                      objectFit="contain"
                    />
                  </Link>

                ))
              }
            </div>
          }
        </section>

        <section className="relative w-full min-h-screen bg-blue text-black p-4 flex flex-col md:flex-row justify-between gap-8 py-16">
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

        {/* <section className="relative w-full min-h-[500px] bg-blue text-black p-4 flex flex-col md:flex-row justify-between gap-8 py-16 text-orange">
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
        </section> */}
        
        
      </main>
    </div>
  );
} 
