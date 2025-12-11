import { getFAQs } from "@/sanity/lib/fetch";
import RichText from "@/components/RichText";

export default async function FAQs() {
  const info = await getFAQs();  
  // console.log("info: ", info);
  

  return (
    <section className="relative min-h-[calc(100vh-190px)] bg-gray text-black w-full p-6 gap-8
          
          lg:pl-16"
        >
          <h1 className="w-fit mt-12 mx-auto text-[28px] font-serif font-bold z-30">{`FAQs`}</h1>
          <h2 className="w-fit mx-auto text-lg max-w-[60ch] mt-6">{`Have questions? Check out some of these frequently asked questions (FAQs) for more information on what type of insurance we take, our fees, and more.
          `}</h2> 
          {
            info &&
            info.map((faq) => {
              if(faq.answer) {
                const bodyBlocks = faq?.answer.map(block => ({
                  ...block,
                  children: block.children ?? [],
                })) ?? []; 
                return (
                  <div key={`faq-${faq.question}`} className="mt-16 max-w-[800px] mx-auto">
                    <h3 className="font-bold text-xl my-4">{faq.question}</h3>
                    <RichText value={bodyBlocks} />
                  </div>
                )
              }
            })
          }
         
        </section>
   
  )
}