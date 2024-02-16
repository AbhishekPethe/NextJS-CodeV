import React from 'react'
import { Metadata } from 'next'

type Props = {
    params: {
        metaid : string
    }
}

export const generateMetadata = ( {params} : Props ): Metadata => {
    return {
        title: `Meta id ${params.metaid}`
    }
} 

const page = ({ params }: Props) => {
  return (
    <div>page
      {params.metaid}
    </div>
  )
}

export default page