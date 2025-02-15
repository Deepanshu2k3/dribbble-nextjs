import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-12 flex flex-row max-sm:flex-row gap-4 items-center justify-between h-full w-full bg-white py-12">
      <div className="px-2">
        <Image src="/assets/icons/dribble.svg" width={76} height={30} alt="Dribbble Logo" />
      </div>
      <div className="flex max-sm:hidden max-lg:hidden flex-row max-sm:flex-col gap-8 font-bold w-2/3 text-xs justify-center items-center">
        <p>For designers</p>
        <p>Hire talent</p>
        <p>Inspiration</p>
        <p>Advertising</p>
        <p>Blog</p>
        <p>About</p>
        <p>Careers</p>
        <p>Support</p>
      </div>
      <div className="text-sm text-gray-500">
       Socials
      </div>
    </div>
  );
};

export default Footer;
