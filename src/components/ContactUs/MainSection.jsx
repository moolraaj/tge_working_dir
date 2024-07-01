import React from 'react'
import ContactUsForm from './ContactUsForm'
import CUSideSection from './CUSideSection'

const MainSection = () => {
  return (
    <div className='flex h-[700px] xsm:flex-col-reverse xsm:h-max'>
        <ContactUsForm />
        <CUSideSection />
    </div>
  )
}

export default MainSection