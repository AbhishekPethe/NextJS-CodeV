import React from 'react'

const DetailsLayout = ({ children }: {
    children: React.ReactNode
}) => {
  return (
      <div>
            {children}
          <h2>
          DetailsLayout
          </h2>
      </div>
  )
}

export default DetailsLayout