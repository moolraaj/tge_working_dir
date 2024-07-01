"use client";

import Image from "next/image";
import Tge from "../../../public/tge.png";
import Call from "../../../public/Assets/Icons/phone.svg";
import Message from "../../../public/Assets/Icons/message.svg";
import Fb from "../../../public/Icons/fb.svg";
import Insta from "../../../public/Icons/insta.svg";
import Youtube from "../../../public/Icons/youtube.svg";

import "./footer.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { emptyImage } from "@/Data/cardImageData";

const Footer = () => {
  const pstyle = "text-[14px]";

  const [allCategory, setallCategory] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function Fetchdata() {
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_URL}apis/packages/package_category_with_city_tge`);
        const response = await data.json();
        setallCategory(response?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    }
    Fetchdata();
  }, []);

  return (
    <>
      <div className="w-full h-[60vh] footerbg  flex justify-center mt-10 xsm:h-fit font-Merri-sans">
        <div className="w-full h-full flex flex-col justify-around xsm:gap-3 xsm:pb-4">
          <div className="flex flex-col h-[80%] footer_flex_content_wrapper bg-[#CFCFEE2E] backdrop-blur-sm rounded-3xl shadow-md mx-auto xsm:w-[95%]">
            <div className="w-28 h-20 mx-auto -translate-y-8">
              <Image
                src={"/Assets/Images/logo.png"}
                alt="footer-logo"
                height={1000}
                width={1000}
                onError={(e) => e.target.src = emptyImage.src}
              />
            </div>

            <div className="flex justify-between  items-center xsm:flex-col xsm:px-5 footer_column_wrapper">
              <div className="flex justify-between w-[60%] xsm:w-[100%]">
                <div className="pr-5  flex flex-col gap-3 xsm:hidden footer_links about_tge_links">
                  <p className="text-[17.57px] font-semibold xsm:text-[15px]">
                    ABOUT TGE
                  </p>
                  <Link href={"/about_us"} className={`${pstyle}`}>
                    About us
                  </Link>

                  <Link href={"/policy/copyright"} className={`${pstyle}`}>
                    Copyright Policies
                  </Link>
                  <Link href={"/policy/privacy"} className={`${pstyle}`}>
                    Privacy
                  </Link>
                </div>
                <div className="pr-5  flex flex-col gap-3 footer_links important_links">
                  <p className="text-[17.57px] font-semibold xsm:text-[13px] capitalize">
                    IMPORTANT LINKS
                  </p>
                  <Link href={"/policy/refund"} className={`${pstyle}`}>
                    Refund Policy
                  </Link>
                  <Link href={"/policy/terms"} className={`${pstyle}`}>
                    Terms & Conditions
                  </Link>
                </div>
                <div className="flex flex-col gap-3 footer_links contacts_right">
                  {/* <p className="text-[16px] font-semibold xsm:text-[12px] ">
                    CONTACT US{" "}
                  </p>  */}
                  <p className="flex items-center gap-1">
                    <span className="bg-[var(--primary)] rounded-full p-[6px] flex justify-center items-center">
                      <Image src={Call} alt="..." />
                    </span>
                    <a href={"tel:+91 67535 57043"} className={`${pstyle}`}>
                      +91 67535 57043
                    </a>
                  </p>
                  <p className="flex items-center gap-1">
                    <span className="bg-[var(--primary)] rounded-full p-[6px] flex justify-center items-center">
                      <Image src={Message} alt="..." />
                    </span>
                    <a
                      href="mailto:tourwithtge23@gmail.com"
                      className={`${pstyle}`}
                    >
                      tourwithtge23@gmail.com
                    </a>
                  </p>
                  <p className="flex gap-4">
                    <Image src={Fb} alt="..." />
                    <Image src={Insta} alt="..." />
                    <Image src={Youtube} alt="..." />
                  </p>
                </div>
              </div>

              <div className="xsm:my-5">
                <p className="text-[#595858] text-[17.57px] font-semibold footer_dest_heading">
                  Travel Destinations
                </p>
                <div className="grid grid-cols-3 gap-2 footer_gallary_wrapper">
                  {loading ? (
                    <EmptyComponent />
                  ) : (
                    allCategory?.length > 0 &&
                    allCategory?.slice(0, 6)?.map((item, ind) => {
                      return (
                        <Link
                          key={ind}
                          href={`/destination?city_name=${item?.name}&cityid=${item?.city_id}`}
                          className="h-[5rem] w-[5rem] footer_destination_link"
                        >
                          <span className="relative travel_image_wrapper">
                            <Image
                              src={
                                item?.image || emptyImage.src
                              }
                              width={1000}
                              height={1000}
                              alt="..."
                              className="h-full w-full"
                              onError={(e) =>
                                 e.target.src = emptyImage.src}
                            />
                            <p className="text-white absolute bottom-2 text-[15.37px] text-center w-full footer_destination_tittle">
                              {item?.name}
                            </p>
                          </span>
                        </Link>
                      );
                    }))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-center text-[#838282] font-semibold bg-white w-max px-4 py-2 xsm:py-1 xsm:px-2">
              © 2024 TGE ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

function EmptyComponent() {
  return (
    <>
      {Array(6).fill().map((_, index) => (
        <Link
          key={index}
          href={`/`}
          className="h-[5rem] w-[5rem]"
        >
          <span className="relative travel_image_wrapper">
            <Image
              src={
              emptyImage.src || emptyImage.src
              }
              width={1000}
              height={1000}
              alt="..."
              className="h-full w-full"
              onError={(e) => 
                e.target.src = emptyImage.src}
            />
            <p className="text-white absolute bottom-2 text-[15.37px] text-center w-full footer_destination_tittle">
              loading...
            </p>
          </span>
        </Link>
      ))}
    </>

  );
}

export default Footer;
