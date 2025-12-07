import { getAbout } from "@/sanity/lib/fetch";
import RichText from "@/components/RichText";
import CustomImage from "@/components/CustomImage";

export default async function Archive() {
  const info = await getAbout();  
  console.log("info: ", info);
  const bodyBlocks = info.body?.map(block => ({
    ...block,
    children: block.children ?? [],
  })) ?? [];

  return (
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
   
  )
}