"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Overview from "../Detail/overview";
import Itinerary from "../Detail/itinerary";
import Included from "../Detail/included";
import Policy from "../Detail/policy";
import Gallery from "../Detail/gallery";
import ContactForm from "../Detail/contactForm";
import Discount from "../discount/page";
import LastSection from "../Detail/lastSection";
import RequestCall from "../requestcall/page";
import { useRouter, useSearchParams } from "next/navigation";

import Down from "../../../public/Icons/arrow.svg";
import Cap from "../ParagraphWithLargeFirstLetters/page";

const Destinationcontent = () => {
  const [responsedata, setresponsedata] = useState();
  const search = useSearchParams();
  let id = search.get("id");
  let key = search.get("key");
  useEffect(() => {
    async function Fetchoverview() {
      if (id && key) {
        try {
          const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/packages/details/${id}/${key}`);
          const response = await data.json();
          // console.log(response?.data);
          setresponsedata(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    Fetchoverview();
  }, []);

  //    console.log(responsedata);
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className= {styles.main_container}>
      {responsedata?.map((ele)=>{
        return <div className="desti_details_wrapper">
      <div className={styles.heroBanner}>
        <Image
          src={ele.pdf_image}
          height={1000}
          width={1000}
          alt="..."
          className="xsm:h-[200px]"
          style={{objectFit: 'cover',objectPosition: 'bottom center'}}
        />
        <h1 className="desti_details_heading">{ele.package_name}</h1>
        <div className="absolute top-[82%] translate-y-[50%] left-[50%] translate-x-[-50%] h-16 p-1 border-2 border-white rounded-full bg-[var(--primary)]">
            <Image
              src={Down}
              className={`h-5 py-2 px-1 ${styles.scaledowncenter}`}
              alt="..."
            />
          </div>
      </div>
      <div className=" flex flex-col gap-[5vw] xsm:px-0">
        <CommonHead data={responsedata} />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className={`pl-[13%] pr-[9%] xsm:px-[20px] ${styles.details_flex}`}>
          <div >
            {activeTab == 1 && <Overview data={responsedata} />}
            {activeTab == 2 && <Itinerary data={responsedata} />}
            {activeTab == 3 && <Included data={responsedata} />}
            {activeTab == 4 && <Policy data={responsedata} />}
          </div>
          <div className={styles.right_side}>
            <Gallery />
            <ContactForm />
          </div>
        </div>
        <div className="pl-[13%] pr-[9%] flex flex-col gap-[5vw] xsm:px-[20px] last_section_inner">
          <Discount />
          <LastSection />
          <RequestCall />
        </div>
      </div>

        </div>
      })}
    </div>
  );
};

export default Destinationcontent;

export const CommonHead = ({ data }) => {
  return (
    <div className={`pl-[13%] pr-[9%] xsm:px-[20px] ${styles.commonHeadcontainer}`}>
      <div className={styles.section1}>
        <div className={`xsm:text-[16px] ${styles.highlightfirstletter}`}>
          {/* <Cap text="Panormic Ladakh with umling la pass package" /> */}
          <p className="panormic_ladakh_heading"><span>Panormic Ladakh </span> with umling <br className="xsm:hidden"/>
          <span>la pass</span> package</p>
          
        </div>
      </div>
      <div className={styles.section2}>
        <h4>6 Nights / 7 Days</h4>
        <div className={styles.right}>
          <div className="flex gap-1">
            <Image
              src={"/Assets/Images/Star.svg"}
              width={1000}
              height={1000}
              alt="..."
            />
            <Image
              src={"/Assets/Images/Star.svg"}
              width={1000}
              height={1000}
              alt="..."
            />
            <Image
              src={"/Assets/Images/Star.svg"}
              width={1000}
              height={1000}
              alt="..."
            />
            <Image
              src={"/Assets/Images/Star.svg"}
              width={1000}
              height={1000}
              alt="..."
            />
          </div>
          <h4>4.4 / 5</h4>
          <p>(354 reviews)</p>
        </div>
      </div>
    </div>
  );
};

export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className={`pl-[13%] pr-[9%] xsm:px-[20px] tab_title_wrapper ${styles.tabs_container}`}>
      <div onClick={() => setActiveTab(1)}>
        <span className={`py-1 ${activeTab == 1 ? styles.active : ""}`}>
          <Image
            src={"/Assets/Icons/Detailspage/overview.svg"}
            alt="..."
            height={1000}
            width={1000}
          />
          <h3>OVERVIEW</h3>
        </span>
      </div>
      <div onClick={() => setActiveTab(2)}>
        <span className={`py-1 ${activeTab == 2 ? styles.active : ""}`}>
          <Image
            src={"/Assets/Icons/earth.svg"}
            alt="..."
            height={1000}
            width={1000}
          />
          <h3>ITINERARY</h3>
        </span>
      </div>
      <div onClick={() => setActiveTab(3)}>
        <span className={`py-1 ${activeTab == 3 ? styles.active : ""}`}>
          <Image
            src={"/Assets/Icons/coin.svg"}
            alt="..."
            height={1000}
            width={1000}
          />
          <h3>INCLUDED</h3>
        </span>
      </div>
      <div onClick={() => setActiveTab(4)}>
        <span className={`py-1 ${activeTab == 4 ? styles.active : ""}`}>
          <Image
            src={"/Assets/Icons/policy.svg"}
            alt="..."
            height={1000}
            width={1000}
          />
          <h3>POLICY</h3>
        </span>
      </div>
    </div>
  );
};
