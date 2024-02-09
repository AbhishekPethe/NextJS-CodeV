import React from 'react'

const page = ({ params }: {
    params : {userid : string}
}) => {
  return (
      <div className='text-white'>{params.userid}</div>
  )
}

export default page