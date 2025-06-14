import { useState } from 'react';
import '../../Styles/CartPageCSS/CartPage.css'
import { FaPlay } from "react-icons/fa";

const CartPage = ({cartpage}) => {
    const[coursestatus,setcoursestatus]=useState(false)
  return (
    <div className={`cart-page-main-container ${cartpage?'zoomin':'zoomout'}`}>
      <div className='cart-page-container'>
        <div className='cart-page-intro-bar'>
            <div className='cart-page-title-bar'>
                <p className='cart-page-title'>Your Cart Page</p>
                <p className='cart-page-course-num'>Enrolled Course : <span className='course-enroll-num'>3</span></p>
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
                        <div className='course-box'>
                            <div className='course-video-div'>
                                <div className='course-video-container'>
                                    <div className='course-video-image' /* style={{backgroundImage:`url(${coursedetails.courseIMG})`}} */>
                                        <div className='video-play-btn-container'>
                                        <a href='' target='_blank'>
                                            <div className='icon-play-vid'>
                                            <FaPlay/>
                                            </div>
                                        </a>
                                        <div className='vid-play-design'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='course-detail-cart-page'>
                                    <p className='course-detail-para-one'>javascript</p>
                                    <p className='course-detail-para-two'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className='course-items-div'>
                                <p className='para-in-cart-list para-cart-list'>15:10</p>
                                <button className='para-in-cart-list resourse-download-btn' >Download <span className='resourse-download-btn-design'></span></button>
                                <button onClick={()=>setcoursestatus(!coursestatus)} className={`para-in-cart-list resourse-progress-btn ${coursestatus?'done-bg':'not-done-bg'}`}>{coursestatus?'Completed':'Hunting'}
                                    <span className='course-complete-show'>
                                        {coursestatus?'Start Hunting':'Complete'}
                                        <span className='arrow-course-complete-show'></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default CartPage
