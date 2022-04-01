import React from 'react'
import '../sass/contact.css'

const Contact = () => {
  return (
    <div>
    <div className='contact-page hero'>
        <div className='contact-main text-center'>
            <h1 className='font-black title'>TALK TO US</h1>
            <p className='text-center'>
                We would love to hear from you. <br/>Kindly fill in the form below and we will get back to you immediately.
            </p>
        </div> 
        <form>
            <label>
                <h4>EMAIL ADDRESS</h4>
                <input type='email' required/>
            </label>
            <label>
                <h4>YOUR NAMES</h4>
                <input type='text' required/>
            </label>
            <label>
                <h4>MESSAGE</h4>
                <input type='text' required/>
            </label>
            <input type='submit' className='submit' value='SEND'/>
        </form> 
    </div>
        <div className='contact-info text-center'>
            <div className='contact-wrap'>
                <div className='phone'>
                    <h4>PHONE NUMBER</h4>
                    <p>+254 794 021 773</p>
                </div>
                <div className='phone'>
                    <h4>EMAIL ADDRESS</h4>
                    <p>info@safaridrycleaners.com</p>
                </div>
            </div>
        </div>
        <div className='map'>
            <iframe className='mapiframe' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815751445448!2d36.81568281483989!3d-1.2844797990631431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d469dd1157%3A0xbed1e98488ac0ba4!2sABSA%20TOWERS%2C!5e0!3m2!1sen!2ske!4v1648526973871!5m2!1sen!2ske">

            </iframe>
        </div>
        </div>
  )
}

export default Contact