import React from 'react'
import styles from './morphBanner.module.css'
import Image from 'next/image'

const MorphBanner = () => {
    return (
        <div className={styles.banner}>
            <Image src={'/Assets/Images/banner.jpg'} height={1000} width={1000} alt="..." />
            <div className={styles.morph}>
                <div className={styles.innerMorph}>
                    <h3>ENJOY BEST DEALS</h3>
                    <h2>UP TO 40% DISCOUNT!</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, earum architecto nobis consectetur in est maiores. Nihil modi laboriosam unde.</p>
                    <button>DISCOVER MORE</button>
                </div>
            </div>
        </div>
    )
}

export default MorphBanner