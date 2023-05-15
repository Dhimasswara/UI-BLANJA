import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({children}) => {
  return (
      <div className="base-layout">
        <Navbar></Navbar>
        
        <div className='container' >
          {children}
        </div>
      </div>
      
  
  )
}

export default Layout