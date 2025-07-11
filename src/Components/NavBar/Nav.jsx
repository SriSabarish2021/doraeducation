
import '/src/Styles/Nav.css'
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { Image } from '@imagekit/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoHeartOutline } from "react-icons/io5";
import { useEffect } from 'react';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";


const Nav = ({setmobilenav,setnavheight,sethashget,course,setlogin,setcartpage,setlikepage,setsidesharepage}) => {

  let locationhashnav=useLocation()


  useEffect(() => {
    
    const getnavbar=document.querySelector('.nav-bar-sticky')
    const getnavbarmob=document.querySelector('.nav-bar-container-mob')   
    if (getnavbar) {

      setnavheight(getnavbar.getBoundingClientRect().height)
   
      
    }

    
    if (getnavbarmob) {
      
      setnavheight(getnavbarmob.getBoundingClientRect().height)
     
    }
  
    return () => {
      setnavheight(0)
    }
  }, [locationhashnav])

  window.addEventListener('scroll',()=>{
    const getnavbarformobiletoshow=document.querySelector('.nav-bar-container-mob')
    if (window.scrollY>100) {
      if (getnavbarformobiletoshow) {
        getnavbarformobiletoshow.classList.add('show-mobile-nav')
      }
    }else{
      if (getnavbarformobiletoshow) {
        getnavbarformobiletoshow.classList.remove('show-mobile-nav')
      }
    }
    
  })
  

  


  
  return (
    <>{
      window.innerWidth<640?<>
      <div className='mobile-screen-nav'>
      <div className='logo-div-nav'>  
          <Image
              urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
              src="/edu-logo-removebg.png"
              
              alt="Website Logo"
              className='logo-image'
            />
          <div className='title-logo'>
            <p className='title-main-name' style={{color:String(locationhashnav.pathname).includes("About-Mindspire-Institute")?'white':''}}>Mindspire</p>
            <p  className='title-sub-main-name' style={{color:String(locationhashnav.pathname).includes("About-Mindspire-Institute")?'white':''}}>Institute</p>
          </div>
      </div>
      <FiMenu onClick={()=>setmobilenav(true)} style={{color:String(locationhashnav.pathname).includes("About-Mindspire-Institute")?'white':''}}  className='mobile-screen-burger-menu'/>
    </div>
    { !String(locationhashnav.pathname).includes("About-Mindspire-Institute")&&
    <div className="nav-bar-container-mob ">
       <div className="contact-in-nav-bar-mob">
        <div className='mover-in-nav-top'>
           {Array.from(course).slice(-3).map((indifornavmover,index)=>
          <p className={`nav-mover-para nav-mover-para-${index} `}>{indifornavmover.courseName}</p>
          )}
        </div>
      </div> 
      <div className="nav-bar-items-container-mob ">
        <div className='logo-div-nav'>  
         
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
      
        <div className='side-bar-in-nav'>
          <p className='icon-in-last-bar-nav' onClick={()=>setlogin(true)}><IoPersonOutline/></p>
          <p className='icon-in-last-bar-nav' onClick={()=>setlikepage(true)}><IoHeartOutline/></p>
          <p className='icon-in-last-bar-nav' onClick={()=>setcartpage(true)}><IoCartOutline/></p>
          <p className='icon-in-last-bar-nav offer-bar' onClick={()=>setsidesharepage(true)}><BiMenuAltLeft/></p>
        </div>
      </div>
    </div>}
    </>: 
    String(locationhashnav.pathname).includes("mindspire-course")?
      <div className="nav-bar-container nav-bar-sticky">
       <div className="contact-in-nav-bar contact-in-nav-bar-for-course-page">
        <div className='mover-in-nav-top'>
           {Array.from(course).slice(-3).map((indifornavmover,index)=>
          <p className={`nav-mover-para nav-mover-para-${index} `}>{indifornavmover.courseName}</p>
          )}
        </div>
      </div> 
      <div className="nav-bar-items-container nav-bar-for-course-page">
        <div className='logo-div-nav'>  
         
           
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
            <NavLink style={{textDecoration:'none'}} to={'/'}>
            {({isActive})=>(
              <>
                <p className={`p-for-nav-item p-for-nav-item-for-course ${isActive?'active-in-nav':''}`}>Home</p>
                <p className={`line-in-hover-nav line-in-hover-nav-for-course  ${isActive?'active-line-in-nav-for-course':''}`}></p>
              </>

            )}
            </NavLink>
          </div>
          <div className='nav-item-insider'>
            <NavLink style={{textDecoration:'none'}} to={'About-Mindspire-Institute'}>
              {({isActive})=>(
              <>
                <p className={`p-for-nav-item p-for-nav-item-for-course ${isActive?'active-in-nav':''}`}>About</p>
                <p className={`line-in-hover-nav line-in-hover-nav-for-course  ${isActive?'active-line-in-nav-for-course':''}`}></p>
              </>

            )}
            </NavLink>  
          </div>
          <div className='nav-item-insider course-nav'>
            
           <NavLink style={{textDecoration:'none'}} to={"Providing-Education's-in-Mindspire-Institute"}>
              {({isActive})=>(
              <>
                <p className={` p-for-nav-item p-for-nav-item-for-course ${isActive?'active-in-nav':''}`}>Courses<IoIosArrowForward className='arrow-icon-in-nav' style={{display:window.innerWidth<800?'none':''}}/></p>
                <p className={`line-in-hover-nav line-in-hover-nav-for-course  ${isActive?'active-line-in-nav-for-course':''}`}></p>
              </>

            )}
            </NavLink> 

            <div className='courses-showing-nav-bar' style={{display:window.innerWidth<800?'none':''}}>
              <div className='course-more-arrow'></div>
              {Array.from(course).slice(-4).map((indifornav)=>
              <Link key={indifornav.id} onClick={()=>sethashget(indifornav.courseName)} to={`/mindspire-course#${indifornav.courseName}`} className='course-filter-para' style={{color:String(locationhashnav.hash).slice(1).includes(String(indifornav.courseName))?'rgba(255, 89, 100, 1)':''}}>{indifornav.courseName}</Link>
              )}
            </div>
           
          </div>
          <div className='nav-item-insider'>
            <NavLink style={{textDecoration:'none'}} to={'Contact-with-Mindspire-Institute'}>
              {({isActive})=>(
              <>
                <p className={`p-for-nav-item p-for-nav-item-for-course ${isActive?'active-in-nav':''}`}>Contact</p>
                <p className={`line-in-hover-nav line-in-hover-nav-for-course  ${isActive?'active-line-in-nav-for-course':''}`}></p>
              </>

            )}
            </NavLink> 
            
          </div>
         
          <div className='nav-item-insider mob-remove'>
            <NavLink style={{textDecoration:'none'}} to={'Mindspire-Institute-Student-Review-Page'}>
              {({isActive})=>(
              <>
                <p className={`p-for-nav-item p-for-nav-item-for-course ${isActive?'active-in-nav':''}`}>Review</p>
                <p className={`line-in-hover-nav line-in-hover-nav-for-course  ${isActive?'active-line-in-nav-for-course':''}`}></p>
              </>

            )}
            </NavLink> 
          </div>
          
        </div>
        <div className='side-bar-in-nav'>
          <Link to={locationhashnav.pathname.includes("Providing-Education's-in-Mindspire-Institute")?"Providing-Education's-in-Mindspire-Institute":'/'} className='icon-in-last-bar-nav' ><IoArrowBackCircleOutline/></Link>
          <p className='icon-in-last-bar-nav' onClick={()=>setlikepage(true)}><IoHeartOutline/></p>
          <p className='icon-in-last-bar-nav' onClick={()=>setcartpage(true)}><IoCartOutline/></p>
          <p className='icon-in-last-bar-nav offer-bar' onClick={()=>setsidesharepage(true)}><BiMenuAltLeft/></p>
        </div>
      </div>
    </div>:
    <div className="nav-bar-container">
      <div className="contact-in-nav-bar">
        <div className='phone-div-in-nav'>
          <p className='call-in-nav'><IoIosCall className='icon-in-nav'/>80155-70575</p>
          <p className='mail-in-nav'><IoIosMail className='icon-in-nav'/>srisabarish003@gmail.com</p>
        </div>
        <div className='location-div-in-nav'>
           <p className='location-in-nav'><IoLocation className='icon-in-nav-loc'/>Erode, Tamil Nadu, India</p>
        </div>
      </div>
      <div className="nav-bar-items-container">
        <div className='logo-div-nav'>  
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
            <NavLink style={{textDecoration:'none'}} to={'/'}>
            {({isActive})=>(
              <>
                <p className={`p-for-nav-item ${isActive?'active-in-nav':''}`}>Home</p>
                <p className={`line-in-hover-nav  ${isActive?'active-line-in-nav':''}`}></p>
              </>

            )}
            </NavLink>
          </div>
          <div className='nav-item-insider'>
            <NavLink style={{textDecoration:'none'}} to={'About-Mindspire-Institute'}>
              {({isActive})=>(
              <>
                <p className={`p-for-nav-item ${isActive?'active-in-nav':''}`}>About</p>
                <p className={`line-in-hover-nav  ${isActive?'active-line-in-nav':''}`}></p>
              </>

            )}
            </NavLink>  
          </div>
          <div className='nav-item-insider course-nav'>
            
           <NavLink style={{textDecoration:'none'}} to={"Providing-Education's-in-Mindspire-Institute"}>
              {({isActive})=>(
              <>
                <p className={`p-for-nav-item ${isActive?'active-in-nav':''}`}>Courses<IoIosArrowForward className='arrow-icon-in-nav' style={{display:window.innerWidth<800?'none':''}}/></p>
                <p className={`line-in-hover-nav  ${isActive?'active-line-in-nav':''}`}></p>
              </>

            )}
            </NavLink> 

            <div className='courses-showing-nav-bar' style={{display:window.innerWidth<800?'none':''}}>
              <div className='course-more-arrow'></div>
              {Array.from(course).slice(-4).map((indifornav)=>
              <Link key={indifornav.id} onClick={()=>sethashget(indifornav.courseName)} to={`/mindspire-course#${indifornav.courseName}`} className='course-filter-para' style={{color:String(locationhashnav.hash).slice(1).includes(String(indifornav.courseName))?'rgba(255, 89, 100, 1)':''}}>{indifornav.courseName}</Link>
              )}
            </div>
           
          </div>
          <div className='nav-item-insider'>
            <NavLink style={{textDecoration:'none'}} to={'Contact-with-Mindspire-Institute'}>
              {({isActive})=>(
              <>
                <p className={`p-for-nav-item ${isActive?'active-in-nav':''}`}>Contact</p>
                <p className={`line-in-hover-nav  ${isActive?'active-line-in-nav':''}`}></p>
              </>

            )}
            </NavLink> 
            
          </div>
         
          <div className='nav-item-insider mob-remove'>
            <NavLink style={{textDecoration:'none'}} to={'Mindspire-Institute-Student-Review-Page'}>
              {({isActive})=>(
              <>
                <p className={`p-for-nav-item ${isActive?'active-in-nav':''}`}>Review</p>
                <p className={`line-in-hover-nav  ${isActive?'active-line-in-nav':''}`}></p>
              </>

            )}
            </NavLink> 
          </div>
          
        </div>
        <div className='side-bar-in-nav'>
          <p className='icon-in-last-bar-nav' onClick={()=>setlogin(true)}><IoPersonOutline/></p>
          <p className='icon-in-last-bar-nav' onClick={()=>setlikepage(true)}><IoHeartOutline/></p>
          <p className='icon-in-last-bar-nav' onClick={()=>setcartpage(true)}><IoCartOutline/></p>
          <p className='icon-in-last-bar-nav offer-bar' onClick={()=>setsidesharepage(true)}><BiMenuAltLeft/></p>
        </div>
      </div>
    </div>
    }
   
    </>
  )
}

export default Nav
