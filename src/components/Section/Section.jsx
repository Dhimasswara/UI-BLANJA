import React from 'react'

const Section = ({children, ...props}) => {
  return (
    <div className='my-5'>
        <h2 className='fw-bolder'>{props?.header}</h2>
        <p className='mb-4 text-secondary'>{props?.title}</p>
        {children}
    </div>
  )
}

export default Section