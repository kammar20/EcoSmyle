import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-green py-5 px-3 ">
      <div className="w-[1350px] m-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        {/* first */}
        <div className="w-[20%] mb-10 lg:mb-0">
          <h1 className="text-3xl mb-2">EcoSmyle</h1>
          <h2>
            <span className="text-xl"> Address : </span> 456 Greenway Ave,
            Sustainable City, Earth 98765
          </h2>
        </div>

        {/* second */}
        <ul className="flex flex-col lg:flex-row gap-5 mb-10 lg:mb-0">
          <li> About Us</li>
          <li> Privacy Policy</li>
          <li> Contact </li>
          <li> FAQ</li>
        </ul>

        {/* third */}
        <div className="flex gap-5">
          <span className="text-2xl">
            <FaInstagram />
          </span>
          <span className="text-2xl">
            <FaFacebookF />
          </span>
          <span className="text-2xl">
            <FaPinterestP />
          </span>
          <span className="text-2xl">
            <FaXTwitter />
          </span>
        </div>
      </div>
    </footer>
  );
}
