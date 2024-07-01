"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import styles from './page.module.css'


const Itinerary = ({ data }) => {
    const [dropdown, setdropdown] = useState([true, false, false, false, false, false, false, false, false])

    // console.log(data)

    if (data === undefined) {
        return (
            <>Loading...</>
        )
    }

    // console.log(data[0]?.daywise_meta)
    const newdata = data ? JSON?.parse(data[0]?.daywise_meta) : []



    const handleDropdownToggle = (index) => {
        setdropdown(prevState =>
            prevState?.map((item, ind) => (ind === index ? !item : item))
        );
    };
    return (
        <div className={styles.faq_section_inner}>
            {
                newdata?.map((val, ind) => {

                    return (
                        <div className={styles.faq_section}>
                            <div className=" py-[12px] bg-[var(--primary)] text-white px-[10px] rounded-xl cursor-pointer" onClick={() => handleDropdownToggle(ind)}>
                                Day {val.tour_day}  ({val?.tour_name})
                            </div>
                            <div style={{ display: !dropdown[ind] ? "none" : "" }}  >
                                <div dangerouslySetInnerHTML={{ __html: val?.tour_des }} className={styles.faq_contents} />
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Itinerary