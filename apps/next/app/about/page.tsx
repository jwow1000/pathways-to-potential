import { getAbout, getMeetTeam } from "@/sanity/lib/fetch";
import RichText from "@/components/RichText";
import CustomImage from "@/components/CustomImage";
import TeamMember from "@/components/TeamMember";
import { TeamMember as TeamMemberType } from "../../../studio/sanity.types";

export default async function About() {
  const info = await getAbout(); 
  const team = await getMeetTeam();

  console.log("info: ", team);
  const bodyBlocks = info.body?.map(block => ({
    ...block,
    children: block.children ?? [],
  })) ?? [];
  const teamBlocks = team.page.body?.map(block => ({
    ...block,
    children: block.children ?? [],
  })) ?? [];

  return (
    <div>

    <section className="relative bg-blue text-gray w-full p-2 md:p-6 gap-8
          flex flex-col md:flex-row justify-between 
          lg:pl-16"
        >
        
          
          <div className="absolute w-full h-full top-0 left-0 z-20 opacity-10">
            {
              info.image &&
              <CustomImage 
                src={info.image} 
                alt={info.image.alt} 
                className="rounded" 
                overlay={false}
                objectFit="cover"
                animation={false}
              />
            }

          </div>
          <div className="w-full md:w-1/2 pt-0 flex-col z-30">
            <h2 className="w-full mb-6 text-[28px] font-serif z-30">{info.title}</h2>
            {
              info.body &&
              <div className="w-full mx-auto">
                <RichText value={bodyBlocks} />
              </div>
            }

          </div>
          <div className="w-full md:w-1/2 pt-0 flex-col z-30">
            {
              info.image &&
              <CustomImage 
                src={info.image} 
                alt={info.image.alt} 
                className="rounded" 
                overlay={false}
                objectFit="cover"
                animation={true}
              />
            }
          </div>
        </section>
        {
          team.page &&
          <section
            className="
            relative w-full bg-gray text-dark-blue my-16 py-2 md:py-16 px-2 min-h-[600px] 
            flex flex-col gap-0 
            md:gap-12 lg:pr-16
            border-t-[1px] border-b-[1px] 
          "
          >
            <div className="w-full md:w-1/2 my-4">
              <h2 className="w-full mb-8 text-[40px] font-serif font-bold">
                {team.page.title}
              </h2>
              <RichText value={teamBlocks} />
            </div>
            <div className="w-full max-w-[500px] md:max-w-none mx-auto md:mx-0 flex flex-col items-center justify-around lg:flex-row gap-16 my-6">
              {team.team.map((member: TeamMemberType) => (
                <TeamMember
                  member={member}
                  key={`Team-Member-${member.name}`}
                  className="w-full md:w-[450px] md:mx-0 p-0 md:h-[330px]"
                />
              ))}
            </div>
          </section>
        } 
    </div>
   
  )
}