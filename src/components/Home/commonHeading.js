import React from 'react'
import styles from './commonHeading.module.css'

const CommonHeading = ({ title, description }) => {

    // console.log(title, description)
    return (
        <div className={styles.container} >
            <div className={`${styles.section1} font-Merri-sans font-semibold`}>
                {title}
            </div>
            <div className={`${styles.section2} `}>
                <p>{description}
                </p>
            </div>
        </div>
    )
}

export default CommonHeading