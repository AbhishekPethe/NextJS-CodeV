import React from 'react'


const Layout = ({ children , notifications , revenuemetrics , useranalytics , login }: {
  children: React.ReactNode,
  notifications: React.ReactNode,
  revenuemetrics: React.ReactNode,
  useranalytics: React.ReactNode,
  
  //conditional rendering
  login : React.ReactNode
 
}) => {
  
  //just demo purpose , generally we use auth0 or something
  const isLoggedIn = false

  
  return isLoggedIn ?
    (
    <div>
      <div>
        {children}
      </div>
      <div className='flex'>
        <div className='flex flex-col'>
          <div>{useranalytics}</div>
          <div>{revenuemetrics}</div>
        </div>
        <div className='flex flex-1'>{notifications}</div>
      </div>
    </div>
    )
    :
    (
      login
    )
}

export default Layout