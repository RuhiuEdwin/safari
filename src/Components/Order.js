import React from 'react'
import '../App.css'
import pickup from '../images/pickup.png'

const Order = () => {
  return (
    <div className='order'>
      <h1 className='title'>
        ORDER HERE
      </h1>
      <div className='order-wrapper'>
        <form>
          <h4>KINDLY FILL IN THIS FORM TO PLACE YOUR ORDER</h4>
            <input type='text' placeholder='Full Names'/>
            <input type='email' placeholder='Enter Your Email'/>
            <input type='number' placeholder='Phone Number'/>
            <input type='address' placeholder='Enter Your Address'/>
            <input type='submit' value='SCHEDULE YOUR FREE PICKUP' className='submit'/>
        </form>
        <img src={pickup} className='order-img'/>
      </div>
    </div>
  )
}

export default Order