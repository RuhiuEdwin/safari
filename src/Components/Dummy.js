import React, { Component } from "react";
import Modal from '../Components/Modal'
import '../sass/page.css'

class Dummy extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}/>
    <div className='page-wrapper' id='service'>
      <div className='page-main'>
        <h1 className='page-title'>
          WHAT WE DO
        </h1>
        <p className='page-intro'>
        At Safari Drycleaners, we know that understanding fabric is key to delivering a quality service. We use the latest technology and methods to ensure that every garment entrusted to us is treated specifically based upon the material and requirement. We offer the highest standards and the most delicate treatment for your garments. We also offer free consultation if you’re not sure your garment needs dry cleaning.
        </p>
      </div>
      <div className='pages'>
        <div className='page one'>
          <div className='page-img'></div>
          <div className='page-info'>
            <h4 className='page-info-title'>SAFARI REPEAT</h4>
            <div className='page-info-desc'>
              Safari repeat is our monthly premium service allowing you to go about your daily living without a worry about laundry, we offer a wide range of options to choose from. 
            </div>
            <button className='page-link'  onClick={this.showModal}>
                ORDER NOW
              </button>
          </div>
        </div>
        <div className='page one'>
          <div className='page-img'></div>
          <div className='page-info'>
            <h4 className='page-info-title'>FREE PICKUP & DELIVERY</h4>
            <div className='page-info-desc'>
            Did you know that we offer free pickup and delivery? Enjoy stress-free dry cleaning and laundry service that works around your schedule with free pickup and delivery from Safari Drycleaners. Our convenient delivery service is free to use and helps save you time and avoid unnecessary trips to the dry cleaning shop. We will pick up your laundry from your preferred location and return it straight to you at a time that’s convenient for you. Schedule your free pick up & delivery today!
            </div>
            <button className='page-link'  onClick={this.showModal}>
                ORDER NOW
              </button>
          </div>
        </div>
        <div className='page one'>
          <div className='page-img'></div>
          <div className='page-info'>
            <h4 className='page-info-title'>WASH AND FOLD</h4>
            <div className='page-info-desc'>
            This is the best service for your everyday laundry needs. Our Wash & Fold laundry service helps you to Save 4+ hours per week by having Safari Drycleaners pick up your clothes right from your door and return them freshly cleaned and perfectly folded. Your clothes get their own machine, are separated by color. We even pair your socks.
            </div>
            <button className='page-link'  onClick={this.showModal}>
                ORDER NOW
              </button>
          </div>
        </div>
        <div className='page one'>
          <div className='page-img'></div>
          <div className='page-info'>
            <h4 className='page-info-title'>CORPORATE LAUNDRY SERVICES</h4>
            <div className='page-info-desc'>
            Safari Drycleaners specializes in premium commercial dry cleaning. We’ve worked with several companies including, Government agencies, banks, hotels, fitness centers, and hair studios, among others. We strive to provide quality and reliable services that meets each business needs. Call us today for customized dry cleaning solutions for your business.
            </div>
            <button className='page-link'  onClick={this.showModal}>
                ORDER NOW
              </button>
          </div>
        </div>
        <div className='page one'>
          <div className='page-img'></div>
          <div className='page-info'>
            <h4 className='page-info-title'>CARPETS & RUGS</h4>
            <div className='page-info-desc'>
            We offer quick and efficient carpet cleaning services in Nairobi. We use the best equipment and cleaning methods to restore the glossiness of your carpet or rug. We offer free pickup and delivery. Call us today.
            </div>
            <button className='page-link'  onClick={this.showModal}>
                ORDER NOW
              </button>
          </div>
        </div>
        <div className='page one'>
          <div className='page-img'></div>
          <div className='page-info'>
            <h4 className='page-info-title'>WEDDING GOWN CLEANING</h4>
            <div className='page-info-desc'>
            Your wedding day is one of the most special moments of your life. Keeping your wedding dress clean and preserved is an important piece of cherishing the memories of your big day. That’s why our wedding dress cleaning professionals at Safari Drycleaners are dedicated to providing the very best in wedding dress cleaning, restoration, and preservation in Nairobi.
            Call or visit the Safari Drycleaners location near you to learn more about wedding gown cleaning and how to schedule your first wash.
            </div>
            <button className='page-link'  onClick={this.showModal}>
                ORDER NOW
              </button>
          </div>
        </div>
        <div className='page one'>
          <div className='page-img'></div>
          <div className='page-info'>
            <h4 className='page-info-title'>LEATHER & SUEDE CLEANING</h4>
            <div className='page-info-desc'>
            Besides our premium dry cleaning and laundry services, Safari Drycleaners provides unmatched leather cleaning & suede cleaning services. The use of water and detergent or other home cleaning products can ruin a perfectly good item that could have been restored with Safari Drycleaners expert leather cleaning service.
            In addition to cleaning your leather jackets, handbags, and suede shoes, Safari’s leather cleaning experts can also repair damage from wear and tear. This includes fixing rips and tears, sewing torn linings, fixing broken zippers and replacing straps, clasps, and snaps. Contact us today to schedule your free pickup.
            </div>
            <button className='page-link'  onClick={this.showModal}>
                ORDER NOW
              </button>
          </div>
        </div>
        <div className='page one'>
          <div className='page-img'></div>
          <div className='page-info'>
            <h4 className='page-info-title'>BEDDINGS & DUVETS</h4>
            <div className='page-info-desc'>
            Washing your duvets and beddings can seem like a challenge or a time-consuming task. And will it even fit in the washer? If it does, how long will it take for this thing to completely dry? Don’t worry at Safari Drycleaners we got you covered. We clean and fold your beddings. With a little extra attention, we strive to make your beddings feel like new again, so you can look forward to a good night’s sleep.
            </div>
            <button className='page-link'  onClick={this.showModal}>
                ORDER NOW
              </button>
          </div>
        </div>
        <div className='page one'>
          <div className='page-img'></div>
          <div className='page-info'>
            <h4 className='page-info-title'>BULK LAUNDRY</h4>
            <div className='page-info-desc'>
            From time to time, you may find yourself too busy to do your own laundry due to personal commitments or work-related arrangements. Whatever the reason may be, your time is valuable for us. Safari Drycleaners offers a broad range of bulk laundry services to both residential and commercial customers. For bulk laundry service, we can handle all the laundry work for you, so you can be able put your mind to rest and catch up on your work, or simply enjoying your valuable time with your family.
            </div>
            <button className='page-link'  onClick={this.showModal}>
                ORDER NOW
              </button>
          </div>
        </div>
        <div className='page one'>
          <div className='page-img'></div>
          <div className='page-info'>
            <h4 className='page-info-title'>SHOES</h4>
            <div className='page-info-desc'>
            Safari Drycleaners is proud to offer shoe cleaning services that will clean and restore your shoes so they look as good as new! A quality shoe wash can not only keep your shoes looking fantastic, it can even extend the life of your favorite pair of shoes. The cleaning solvents used to clean your shoes can help to remove dirt and maintain the overall appearance of the exterior of each shoe.
            We’re so convinced that you’ll love our shoe cleaning services. Contact us today to schedule your free pickup and delivery.
            </div>
            <button className='page-link'  onClick={this.showModal}>
                ORDER NOW
              </button>
          </div>
        </div>
        <div className='page one'>
          <div className='page-img'></div>
          <div className='page-info'>
            <h4 className='page-info-title'>CURTAINS</h4>
            <div className='page-info-desc'>
            Your curtains represent the entire feel of a room. The material they are made from, the style and how they hang, and even the way they open and shut play a big part in the character of a room. It’s important therefore, that when it’s time to clean them, they retain these very same qualities. At Safari Drycleaners, we’ll take care of your curtains. We actually love washing them for you.
            </div>
            <button className='page-link'  onClick={this.showModal}>
                ORDER NOW
              </button>
          </div>
        </div>
      </div>
    </div>
      </main>
    );
  }
}

export default Dummy