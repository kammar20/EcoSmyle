import cnn from '../assets/svg/cnn.svg';
import forbes from '../assets/svg/forbes.svg';
import goop from '../assets/svg/goop.svg';
import treehouse from '../assets/svg/treehouse.svg';
import vogue from '../assets/svg/vogue.svg';
import washingtonpost from '../assets/svg/washingtonpost.svg';

export default function MediaCoverage() {
  return (
    <section className="pt-24 ">
      <div className="bg-green py-5 lg:py-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <hr className="w-[10%] border border-black " />
          <span className="text-xl font-semibold text-black">
            Media Coverage
          </span>
          <hr className="w-[10%] border border-black" />
        </div>
        <div className=" flex justify-center gap-10 px-3">
          <img className="w-[5%]" src={cnn} alt="" />
          <img className="w-[5%]" src={forbes} alt="" />
          <img className="w-[5%]" src={goop} alt="" />
          <img className="w-[8%]" src={treehouse} alt="" />
          <img className="w-[6%]" src={vogue} alt="" />
          <img className="w-[8%] lg:w-[10%]" src={washingtonpost} alt="" />
        </div>
      </div>
    </section>
  );
}
