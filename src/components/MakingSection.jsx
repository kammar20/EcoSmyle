import { makingData } from '../constant/data';

export default function MakingSection() {
  return (
    <section className="max-w-[1350px] m-auto pt-24 px-[2%]">
      <h1 className="text-4xl text-center mb-20">
        How EcoSmyle Makes a Difference
      </h1>
      <div className="flex flex-col gap-5 lg:flex-row justify-between">
        {makingData.map((making) => (
          <div
            key={making.id}
            className={`w-[100%] lg:w-[33%] ${
              making.id === 2 ? 'bg-gray' : 'bg-green'
            } p-10`}
          >
            <span className="inline-block text-4xl mb-3">{making.icon}</span>
            <h2 className="text-2xl mb-3">{making.title}</h2>
            <p>{making.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
