


import Link from 'next/link'
import React from 'react'

const page = ({ params }: {
    params : {productid : string}
}) => {
  return (
      <div className=''>
          review of the {params.productid} is 
          <Link className='underline' href={`/NestedDynamicRoutes/${params.productid}/review/${params.productid}`}>
              Here
          </Link>
      </div>
  )
}

export default page