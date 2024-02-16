import React from 'react'

export const metadata = {
    title: "About Metadata (layout)",
    description : "inside layout"
}


const layout = ({ children }: {
    children : React.ReactNode
}) => {
  return (
      <div>
          {children}
          layout</div>
  )
}

export default layout