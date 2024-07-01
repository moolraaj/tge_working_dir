"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import "./";
import "./thankyou.css";

const Thankyou = ({ setPlanning }) => {
  // console.log(setPlanning);
  const router = useRouter();
  const [animationClass, setAnimationClass] = useState("fadeInT");

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router]);

  const closeModal = () => {
    // console.log("first");
    setAnimationClass("fadeOutT");
    setTimeout(() => {
      handleClose();
    }, 1000);
  };

  const handleClose = () => {
    setPlanning(false);
  };
  return (
    <div
      className="fixed top-0 h-screen w-full flex justify-center items-center z-[99999] bg-[#00000090]"
      onClick={closeModal}
    >
      <div
        className={`flex flex-col thankyou_popup_wrapper bg-white items-center justify-center gap-5 rounded ${animationClass} xsm:w-[90vw] xsm:h-fit xsm:p-5`}
      >
        <span className="flex flex-col uppercase text-3xl w-full justify-center items-center font-bold gap-2 thankyou_heading">
          <p>Thank You for</p>
          <div className="flex items-center gap-2">
            <p className="text-[#CA1C26]">Booking</p>
            <p>with</p>
            <p className="text-[#CA1C26]">Us!</p>
          </div>
        </span>
        <div className="px-5 font-semibold text-center ">
          <p className="thankyou_para">Thank you for your reservation. We’re dedicated to giving you the best
          experience possible. If you have any questions, feel free to get in
          touch.</p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
