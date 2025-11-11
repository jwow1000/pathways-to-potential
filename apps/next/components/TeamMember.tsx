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
    <div className={`relative flex flex-row gap-4 p-2 ${className}`}>
      <div className="w-full">
        {
          member.portrait &&
          <CustomImage src={member.portrait} alt={member.portrait.alt || "no alt text"}
            className="rounded-full"
          />
        }
          
      </div>
      <div className="w-full text-orange flex flex-col gap-2">
        <h2 className="font-bold">{member.name}</h2>
        <div className="text-xs">
          {
            member.bio &&
            <RichText value={bio} />
          }

        </div>

      </div>
    </div>
  )
}