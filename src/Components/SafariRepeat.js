import React from 'react'
import bag from '../images/bag.png'
import {NavLink} from 'react-router-dom'

const SafariRepeat = () => {
  return (
    <div className='laundrybasket'>
      <div className='lb-main'>
        <h1 className='lb-title'>
          SAFARI REPEAT
        </h1>
        <p className='lb-intro'>
          Safari repeat is out premium service guaranteed to save you hours of laundry that you may focus on being awesome
        </p>
      </div>
    <div className='repeat-wrapper'>
      <div className='repeat-card'>
        <div className='repeat-header'>
          <img src={bag} className='repeat-icon'/>
        </div>
        <div className='repeat-main'>
            <h4 className='repeat-title'>
              1 BAG REPEAT
            </h4>
            <p className='repeat-details'>
            Save at least 3hrs on laundry each month! Perfect for towels & beddings.
            </p>
        </div>
        <div className='repeat-footer'>
          <div className='amount'>
            Ksh 6000.00
          </div>
          <NavLink to='/checkout' className='select'>
            PURCHASE
          </NavLink>
        </div>
      </div>
      <div className='repeat-card'>
        <div className='repeat-header'>
          <img src={bag} className='repeat-icon'/>
        </div>
        <div className='repeat-main'>
            <h4 className='repeat-title'>
              2 BAG REPEAT
            </h4>
            <p className='repeat-details'>
            Save at least 6hrs on laundry each month! Perfect for individual needs.
            </p>
        </div>
        <div className='repeat-footer'>
          <div className='amount'>
            Ksh 10000.00
          </div>
          <NavLink to='/checkout' className='select'>
            PURCHASE
          </NavLink>
        </div>
      </div>
      <div className='repeat-card'>
        <div className='repeat-header'>
          <img src={bag} className='repeat-icon'/>
        </div>
        <div className='repeat-main'>
            <h4 className='repeat-title'>
              3 BAG REPEAT
            </h4>
            <p className='repeat-details'>
            Save at least 9hrs on laundry each month! Perfect for couples.
            </p>
        </div>
        <div className='repeat-footer'>
          <div className='amount'>
            Ksh 12000.00
          </div>
          <NavLink to='/checkout' className='select'>
            PURCHASE
          </NavLink>
        </div>
      </div>
      <div className='repeat-card'>
        <div className='repeat-header'>
          <img src={bag} className='repeat-icon'/>
        </div>
        <div className='repeat-main'>
            <h4 className='repeat-title'>
              4 BAG REPEAT
            </h4>
            <p className='repeat-details'>
            Save at least 12hrs on laundry each month! Perfect for families.
            </p>
        </div>
        <div className='repeat-footer'>
          <div className='amount'>
            Ksh 15000.00
          </div>
          <NavLink to='/checkout' className='select'>
            PURCHASE
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SafariRepeat