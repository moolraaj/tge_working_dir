"use client";

import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import { BASE_URL } from "@/helpers/baseurl";

const CUSideSection = () => {
  const [allCategory, setallCategory] = useState([]);
  const trips = [
    {
      location: "Kerala",
      subtitle: "The Cultural Trip",
      tripsCount: "4 Trip",
      image: "/Assets/Images/CUSideSectionImg1.png",
    },
    {
      location: "Spiti Valley",
      subtitle: "The Cultural Trip",
      tripsCount: "4 Trip",
      image: "/Assets/Images/CUSideSectionImg2.png",
    },
    {
      location: "Shimla",
      subtitle: "The Cultural Trip",
      tripsCount: "4 Trip",
      image: "/Assets/Images/CUSideSectionImg3.png",
    },
    {
      location: "Delhi",
      subtitle: "The Cultural Trip",
      tripsCount: "4 Trip",
      image: "/Assets/Images/CUSideSectionImg4.png",
    },
    {
      location: "Uttarakhand",
      subtitle: "The Cultural Trip",
      tripsCount: "4 Trip",
      image: "/Assets/Images/CUSideSectionImg5.png",
    },
    {
      location: "Rajasthan",
      subtitle: "The Cultural Trip",
      tripsCount: "4 Trip",
      image: "/Assets/Images/CUSideSectionImg6.png",
    },
  ];

  useEffect(() => {
    async function Fetchdata() {
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_URL}apis/packages/package_category_with_city_tge`);
        const response = await data.json();
        setallCategory(response?.data);
      } catch (error) {
        console.log(error);
      }
    }
    Fetchdata();
  }, []);

  return (
    <div className="bg-[#02013D] w-[43%] pl-[5.3%] pt-14 pb-12 relative flex flex-col gap-4 h-full xsm:w-full xsm:h-[65vh]">
      <div className="absolute bottom-0 right-0 z-[1]">
        <img
          className="w-[200px] xsm:w-[165px]"
          src="/Assets/Images/CUSideSectionSideImg.png"
          alt="..."
        />
      </div>
      <div className="overflow-y-auto space-y-4 noScroll z-[20]">
        {allCategory?.map((trip, index) => (
          <div
            key={index}
            className="w-[70%] h-[350px] flex flex-col justify-between z-[20] xsm:w-[67%] xsm:h-[250px]"
            style={{
              backgroundImage: `url(${trip.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-[#941A21B5] flex items-center px-4 py-1 w-max xsm:px-2 xsm:py-[2px]"></div>
            <div className="text-white pb-4 pl-6 flex flex-col gap-2 CU-Trip-bg-custom-gradient xsm:gap-[2px] xsm:pl-3 xsm:pb-2">
              <p className="font-[Merriweather] text-[22px] font-semibold tracking-[0.05em] xsm:text-[14px]">
                {trip.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CUSideSection;
