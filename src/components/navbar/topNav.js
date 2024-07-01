import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'



const TopNav = () => {
    return (
        <div className={styles.top_nav_main}>
            <div>
                <span>
                    <Image alt='...' src={'Assets/Icons/email.svg'} width={1000} height={1000} />
                </span>
                <a href='mailto:tourwithtge23@gmail.com'>tourwithtge23@gmail.com</a>
            </div>
            <div>
                <span>
                    <Image alt='...' src={'/Assets/Icons/phone_nav.svg'} width={1000} height={1000} />
                </span>
                <a href='tel:+91 67535 57043'>+91 67535 57043</a>
            </div>
        </div>
    )
}

export default TopNav