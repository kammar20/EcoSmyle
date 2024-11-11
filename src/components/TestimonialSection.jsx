import { testimonialData } from '../constant/data';
export default function TestimonialSection() {
  return (
    <section className="pt-24 px-3">
      <h1 className="text-4xl text-center mb-20">What Our Customers Say</h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-1 w-[100%]">
        {testimonialData.map((test) => (
          <div
            key={test.id}
            className={` ${
              test.id === 1 || test.id === 4 || test.id === 5
                ? 'lg:w-[40%]'
                : 'lg:w-[30%]'
            }  bg-green p-5`}
          >
            <h2 className="mb-5">{test.test}</h2>
            <div className="flex items-center gap-2">
              <img
                src={test.img}
                alt=""
                className="w-[40px] h-[40px] rounded-full"
              />
              <span>{test.customer}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
