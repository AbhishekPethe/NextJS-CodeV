import React from 'react'

const page = ({ params }: {
    params: {
        slug : string[]
    }
}) => {

    if (params.slug?.length === 2) {
        return <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
    }
    else if (params.slug?.length === 1) {
        return <h1>Viewing docs for {params.slug[0]}</h1>
    }


    // optional catch all
  return (
      <div>
        Total Docs
      </div>
  )
}

export default page

/// it was initially [...slug]
/// for optional catch all , we are using [[...slug]]