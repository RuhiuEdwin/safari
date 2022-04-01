import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import client from '../images/client.png'
import coop from '../images/coop.png'
import cic from '../images/cic.png'
import icdc from '../images/icdc.png'
import kfcb from '../images/kfcb.png'
import medicare from '../images/medicare.png'
import mest from '../images/mest.png'
import nat from '../images/nat.png'
import nimplromed from '../images/nimplromed.png'
import nssf from '../images/nssf.png'
import pionner from '../images/pionner.png'
import re from '../images/re.png'
import quality from "../images/laundry-basket (2).png"
import repeat from "../images/laundry-basket (1).png"
import clock from "../images/wall-clock.png"
import pin from "../images/location (1).png"

const About = () => {
  return (
      <div className='about'>
        <div className='about-wrapper'>
            <h4 className='about-title'>WELCOME TO SAFARI DRY CLEANERS</h4>
            <div className='about-desc'>
            Launched in 2009, Safari Drycleaners is a local provider of quality residential and commercial laundry services in Nairobi. We focus on offering professional laundry services with FREE pickup and delivery. Items picked up from your home, laundered and folded/hung your way, then returned on the same day.
            Safari Drycleaners' goal is to provide superior washing experience to our valued Clients by providing excellent customer service, fast delivery, and access to plenty of modern and well-maintained washing machines.
            </div>
            <div className='perks'>
              <h2 className='perk-title'>
                WHY CHOOSE US
              </h2>
              <div className='perks-wrapper'>
                <div className='perk'>
                    <img src={pin} className='perk-img'/>
                    <h4>FREE PICKUP & DELIVERY</h4> 
                    <p>enjoy free laundry pickup and delivery, simply order the service and we will be at your doorstep</p>
                </div>
                <div className='perk'>
                    <img src={repeat} className='perk-img'/>
                    <h4>SAFARI REPEAT</h4>
                    <p>save hours with our monthly premium laundry service guaranteed that you will never have to worry about laundry ever again</p>
                </div>
                <div className='perk'>
                    <img src={quality} className='perk-img'/>
                    <h4>QUALITY AND PROFESSIONAL SERVICE</h4>
                    <p>we offer unparalleled quality and professional service in pursuit of exemplary customer service</p>
                </div>
                <div className='perk'>
                    <img src={clock} className='perk-img'/>
                    <h4>24 HOUR LAUNDRY TURNAROUND</h4>
                    <p>enjoy fast laundry turnaround to ensure you never have to worry about laundry ever again</p>
                </div>
              </div>
            </div>
        </div>
          <div className='testimonial-wrapper'>
            <h1 className='title'>
              WHAT CLIENTS SAY ABOUT US
            </h1>
            <p className='testimonial-info'>
              we are good, but dont take our word for it, here is what people are saying about us
            </p>
            <Splide options={ {rewind: true, gap: '10px',} } >
                <SplideSlide>
                <div className='testimonial'>
                  <div className='testimonial-details'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  </div>
                    <img src={client} className='testimonial-img'/>
                </div>
                </SplideSlide>
                <SplideSlide>
                <div className='testimonial'>
                  <div className='testimonial-details'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  </div>
                    <img src={client} className='testimonial-img'/>
                </div>
                </SplideSlide>
                <SplideSlide>
                <div className='testimonial'>
                  <div className='testimonial-details'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  </div>
                    <img src={client} className='testimonial-img'/>
                </div>
                </SplideSlide>
            </Splide>
            </div>
          <div className='clients'>
            <h4 className='title'>OUR CLIENTS</h4>
            <Splide 
  options={ {
    rewind: true,
    width : 500,
    gap   : '10px',
  } } className='clients-wrapper'>
              <SplideSlide>
                <img src={coop} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={re} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={nssf} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={pionner} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={kfcb} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={medicare} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={mest} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={nimplromed} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={nat} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={icdc} className='client-img'/>
              </SplideSlide>
              <SplideSlide>
                <img src={cic} className='client-img'/>
              </SplideSlide>
                
            </Splide>
          </div>
    </div>
  )
}

export default About