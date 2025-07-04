import '../../Styles/NavMobileCSS/NavMobile.css'
import { Image } from '@imagekit/react';
import { Link, NavLink } from 'react-router-dom';

const NavForMobile = ({mobilenav,setmobilenav,course,sethashget}) => {
  return (
    <div className={`nav-mobile-main-bar ${mobilenav?'mobilenavshow':'mobilenavnotshow'}`}>
        <div className={`nav-mobile-inner-bar ${mobilenav?'navzoom':'nonavzoom'}`}>
           <div className='nav-side-share-close-mob-nav' onClick={()=>setmobilenav(false)}>
                <div className='close-nav-side-line-one-mob-nav'></div>
                <div className='close-nav-side-line-two-mob-nav'></div>
            </div>
          <div className='mobile-nav-bar-title'>
            <div className='nav-share-logo-for-mob-nav'>
                <Image
                urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                src="/edu-logo-removebg.png"
                
                alt="Website Logo"
                className='website-icon-for-mob-nav'
                />
                <p className='web-name-side-share-mob-nav'>Mindspire <span>Institute</span></p>
            </div>
          </div>
          <div  className='mobile-nav-bar-main-cont'>
              <NavLink  onClick={()=>setmobilenav(false)} className={`mob-nav-bar`} style={{textDecoration:'none'}} to={'/'}>
              {({isActive})=>(
              <>
                <p className={`p-for-nav-item-mob ${isActive?'active-in-nav-mob':''}`}>Home</p>
                
              </>

            )}</NavLink>
              <NavLink  onClick={()=>setmobilenav(false)} className={`mob-nav-bar`}style={{textDecoration:'none'}} to={'About-Mindspire-Institute'}>{({isActive})=>(
              <>
                <p className={`p-for-nav-item-mob ${isActive?'active-in-nav-mob':''}`}>About Us</p>
                
              </>

            )}</NavLink>
              <NavLink  onClick={()=>setmobilenav(false)} className={`mob-nav-bar`} style={{textDecoration:'none'}} to={"Providing-Education's-in-Mindspire-Institute"}>{({isActive})=>(
              <>
                <p className={`p-for-nav-item-mob ${isActive?'active-in-nav-mob':''}`}>Courses</p>
                
              </>

            )}</NavLink>
              <NavLink  onClick={()=>setmobilenav(false)}  className={`mob-nav-bar`} style={{textDecoration:'none'}} to={'Contact-with-Mindspire-Institute'}>{({isActive})=>(
              <>
                <p className={`p-for-nav-item-mob ${isActive?'active-in-nav-mob':''}`}>Contact</p>
                
              </>

            )}</NavLink>
              <NavLink  onClick={()=>setmobilenav(false)} className={`mob-nav-bar`} style={{textDecoration:'none'}} to={'Mindspire-Institute-Student-Review-Page'}>
                {({isActive})=>(
              <>
                <p className={`p-for-nav-item-mob ${isActive?'active-in-nav-mob':''}`}>Review</p>
                
              </>

            )}</NavLink>
          </div>
          <div className='choose-your-course'>
            <p className='choose-course-in-nav-tit'>Courses :</p>
            <div className='minimal-courses'>
              {Array.from(course).slice(-4).map((indifornavmob)=>
              <Link key={indifornavmob.id} onClick={()=>{setmobilenav(false);sethashget(indifornavmob.courseName)}} to={`/mindspire-course#${indifornavmob.courseName}`} className='course-filter-para-mob' >{indifornavmob.courseName}</Link>
              )}
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default NavForMobile
