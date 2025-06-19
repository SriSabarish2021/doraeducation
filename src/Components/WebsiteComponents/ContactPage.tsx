import '../../Styles/ContactPageCSS/ContactMain.css'
import ContactConsult from '../ContactPageComponents/ContactConsult'
import ContactSider from '../ContactPageComponents/ContactSider'
import ContactTop from '../ContactPageComponents/ContactTop'
import ContactTouch from '../ContactPageComponents/ContactTouch'
import { useEffect } from 'react'

const ContactPage = ({setuserName,setuserEmail,userName,userEmail}) => {
   useEffect(() => {
      
      window.scrollTo(0,0)
    
      
    }, [])
  return (
    <div  className="contact-page-main-container">
        <ContactTop/>
        <ContactSider/>
        <ContactConsult/>
        <ContactTouch userName={userName} userEmail={userEmail} setuserName={setuserName} setuserEmail={setuserEmail} />
    </div>
  )
}

export default ContactPage