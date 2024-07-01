import React from 'react';
import styles from './page.module.css'

const Included = ({ data }) => {
    if (data === undefined) {
        return (
            <>Loading...</>
        )
    }
    console.log(data[0].inc_meta)
    return (
        <div className={styles.included_tab_content_wrapper}>
        <div className='flex flex-col gap-[13px]'>
            <h1 className='text-[1.5rem] '>INCLUDED</h1>
            <ul className='list-disc flex flex-col gap-2'>
                {
                    data[0]?.special_inc_meta?.map((val, ind) => {
                        return (
                            <li key={ind}>{val.tour_special_inc}</li>
                        )
                    })
                }
            </ul>
            <hr />
            <div className='flex flex-col gap-[10px]'>
                <h1 className='text-[1.3rem] '>TOUR INCLUSIONS</h1>
                <ul className='list-disc flex flex-col gap-2'>
                    {
                        data[0]?.inc_meta?.map((val, ind) => {
                            return (
                                <li key={ind}>{val.tour_inc}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <h1 className='text-[1.3rem] '>TOUR EXCLUSIONS</h1>
                <ul className='list-disc flex flex-col gap-2'>
                    {
                        data[0]?.exc_meta?.map((val, ind) => {
                            return (
                                <li key={ind}>{val.tour_exc}</li>
                            )
                        })
                    }
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Included