
import '/src/Styles/Nav.css'
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { Image } from '@imagekit/react';
import { Link } from 'react-router-dom';

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
      <div className="nav-bar-items-container">
        <div className='logo-div-nav'>  
          <div></div>
           
           <Image
              urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
              src="/edu-logo-removebg.png"
              
              alt="Website Logo"
              className='logo-image'
            />
          <div className='title-logo'>
            <p className='title-main-name'>Mindspire</p>
            <p  className='title-sub-main-name'>Institute</p>
          </div>
        </div>
        <div className='nav-items'>
          <div className='nav-item-insider'>
            <Link style={{textDecoration:'none'}} to={'/'}>
             <p className='p-for-nav-item active-in-nav'>Home</p>
            </Link>
            <p className='line-in-hover-nav active-line-in-nav'></p>
          </div>
          <div className='nav-item-insider'>
            <Link style={{textDecoration:'none'}} to={'About-Mindspire-Institute'}>
              <p className='p-for-nav-item'>About</p>
            </Link>  
            <p className='line-in-hover-nav'></p>
          </div>
          <div className='nav-item-insider'>
            
           
            <Link style={{textDecoration:'none'}} to={"Providing-Education's-in-Mindspire-Institute"}>
               <p className='p-for-nav-item'>Courses<IoIosArrowForward className='arrow-icon-in-nav'/></p>
            </Link>  
            <p className='line-in-hover-nav'> </p>
          </div>
          <div className='nav-item-insider'>
            <p className='p-for-nav-item'>Contact</p>
            <p className='line-in-hover-nav'></p>
          </div>
          <div className='nav-item-insider'>
            <p className='p-for-nav-item'>Review</p>
            <p className='line-in-hover-nav'></p>
          </div>
          
        </div>
        <div className='side-bar-in-nav'>
          <p className='icon-in-last-bar-nav'><IoPersonOutline/></p>
          <p className='icon-in-last-bar-nav'><IoSearchOutline/></p>
          <p className='icon-in-last-bar-nav'><IoCartOutline/></p>
          <p className='icon-in-last-bar-nav offer-bar'><BiMenuAltLeft/></p>
        </div>
      </div>
    </div>
  )
}

export default Nav
