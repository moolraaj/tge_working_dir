import React, { useState, useContext } from "react";
import "./plantrip.css";
import Search from "../../../public/Icons/search.svg";
import Image from "next/image";
import { Tripprovider } from "./page";

const Cities = ({ formData }) => {
  const cities = [
    "Manali",
    "Kasol",
    "Shimla",
    "Mcleodganj",
    "Dalhousie",
    "Spiti Valley",
    "Mandi",
    "Kasauli",
    "Kaza",
    "Jibhi",
  ];
  
  const [searchTerm, setSearchTerm] = useState("");
  const { headerdata, setheaderdata, setrender } = useContext(Tripprovider);

  function handleItem(item) {
    setheaderdata((prevItems) => ({ ...prevItems, to: item }));
    setrender("month");
  }

  const filteredCities = cities.filter(city => 
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex items-center uppercase font-bold text-2xl w-full justify-center font-Merri-sans gap-1 mt-8 flex-wrap xsm:text-md ">
        <p>Where are </p>
        <p className="text-[var(--primary)]">You Planning</p>
        <p>To Go ?</p>
      </div>

      <div className="relative w-full flex gap-2 pl-20 h-10 mt-8 xsm:pl-0">
        <Image
          alt="..."
          src={Search}
          className="absolute top-4 left-[5.3rem] h-5 w-6 xsm:left-[0.5rem]"
        />
        <input
          className="w-[90%] h-[30px] rounded pl-9 focus:outline-none xsm:w-full search_for_destinations"
          placeholder="Pick your destination"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col gap-5 pl-28 mt-5 font-Merri-sans xsm:pl-5">
        {filteredCities.length > 0 ? (
          filteredCities.map((item, index) => (
            <p
              key={index}
              className="font-semibold text-[1.5rem] cursor-pointer xsm:text-[1.1rem]"
              onClick={() => handleItem(item)}
            >
              {item}
            </p>
          ))
        ) : (
          <p className="font-semibold text-[1.5rem] xsm:text-[1.1rem]">No results found</p>
        )}
      </div>
    </>
  );
};

export default Cities;
