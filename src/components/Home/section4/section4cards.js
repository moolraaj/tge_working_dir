import { section4Data } from '@/Data/section4data'
import Image from 'next/image'
import React from 'react'
import styles from './section4.module.css'

const Section4Cards = () => {
    return (
        <div className={styles.all_cards}>
            <span>
                {
                    section4Data?.map((val, ind) => {
                        return (
                            <div className={styles.card} key={ind}>
                                <Image src={val.img} alt={"..."} height={1000} width={1000} />
                                <div className={styles.content}>
                                    <Image src={val.logo} alt={"..."} height={1000} width={1000} />
                                    <h3>{val.title}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </span>
        </div>
    )
}

export default Section4Cards