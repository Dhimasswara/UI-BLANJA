import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import Rating from '../RatingStars/Rating'

const Card = (props) => {
  return (
    <Link className='decoration-none' to={'/detail-product'}>
    <div className='__product mx-lg-auto my-3'>
      <div className="__image">
        <img src={props.img} alt="" />
      </div>
      <div className="detail-product p-2">
        <h5 className=''>{props?.name}</h5>
        <p className='text-danger fw-bolder fs-5'>{props?.price}</p>
        <span className='text-secondary' style={{fontSize: '14px'}}>Store Shirt</span>
        <Rating/>
      </div>
    </div>
    </Link>
  )
}

export default Card