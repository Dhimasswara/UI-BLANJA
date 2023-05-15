import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Rating = () => {
  return (
    <div className='rating'>
          <FontAwesomeIcon icon={faStar} style={{fontSize: '14px', color: 'orange'}}> </FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar} style={{fontSize: '14px', color: 'orange'}}> </FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar} style={{fontSize: '14px', color: 'orange'}}> </FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar} style={{fontSize: '14px', color: 'orange'}}> </FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar} style={{fontSize: '14px', color: 'orange'}}> </FontAwesomeIcon>
          <span className='ps-1 text-secondary' style={{fontSize: '13px'}}>(10)</span>          
    </div>
  )
}

export default Rating