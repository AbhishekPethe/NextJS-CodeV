import React from 'react'

const Authlayout = ({ children }: {
    children : React.ReactNode
}) => {
  return (
      <div>
          {children}
          layout (auth)</div>
  )
}

export default Authlayout

// this layout is only applicable to login and logout folders
// forgot-psw is exempted from this layout page
// this is one of the use of routed group layout

