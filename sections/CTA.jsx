import React from "react";
import Button from "@components/Button";

const CTA = () => {
  return (
    <div className="h-1/2  bg-[#ffda79] p-[120px] max-sm:p-[60px] text-center ">
      <p className="text-[64px] max-sm:text-[50px]
       font-source_serif_4 mx-auto text-center max-w-lg">Find your next designer today</p>
     <p className="py-4 mx-auto text-center max-w-md">
  The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
</p>

      
      <div className="flex flex-row max-sm:flex-col gap-4 justify-center items-center">
          <Button
            text={`Get Started Now`}
            style="cta-btn text-[12px] text-white hover:bg-transparent hover:border-[1px] hover:text-main transform hover:shadow-md shadow-none transition-transform transition-ease-in p-[24px]"
          />
          <Button
            text={`Learn about hiring`}
            style="cta-btn text-[12px] text-main bg-white p-[24px]"
          />
        </div>
      <p className="p-10 w-full">
        Are you a designer ? <span className="underline cursor-pointer">Join Dribbble</span>
      </p>
    </div>
  );
};

export default CTA;
