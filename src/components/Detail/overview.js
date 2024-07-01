import React from 'react'
import Image from 'next/image';
import styles from './page.module.css'

const Overview = ({ data }) => {
    console.log(data);
    // console.log(JSON.parse(data?.daywise_meta))

    if (data === undefined) {
        return (
            <>Loading...</>
        )
    }


    console.log(data[0]?.package_overview);
    return (<>
    <div className={`${styles.overview_tab_content_wrapper}`} >
        <h1 className={`${styles.first_heading}`}>OVERVIEW</h1>
        <div dangerouslySetInnerHTML={{ __html: data[0]?.overview }} style={{marginTop: '10px'}} className={`${styles.first_heading_description}`} />
        <h2  className={`${styles.second_heading}`} style={{marginTop: '30px'}}>Explore the Area</h2>
        <div dangerouslySetInnerHTML={{ __html: data[0]?.explore_the_area }} style={{marginTop: '10px'}} className={`${styles.second_heading_description}`} />
        <div className={`${styles.amenities_section}`}>
        <div>
            <h2 className='text-2xl mb-3'>Popular Amenities</h2>
            <div className='grid grid-cols-3 my-4'>
                {data[0]?.amenities===null?'no amenities found ' : data[0]?.amenities.map((val, ind) => {
                    return (
                        <div className='flex justify-left items-center gap-3'>
                            <Image key={ind} src={val.icon || ""} alt={'..'} height={50} width={50} className='h-[25px] w-[25px]' />
                            <h3 className='text-[1.2rem] capitalize font-medium'>{val?.ammenity}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
        <div>
            <h2 className='text-2xl mb-3'> Activities</h2>
            <div className='grid grid-cols-3 my-4'>
                {data[0]?.activities===null?'no activities found':data[0]?.activities.map((val, ind) => {
                    return (
                        <div className='flex justify-left items-center gap-3' key={ind}>
                            <Image src={val.icon} alt={'..'} height={50} width={50} className='h-[25px] w-[25px]' />
                            <h3 className='text-[1.2rem] capitalize font-medium' >{val?.activity}</h3>
                        </div>
                    )
                })}
            
            </div>
        </div>
        </div>
        </div>
    </>
    )
}

export default Overview