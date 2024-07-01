import React from "react";
import Cards from "../card/page";
import Image from "next/image";
import Pointer from "../../../public/Icons/pointer.svg";
const Allcards = ({ data, name }) => {
  // console.log(data);
  return (
    <>
      <div className=" text-center font-bold text-3xl  w-fit border-b-4 border-[var(--primary)] mx-auto py-2 font-int xsm:text-2xl xsm:border-b-2 xsm:py-1">
        Explore {name}
      </div>
      <div className="grid grid-cols-3 w-full  gap-[50px]  h-auto bg-[#FAFAFA] xsm:grid xsm:grid-cols-1">
        {data?.data?.map((item, ind) => {
          return (
            <>
              <Cards key={ind} val={item} />
            </>
          );
        })}
      </div>
      <div className="w-fit mx-auto flex items-center cursor-pointer">
        <p className="border-b-2 border-[var(--primary)] font-semibold font-Merri-sans uppercase xsm:text-[14px]">
          See More
        </p>
        <Image className="scale-down-center" src={Pointer} alt="..." />
      </div>
    </>
  );
};

export default Allcards;
