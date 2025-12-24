import { getLandingPage } from "@/sanity/lib/fetch";
import CustomImage from "@/components/CustomImage";
import RichText from "@/components/RichText";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  CustomImage as CustomImageType,
  TeamMember as TeamMemberType,
} from "../../studio/sanity.types";
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
  console.log("info: ", info);

  return (
    <div className="relative flex min-h-screen bg-gray p-0 lg:p-2">
      <main className="w-full h-full font-sans">
        <section
          className="relative bg-blue text-gray w-full p-6 md:p-6 gap-8
          flex flex-col md:flex-row justify-between 
          lg:pl-16"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-0% from-black/90 to-black/0 to-100% z-30"></div>

          <div className="absolute w-full h-full top-0 left-0 z-20">
            {info.landingPage && (
              <CustomImage
                src={info.landingPage.banner}
                alt={info.landingPage.banner.alt}
                className="rounded"
                overlay={false}
                objectFit="cover"
                animation={false}
              />
            )}
          </div>
          <div className="w-full md:w-1/2 pt-0 flex-col z-30">
            <h2 className="w-full mb-6 text-[28px] font-serif z-30">
              {info.about.title}
            </h2>
            <div className="w-full mx-auto">
              <RichText value={info.about.subheading} />
            </div>
            <Link
              className="italic text-xl"
              href="/about"
            >{`Read More ->`}</Link>
          </div>
        </section>

        <section className="relative bg-gray text-dark-blue w-full p-6 gap-4 min-h-[600px] flex flex-col md:flex-row justify-between gap-0 md:gap-12 lg:pr-16">
          <div className="hidden md:block w-full md:w-1/2 fill-gray">
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
          <div className="w-fit mx-auto md:my-8 font-serif z-30">
            <h2 className="w-full mb-8 text-[40px] font-serif font-bold">{`Why Choose Us`}</h2>
            <div className="m-0 md:mt-8">
              <RichText value={info.landingPage.whyChooseUsText} />
            </div>
          </div>
        </section>
        {info.meetTheTeam && (
          <section
            className="
            relative w-full bg-gray text-dark-blue min-h-[600px] 
            flex flex-col gap-0 
            p-6 pb-24 lg:pl-16 md:gap-12 lg:pr-16
            border-t-[1px] border-b-[1px] 
          "
          >
            <div className="w-full md:w-1/2 my-4">
              <h2 className="w-full mb-2 text-[40px] font-serif font-bold">
                {info.meetTheTeam.title}
              </h2>
              <RichText value={info.meetTheTeam?.body} />
            </div>
            <div className="w-full max-w-[500px] md:max-w-none mx-auto md:mx-0 flex flex-col items-center justify-around lg:flex-row gap-16 my-6">
              {info.team.map((member: TeamMemberType) => (
                <TeamMember
                  member={member}
                  key={`Team-Member-${member.name}`}
                  className="w-full md:w-[450px] md:mx-0 p-0 md:h-[330px]"
                />
              ))}
            </div>
          </section>
        )}

        <section className="relative w-full min-h-[600px] bg-blue text-lite-orange flex flex-col md:flex-row justify-between gap-0 md:gap-8 p-6 lg:pl-16">
          <div className="w-fit mx-auto md:w-1/2">
            <h2 className="w-full mb-8 text-[40px] font-bold font-serif">
              {info.services.title}
            </h2>
            <RichText value={info.services.body} />
          </div>
          <div className="block md:hidden w-full h-[400px]">
            <CustomImage
              src={info.services.image}
              alt={info.services.image.alt}
              objectFit="cover"
            />
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

        <section className="relative w-full min-h-[600px] bg-gray text-black flex flex-col md:flex-row justify-between gap-8 p-6 lg:pl-16">
          <div className="relative w-full">
            <h2 className="w-full mb-8 text-[40px] font-serif font-bold">
              {info.howItWorks.title}
            </h2>
            <div className="w-full italic mb-8">
              <RichText value={info.howItWorks.body} />
            </div>
            <div className="relative w-full max-w-[300px] md:max-w-[500px] mx-auto lg:max-w-none h-auto flex flex-col lg:flex-row lg:justify-center gap-8 lg:items-start lg:justify-around">
              {info.howItWorks.parts &&
                info.howItWorks.parts.map((part: Part, idx: number) => (
                  <div
                    className="relative w-auto md:w-[380px] md:min-h-[450px] flex flex-col lg:flex-row gap-4 lg:gap-8"
                    key={`part ${idx}`}
                  >
                    <div className="w-full flex flex-col justify-between items-center">
                      <div>
                        <h3 className="font-bold mb-3">
                          {`${part.number}. `}
                          {part.title}
                        </h3>
                        <p className="ml-4 lg:ml-0 max-w-[60ch]">
                          {part.blurb}
                        </p>
                      </div>
                      {part.image && (
                        <div className="relative w-full aspect-square mt-0 md:mt-8 mx-auto fill-orange">
                          <CustomImage
                            src={part.image}
                            alt={part.image.alt || ""}
                            objectFit="contain"
                          />
                        </div>
                      )}
                    </div>
                    {/* {
                      (idx < 3) &&
                      <div className="flex justify-center items-center text-orange">
                        <p className="lg:hidden block text-center mx-auto my-8 text-[64px]">↓</p>
                        <p className="hidden lg:block text-center text-[64px]">→</p>
                      </div>
                    } */}
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="relative w-full bg-gray text-dark-blue p-6 flex flex-col gap-8 border-t-[1px] md:pl-16">
          <h2 className="w-full mb-0 text-[30px] font-serif font-bold">
            {"Accepted Insurances"}
          </h2>
          {info.services.insurances && (
            <div className="w-full flex flex-row flex-wrap gap-4 items-center justify-around">
              {info.services.insurances.map((insurance: Insurance) =>
                insurance.link ? (
                  <Link
                    href={insurance.link}
                    className="w-38 h-38 flex flex-col"
                    key={`accepted-insurance-${insurance.name}`}
                  >
                    <CustomImage
                      src={insurance.logo}
                      alt={insurance.logo.alt || "no alt text provided"}
                      objectFit="contain"
                    />
                  </Link>
                ) : (
                  <div
                    className="w-24 h-24 md:w-38 md:h-38 flex flex-col"
                    key={`accepted-insurance-${insurance.name}`}
                  >
                    <CustomImage
                      src={insurance.logo}
                      alt={insurance.logo.alt || "no alt text provided"}
                      objectFit="contain"
                    />
                  </div>
                )
              )}
            </div>
          )}
        </section>

        <section className="relative w-full bg-gray text-dark-blue p-4 flex flex-col md:flex-row justify-between md:justify-around gap-8 border-t-[1px] py-4 md:py-16">
          <div className="hidden md:block relative w-full min-h-[300px] md:w-1/2 opacity-100">
            <CustomImage src={info.contact.image} alt={"alt text baby"} />
          </div>
          <div className="w-full md:w-1/2 max-w-[55ch] mx-auto">
            <h2 className="w-full mb-0 text-[40px] font-serif font-bold">
              {info.contact.title}
            </h2>
            <div className="my-4">
              <RichText value={info.contact.body} />
            </div>
            <ContactForm />
          </div>
          <div className="block md:hidden relative w-full h-[400px] md:w-1/2 opacity-100">
            <CustomImage src={info.contact.image} alt={"alt text baby"} />
          </div>
        </section>
      </main>
    </div>
  );
}
