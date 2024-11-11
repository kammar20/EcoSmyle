import { productData } from '../constant/data';
import Button from './Button';
export default function ProductSection() {
  return (
    <section className="max-w-[1350px] m-auto pt-24 px-[2%]">
      <h1 className="text-4xl text-center mb-20">
        Explore Our BambooSmile Collection
      </h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-10">
        {productData.map((product) => (
          <div key={product.id} className="w-[100%] lg:w-[30%]">
            <div className="w-full">
              <img src={product.img} alt="" className="w-full" />
            </div>
            <div>
              <h2 className="text-xl mb-2">{product.productName}</h2>
              <p className="w-[80%] mb-2">{product.productDesc}</p>
              <Button>Shop Now</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
