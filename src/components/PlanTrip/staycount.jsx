import React, { useContext } from "react";
import Commonheader from "./commonheader";
import Smallsun from "../../../public/Icons/smallsun.svg";
import Favourite from "../../../public/Icons/favourite.svg";
import Flower from "../../../public/Icons/flower.svg";
import Snow from "../../../public/Icons/Snow.svg";
import { Tripprovider } from "./page";

import Image from "next/image";
const Staycount = () => {
  const { headerdata, setheaderdata, setrender } = useContext(Tripprovider);

  const Holidays = [
    {
      title: "3-4 Nights",
      value: "4 days 3 nights",
      color: "#FF9FA554",
      border: "#CA1C261F",
      special: false,
    },
    {
      title: "5-6 Nights",
      value: "5 days 6 nights",
      color: "#C5C4FE36",
      border: "#CA1C261F",
      special: true,
    },
    {
      title: "7-8 Nights",
      value: "7 days 8 nights",
      color: "#FF9FA554",
      border: "#CA1C261F",
      special: false,
    },
    {
      title: "6-5 Nights",
      value: "6 days 5 nights",
      color: "#FFE5B254",
      border: "#CA1C261F",
      special: true,
    },
  ];
  function handleItem(item) {
    setheaderdata((prevItems) => ({ ...prevItems, duration: item.value }));
    setrender("peopletype");
  }
  return (
    <>
      <div className="pl-14 pt-14 xsm:pl-4">
        <Commonheader />
        <div className="flex flex-col mt-8">
          <p className="capitalize font-[500] font-Merri-sans text-xl">
            What is the duration of your holiday?
          </p>
          <div className="grid grid-cols-6 gap-3 pr-3 mt-12 xsm:grid-cols-2 stay_count_wrapper">
            {Holidays===null || Holidays===undefined?('no result found'):(Holidays.map((item) => {
              return (
                <>
                  <div
                    onClick={() => handleItem(item)}
                    className={`px-[10px] py-[20px] cursor-pointer relative  rounded styacount_wrapper`}
                    style={{
                      backgroundColor: item.color,
                      border: `1px solid ${item.border}`,
                    }}
                  >
                    {item.special && (
                      <div className=" absolute top-0 right-0">
                        <Image alt="..." src={Favourite} />
                      </div>
                    )}
                    <div className="flex justify-center items-center  h-full   w-full">
                      <p className="text-center font-[500] text-lg font-Merri-sans capitalize">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </>
              );
            }))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Staycount;
