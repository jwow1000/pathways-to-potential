import { PortableTextBlock } from "next-sanity";
import { TeamMember as TeamMemberType } from "../../studio/sanity.types"
import CustomImage from "./CustomImage";
import RichText from "./RichText";

interface TeamMemberProps {
  member: TeamMemberType;
  className?: string;
}
export default async function TeamMember({member, className}: TeamMemberProps) {
  const bio = member.bio as PortableTextBlock[];
  return (
    <div className={`relative flex flex-row gap-4 ${className}`}>
      <div className="w-1/2 md:h-2/3 aspect-square">
        {
          member.portrait &&
          <CustomImage src={member.portrait} alt={member.portrait.alt || "no alt text"}
            className="rounded-full"
          />
        }
          
      </div>
      <div className="w-1/2 text-inherit flex flex-col gap-2">
        <h2 className="font-bold">{member.name}</h2>
        <div className="pr-2">
          {
            member.bio &&
            <RichText value={bio} bio={true}/>
          }

        </div>

      </div>
    </div>
  )
}