import '../../Styles/Footer/Footer.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Image } from '@imagekit/react';
import { Link } from 'react-router-dom';

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
            <Link to={'/'} style={{textDecoration:'none'}} className='logo-content' >
              <p>Mindspire</p>
              <p className='name-institute'>Institute</p>
            </Link>
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
              <Link to={'About-Mindspire-Institute'} className='list-item-footer'>About Us</Link>
              <Link to={"Providing-Education's-in-Mindspire-Institute"} className='list-item-footer'>Courses</Link>
              <Link to={'About-Mindspire-Institute'}  className='list-item-footer'>News</Link>
              <Link to={'About-Mindspire-Institute'} className='list-item-footer'>Know More</Link>
              <Link to={"Contact-with-Mindspire-Institute"}  className='list-item-footer'>Contact</Link>
            </div>
          </div>
          <div className='quick-link'>
            <p className='quick-link-title'>Quick Links</p>
            <div className='quick-link-list-item'>
              <Link to={'About-Mindspire-Institute'} className='list-item-footer'>Vision, Mision & Stragedy</Link>
              <p  className='list-item-footer'>Event</p>
              <Link to={"About-Mindspire-Institute"} className='list-item-footer'>Purchase Guide</Link>
              <p  className='list-item-footer'>Webinar Details</p>
              <Link  to={"Providing-Education's-in-Mindspire-Institute"} className='list-item-footer'>Offering Courses</Link>
            </div>
          </div>
          <div className='program-link'>
            <p  className='program-link-title'>Programs</p>
            <div className='program-list-item'>
              <Link to={'mindspire-course#JavaScript'} className='list-item-footer'>Java Script</Link>
              <Link to={'mindspire-course#HTML'} className='list-item-footer'>HTML</Link>
              <Link to={'mindspire-course#TypeScript'} className='list-item-footer'>TypeScript</Link>
              <Link to={'mindspire-course#ReactJS'} className='list-item-footer'>ReactJS</Link>
              <Link to={'mindspire-course#SASS'} className='list-item-footer'>SASS</Link>
            </div>
          </div>  
        </div>
        <div className='address-bar-for-footer'>
          <p className='address-title-footer'>Contact</p>
            <div className='address-items'>  
                <p className='address-item-cont'>Adress : <span className='address-item-cont-span'>77, Nasiyanur, Erode</span></p>
                <p className='address-item-cont'>Phone : <span className='address-item-cont-span'>80175-70575</span></p>
                <p className='address-item-cont'>Email : <span className='address-item-cont-span'>srisabarish003@gmail.com</span></p>
                
            </div>
          <div className='social-media-link'>
            <a href='https://web.whatsapp.com/' style={{textDecoration:'none'}} target='_blank' className='app-link'><FaWhatsapp/></a>
            <a href='https://www.facebook.com/srisabarish003' style={{textDecoration:'none'}} target='_blank' className='app-link'><FaFacebook/></a>
            <a href='https://x.com/SriSabarish2003' style={{textDecoration:'none'}} target='_blank' className='app-link'><FaXTwitter/></a>
            <a href='https://www.linkedin.com/in/sri-sabarish-b922222a5/' style={{textDecoration:'none'}} target='_blank' className='app-link'><FaLinkedin/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
