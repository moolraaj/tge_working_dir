import React from 'react'
import styles from './section2.module.css'
import CommonHeading from '../commonHeading'
import Section2Cards from './section2cards'

const Section2 = () => {
    const tl = <h3>Top Trending <br /><span>Destinations </span>  For You
    </h3>
    return (
        <div className={styles.main_container}>
            <CommonHeading title={tl} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, modi? Lorem, ipsum dolor."} />
            <Section2Cards />
        </div>
    )
}

export default Section2