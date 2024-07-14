"use client";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";

const Nav = () => {
  const navLinks = [
    { id: "find-talent", title: "Find designers" },
    { id: "inspiration", title: "Inspiration" },
    { id: "jobs", title: "Jobs" },
    { id: "go-pro", title: "Go Pro" },
  ];

  return (
    <nav className="bg-[#fffffc] w-full max-w-7xl px-4 py-4">
      <div className="flex justify-between items-center">
       
        <ul className="flex gap-4 text-sm">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              variants={fadeIn("left", "tween", 0.1 * index, 1)}
              initial="hidden"
              whileInView="show"
              className="p-2 font-semibold"
            >
              {link.title}
            </motion.li>
          ))}
        </ul>
       
        <div className="flex-1 flex justify-center">
          <Image src="/assets/icons/dribble.svg" width={120} height={50} alt="Dribble Icon" />
        </div>
      
        <div className="flex items-center space-x-4 shadow-sm">
          <div className="relative text-gray-600 ">
            <input type="search" name="search" placeholder="Search" className="bg-white h-12 px-5 pr-10 rounded-full text-base focus:outline-none" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
            </button>
          </div>
          <span className="text-base font-bold">Log In</span>
          <Button
            style="text-base p-3 text-white font-montserrat font-semibold"
            text="Sign Up"
            delay={0.5}
            hidden="show"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
