import '/src/Styles/Footer.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Image } from '@imagekit/react';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-desing-container'></div>
   
      <div className='footer-desing-container-bottom'>
        <div className='copy-right-div'>
          <p className='copy-right-footer'>Copyright &copy; 2025 by <span className='page-name-in-copy-rights'>MindSpire</span>. </p>
          <p>
            All Rights Reserved.
          </p>
        </div> 
        
        
      </div>
      <div className='footer-top-container'>
        <div className='footer-top-div-one'>
          <div className='footer-top-div-one-content-title'>
             <Image
              urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
              src="/logo.png"
              alt="Logo Image"
              className='logo-footer'
            />
            <div className='logo-content'>
              <p>Mindspire</p>
              <p className='name-institute'>Institute</p>
            </div>
          </div>
          <p className='sub-title-footer'>Mindspire Institute empowers learners with quality education and expert support to shape a brighter future.</p>
        </div>
        <div className='footer-top-div-two'>
          <p className='email-inp-para'>Join With Us</p>
          <div className='email-inp-container-footer'>
            <input type="email" placeholder='Your Email' className='footer-email-inp'/>
            <div className='footer-email-btn'>Subscribe Now</div>
          </div>
        </div>
      </div>
      <div className='footer-bottom-container'>
        <div className='quick-link-container'>
          <div className='navigation-link'>
            <p className='navigation-title'>Navigation</p>
            <div className='navigation-list-item'>
              <p className='list-item-footer'>About Us</p>
              <p className='list-item-footer'>Courses</p>
              <p className='list-item-footer'>News</p>
              <p className='list-item-footer'>Know More</p>
              <p className='list-item-footer'>Contact</p>
            </div>
          </div>
          <div className='quick-link'>
            <p className='quick-link-title'>Quick Links</p>
            <div className='quick-link-list-item'>
              <p className='list-item-footer'>Vision, Mision & Stragedy</p>
              <p className='list-item-footer'>Event</p>
              <p className='list-item-footer'>Purchase Guide</p>
              <p className='list-item-footer'>Webinar Details</p>
              <p className='list-item-footer'>Offering Courses</p>
            </div>
          </div>
          <div className='program-link'>
            <p  className='program-link-title'>Programs</p>
            <div className='program-list-item'>
              <p className='list-item-footer'>Play School</p>
              <p className='list-item-footer'>Nursery</p>
              <p className='list-item-footer'>Secondar</p>
              <p className='list-item-footer'>Primary</p>
              <p className='list-item-footer'>College</p>
            </div>
          </div>  
        </div>
        <div className='address-bar-for-footer'>
          <p className='address-title-footer'>Contact</p>
            <div className='address-items'>  
                <p className='address-item-cont'>Adress : <span className='address-item-cont-span'>77, Nasiyanur, Erode</span></p>
                <p className='address-item-cont'>Phone : <span className='address-item-cont-span'>80175-70575</span></p>
                <p className='address-item-cont'>Emain : <span className='address-item-cont-span'>srisabarish003@gmail.com</span></p>
                
            </div>
          <div className='social-media-link'>
            <div className='app-link'><FaWhatsapp/></div>
            <div className='app-link'><FaFacebook/></div>
            <div className='app-link'><FaXTwitter/></div>
            <div className='app-link'><FaLinkedin/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
