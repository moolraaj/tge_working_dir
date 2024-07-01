import React, { useState } from 'react'

const SearchFilter = () => {


    const formData = new FormData();
    formData.append("name", "value")
    formData.append("name2", "value2")

    console.log(formData["name"])


    return (
        <div className="bg-[#F6F6F6] rounded-t-3xl rounded-b flex flex-col shadow-lg shadow-[#00000021] absolute top-0">
            <input
                className="w-full text-[#000000] placeholder:text-[#848383] bg-[#F6F6F6] flex justify-center text-[14px] rounded-full pl-16 py-2 shadow-sm shadow-[#00000021] outline-none h-[55px]"
                placeholder="Search For Destinations..."
            />
            <div className="px-16 py-4">
                {/* <div className="flex flex-col gap-3 border-b border-[#DADADA] pb-2">
                    <p className="text-black text-[14px]">Product Type</p>
                    <div className="flex items-center gap-2 text-[#848181] text-[14px]">
                        <div className="bg-white border border-[#EAE6E6] rounded-full px-3 py-1">
                            <p>Tour</p>
                        </div>
                        <div className="bg-white border border-[#EAE6E6] rounded-full px-3 py-1">
                            <p>Activity</p>
                        </div>
                    </div>
                </div> */}
                <div className="flex flex-col gap-3 border-b border-[#DADADA] py-2">
                    <p className="text-black text-[14px]">Trip Durations</p>
                    <div className="flex items-center gap-3 text-[#848181] text-[14px]">
                        <div className="bg-white border border-[#EAE6E6] rounded-full px-3 py-1">
                            <p>Upto 1 day</p>
                        </div>
                        <div className="bg-white border border-[#EAE6E6] rounded-full px-3 py-1">
                            <p>2 to 3 days</p>
                        </div>
                        <div className="bg-white border border-[#EAE6E6] rounded-full px-3 py-1">
                            <p>5 to 7 days</p>
                        </div>
                        <div className="bg-white border border-[#EAE6E6] rounded-full px-3 py-1">
                            <p>7 + days</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 border-b border-[#DADADA] py-2">
                    <p className="text-black text-[14px]">Price Range</p>
                    <div className="w-[80%]">
                        {/* Range */}
                        <Slider
                            getAriaLabel={() => "Temperature range"}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={0}
                            max={100000}
                            color="#FFFFFF"
                            track="#B6B5B5"
                        />
                    </div>
                    <div className="flex gap-2 w-[80%]">
                        <div className="flex ">
                            <div className="bg-[#C1C1C33D] text-[#848282] text-[13px] flex items-center px-2 py-1 border border-[#DDDDDE]">
                                <p>Min</p>
                            </div>
                            <div
                                className={`bg-[#FFFFFF3D] text-[#000000] text-[13px] flex items-center gap-1 px-2 border border-[#DDDDDE] border-l-0 ${styles.HeroPrice}`}
                            >
                                <p>INR</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    className="bg-[#FFFFFF3D] placeholder:text-[#000000] outline-none w-full"
                                />
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="bg-[#C1C1C33D] text-[#848282] text-[13px] flex items-center px-2 py-1 border border-[#DDDDDE]">
                                <p>Max</p>
                            </div>
                            <div
                                className={`bg-[#FFFFFF3D] text-[#000000] text-[13px] flex items-center gap-1 px-2 border border-[#DDDDDE] border-l-0 ${styles.HeroPrice}`}
                            >
                                <p>INR</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    className="bg-[#FFFFFF3D] placeholder:text-[#000000] outline-none w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-[#DADADA] py-2">
                    <div className="flex items-center gap-1 text-[11px] text-[#514E4E]">
                        <input type="checkbox" name="confirm" id="confirm" />
                        <label htmlFor="confirm" className="cursor-pointer">
                            I want Flights to be Included
                        </label>
                    </div>
                </div>
                <div className="pt-2 flex justify-end">
                    <button className="bg-[#CA1C26] text-white uppercase font-int text-[14px] px-4 py-[6px] rounded-sm hover:border hover:border-dotted xsm:text-[13px] xsm:px-7 xsm:py-[6px]">
                        Search For Trip
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchFilter