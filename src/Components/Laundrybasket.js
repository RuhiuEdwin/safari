import React from 'react'
import '../sass/laundry.css'
import {NavLink} from 'react-router-dom'
import leather from '../images/leatherjacket.png'
import fur from '../images/fur.png'
import bag from '../images/bagg.png'
import towel from '../images/wash.png'
import suit from '../images/suit.png'

const Laundrybasket = () => {
  return (
    <div className='laundrybasket'>
      <div className='lb-main'>
        <h1 className='lb-title'>
          OUR LAUNDRY BASKET
        </h1>
        <p className='lb-intro'>
          Laundry basket allows you to build a custom laundry basket based off your specific needs.
        </p>
      </div>
      <div className='lb-wrapper'>
        <div className='lb-product'>
          <img src={towel} className='lb-img'/>
          <div className='lb-name'>
            TOWELS
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={leather} className='lb-img'/>
          <div className='lb-name'>
            LEATHER JACKET
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={suit} className='lb-img'/>
          <div className='lb-name'>
            SUIT
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={fur} className='lb-img'/>
          <div className='lb-name'>
            FUR COAT
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={bag} className='lb-img'/>
          <div className='lb-name'>
            BAGS
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={towel} className='lb-img'/>
          <div className='lb-name'>
            TOWELS
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={leather} className='lb-img'/>
          <div className='lb-name'>
            LEATHER JACKET
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={suit} className='lb-img'/>
          <div className='lb-name'>
            SUIT
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={fur} className='lb-img'/>
          <div className='lb-name'>
            FUR COAT
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={bag} className='lb-img'/>
          <div className='lb-name'>
            BAGS
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={towel} className='lb-img'/>
          <div className='lb-name'>
            TOWELS
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={leather} className='lb-img'/>
          <div className='lb-name'>
            LEATHER JACKET
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={suit} className='lb-img'/>
          <div className='lb-name'>
            SUIT
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={fur} className='lb-img'/>
          <div className='lb-name'>
            FUR COAT
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={bag} className='lb-img'/>
          <div className='lb-name'>
            BAGS
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={towel} className='lb-img'/>
          <div className='lb-name'>
            TOWELS
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={leather} className='lb-img'/>
          <div className='lb-name'>
            LEATHER JACKET
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={suit} className='lb-img'/>
          <div className='lb-name'>
            SUIT
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={fur} className='lb-img'/>
          <div className='lb-name'>
            FUR COAT
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={bag} className='lb-img'/>
          <div className='lb-name'>
            BAGS
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={towel} className='lb-img'/>
          <div className='lb-name'>
            TOWELS
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={leather} className='lb-img'/>
          <div className='lb-name'>
            LEATHER JACKET
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={suit} className='lb-img'/>
          <div className='lb-name'>
            SUIT
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={fur} className='lb-img'/>
          <div className='lb-name'>
            FUR COAT
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
        <div className='lb-product'>
          <img src={bag} className='lb-img'/>
          <div className='lb-name'>
            BAGS
          </div>
          <div className='lb-footer'>
            <div className='lb-price'>
              KES 200
            </div>
            <NavLink to='/order' className='lb-add'>
              ADD TO CART
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Laundrybasket