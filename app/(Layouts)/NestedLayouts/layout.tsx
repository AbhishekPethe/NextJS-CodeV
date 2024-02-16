import React from 'react'

const layout = ({ children }: {
    children : React.ReactNode
}) => {
  return (
      <div>
        {children}
        layout
      </div>
  )
}

export default layout