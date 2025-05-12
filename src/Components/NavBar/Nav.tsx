
import '/src/Styles/NavBarCss/Nav.css'
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";

const Nav = () => {
  return (
    <div className="nav-bar-container">
      <div className="contact-in-nav-bar">
        <div className='phone-div-in-nav'>
          <p className='call-in-nav'><IoIosCall className='icon-in-nav'/>80155-70575</p>
          <p className='mail-in-nav'><IoIosMail className='icon-in-nav'/>srisabarish003@gmail.com</p>
        </div>
        <div className='location-div-in-nav'>
           <p className='location-in-nav'><ImLocation className='icon-in-nav-loc'/>Erode, Tamil Nadu, India</p>
        </div>
      </div>
      <div className="nav-bar-items-container"></div>
    </div>
  )
}

export default Nav
