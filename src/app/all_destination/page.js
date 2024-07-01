"use client"

import React, { useContext, useEffect, useState } from 'react'
import { GlobalProvider } from '../layout'
import Cards from '@/components/card/page'
import Pagination from '@/components/Pagination/pagination'


const All_destination = () => {
    let PageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [CardsData, setCardsData] = useState([])


    const Fetchcards = async () => {
        
        try {
            const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/packages/index?page=${currentPage}&limit=9`)
            const response = await data.json();
            setCardsData(response?.data)
            window.scrollTo(0,0)

        } catch (error) {
            console.log(error);
            return <h3>An Error Occured . Try Refreshing the Page...</h3>
        }
    }
    useEffect(() => {
        Fetchcards()
    }, [currentPage])


    if (!CardsData) {
       return <h3>Loading...</h3>
   }
  

    return (
      <>
      <div className='grid grid-cols-3 gap-[2.5rem] mt-[3vh] px-[10vw] all_destinations_wrapper'>
          {
              CardsData?.data?.map((val, ind) => {
                  return (
                      <Cards key={ind} val={val} />
                  )
              })
          }
            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={CardsData?.totalCount}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
  )
}

export default All_destination