'use client'
import { notFound } from 'next/navigation'
import React from 'react'


function getRandom(count: number) {
  return Math.floor(Math.random() * count)
}

const page = ({ params }: {
  params: {
    productid: string
    reviewid : string
  }
}) => {

  if (parseInt(params.reviewid) > 1000) {
    notFound(); 
    // if there is a nearest not-found file , it will direct to that , if not , it will direct to the base not-found.jsx
  }


  const random = getRandom(2)


  if (random === 1) {
    throw new Error("Error Loading Reviews")
  }

  return (
      <div>
        the review of {params.productid} is that it is very good and its review id is {params.reviewid}   
      </div>
  )
}

export default page