import { benefitData } from '../constant/data';

export default function BenefitSection() {
  return (
    <section className="max-w-[1350px] m-auto pt-24 px-[2%]">
      <h1 className="text-4xl text-center mb-20">Why Choose EcoSmyle?</h1>
      <div className="flex flex-col gap-5 items-center lg:flex-row ">
        {benefitData.map((benefit) => (
          <div
            key={benefit.id}
            className={`w-[100%] lg:w-[33%] ${
              benefit.id === 2 ? 'bg-green' : 'bg-gray'
            } p-10`}
          >
            <span className="inline-block text-4xl mb-3">{benefit.icon}</span>
            <h2 className="text-2xl mb-3">{benefit.title}</h2>
            <p>{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
