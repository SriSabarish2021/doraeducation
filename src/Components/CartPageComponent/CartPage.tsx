import { useEffect, useState } from 'react';
import '../../Styles/CartPageCSS/CartPage.css'
import { FaPlay } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CartPage = ({cartpage,setcartpage,course}) => {
    const[coursestatus,setcoursestatus]=useState(false)
    
      
        let enrollelement=Array.from(course).filter((enrollindi)=>
            enrollindi.Enroll===true
            
    )
    
    
    
    
   
    
  return (
    <div className={`cart-page-main-container ${cartpage?'zoomin':'zoomout'}`}>
        
            <div className='cart-page-container'>
            <div className='cart-page-intro-bar'>
                <div className='cart-page-title-bar'>
                    <p className='cart-page-title'>Your <span className='cart-name-title'>Cart</span> Page</p>
                    <p className='cart-page-course-num'>Enrolled {enrollelement.length==1?'Course':'Courses'} : <span className='course-enroll-num'>{enrollelement.length}</span></p>
                </div>
                
            </div>
            <div className='cart-page-main-course-bar'>
                <div className='cart-page-course-bar-container'>
                    <div className='cart-page-course-nav-bar'>
                        <div className='cart-page-course-nav-one'>
                            <p>Course</p>
                        </div>
                        <div className='cart-page-course-nav-two'>
                            <p className='para-in-cart-nav'>Duration</p>
                            <p className='para-in-cart-nav'>Resourses</p>
                            <p className='para-in-cart-nav'>Status</p>
                        </div>
                    </div>
                    
                    <div className='cart-page-main-bar'>
                        
                        <div className='cart-page-course-box'>
                        {enrollelement&&
                    enrollelement.map((itemforcart)=>
                            <div className='course-box'>
                                <div className='course-video-div'>
                                    <div className='course-video-container'>
                                        <div className='course-video-image'  style={{backgroundImage:`url(${itemforcart.courseIMG})`}} >
                                            <div className='video-play-btn-container'>
                                            <a href={itemforcart.CourseFullVid} target='_blank'>
                                                <div className='icon-play-vid'>
                                                <FaPlay/>
                                                </div>
                                            </a>
                                            <div className='vid-play-design'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='course-detail-cart-page'>
                                        <p className='course-detail-para-one'>{itemforcart.courseName}</p>
                                        <p className='course-detail-para-two'>{String(itemforcart.CourseIntro).slice(0,25)+'...'}</p>
                                    </div>
                                </div>
                                <div className='course-items-div'>
                                    <p className='para-in-cart-list para-cart-list'>{itemforcart.CourseDuration}</p>
                                    <button className='para-in-cart-list resourse-download-btn' >Download <span className='resourse-download-btn-design'></span></button>
                                    <button onClick={()=>setcoursestatus(!coursestatus)} className={`para-in-cart-list resourse-progress-btn ${coursestatus?'done-bg':'not-done-bg'}`}>{coursestatus?'Completed':'Hunting'}
                                        <span className='course-complete-show'>
                                            {coursestatus?'Start Hunting':'Complete'}
                                            <span className='arrow-course-complete-show'></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            
                            
                        )  
                        }
                   
                        </div>
                         </div>
                    
                </div>
            
            </div>

            <div className='cart-page-close-icon-div'><IoMdCloseCircleOutline onClick={()=>setcartpage(false)}/></div>
            </div>  
        
      
    </div>
  )
}

export default CartPage
