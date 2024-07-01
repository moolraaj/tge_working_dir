"use client";


import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import Destinationherosection from "../../components/destinationherosection/page";
import Allcards from "../../components/Allcards/page";
import RequestCall from "../../components/requestcall/page";
import Discount from "../../components/discount/page";
import LastSection from "@/components/Detail/lastSection";
import axios from "axios";

const Destination = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DestinationContentInner />
    </Suspense>
  );
};

const DestinationContentInner = () => {
  const [Alldata, setAlldata] = useState([]);
  const componentBRef = useRef(null);
  const searchParams = useSearchParams();
  const city_id = searchParams.get("cityid");
  const city_name = searchParams.get("city_name");
  // console.log(city_name);
  const formData = new FormData();
  formData.append("city_id", city_id);
  formData.append("city_name", city_name);

  useEffect(() => {
    const fetchData = async () => {
      if (city_id) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_URL}/apis/packages/package_with_city`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log(response.data.data);
          setAlldata(response.data.data || []);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
    };

    fetchData();
  }, [city_id]);

  return (
    <>
      <Destinationherosection resp={Alldata} />
      <div className="px-[var(--padding-inline)] flex flex-col gap-[5vh] my-[5vh]">
        <Allcards data={Alldata} name={city_name} />

        <Discount />
        <LastSection data={Alldata} />
        <RequestCall />
      </div>
    </>
  );
};

export default Destination;
