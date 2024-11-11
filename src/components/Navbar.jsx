import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

export default function Navbar({
  heroRef,
  benefitRef,
  makingRef,
  productRef,
  testRef,
  faqRef,
  scrollTo,
}) {
  const [openModel, setOpenModel] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  window.addEventListener('scroll', handleScroll);

  // when you click on hamburger
  function handleClick() {
    setOpenModel(!openModel);
  }

  //when Scroll Happens
  function handleScroll() {
    if (window.scrollY >= 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  }

  return (
    <div
      className={`${
        navBackground ? 'border-b border-darkGreen bg-[#f8f8f8]' : ''
      } w-[100%] sticky top-0 z-10`}
    >
      <nav className="max-w-[1350px] mx-auto flex justify-between items-center py-5  px-5 md:px-7 lg:px-9 xl:px-11">
        <h1
          onClick={() => scrollTo(heroRef)}
          className="font-logo text-3xl font-semibold cursor-pointer"
        >
          EcoSmyle
        </h1>
        <ul className="hidden lg:flex gap-10">
          <li
            onClick={() => scrollTo(heroRef)}
            className="text-lg font-medium cursor-pointer hover:text-green"
          >
            Home
          </li>
          <li
            onClick={() => scrollTo(benefitRef)}
            className="text-lg font-medium cursor-pointer hover:text-green"
          >
            Benefits{' '}
          </li>
          <li
            onClick={() => scrollTo(makingRef)}
            className="text-lg font-medium cursor-pointer hover:text-green"
          >
            Making of EcoSmyle
          </li>
          <li
            onClick={() => scrollTo(productRef)}
            className="text-lg font-medium cursor-pointer hover:text-green"
          >
            Products
          </li>
          <li
            onClick={() => scrollTo(testRef)}
            className="text-lg font-medium cursor-pointer hover:text-green"
          >
            Testimonials
          </li>
          <li
            onClick={() => scrollTo(faqRef)}
            className="text-lg font-medium cursor-pointer hover:text-green"
          >
            FAQ
          </li>
        </ul>
        <div>
          <button
            onClick={() => scrollTo(productRef)}
            className="hidden lg:block bg-green text-white px-5 py-1.5 rounded-sm hover:bg-darkGray"
          >
            Shop Now
          </button>
        </div>

        <div onClick={handleClick} className="text-3xl text-green lg:hidden ">
          {openModel ? <RxCross2 /> : <IoMenu />}
        </div>
      </nav>

      {/* When Open Model */}
      {openModel && (
        <div className="w-full lg:hidden flex flex-col gap-5 py-8 pl-8">
          <ul className="flex-col items-start gap-3 ">
            <li
              onClick={() => scrollTo(heroRef)}
              className="text-lg font-medium cursor-pointer  hover:text-green"
            >
              Home
            </li>
            <li
              onClick={() => scrollTo(benefitRef)}
              className="text-lg font-medium cursor-pointer  hover:text-green"
            >
              Benefits{' '}
            </li>
            <li
              onClick={() => scrollTo(makingRef)}
              className="text-lg font-medium cursor-pointer  hover:text-green"
            >
              Making of EcoSmyle
            </li>
            <li
              onClick={() => scrollTo(productRef)}
              className="text-lg font-medium cursor-pointer  hover:text-green"
            >
              Products
            </li>
            <li
              onClick={() => scrollTo(testRef)}
              className="text-lg font-medium cursor-pointer  hover:text-green"
            >
              Testimonials
            </li>
            <li
              onClick={() => scrollTo(faqRef)}
              className="text-lg font-medium cursor-pointer  hover:text-green"
            >
              FAQ
            </li>
          </ul>
          <div>
            <button className=" bg-green text-white px-5 py-1.5 rounded-sm hover:bg-darkGray">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
