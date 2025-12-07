import { getAbout } from "@/sanity/lib/fetch";
import { PortableText } from "next-sanity";

export default async function Blog() {
  const info = await getAbout();  
  console.log("info: ", info);

  return (
    <div className="w-full font-inherit">
      <h1>{info.title}</h1>
      {
        info.body &&
        <PortableText value={info.body}/>
      }
    </div>
  )
}

