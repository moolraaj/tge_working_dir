import React, { useContext } from "react";
import Commonheader from "./commonheader";
import Smallsun from "../../../public/Icons/smallsun.svg";
import Favourite from "../../../public/Icons/favourite.svg";
import Flower from "../../../public/Icons/flower.svg";
import Snow from "../../../public/Icons/Snow.svg";

import Image from "next/image";
import { Tripprovider } from "./page";
const Month = () => {
  const { headerdata, setheaderdata, setrender } = useContext(Tripprovider);
  const months = [
    {
      month: "may",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "june",
      min: "15°",
      max: "24°",
      color: "#C5C4FE36",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "july",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "august",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: true,
      border: "#CA1C261F",
    },
    {
      month: "september",
      min: "15°",
      max: "24°",
      color: "#C5C4FE36",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "october",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "november",
      min: "15°",
      max: "24°",
      color: "#D9FBF9B2",
      icon: Smallsun,
      special: false,
      border: "#B2FFFA8A",
    },
    {
      month: "december",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: true,
      border: "#CA1C261F",
    },
    {
      month: "january",
      min: "15°",
      max: "24°",
      color: "#D9FBF9B2",
      icon: Smallsun,
      special: false,
      border: "#B2FFFA8F",
    },
    {
      month: "feburary",
      min: "15°",
      max: "24°",
      color: "#C5C4FE54",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "march",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "april",
      min: "15°",
      max: "24°",
      color: "#D9FBF9B2",
      icon: Smallsun,
      special: false,
      border: "#B2FFFA8F",
    },
  ];
  function handleItem(item) {
    setheaderdata((prevItems) => ({ ...prevItems, month: item }));
    setrender("date");
  }
  return (
    <>
      <div className="pl-14 pt-14 xsm:pl-2">
        <Commonheader />
        <div className="flex flex-col mt-8">
          <p className="capitalize font-[500] font-Merri-sans text-xl xsm:text-md">
            Which month are you travelling?
          </p>
          <div className="grid grid-cols-6 gap-3 pr-3 mt-12 xsm:grid-cols-3 xsm:gap-1 xsm:pr-2 xsm:mt-5 moth_type_wrapper">
            {months.map((item, ind) => {
              return (
                <>
                  <div
                    onClick={() => handleItem(item.month)}
                    key={ind}
                    className={`py-[34px] px-[7px] cursor-pointer relative month_value rounded xsm:h-[80px] xsm:w-full xsm:gap-2 xsm:px-2`}
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
                    <div className="flex justify-center items-center h-full w-full">
                      <div className="flex flex-col justify-center gap-1">
                        <p className="text-center font-[500] text-lg font-Merri-sans capitalize text-[1rem]">
                          {item.month}
                        </p>
                        <p className="flex items-center xsm:hidden">
                          <Image src={item.icon} alt="icon" />
                          <span className="text-[0.85rem]">{item.min} -</span>
                          <span className="text-[0.85rem]">{item.max}C</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Month;
