import React from 'react'
import logo from "../images/footer-logo.png"
import call from "../images/call.png"
import mail from "../images/mail.png"
import clock from "../images/wall-clock.png"
import pin from "../images/location (1).png"
import { AiOutlineInstagram } from 'react-icons/ai'
import { MdOutlineFacebook } from 'react-icons/md'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer-wrapper'>
                <img className='footer-logo' src={logo} alt=""/>
                <div className='footer-info'>
                    <h4 className='sub-title'>CONTACTS</h4>
                    <div className='info'>
                <img className='info-icon' src={pin} alt=""/>
                        ABSA TOWERS, LOITA STREET, NAIROBI
                    </div>
                    <div className='info'>
                <img className='info-icon' src={clock} alt=""/>
                        Mon - Fri 8am to 6pm
                    </div>
                    <div className='info'>
                <img className='info-icon' src={mail} alt=""/>
                        support@safaridrycleaners.com
                    </div>
                    <div className='info'>
                <img className='info-icon' src={call} alt=""/>
                    +254 794 021 773
                    </div>
                </div>
                <div className='subscribe'>
                    <h4 className='sub-title'>
                        SUBSCRIBE TO OUR NEWSLETTER
                    </h4>
                        Sign up and receive our special offers
                    <input type='text' classname="sub" placeholder="email address"/>
                    <input type="submit" value='SUBSCRIBE' className='sub-btn'/>
                </div> 
            </div>
                
                <div className='social-media'>
                    <AiOutlineInstagram className='social-icon'/>
                    <MdOutlineFacebook className='social-icon'/>
                    <AiFillTwitterCircle className='social-icon'/>
                </div>
            <p className='copyright'>
                2022 SAFARI DRY CLEANERS.
            </p>
        </div>
    </div>
  )
}

export default Footer