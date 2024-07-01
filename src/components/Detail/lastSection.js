import Image from 'next/image'
import React from 'react'
 
import Cards from '../card/page'
import styles from './page.module.css'

const LastSection = ({ data }) => {
    // console.log(data)
    return (
        <div className='w-full flex justify-between xsm:flex-col xsm:overflow-hidden'>
            <div className='flex flex-col w-[30%]  flex-wrap gap-3 xsm:w-[80%]'>
                <div className='uppercase border-l-4 border-[var(--primary)]  font-bold text-2xl  flex flex-wrap pl-1 w-[80%] xsm:w-[90%] '>
                    <p className='lastsection_left_heading'>Trending, Best Selling <span className='text-[var(--primary)]'>Tours</span> And Fun <span className='text-[var(--primary)]'>Destinations</span></p>
                </div>
                <p className='text-[#494545] xsm:hidden lastsection_left_para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, sunt?</p>
            </div>
            <div className={`flex h-fit justify-between ${styles.card_main}`}>
                {
                    data?.data?.slice(0, 4).map((val, ind) => {
                        return (
                            <div className='w-[50%]' key={ind}>
                                <Cards val={val} />
                            </div>


                        )
                    })
                }
                </div>
        </div >
    )
}

export default LastSection



