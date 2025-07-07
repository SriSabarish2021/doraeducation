
import '../../Styles/ContactPageCSS/ContactConsult.css'
import { LuPhoneCall } from "react-icons/lu";

const ContactConsult = () => {
  return (
    <div className='contact-consult-page'>
        <div className='contact-page-consult-inner'>
            <div className='contact-consult-cont'>
                <p className='contact-consult-para-one'>Call us Now</p>
                <p className='contact-consult-para-two'>Request a Consultation!</p>
                <p className='contact-consult-para-three'>Available 24/7 on weekdays to answer your inquiries, provide assistance</p>
            </div>
            <div className='contact-consult-number'>
                <div className='call-logo-consult'>
                    <a style={{textDecoration:'none'}} href="tel:8015570575">
                        <div className='icon-call-consult' >
                            <LuPhoneCall />
                        </div>
                    </a>
                <div className='call-logo-consult-design'></div>
                </div>
                <p className='call-consult-number'><a style={{textDecoration:'none',color:'white'}} href="tel:8015570575">80155-70575</a></p>
            </div>
        </div>
    </div>
  )
}

export default ContactConsult