import '../../Styles/NavShareSide/NavShareSide.css'
import { Image } from '@imagekit/react';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";

const NavShareSide = ({sidesharepage,setsidesharepage}) => {
    const sideshareclose=(id)=>{
    if (String(id).includes('side-share-close')) {
      setsidesharepage(false)
    }else{
      return
    }
  }
  return (
    <div id='side-share-close' onClick={(e)=>sideshareclose(e.target.id)} className={`nav-side-share-page-container  ${sidesharepage?'sidesharemainmove':'sidesharemainnotmove'}`}>
        <div id='side-share-not-close' className={`nav-side-share-main-container ${sidesharepage?'sideshareinnermove':'sideshareinnernotmove'}`}>
            <div className='nav-side-share-close' onClick={()=>setsidesharepage(false)}>
                <div className='close-nav-side-line-one'></div>
                <div className='close-nav-side-line-two'></div>
            </div>
            <div className='nav-side-share-inner-scroll'>
            <div className='nav-share-side-div-one'>
                <div className='nav-share-logo'>
                    <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/edu-logo-removebg.png"
                    
                    alt="Website Logo"
                    className='website-icon'
                    />
                    <p className='web-name-side-share'>Mindspire <span>Institute</span></p>
                </div>
                <div className='nav-share-app-link'>
                    <a href='https://web.whatsapp.com/' style={{textDecoration:'none'}} target='_blank' className='nav-share-link'><FaWhatsapp/>
                    <div className='nav-share-link-design'></div></a>
                    <a href='https://www.facebook.com/srisabarish003' style={{textDecoration:'none'}} target='_blank' className='nav-share-link'><FaFacebook/>
                    <div className='nav-share-link-design'></div></a>
                    <a href='https://x.com/SriSabarish2003' style={{textDecoration:'none'}} target='_blank' className='nav-share-link'><FaXTwitter/>
                    <div className='nav-share-link-design'></div></a>
                    <a href='https://www.linkedin.com/in/sri-sabarish-b922222a5/' style={{textDecoration:'none'}} target='_blank' className='nav-share-link'><FaLinkedin/>
                    <div className='nav-share-link-design'></div></a>
                </div>
            </div>
            <div className='nav-share-side-div-two'>
               Mindspire Institute empowers learners with industry-relevant skills through flexible, hands-on training.We turn aspirations into achievements.
            </div>
            <div className='nav-share-side-div-three'>
                <div className='nav-share-contact'>
                    <div className='call-image-for-share'><FaHeadphonesAlt/></div>
                    <div className='call-para-for-share'>
                        <p>Call Us To  <span className='contact-number'>8254-658-6584</span>  Or From Aboard at  <span className='contact-number'>+1 502-240-6226.</span></p>
                    </div>
                </div>
                <div className='nav-share-whatsapp'>
                    <div className='whatsapp-icon'><FaWhatsapp/></div>
                    <div className='side-share-whatsapp-para'>
                        <p className='para-one-whatsapp-share'>Join in Group Now</p>
                        <p className='para-two-whatsapp-share'>We Are Here To Help You! Scan The QR To Open WhatsApp Web</p>
                    </div>
                    <div className='qr-for-whatsapp'>
                        <div className='qr-image'></div>
                    </div>
                </div>
            </div>
            <div className='nav-share-side-div-four'>
                <div className='black-design-image'></div>
                <p className='nav-share-four-para'>Unlock 15% Off Your Next Purchase!</p>
                <div className='subsribe-input-box-side-share'>
                    <div className='email-inp-container-side-share'>
                        <input type="email" placeholder='Your Email' className='side-share-email-inp'/>
                        <div className='side-share-email-btn'>Subscribe</div>
                    </div>
                    <p className='para-for-subscribe-side-nav'>By clicking “Subscribe”, you agree to our Privacy Policy.</p>
                </div>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default NavShareSide
