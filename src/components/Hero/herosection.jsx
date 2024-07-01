"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./herosection.module.css";
import Image from "next/image";
import { Slider, duration } from "@mui/material";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import SearchScroll from "../flipAnimation/flipanimation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function valuetext(value) {
  return `${value}°C`;
}

const HeroSection = () => {
  const [activeFacility, setactiveFacility] = useState("Tour");
  const [Search, setSearch] = useState(false);
  const [value, setValue] = useState([0, 30000]);
  const [locationFilter, setLocationFilter] = useState(false);
  const [personcntFilter, setPersonFilter] = useState(false);
  const [fromLocation, setfromLocation] = useState(false);
  const [toLocation, setToLocation] = useState(false);
  const [flightNop, setFlightNop] = useState(false);
  const [selected, setSelected] = useState();
  const [ActivityDate, setactivityDate] = useState(false);
  const [FlightDate, setFlightDate] = useState(false);
  const searchRef = useRef(null);
  const dateInputRef = useRef(null);
  const [toursearchData, setTourSearchData] = useState({
    duration: "",
    minPrice: "",
    maxPrice: "",
  });
  const router = useRouter();

  const [activitiesSearchData, setActivitiesSearchData] = useState({
    location: "",
    adults: "1",
    child: "1",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTourSearchData(minPrice);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearch(false);
    }
  };

  useEffect(() => {
    if (Search) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [Search]);

  const handleTourSearch = async () => {
    console.log(toursearchData);
    router.push("/search?data=" + JSON.stringify(toursearchData));
  };

  const handleLocationSelect = (selectedLocation) => {
    setActivitiesSearchData((prevData) => ({
      ...prevData,
      location: selectedLocation,
    }));
  };

  const handleAdultsChange = (count) => {
    setActivitiesSearchData((prevData) => ({
      ...prevData,
      adults: count,
    }));
  };

  const handleChildrenChange = (count) => {
    setActivitiesSearchData((prevData) => ({
      ...prevData,
      child: count,
    }));
  };

  const handleActivitySearch = async () => {
    try {
      const apiUrl =
        `${process.env.NEXT_PUBLIC_URL}/apis/packages/activities_filter`;
      const res = await axios.post(apiUrl, activitiesSearchData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res); // Log the response for debugging

      if (res.status === 200) {
        toast.success("Query sent successfully");
      } else {
        toast.error("Failed to send query");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed To send Query");
    }
  };

  return (
    <>
      <Toaster />
      <div
        className={` font-Merri-sans  ${styles.hero_section}`}
        style={{ backgroundImage: "url(/Assets/Images/hero_banner.jpg)" }}
      >
        <div className="flex flex-col w-fit h-fit items-center text-white relative left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] xsm:w-[80vw]">
          <h2 className="text-[45px] text-center font-semibold leading-[48px] xsm:text-[30px] ">
            Empowering Your Travel Dreams
          </h2>
          <SearchScroll
            words={["Explore", "Connect", "Thrive", "Memories"]}
            css={"text-[93px] font-bold xsm:text-[50px]"}
          />
          <p className="border-b border-[#CA1C26] text-[1.2rem] text-center">
            Curating Unparalleled Travel Experiences, One Journey at a Time
          </p>
          <div className="flex py-4 gap-4 uppercase text-center xsm:w-[100%] xsm:gap-1">
            <div
              onClick={() => setactiveFacility("Tour")}
              className={`w-fit flex justify-center items-center px-6 py-[6px] xsm:py-[3px] xsm:px-2 cursor-pointer ${
                activeFacility === "Tour"
                  ? "bg-white text-black rounded-full"
                  : ""
              }`}
            >
              <p className="text-[15px] xsm:text-[12px] ">Tour</p>
            </div>
            <div
              onClick={() => setactiveFacility("Activities")}
              className={`w-fit flex justify-center items-center px-6 py-[6px] xsm:py-[3px] xsm:px-2 cursor-pointer ${
                activeFacility === "Activities"
                  ? "bg-white text-black rounded-full"
                  : ""
              }`}
            >
              <p className="text-[15px] xsm:text-[12px] ">Activities</p>
            </div>
            <div
              onClick={() => setactiveFacility("Flight")}
              className={`w-fit flex justify-center items-center px-6 py-[6px] xsm:py-[3px] xsm:px-2 cursor-pointer ${
                activeFacility === "Flight"
                  ? "bg-white text-black rounded-full "
                  : ""
              }`}
            >
              <p className="text-[15px] xsm:text-[12px] ">Flight</p>
            </div>
            <div
              onClick={() => setactiveFacility("Railway")}
              className={`w-fit flex justify-center items-center px-6 py-[6px] xsm:py-[3px] xsm:px-2 cursor-pointer ${
                activeFacility === "Railway"
                  ? "bg-white text-black rounded-full "
                  : ""
              }`}
            >
              <p className="text-[15px] xsm:text-[12px] ">Railway</p>
            </div>
          </div>
          <div
            className={`px-8 z-[999999999] relative ${
              activeFacility === "Tour"
                ? "w-[100%] xsm:w-[100%]"
                : activeFacility === "Activities"
                ? "w-[100%] xsm:w-[100%]"
                : activeFacility === "Flight"
                ? "w-[100%] xsm:w-[100%]"
                : "w-[100%] xsm:w-[100%]"
            } `}
            ref={searchRef}
          >
            {activeFacility === "Tour" &&
              (Search ? (
                <div className="bg-[#F6F6F6] rounded-t-3xl rounded-b flex flex-col shadow-lg shadow-[#00000021] w-[90%] absolute top-0 xsm:w-[65vw]">
                  <input
                    className="w-full text-[#000000] placeholder:text-[#848383] bg-[#F6F6F6] flex justify-center text-[14px] rounded-full pl-16 py-2 shadow-sm shadow-[#00000021] outline-none h-[55px] xsm:h-[45px] xsm:pl-5"
                    placeholder="Search For Destinations..."
                  />
                  <div className="px-16 py-4 xsm:px-5">
                    <div className="flex flex-col gap-3 border-b border-[#DADADA] py-2">
                      <p className="text-black text-[14px]">Trip Durations</p>
                      <div className="flex items-center gap-3 text-[#848181] text-[14px] xsm:gap-3 xsm:grid xsm:grid-cols-2">
                        <div
                          className={`border border-[#EAE6E6] rounded-full px-3 py-1 cursor-pointer ${
                            toursearchData.duration === "upto1day"
                              ? "bg-[#D7D6FD59]"
                              : "bg-white"
                          }`}
                          onClick={() =>
                            setTourSearchData({
                              ...toursearchData,
                              duration: "upto1day",
                            })
                          }
                        >
                          <p>Upto 1 day</p>
                        </div>
                        <div
                          className={`border border-[#EAE6E6] rounded-full px-3 py-1 cursor-pointer ${
                            toursearchData.duration === "2to3days"
                              ? "bg-[#D7D6FD59]"
                              : "bg-white"
                          }`}
                          onClick={() =>
                            setTourSearchData({
                              ...toursearchData,
                              duration: "2to3days",
                            })
                          }
                        >
                          <p>2 to 3 days</p>
                        </div>
                        <div
                          className={`border border-[#EAE6E6] rounded-full px-3 py-1 cursor-pointer ${
                            toursearchData.duration === "5to7days"
                              ? "bg-[#D7D6FD59]"
                              : "bg-white"
                          }`}
                          onClick={() =>
                            setTourSearchData({
                              ...toursearchData,
                              duration: "5to7days",
                            })
                          }
                        >
                          <p>5 to 7 days</p>
                        </div>
                        <div
                          className={`border border-[#EAE6E6] rounded-full px-3 py-1 cursor-pointer ${
                            toursearchData.duration === "7plusdays"
                              ? "bg-[#D7D6FD59]"
                              : "bg-white"
                          }`}
                          onClick={() =>
                            setTourSearchData({
                              ...toursearchData,
                              duration: "7plusdays",
                            })
                          }
                        >
                          <p>7 + days</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 border-b border-[#DADADA] py-2">
                      <p className="text-black text-[14px]">Price Range</p>
                      <div className="w-[80%]">
                        {/* Your Slider component */}
                        <Slider
                          getAriaLabel={() => "Price range"}
                          value={[
                            toursearchData.minPrice,
                            toursearchData.maxPrice,
                          ]}
                          onChange={(_, newValue) => {
                            setTourSearchData({
                              ...toursearchData,
                              minPrice: newValue[0],
                              maxPrice: newValue[1],
                            });
                            console.log(toursearchData);
                          }}
                          valueLabelDisplay="auto"
                          aria-labelledby="range-slider"
                          min={0}
                          max={100000}
                          color="#FFFFFF"
                          track="#B6B5B5"
                        />
                      </div>
                    </div>
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={handleTourSearch}
                        className="bg-[#CA1C26] text-white uppercase font-int text-[14px] px-4 py-[6px] rounded-sm hover:border hover:border-dotted xsm:px-7 xsm:py-[6px] xsm:text-[10px]"
                      >
                        Search For Trip
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setSearch(true)}
                  className="bg-[#F6F6F6] rounded-full flex items-center justify-between shadow-md shadow-[#00000021] cursor-pointer w-full h-[55px] xsm:h-[45px]"
                >
                  <div className="w-full text-[#848383] flex justify-center text-[14px] xsm:text-[13px]">
                    <p>
                      Search For{" "}
                      <span className="text-[#000000]">Himachal</span>
                    </p>
                  </div>
                  <div className="w-[44px] flex items-center justify-center h-[44px] bg-[#FFFFFF] p-2 rounded-full my-1 mx-2">
                    <img
                      className="w-5 h-5"
                      src={"/Assets/Icons/HeroSearch.svg"}
                      alt=""
                    />
                  </div>
                </div>
              ))}

            {activeFacility === "Activities" && (
              <div className="bg-[#F6F6F6] rounded-md flex items-center shadow-lg shadow-[#00000021] ">
                <div className="grid grid-cols-4 items-center py-3 w-full px-5">
                  <div className="border-r border-[#01008036] py-1 cursor-pointer relative">
                    <div
                      onClick={() => {
                        setLocationFilter(!locationFilter);
                        setactivityDate(false);
                        setPersonFilter(false);
                      }}
                      className="flex items-center gap-1"
                    >
                      <img
                        className="w-6 h-6"
                        src={"/Assets/Icons/herolocation.svg"}
                        alt=""
                      />
                      <div>
                        <p className="text-[#000000] text-[12.5px]">Location</p>
                        <p className="text-[#9E9E9E] text-[10px]">
                          {activitiesSearchData.location === ""
                            ? "Where Are You Going ?"
                            : activitiesSearchData.location}
                        </p>
                      </div>
                    </div>
                    {locationFilter && (
                      <div className="absolute bg-[#F6F6F6] top-[100%] right-0 px-3 py-2 rounded shadow-lg shadow-[#00000021]">
                        <h1 className="text-[#000000] text-[12.5px]">
                          Popular destinations
                        </h1>
                        <div className="text-[#515556] text-[11.5px] mt-1 overflow-y-auto h-[70px] noScroll">
                          <p onClick={() => handleLocationSelect("Shimla")}>
                            Shimla
                          </p>
                          <p onClick={() => handleLocationSelect("Manali")}>
                            Manali
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="border-r border-[#01008036] py-1 cursor-pointer relative">
                    <div
                      onClick={() => {
                        setLocationFilter(false);
                        setactivityDate(!ActivityDate);
                        setPersonFilter(false);
                      }}
                      className="flex items-center justify-center gap-1"
                    >
                      <img
                        className="w-6 h-6"
                        src={"/Assets/Icons/HeroDate.svg"}
                        alt="Date Icon"
                      />
                      <div>
                        <p className="text-[#000000] text-[12.5px]">Date</p>
                        <p className="text-[#9E9E9E] text-[10px]">
                          d / m / year
                        </p>
                      </div>
                    </div>
                    {ActivityDate && (
                      <div className="absolute bg-[#F6F6F6] text-[#000] top-[100%] left-0  rounded-md shadow-lg shadow-[#00000021]">
                        <DayPicker
                          mode="single"
                          selected={selected}
                          onSelect={setSelected}
                          className=""
                        />
                      </div>
                    )}
                  </div>
                  <div className="py-1 cursor-pointer relative">
                    <div
                      onClick={() => {
                        setLocationFilter(false);
                        setactivityDate(false);
                        setPersonFilter(!personcntFilter);
                      }}
                      className="flex items-center justify-center gap-1 "
                    >
                      <img
                        className="w-6 h-6"
                        src={"/Assets/Icons/HeroBag.svg"}
                        alt=""
                      />
                      <div>
                        <p className="text-[#000000] text-[12.5px]">
                          No. of Person
                        </p>
                        <p className="text-[#9E9E9E] text-[10px]">{`${activitiesSearchData.adults} Adult ${activitiesSearchData.child} Child`}</p>
                      </div>
                    </div>
                    {personcntFilter && (
                      <div className="absolute bg-[#F6F6F6] top-[100%] w-[180px] -right-10 px-3 py-2 rounded shadow-lg shadow-[#00000021] flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <p className="text-[#000000] text-[12.5px]">Adult</p>
                          <div className="flex items-center gap-2">
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Herominus.svg"}
                                alt=""
                                onClick={() =>
                                  handleAdultsChange(
                                    parseInt(activitiesSearchData.adults) - 1
                                  )
                                }
                              />
                            </div>
                            <p className="text-[#000000] text-[16px]">
                              {activitiesSearchData.adults}
                            </p>
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Heroplus.svg"}
                                alt=""
                                onClick={() =>
                                  handleAdultsChange(
                                    parseInt(activitiesSearchData.adults) + 1
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-[#000000] text-[12.5px]">
                            Children
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Herominus.svg"}
                                alt=""
                                onClick={() =>
                                  handleChildrenChange(
                                    parseInt(activitiesSearchData.child) - 1
                                  )
                                }
                              />
                            </div>
                            <p className="text-[#000000] text-[16px]">
                              {activitiesSearchData.child}
                            </p>
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Heroplus.svg"}
                                alt=""
                                onClick={() =>
                                  handleChildrenChange(
                                    parseInt(activitiesSearchData.child) + 1
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full flex justify-end">
                    <button
                      onClick={handleActivitySearch}
                      className="bg-[#CA1C26] text-white uppercase font-int text-[12px] px-3 py-[6px] rounded hover:border hover:border-dotted xsm:text-[13px] xsm:px-7 xsm:py-[6px]"
                    >
                      Search Now{" "}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeFacility === "Flight" && (
              <div className="bg-[#F6F6F6] rounded-md flex items-center shadow-lg shadow-[#00000021] w-full relative">
                <div className="grid grid-cols-5 items-center py-3 w-full px-5">
                  <div className="border-r border-[#01008036] py-1 cursor-pointer relative">
                    <div
                      onClick={() => setfromLocation(!fromLocation)}
                      className="flex items-center gap-1 "
                    >
                      <img
                        className="w-6 h-6"
                        src={"/Assets/Icons/herolocation.svg"}
                        alt=""
                      />
                      <div>
                        <p className="text-[#000000] text-[12.5px]">From</p>
                        <p className="text-[#9E9E9E] text-[10px]">
                          Where You Start ?
                        </p>
                      </div>
                    </div>
                    {fromLocation ? (
                      <div className="absolute bg-[#F6F6F6] top-[100%] right-0 px-3 py-2 rounded shadow-lg shadow-[#00000021]">
                        <h1 className="text-[#000000] text-[12.5px]">
                          Popular destinations
                        </h1>
                        <div className="text-[#515556] text-[11.5px] mt-1 overflow-y-auto h-[70px] noScroll">
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="border-r border-[#01008036] py-1 cursor-pointer relative">
                    <div
                      onClick={() => setToLocation(!toLocation)}
                      className="flex items-center gap-1"
                    >
                      <img
                        className="w-6 h-6"
                        src={"/Assets/Icons/herolocation.svg"}
                        alt=""
                      />
                      <div>
                        <p className="text-[#000000] text-[12.5px]">To</p>
                        <p className="text-[#9E9E9E] text-[10px]">
                          Where You Going ?
                        </p>
                      </div>
                    </div>
                    {toLocation ? (
                      <div className="absolute bg-[#F6F6F6] top-[100%] right-0 px-3 py-2 rounded shadow-lg shadow-[#00000021]">
                        <h1 className="text-[#000000] text-[12.5px]">
                          Popular destinations
                        </h1>
                        <div className="text-[#515556] text-[11.5px] mt-1 overflow-y-auto h-[70px] noScroll">
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="border-r border-[#01008036] py-1 cursor-pointer relative">
                    <div
                      onClick={() => setFlightDate(!FlightDate)}
                      className="flex items-center justify-center gap-1"
                    >
                      <img
                        className="w-6 h-6"
                        src={"/Assets/Icons/HeroDate.svg"}
                        alt="Date Icon"
                      />
                      <div>
                        <p className="text-[#000000] text-[12.5px]">Date</p>
                        <p className="text-[#9E9E9E] text-[10px]">
                          d / m / year
                        </p>
                      </div>
                    </div>
                    {FlightDate && (
                      <div className="absolute bg-[#F6F6F6] text-[#000] top-[100%] left-0  rounded-md shadow-lg shadow-[#00000021]">
                        <DayPicker
                          mode="single"
                          selected={selected}
                          onSelect={setSelected}
                          className=""
                        />
                      </div>
                    )}
                  </div>
                  <div className="py-1 cursor-pointer relative">
                    <div
                      onClick={() => setFlightNop(!flightNop)}
                      className="flex items-center justify-center gap-1"
                    >
                      <img
                        className="w-6 h-6"
                        src={"/Assets/Icons/HeroBag.svg"}
                        alt=""
                      />
                      <div>
                        <p className="text-[#000000] text-[12.5px]">
                          No. of Person
                        </p>
                        <p className="text-[#9E9E9E] text-[10px]">
                          2 Adult 1 Child
                        </p>
                      </div>
                    </div>
                    {flightNop && (
                      <div className="absolute bg-[#F6F6F6] top-[100%] w-[180px] -right-10 px-3 py-2 rounded shadow-lg shadow-[#00000021] flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <p className="text-[#000000] text-[12.5px]">Adult</p>
                          <div className="flex items-center gap-2">
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Herominus.svg"}
                                alt=""
                              />
                            </div>
                            <p className="text-[#000000] text-[16px]">1</p>
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Heroplus.svg"}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-[#000000] text-[12.5px]">
                            Children
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Herominus.svg"}
                                alt=""
                              />
                            </div>
                            <p className="text-[#000000] text-[16px]">1</p>
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Heroplus.svg"}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full flex justify-end">
                    <button className="bg-[#CA1C26] text-white uppercase font-int text-[12px] px-3 py-[6px] rounded hover:border hover:border-dotted xsm:text-[13px] xsm:px-7 xsm:py-[6px]">
                      Search Now{" "}
                    </button>
                  </div>
                </div>
                <div className="bg-[#00000080] absolute w-full h-full flex items-center justify-center">
                  <p className="text-[24px]">COMING SOON</p>
                </div>
              </div>
            )}

            {activeFacility === "Railway" && (
              <div className="bg-[#F6F6F6] rounded-md flex items-center shadow-lg shadow-[#00000021] w-full relative">
                <div className="grid grid-cols-5 items-center py-3 w-full px-5">
                  <div className="border-r border-[#01008036] py-1 cursor-pointer relative">
                    <div
                      onClick={() => setfromLocation(!fromLocation)}
                      className="flex items-center gap-1 "
                    >
                      <img
                        className="w-6 h-6"
                        src={"/Assets/Icons/herolocation.svg"}
                        alt=""
                      />
                      <div>
                        <p className="text-[#000000] text-[12.5px]">From</p>
                        <p className="text-[#9E9E9E] text-[10px]">
                          Where You Start ?
                        </p>
                      </div>
                    </div>
                    {fromLocation ? (
                      <div className="absolute bg-[#F6F6F6] top-[100%] right-0 px-3 py-2 rounded shadow-lg shadow-[#00000021]">
                        <h1 className="text-[#000000] text-[12.5px]">
                          Popular destinations
                        </h1>
                        <div className="text-[#515556] text-[11.5px] mt-1 overflow-y-auto h-[70px] noScroll">
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="border-r border-[#01008036] py-1 cursor-pointer relative">
                    <div
                      onClick={() => setToLocation(!toLocation)}
                      className="flex items-center gap-1"
                    >
                      <img
                        className="w-6 h-6"
                        src={"/Assets/Icons/herolocation.svg"}
                        alt=""
                      />
                      <div>
                        <p className="text-[#000000] text-[12.5px]">To</p>
                        <p className="text-[#9E9E9E] text-[10px]">
                          Where You Going ?
                        </p>
                      </div>
                    </div>
                    {toLocation ? (
                      <div className="absolute bg-[#F6F6F6] top-[100%] right-0 px-3 py-2 rounded shadow-lg shadow-[#00000021]">
                        <h1 className="text-[#000000] text-[12.5px]">
                          Popular destinations
                        </h1>
                        <div className="text-[#515556] text-[11.5px] mt-1 overflow-y-auto h-[70px] noScroll">
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                          <p>Shimla</p>
                          <p>Manali</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="border-r border-[#01008036] py-1 cursor-pointer relative">
                    <div
                      onClick={() => setFlightDate(!FlightDate)}
                      className="flex items-center justify-center gap-1"
                    >
                      <img
                        className="w-6 h-6"
                        src={"/Assets/Icons/HeroDate.svg"}
                        alt="Date Icon"
                      />
                      <div>
                        <p className="text-[#000000] text-[12.5px]">Date</p>
                        <p className="text-[#9E9E9E] text-[10px]">
                          d / m / year
                        </p>
                      </div>
                    </div>
                    {FlightDate && (
                      <div className="absolute bg-[#F6F6F6] text-[#000] top-[100%] left-0  rounded-md shadow-lg shadow-[#00000021]">
                        <DayPicker
                          mode="single"
                          selected={selected}
                          onSelect={setSelected}
                          className=""
                        />
                      </div>
                    )}
                  </div>
                  <div className="py-1 cursor-pointer relative">
                    <div
                      onClick={() => setFlightNop(!flightNop)}
                      className="flex items-center justify-center gap-1"
                    >
                      <img
                        className="w-6 h-6"
                        src={"/Assets/Icons/HeroBag.svg"}
                        alt=""
                      />
                      <div>
                        <p className="text-[#000000] text-[12.5px]">
                          No. of Person
                        </p>
                        <p className="text-[#9E9E9E] text-[10px]">
                          2 Adult 1 Child
                        </p>
                      </div>
                    </div>
                    {flightNop && (
                      <div className="absolute bg-[#F6F6F6] top-[100%] w-[180px] -right-10 px-3 py-2 rounded shadow-lg shadow-[#00000021] flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <p className="text-[#000000] text-[12.5px]">Adult</p>
                          <div className="flex items-center gap-2">
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Herominus.svg"}
                                alt=""
                              />
                            </div>
                            <p className="text-[#000000] text-[16px]">1</p>
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Heroplus.svg"}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-[#000000] text-[12.5px]">
                            Children
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Herominus.svg"}
                                alt=""
                              />
                            </div>
                            <p className="text-[#000000] text-[16px]">1</p>
                            <div className="bg-[#FFFFFF] rounded-full p-1">
                              <img
                                className="w-3 h-3"
                                src={"/Assets/Icons/Heroplus.svg"}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full flex justify-end">
                    <button className="bg-[#CA1C26] text-white uppercase font-int text-[12px] px-3 py-[6px] rounded hover:border hover:border-dotted xsm:text-[13px] xsm:px-7 xsm:py-[6px]">
                      Search Now{" "}
                    </button>
                  </div>
                </div>
                <div className="bg-[#00000080] absolute w-full h-full flex items-center justify-center">
                  <p className="text-[24px]">COMING SOON</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
