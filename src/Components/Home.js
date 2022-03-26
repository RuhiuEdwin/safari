import React from 'react'
import '../sass/home.css'
import laundry from '../images/laundry-basket (2).png'
import bag from '../images/bag.png'
import repeat from '../images/laundry-basket.png'
import pickup from '../images/delivery (1).png'
import fold from '../images/laundry.png'
import corp from '../images/corporation.png'
import carpet from '../images/carpet-cleaner.png'
import gown from '../images/gown (2).png'
import leather from '../images/leather.png'
import pin from '../images/location (1).png'
import client from '../images/client.png'
import pegs from '../images/pegs.jpg'
import deco from '../images/deco.jpg'
import { BiChevronRight} from 'react-icons/bi'

const Home = () => {
  return (
    <div>
    <div className='main'>
      <div className='main-info'>
        <h1 className='header'>
          Nairobi's First Choice in Dry Cleaning.
        </h1>
        <p className='sub-header'>
          we care for the clothes you wear
        </p>
        <a href='/safarirepeat' className='hero-btn'>
          DISCOVER SAFARI REPEAT
          <img src={laundry} className='cta-icon'/>
        </a>
      </div>
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
          <a href='/safarirepeat' className='repeat-go'>
            <BiChevronRight className='go'/>
          </a>
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
          <a href='/safarirepeat' className='repeat-go'>
            <BiChevronRight className='go'/>
          </a>
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
          <a href='/safarirepeat' className='repeat-go'>
            <BiChevronRight className='go'/>
          </a>
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
          <a href='/safarirepeat' className='repeat-go'>
            <BiChevronRight className='go'/>
          </a>
        </div>
      </div>
    </div>
    <div className='service-intro'>
      <div className='decos'>
          <img src={deco} className='deco one'/>
          <img src={pegs} className='deco two'/>
          </div>
      <div className='service-info'>
        <h2 className='service-title'>
          Laundry is Easier with Dependable Cleaners
        </h2>
        <p className='service-details'>
          Dependable Cleaners make laundry & dry cleaning more convenient than ever
        </p>
        <div className='services'>
          <div className='service'>
            <img src={repeat} className='service-icon'/>
            SAFARI REPEAT
          </div>
          <div className='service'>
            <img src={pickup} className='service-icon'/>
            FREE PICKUP & DELIVERY
          </div>
          <div className='service'>
            <img src={fold} className='service-icon'/>
            WASH & FOLD
          </div>
          <div className='service'>
            <img src={corp} className='service-icon'/>
            CORPORATE LAUNDRY SERVICES
          </div>
          <div className='service'>
            <img src={carpet} className='service-icon'/>
            CARPETS & RUGS
          </div>
          <div className='service'>
            <img src={gown} className='service-icon'/>
            WEDDING GOWNS
          </div>
          <div className='service'>
            <img src={leather} className='service-icon'/>
            LEATHER & SUEDE CLEANING
          </div>
        </div>
        <a href='#contact' className='pickup-btn'>
          <img src={pin} className='pickup-icon'/>
          SCHEDULE FOR A FREE PICKUP
        </a>
      </div>
    </div>
    <div className='testimonials'>
      <h1 className='title'>
        TESTIMONIALS
      </h1>
      <p className='testimonial-info'>
        we are good, but dont take our word for it, here is what people are saying about us
      </p>
      <div className='testimonials-wrapper'>
        <div className='testimonial'>
          <div className='testimonial-details'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          </div>
            <img src={client} className='testimonial-img'/>
        </div>
        <div className='testimonial'>
          <div className='testimonial-details'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          </div>
            <img src={client} className='testimonial-img'/>
        </div>
        <div className='testimonial'>
          <div className='testimonial-details'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          </div>
            <img src={client} className='testimonial-img'/>
        </div>
      </div>
    </div>
    <div className='contact' id='contact'>
      <div className='contact-wrapper'>
        <div className='contact-form'>
          <h4 className='form-title'>
            FREE PICKUP & DELIVERY
          </h4>
          <p className='form-info'>
            Save more time with our free laundry pickup & delivery service throughout the Nairobi Metropolitan Area
          </p>
          <form>
            <input type='text' placeholder='Full Names'/>
            <input type='email' placeholder='Enter Your Email'/>
            <input type='number' placeholder='Phone Number'/>
            <input type='address' placeholder='Enter Your Address'/>
            <input type='submit' value='SCHEDULE YOUR FREE PICKUP' className='submit'/>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home