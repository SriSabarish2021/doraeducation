import { useEffect, useState } from 'react';
import '../../Styles/CartPageCSS/CartPage.css'
import { FaPlay } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const CartPage = ({cartpage,setcartpage,course,setcourse}) => {
   
    
      

    const [enrollelementarray,setenrollelement]=useState([])

    

    useEffect(() => {
       const enrollelement=Array.from(course).filter((enrollindi)=>
            enrollindi.Enroll===true)
       setenrollelement(enrollelement)
      
       return () => {
         setenrollelement([])
     
      }

    }, [course])


    

    const setcoursestatus=(idofitem)=>{

        const updatecourse=Array.from(course).map((indiitem)=>indiitem.id==idofitem?{...indiitem,CourseStatus:!indiitem.CourseStatus}:{...indiitem})

        setcourse(updatecourse)
        
    }



     useEffect(() => {
          
          const cartbox=document.querySelector('.cart-page-course-box')

            cartbox?.scrollTo(0,0)
          
        }, [cartpage])

        

    
    
    
    const CloseCartbyClick=(id)=>{
        if (String(id).includes('cart-page-close')) {
            setcartpage(false)
        }else{
            return
        }
    }
   
    
  return (
    <div id='cart-page-close' onClick={(e)=>CloseCartbyClick(e.target.id)} className={`cart-page-main-container ${cartpage?'zoomin':'zoomout'}`}>
        
            <div  id='cart-page-not-close' onClick={(e)=>CloseCartbyClick(e.target.id)} className='cart-page-container'>
            <div className='cart-page-intro-bar'>
                <div className='cart-page-title-bar'>
                    <p className='cart-page-title'>Your <span className='cart-name-title'>Cart</span> <span className='cart-page-underline'>Page <span className='underline-cart-page'></span></span></p>
                    <p className='cart-page-course-num'>Enrolled {enrollelementarray.length==1?'Course':'Courses'} : <span className='course-enroll-num'>{enrollelementarray.length}</span></p>
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
                            <p className='para-in-cart-nav'>{window.innerWidth<400?'Files':'Resourses'}</p>
                            <p className='para-in-cart-nav'>Status</p>
                        </div>
                    </div>
                    
                    <div className='cart-page-main-bar'>
                        
                        <div   className='cart-page-course-box'>
                        {enrollelementarray&&enrollelementarray.length?
                            enrollelementarray.map((itemforcart)=>
                            <div className='course-box-for-cart-page'>
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
                                    <button onClick={()=>setcoursestatus(itemforcart.id)} className={`para-in-cart-list resourse-progress-btn ${itemforcart.CourseStatus?'done-bg':'not-done-bg'}`}>{itemforcart.CourseStatus?'Completed':'Hunting'}
                                        <span className='course-complete-show'>
                                            {itemforcart.CourseStatus?'Start Hunting':'Complete'}
                                            <span className='arrow-course-complete-show'></span>
                                        </span>
                                    </button>
                                </div>
                            </div>)  :
                            <p className='no-enroll-courses'><span className='no-enroll'> No courses enrolled yet</span><span className='start-enroll'>click to&nbsp;&nbsp;<Link onClick={()=>setcartpage(false)} to={"Providing-Education's-in-Mindspire-Institute"} className='start-learning-click'>Start learning&nbsp;</Link> and bring ideas alive!</span></p>
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
