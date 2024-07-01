'use client'
import Image from 'next/image'
import React from 'react'
import Kerela from '../../../public/kerala.png'
import Spiti from '../../../public/spiti.png'
import ParagraphWithLargeFirstLetters from '../ParagraphWithLargeFirstLetters/page'
import Cap from '../ParagraphWithLargeFirstLetters/page'
const Trending = () => {
    
  return (
    <>
    <div className='w-full flex justify-between'>
        <div className='flex flex-col w-[30%]  flex-wrap gap-3  '>
                <div className='uppercase border-l-4 border-[var(--primary)]  font-bold text-2xl  flex flex-col pl-1 w-[70%]' style={{fontFamily:'Merriweather-sans'}}> 
                <Cap text="Trending, Best"/>
                <div className='flex items-center gap-1'><Cap text="Selling"/><span className='text-[var(--primary)]'><Cap text='Tours'/></span></div>
                <div className='w-full  '><Cap text="And Fun"/>
                <span className='text-[var(--primary)] w-full'><Cap text='Destinations'/></span>

                </div>
        </div>
                <p className='text-[#494545] font-Exo' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, sunt?</p>
        </div>
        <div className='flex h-[45vh]  w-[65%] justify-between trending overflow-x-hidden '>
            {[1,2,3,4].map((item)=>{
                return(<>
                <div className='relative h-[90%] w-[23%] trendingcard gap-6'>
                <div className='bg-[#941A21B5] w-fit absolute top-0 text-white text-sm py-1 px-2'>4 Trip</div>
                <div className='h-full'>
                    <Image alt='...' src={Kerela} className='h-full'/>
                </div>
                <div className='flex flex-col text-white gap-1  absolute bottom-1 left-2 text-sm'>
                    <div className='font-Merri'>Kerala</div>
                    <div className='font-Merri-sans font-extralight tracking-widest text-xs'>The Cultural Club</div>
                </div>
            </div>
                </>)
            })}
        </div>
    </div>
    </>

  )
}

export default Trending