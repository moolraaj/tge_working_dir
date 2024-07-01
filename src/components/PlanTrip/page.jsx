import React, { useState, useContext, createContext } from "react";
import Cities from "./choosecity";
import "./plantrip.css";
import Cross from "../../../public/Icons/cross.svg";
import Image from "next/image";
import Month from "./month";
import Date from "./date";
import Destinationcity from "./departcity";
import Staycount from "./staycount";
import Peopletype from "./peopletype";
import Tripform from "./tripform";
import Thankyou from "./thankyou";

export const Tripprovider = createContext();

const BASE_URL = process.env.NEXT_PUBLIC_URL;
// console.log(BASE_URL);

const Planningtriphome = ({ planning, setPlanning }) => {
  const [render, setrender] = useState("cities");
  const [headerdata, setheaderdata] = useState({});
  const [animationClass, setAnimationClass] = useState("fadeInLeft");
  const [totalpeople, settotalpeople] = useState({
    room: 1,
    adult: 1,
    children: 0,
  });

  const steps = [
    "cities",
    "month",
    "date",
    "destination",
    "staycount",
    "peopletype",
    "form",
  ];

  const currentStepIndex = steps.indexOf(render);

  const validateCurrentStep = () => {
    switch (render) {
      case "cities":
        return headerdata.to && headerdata.to !== "";
      case "month":
        return headerdata.month && headerdata.month !== "";
      case "date":
        return headerdata.date && headerdata.date !== "";
      case "destination":
        return headerdata.destination && headerdata.destination !== "";
      case "staycount":
        return headerdata.staycount && headerdata.staycount !== "";
      case "peopletype":
        return headerdata.peopletype && headerdata.peopletype !== "";
      case "form":
        return headerdata.form && headerdata.form !== "";
      default:
        return true;
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setrender(steps[currentStepIndex - 1]);
    }
  };

  const handleNext = () => {
    if (validateCurrentStep() && currentStepIndex < steps.length - 1) {
      setrender(steps[currentStepIndex + 1]);
    }
  };

  const closeModal = () => {
    setAnimationClass("fadeOutLeft");
    setTimeout(() => {
      setPlanning(false);
    }, 1000);  
  };

  return (
    <>
      {render !== "" ? (
        
        <div className="w-full flex justify-end fixed top-0 z-[9999] bg-[rgba(0,0,0,0.2)] top_step_wp_wrapper">
          <div
            className={`h-[100vh] w-[60vw] px-[40px] plantrip pt-2 xsm:w-[100vw] ${animationClass} animation_class`}
          >
           
            <div className="h-12 w-12 rounded-full close_plan_tip flex justify-center items-center p-1 fixed right-2 top-2 z-20">
              <Image
                className="cursor-pointer"
                onClick={() => closeModal()}
                src={Cross}
                alt="cross"
              />
            </div>
            <div className="plan_trip_form_wrapper">
            <Tripprovider.Provider
              value={{
                headerdata,
                setheaderdata,
                setrender,
                totalpeople,
                settotalpeople,
              }}
            >
              {render === "cities" ? (
                <Cities />
              ) : render === "month" ? (
                <Month />
              ) : render === "date" ? (
                <Date />
              ) : render === "destination" ? (
                <Destinationcity />
              ) : render === "staycount" ? (
                <Staycount />
              ) : render === "peopletype" ? (
                <Peopletype />
              ) : render === "form" ? (
                <Tripform />
              ) : render === "thankyou" ? (
                <Thankyou setPlanning={setPlanning} />
              ) : (
                ""
              )}
             
            </Tripprovider.Provider>
            </div>
            {/* <div className="button_wrapper">
             <div className="step_up_buttons">
                <button
                  onClick={handlePrev}
                  disabled={currentStepIndex === 0}
                  className={`btn ${currentStepIndex === 0 ? 'disabled' : ''}`}
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  disabled={!validateCurrentStep() || currentStepIndex === steps.length - 1}
                  className={`btn ${!validateCurrentStep() || currentStepIndex === steps.length - 1 ? 'disabled' : ''}`}
                >
                  Next
                </button>
              </div>

            </div> */}
          </div>
          
        </div>
      ) : (
        <Thankyou setPlanning={setPlanning} />
      )}
       
    </>
  );
};

export default Planningtriphome;
