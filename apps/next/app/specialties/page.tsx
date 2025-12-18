export default async function Specialties() {
  return (
    <section className="w-full relative bg-gray text-black w-full p-6">
      <h1 className="w-fit mt-12 mx-auto text-[28px] font-serif font-bold z-30">{`Specialty Treatments`}</h1>
      <div className="max-w-[61ch] mx-auto mt-14">
        <p className="">{`At Pathways to Potential, we offer a range of effective, evidence based interventions for most mental health challenges or life difficulties.`}</p>
        <p className="my-8 font-bold">{"These Include: "}</p>
        <ul>
          <li>{`Relationship and Interpersonal Difficulties`}</li>
          <li>{`Depression`}</li>
          <li>{`Anxiety`}</li>
          <li>{`Trauma`}</li>
          <li>{`OCD`}</li>
          <li>{`Spectrum Disorders`}</li>
          <li>{`ADHD`}</li>
          <li>{`Adjustments to Life Stressors`}</li>
          <li>{`Coping with Difficult Medical Illnesses`}</li>
          <li>{`Men's Divorce Group`}</li>
        </ul>
      </div>
    </section>
  );
}
