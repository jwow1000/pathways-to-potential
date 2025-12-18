export default async function Services() {
  return (
    <section className="w-full relative bg-gray text-black w-full p-6 min-h-[calc(100vh-350px)]">
      <h1 className="w-fit mt-12 mx-auto text-[28px] font-serif font-bold z-30">{`Services We Offer`}</h1>
      <div className="max-w-[61ch] mx-auto mt-14">
        <h2 className="font-bold text-xl mb-10">{`The Services we offer at Pathways to Potential:  `}</h2>
        
        <ul className="w-full flex flex-col gap-8">
          <li>
            <h3 className="font-bold">{`Individual Therapy`}</h3>
            <p>{`We offer 30, 40, and 60 minute sessions`}</p>
          </li>

          <li>
            <h3 className="font-bold">{`Group Therapy`}</h3>
            <p>{`60 minute sessions`}</p>
          </li>
          
        </ul>
      </div>
    </section>
  );
}
