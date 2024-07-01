import Image from "next/image";
import Link from "next/link";
import Moon from "../../../public/Icons/moon.svg";
import Sun from "../../../public/Icons/sun.svg";
import Star from "../../../public/Icons/star.svg";
import Call from "../../../public/Icons/cardphone.svg";
import Wtsp from "../../../public/Icons/cardwhatsapp.svg";
import { emptyImage } from "@/Data/cardImageData";

const Cards = ({ val }) => {
  return (
    <div className="rounded-lg flex flex-col shadow-lg bg-[#F4F4F4] pb-5 card_section_wrapper">
      <div className="relative w-full h-[33vh]  card_top_section">
        <Image
          src={val?.main_image || emptyImage.src}
          alt="Package image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-sm tour_package_img"
        />
        <div className="w-full flex justify-between absolute top-0 text-white p-3">
          <span className="flex items-center bg-black px-2 rounded gap-1">
            {val?.days}{" "}
            <Image src={Moon} alt="Moon icon" width={12} height={12} /> /{" "}
            {val?.night}{" "}
            <Image src={Sun} alt="Sun icon" width={12} height={12} />
          </span>
          <span
            className="bg-gradient-to-r from-[#010080] to-[#BC000B] text-white px-2 rounded"
            style={{ fontFamily: "Montserrat" }}
          >
            Best Sale!
          </span>
        </div>
      </div>
      <div className="border-l-[3px] border-r-[3px] border-[#CA1C26] px-2 font-bold text-[18px] py-2 cardtitle card_middle_section">
        {val?.package_name}
      </div>
      <div className="flex flex-col gap-4 px-3 card_bottom_section">
        <div className="flex gap-3 items-center mt-3 font-int min-h-10 card_bottom_underline_section">
          {val?.servies===null?'no services found' : val?.servies?.slice(0, 4)?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-xs font-semibold"
            >
              <div className="relative w-6 h-6">
                <Image
                  className="rounded-full"
                  src={item?.icon}
                  alt={`icon`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {item?.service}
            </div>
          ))}
        </div>

        <div
          className="w-full flex justify-between items-center"
          style={{ fontFamily: "Montserrat" }}
        >
          <div className="flex items-center gap-1">
            <p className="font-bold text-xl ">₹{val?.starting_cost}/-</p>
            <strike className="text-[#5F5D5D] text-sm font-semibold">
              {val?.discount || ""}
            </strike>
          </div>
          <div className="flex items-center gap-1">
            <Image src={Star} alt="Star icon" width={16} height={16} />
            <p className="font-semibold ">{val?.rating}</p>
            <p className="text-[#969191] text-xs">({val?.reviews})</p>
          </div>
        </div>
        <div className="flex justify-between items-center h-9">
          <Link
            href={`/destination/place?id=${val?.id}&key=${val?.key}`}
            className="uppercase bg-[var(--primary)] text-white rounded px-5 h-full text-center flex items-center justify-center"
            style={{ fontFamily: "Merriweather-sans" }}
          >
            Explore now
          </Link>
          <div className="flex items-center divide-x-[1.5px] divide-[var(--primary)] gap-1 border-2 border-[var(--primary)] rounded h-full cards_icons_wrapper">
            <Image
              src={Call}
              className="p-1"
              alt="Call icon"
              width={24}
              height={24}
            />
            <Image
              src={Wtsp}
              className="p-1"
              alt="WhatsApp icon"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
