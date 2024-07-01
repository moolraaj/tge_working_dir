import React from 'react'
import styles from './page.module.css'
const Policy = ({ data }) => {

    if (data === undefined) {
        return (
            <>Loading...</>
        )
    }

    return (
        <div className={styles.policy_tab_content_wrapper} >
            <h2 className='text-2xl mb-3'>Payment Policy</h2>
            <div dangerouslySetInnerHTML={{ __html: data[0]?.payment_policy }} />
        </div>
    )
}

export default Policy