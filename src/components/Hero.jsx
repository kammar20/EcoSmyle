import hero from '../assets/images/hero.jpeg';
import cultryFree from '../assets/svg/cultryFree.svg';
import vegan from '../assets/svg/vegan.svg';

export default function Hero() {
  return (
    <section className="max-w-[1350px] m-auto flex flex-col items-center lg:flex-row gap-16 pt-24 px-5 md:px-7 lg:px-9 xl:px-11">
      <div className="section-content w-full lg:w-[45%]">
        <p className="text-center  text-lg font-bold lg:text-start text-darkGreen ">
          Smile Brighter with BambooSmile
        </p>
        <h1 className=" w-[100%]  m-auto text-center text-3xl  lg:text-5xl lg:text-start  lg:w-full text-darkGray mb-8">
          Eco-friendly, toothbrushes that keep your teeth and the planet clean.
        </h1>
        <p className="w-[100%]  text-center m-auto lg:w-full lg:text-start text-darkGreen text-lg mb-5">
          EcoSmyle brushes are made from 100% biodegradable bamboo handles and
          BPA-free bristles. Say goodbye to plastic waste and hello to a fresh,
          sustainable smile.
        </p>
        <div className="flex gap-16 justify-center lg:justify-start">
          <img src={vegan} alt="" className="w-[10%] lg:w-[25%]" />
          <img src={cultryFree} alt="" className="w-[10%] lg:w-[20%] " />
        </div>
      </div>
      <div className="img-container  w-[100%] lg:w-[55%]">
        <img src={hero} alt="A image of bamboo Brush" className="w-full" />
      </div>
    </section>
  );
}
