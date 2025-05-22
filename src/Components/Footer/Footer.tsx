import '/src/Styles/Footer.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-desing-container'></div>
      <div className='footer-desing-container-bottom'>
        <div className='copy-right-div'>
          <p className='copy-right-footer'>Copyright &copy; 2024 by <span>MindSpire</span>. All Rights Reserved.</p>
          <p>
            Terms & Condtion 
          </p>
        </div>
        
        
      </div>
      <div className='footer-top-container'>
        <div className='footer-top-div-one'>
          <div className='footer-top-div-one-content-title'>
            <div className='logo-footer'></div>
            <div className='logo-content'>
              <p>Mindspire</p>
              <p className='name-institute'>Institute</p>
            </div>
          </div>
          <p className='sub-title-footer'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, ipsam temporibus maxime numquam corporis cumque</p>
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
              <p>About Us</p>
              <p>Courses</p>
              <p>News</p>
              <p>Know More</p>
              <p>Contact</p>
            </div>
          </div>
          <div className='quick-link'>
            <p className='quick-link-title'>Quick Links</p>
            <div className='quick-link-list-item'>
              <p>Vision, Mision & Stragedy</p>
              <p>Event</p>
              <p>Purchase Guide</p>
              <p>Webinar Details</p>
              <p>Offering Courses</p>
            </div>
          </div>
          <div className='program-link'>
            <p  className='program-link-title'>Programs</p>
            <div className='program-list-item'>
              <p>Play School</p>
              <p>Nursery</p>
              <p>Secondar</p>
              <p>Primary</p>
              <p>College</p>
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
