import { TeamMember as TeamMemberType } from "../../studio/sanity.types"
import CustomImage from "./CustomImage";
import Link from "next/link";

interface TeamMemberProps {
  member: TeamMemberType;
  className?: string;
}
export default async function TeamMember({member, className}: TeamMemberProps) {
  
  return (
    <Link href={`/team/${member.slug?.current}`} className={`w-full h-full relative flex flex-col md:flex-row gap-4 ${className}`}>
      <div className="w-full max-w-[300px] mx-auto md:w-1/2 md:h-2/3 aspect-square">
        {
          member.portrait &&
          <CustomImage src={member.portrait} alt={member.portrait.alt || "no alt text"}
            className="rounded-full"
          />
        }
          
      </div>
      <div className="w-full max-w-[45ch] mx-auto md:w-1/2 px-4 text-inherit flex flex-col gap-2">
        <h2 className="font-bold">{member.name}</h2>
        <div className="h-full">
          {
            member.shortBio &&
            <p className="">{member.shortBio}</p>
          }

        </div>

      </div>
    </Link>
  )
}