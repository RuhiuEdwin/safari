

import React from 'react'
import '../sass/modal.css';
import { IoIosCloseCircle } from "react-icons/io";

const Modal = () => {  

  // const popup = show ? "popup display-block" : "popup display-none";

  return (
    /**
     * *Add new user interface with a form to capture user details
     * *This will play off as a popup module on the ALL USERS page and once all fields are inserted, redirect back to ALL USERS page
     * TODO: implement add user functionality
     * TODO: connet to DB to push new user details to DB
     */
    <div>
    <div className='popup'>
      <div className='popup-content'>
        <div className='popupheader'>
          <h3>ADD NEW USER</h3>
          <button className='close'>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className='popup-main'>
          <form>
            <div className='email'>
              <h4>EMAIL ADDRESS</h4>
              <input type='email' required placeholder='email address'/>
            </div>
            <div className='username'>
              <h4>USERNAME</h4>
              <input type='text' required placeholder='username'/>
            </div>
            <button className='createuser'>
              COMFIRM ORDER
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Modal
