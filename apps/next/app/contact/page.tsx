import { getContact } from "@/sanity/lib/fetch";
import RichText from "@/components/RichText";
import ContactForm from "@/components/ContactForm";
import CustomImage from "@/components/CustomImage";

export default async function Contact() {
  const info = await getContact();  
  // console.log("info: ", info);
  const bodyBlocks = info.body?.map(block => ({
    ...block,
    children: block.children ?? [],
  })) ?? [];

  return (
    <section className="relative bg-gray text-black w-full p-2 md:p-6 gap-8
          flex flex-col lg:flex-row justify-between 
          lg:pl-16"
        >
          <div className="w-fit mx-auto lg:w-1/2 min-w-[300px] max-w-[500px] pt-0 flex-col z-30">
            <h1 className="w-fit my-12 text-[28px] font-serif font-bold z-30">{info.title}</h1>
            {
              info.body &&
              <div className="w-full mx-auto">
                <RichText value={bodyBlocks} />
              </div>
            }
            <ContactForm />

          </div>
          <div className="w-full h-[300px] lg:h-auto lg:w-1/2 pt-0 flex-col z-30">
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