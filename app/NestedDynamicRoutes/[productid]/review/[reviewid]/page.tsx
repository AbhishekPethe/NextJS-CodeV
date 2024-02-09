import React from 'react'

const page = ({ params }: {
  params: {
    productid: string
    reviewid : string
  }
}) => {
  return (
      <div>
        the review of {params.productid} is that it is very good and its review id is {params.reviewid}   
      </div>
  )
}

export default page