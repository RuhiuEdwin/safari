import React from 'react'
import pickup from '../images/pickup.png'

const Checkout = () => {
  return (
    <div className='laundrybasket'>
      <div className='lb-main'>
        <h1 className='lb-title'>
          CHECK OUT
        </h1>
        <p className='lb-intro'>
          Thank you for choosing safari drycleaners, Kindly fill in the form below to facilitate your purchase.
        </p>
      </div>
      <div className='order-wrapper'>
        <form>
            <input type='text' placeholder='Full Names'/>
            <input type='email' placeholder='Enter Your Email'/>
            <input type='number' placeholder='Phone Number'/>
            <input type='address' placeholder='Enter Your Address'/>
            <label>
            SELECT PACKAGE
              <select required>
                <option className='option'  disabled selected value="">select a repeat package</option>
                <option  className='option'  value="">1 BAG SAFARI REPEAT</option>
                <option  className='option'  value="">2 BAG SAFARI REPEAT</option>
                <option  className='option'  value="">3 BAG SAFARI REPEAT</option>
                <option  className='option'  value="">4 BAG SAFARI REPEAT</option>
              </select>
            </label>
            <label>
            SELECT PAYEMENT METHOD
              <select required>
                <option  className='option' disabled selected value="">select a payement method</option>
                <option  className='option'  value="">MPESA</option>
                <option  className='option'  value="">VISA</option>
                <option  className='option'  value="">MASTERCARD</option>
                <option  className='option'  value="">CASH ON PICKUP</option>
              </select>
            </label>
            <input type='submit' value='SCHEDULE YOUR FREE PICKUP' className='submit'/>
        </form>
        <img src={pickup} className='order-img'/>
      </div>
    </div>
  )
}

export default Checkout