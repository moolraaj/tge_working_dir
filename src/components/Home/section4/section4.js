import React from 'react'
import styles from './section4.module.css'
import Section4Cards from './section4cards'
import CommonHeading from '../commonHeading'

const Section4 = () => {
    const tl = <h3>Trending, Best Selling <br /> <span>Tours</span>  And Fun <span>Destinations</span>
    </h3>
    return (
        <div> <CommonHeading title={tl} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, modi? Lorem, ipsum dolor."} />
            <Section4Cards />
        </div>
    )
}

export default Section4