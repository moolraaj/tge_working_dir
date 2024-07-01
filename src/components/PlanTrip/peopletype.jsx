"use client";
import React, { useContext, useEffect, useState } from "react";
import Commonheader from "./commonheader";
import Favourite from "../../../public/Icons/favourite.svg";
import Solo from "../../../public/Icons/solo.svg";
import Couple from "../../../public/Icons/couple.svg";
import Family from "../../../public/Icons/family.svg";
import Downarrow from "../../../public/Icons/downarrow.svg";
import Group from "../../../public/Icons/group.svg";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { Tripprovider } from "./page";

const Peopletype = () => {
  const [familyGroup, setFamilyGroup] = useState("");
  const { headerdata, setrender, setheaderdata, totalpeople, settotalpeople } =
    useContext(Tripprovider);

  const handleItem = (item) => {
    setheaderdata((prevItems) => ({ ...prevItems, type: item }));
    setrender("form");
  };

  const Holidays = [
    {
      title: "Solo",
      icon: Solo,
      color: "#010080",
      border: "#CA1C261F",
      special: false,
    },
    {
      title: "Couple",
      icon: Couple,
      color: "#CA1C26",
      border: "#CA1C261F",
      special: true,
    },
    {
      title: "Family",
      icon: Family,
      color: "#E0AF00",
      border: "#CA1C261F",
      special: false,
    },
    {
      title: "Group",
      icon: Group,
      color: "#814500",
      border: "#CA1C261F",
      special: true,
    },
  ];

  const handleClick = (title) => {
    setFamilyGroup(title);
    if (title !== "Family" && title !== "Group") {
      handleItem(title);
    }
  };

  const handleDropdown = () => {
    let dropdown = document.getElementById("dropdown-content");
    let downarrow = document.getElementById("down-arrow");

    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
      downarrow.style.transform = "rotate(0deg)";
    } else {
      dropdown.style.display = "block";
      downarrow.style.transform = "rotate(180deg)";
    }
  };

  const handleButtons = (name, operation) => {
    settotalpeople((prevState) => {
      const newValue =
        operation === "plus"
          ? prevState[name] + 1
          : prevState[name] >= 1
          ? prevState[name] - 1
          : 1;
      return { ...prevState, [name]: newValue };
    });
  };
  const handleRooms = (name, operation) => {
    settotalpeople((prevState) => {
      const newValue =
        operation === "plus"
          ? prevState[name] + 1
          : prevState[name] > 1
          ? prevState[name] - 1
          : 1;
      return { ...prevState, [name]: newValue };
    });
  };

  useEffect(() => {
    setheaderdata((prev) => ({
      ...prev,
      adults: totalpeople?.adult,
      children: totalpeople?.children,
      roomsRequired: totalpeople?.room,
    }));
  }, [totalpeople]);

  return (
    <div className="pl-14 pt-10 relative xsm:pl-4">
      <Commonheader />
      <div className="flex flex-col  people_type_wrapper_outer">
        <p className="capitalize font-[550] font-Merri-sans text-xl">
          Who is travelling with you?
        </p>
        <div className="grid grid-cols-5 pr-3 xsm:grid-cols-2 xsm:gap-2 people_type_wrapper">
          {Holidays.map((item) => (
            <div
              key={item.title}
              onClick={() => handleClick(item.title)}
              className={`h-[140px] cursor-pointer w-[130px] relative border ${item.border} bg-white rounded xsm:w-[110px] xsm:h-[120px]`}
            >
              {item.special && (
                <div className="absolute top-0 right-0">
                  <Image src={Favourite} alt="favourite" />
                </div>
              )}
              <div className="flex justify-center items-center h-full w-full ">
                <div className="flex flex-col gap-1 xsm:items-center xsm:justify-center">
                  <Image
                    src={item.icon}
                    alt="icon"
                    className="xsm:h-[80%] w-[80%]"
                  />
                  <p
                    className="text-center font-[500] text-[18px] font-Merri-sans capitalize xsm:text-[15px]"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {(familyGroup === "Family" || familyGroup === "Group") && (
          <div className="flex flex-col mt-3">
            <p className="font-Merri-sans capitalize font-semibold text-lg">
              How many of you are travelling?
            </p>
            <p className="text-[#373A3B] capitalize">Number of rooms</p>
            <div
              className="flex justify-between h-8 w-[40%] bg-white items-center pl-3 pr-2 cursor-pointer"
              onClick={handleDropdown}
            >
              <p className="text-[#373A3B] capitalize">{`${totalpeople.room} room, ${totalpeople.adult} adults`}</p>
              <Image src={Downarrow} alt="down-arrow" id="down-arrow" />
            </div>

            <div
              className="w-[40%] bg-white hidden px-3 "
              id="dropdown-content"
            >
              <div className="flex justify-between font-Merri-sans py-2 border-b">
                <p className="font-semibold">Room</p>
                <div className="flex items-center gap-2">
                  <button
                    className="h-8 w-8 roombutton rounded-full bg-[#F6F6F6] shadow-xl text-xl flex justify-center items-center"
                    name="room"
                    onClick={() => handleRooms("room", "minus")}
                  >
                    <FaMinus className="text-[#010080]" />
                  </button>
                  <p>{totalpeople.room}</p>
                  <button
                    className="h-8 w-8 roombutton rounded-full bg-[#F6F6F6] shadow-xl text-xl flex justify-center items-center"
                    name="room"
                    onClick={() => handleRooms("room", "plus")}
                  >
                    <FaPlus className="text-[#010080]" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <div className="flex flex-col">
                  <p className="font-semibold">Adults (12+)</p>
                  <div className="flex items-center gap-2">
                    <button
                      className="h-8 w-8 roombutton rounded-full bg-[#F6F6F6] shadow-xl text-xl flex justify-center items-center"
                      name="adult"
                      onClick={() => handleRooms("adult", "minus")}
                    >
                      <FaMinus className="text-[#010080]" />
                    </button>
                    <p>{totalpeople.adult}</p>
                    <button
                      className="h-8 w-8 roombutton rounded-full bg-[#F6F6F6] shadow-xl text-xl flex justify-center items-center"
                      name="adult"
                      onClick={() => handleRooms("adult", "plus")}
                    >
                      <FaPlus className="text-[#010080]" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <p className="font-semibold">Children</p>
                  <div className="flex items-center gap-2">
                    <button
                      className="h-8 w-8 roombutton rounded-full bg-[#F6F6F6] shadow-xl text-xl flex justify-center items-center"
                      name="children"
                      onClick={() => handleButtons("children", "minus")}
                    >
                      <FaMinus className="text-[#010080]" />
                    </button>
                    <p>{totalpeople.children}</p>
                    <button
                      className="h-8 w-8 roombutton rounded-full bg-[#F6F6F6] shadow-xl text-xl flex justify-center items-center"
                      name="children"
                      onClick={() => handleButtons("children", "plus")}
                    >
                      <FaPlus className="text-[#010080]" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-end pb-1">
                <button
                  className="py-1 px-4 rounded bg-[#FFFFFF] text-black border border-[#00000021]"
                  onClick={handleDropdown}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="group_selection_btn_wrapper">
        {(familyGroup === "Family" || familyGroup === "Group") && (
          <div
            onClick={() => handleItem(familyGroup)}
            className="bg-[#CA1C26] text-white px-6 py-2  rounded-md uppercase cursor-pointer group_selection_btn"
          >
            Continue
          </div>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default Peopletype;
