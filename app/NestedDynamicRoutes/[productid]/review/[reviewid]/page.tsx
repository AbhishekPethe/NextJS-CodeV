import { notFound } from 'next/navigation'
import React from 'react'

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

  return (
      <div>
        the review of {params.productid} is that it is very good and its review id is {params.reviewid}   
      </div>
  )
}

export default page