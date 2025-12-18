import { getTeamMemberBySlug } from "@/sanity/lib/fetch";
import RichText from "@/components/RichText";
import CustomImage from "@/components/CustomImage";
import { TeamMember } from "../../../../studio/sanity.types";

export default async function TeamDetail({
   params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // Get work information
  const teamMember: TeamMember = await getTeamMemberBySlug(slug);
  // console.log("work: ", post)
  console.log("slug: ", slug, "data: ", teamMember)
  const bodyBlocks = teamMember.bio?.map(block => ({
    ...block,
    children: block.children ?? [],
  })) ?? []; 
  return (
    <div className="w-full p-2 pb-32">
      <h1 className="font-bold text-xl w-fit mx-auto mb-16">{teamMember.name}</h1>
      <div className="w-full h-[400px] my-8">
        {
          teamMember.portrait &&
          <CustomImage 
            src={teamMember.portrait} 
            alt={teamMember.portrait?.alt || "no alt text provided"}
            objectFit="contain"
          />
        }
      </div>
      <div className="w-fit mx-auto">
        <RichText value={bodyBlocks}/>
      </div>

    </div>
  )
}