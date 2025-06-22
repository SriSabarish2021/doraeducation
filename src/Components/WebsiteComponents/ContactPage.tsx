import '../../Styles/ContactPageCSS/ContactMain.css'
import ContactConsult from '../ContactPageComponents/ContactConsult'
import ContactSider from '../ContactPageComponents/ContactSider'
import ContactTop from '../ContactPageComponents/ContactTop'
import ContactTouch from '../ContactPageComponents/ContactTouch'
import { useEffect } from 'react'

const ContactPage = () => {
   useEffect(() => {
      
      window.scrollTo(0,0)
    
      
    }, [])
  return (
    <div  className="contact-page-main-container">
        {/*  <ContactTop/> 
          <ContactSider/> 
          <ContactConsult/>*/}
          <ContactTouch/> 
    </div>
  )
}

export default ContactPage