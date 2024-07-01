"use client"
import React from 'react'
import CommonHeading from '../commonHeading'
import styles from './section7.module.css'
import Image from 'next/image'

const Section7 = () => {
    const tl = <h3 style={{ color: "white" }}>WORLD BEST  <span>TRAVEL AGENCY </span><br /> COMPANY SINCE 2015
    </h3>
    return (
        <div className={styles.main_container}>
            <span className={styles.hide_phone}> <CommonHeading title={tl} description={""} /></span>
            <div className={styles.main_section}>
                <div className={styles.image_section}>
                    <Image src={'/Assets/Images/section7img2.png'} width={1000} height={1000} alt="..." />
                    <Image src={'/Assets/Images/section7img1.png'} width={1000} height={1000} alt="..." />
                </div>
                <div className={styles.content_section}>
                    <span className={styles.hide_desktop}>  <CommonHeading title={tl} description={""} /> </span>
                    <p>you're looking for a family holiday, a romantic escape, an adventure somewhere extraordinary, or a special event, we can arrange it.Whether you're looking for a family holiday, a romantic escape, an adventure somewhere extraordinary,</p>
                    <div className={styles.buttons}>
                        <button>
                            <Image src={"/Assets/Images/section7/travel.gif"} alt={"..."} height={1000} width={1000} />
                            <p>worldwide tour coverage</p>
                        </button>
                        <button>
                            <Image src={"/Assets/Images/section7/inflation.gif"} alt={"..."} height={1000} width={1000} />
                            <p>Competitive Pricing</p>
                        </button>
                        <button>
                            <Image src={"/Assets/Images/section7/tour_guide.gif"} alt={"..."} height={1000} width={1000} />
                            <p>Local Guided Tours</p>
                        </button>
                        <button>
                            <Image src={"/Assets/Images/section7/247.gif"} alt={"..."} height={1000} width={1000} />
                            <p>Best Support 24/7</p>
                        </button>
                        <button>
                            <Image src={"/Assets/Images/section7/schedule.gif"} alt={"..."} height={1000} width={1000} />
                            <p>Fast Booking</p>
                        </button>
                        <button>
                            <Image src={"/Assets/Images/section7/direction.gif"} alt={"..."} height={1000} width={1000} />
                            <p>Ultimate Tour Flexibility</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section7