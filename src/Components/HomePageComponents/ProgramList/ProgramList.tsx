import '../../../Styles/HomePageCSS/ProgramList/ProgramList.css'

import { PiClock } from "react-icons/pi";
import { PiReadCvLogo } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa"; 
import { FaArrowRight } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";

const ProgramList = ({course,LikeCourse,sethashget,starcalc}) => {
  let getlocation=useLocation()
  getlocation.pathname



  

  const [coursearr,setcoursearr]=useState(course)

  const [filtername,setfiltername]=useState('All-Programs')

  const[loding,setloading]=useState(false)

  useEffect(() => {
    
    const timertoload=setTimeout(() => {
      setloading(true)
    }, 2000);
  
    return () => {
      setloading(false)
      clearTimeout(timertoload)
    }
  }, [filtername]) 
  

  useEffect(() => {
    if (String(filtername)=='All-Programs') {
        setcoursearr(course)
        
        
      }
      else{
        const filteredarr=Array.from(course).filter((indifilt)=>String(indifilt.Category)==String(filtername))
        
        
        setcoursearr(filteredarr)
      }
    
  
    return () => {
      setcoursearr([])
    }
  }, [filtername,course])
  
  

    
   
   const[morefilt,setmorefilt]=useState(false)

   useEffect(() => {
      window.addEventListener('scroll',()=>{
        setmorefilt(false)
      })
  
   }, [])
   

  
  
  
  return (
    <>
    {getlocation.pathname.includes("/Providing-Education's-in-Mindspire-Institute")?
    <div className='program-list-main-container'>
      
      <div className='program-list-title-container'>
        <p className='program-list-para-one'>Popular Courses</p>
        <p className='program-list-para-two'>Our <span className='prog-list-underline-title'>Programs <span className='underline-for-prog-list-tit'></span></span> & <span className='span-for-title-in-program-list'>Courses</span></p>
        <p className='program-list-para-three'>At Mindspire Institute, we offer a wide range of expert-led courses tailored to today’s academic and career needs. With flexible learning, real-world relevance, and ongoing support, we make your journey impactful and future-ready.</p>
        <div className='course-filter-bar-for-course-page'>
          <div className='course-filter-btn'>
            <div id='All-Program' onClick={()=>setfiltername('All-Programs')} className='course-filter'><p>All Programs</p></div>
            <div id='Front-End' onClick={()=>setfiltername('Front-End')} className='course-filter'><p>Front-End</p></div>
            <div id='Back-End' onClick={()=>setfiltername('Back-End')} className='course-filter'><p>Back-End</p></div>
            <div onClick={()=>setmorefilt(!morefilt)} className='course-filter-more'><FaPlus className='more-filt-icon'/>
              <div className={`course-filter-more-inner ${morefilt?'showfilt':'notshowfilt'}`}>
                <div className='filter-more-arrow'></div>
                <p className='more-filter-para' onClick={()=>setfiltername('UI/UX')} >UI/UX</p>
                <p className='more-filter-para' onClick={()=>setfiltername('Graphic Design')} >Graphic Design</p>
                <p className='more-filter-para' onClick={()=>setfiltername('Business')} >Business</p>
                <p className='more-filter-para' onClick={()=>setfiltername('Full-Stack')} >Full-Stack</p>
              </div>
            </div>
          </div>
          <div className='selected-filter'>
            <p className='filter-para-course-page'>Your Filter : <span className='filter-span-course-page'>{filtername}</span></p>
            <button onClick={()=>setfiltername('All-Programs')} className='filt-clear-btn'>{String(filtername).includes('All-Programs')?'----':'clear'}</button>
          </div>
          
         
        </div>
      </div>
      
        {loding?
          Array.from(coursearr).length?
          <div className='program-list-items-container'>
          {Array.from(coursearr).map((indicourse:any)=>
          
              <div key={indicourse.id} className='program-item-one'>
              <div className='program-image-bar' style={{backgroundImage:`url(${indicourse.courseIMG})`}}></div>
              <div className='program-content-bar'>
                <div className='program-info'>
                  <p className='program-info-para-one'><PiClock className='icon'/>{indicourse.CourseDuration} Hours</p>
                  <p className='program-info-para-two'><PiReadCvLogo className='icon'/>{indicourse.totalLesson} Lesson</p>
                  <p className='program-info-para-three'><PiStudent  className='icon'/>{indicourse.totalEnroll} Students</p>
                </div>
                <div className='level-of-difficulty'>
                  <p>{indicourse.studyLevel}</p>
                </div>
                <div className='prog-con-container'>
                  <p className='program-title'>{indicourse.courseTitle}</p>
                  <p className='program-sub-title'>{String(indicourse.CourseIntro).slice(0,100)+'.'}</p>
                </div>
              
              </div>
              <div className='program-star-bar'>
                <div className='star-div-for-program'>
                  {
                  Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==5? <p className='star-para-program-list'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>: 
                    Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==4?<p className='star-para-program-list'><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>:
                    Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==3?<p className='star-para-program-list'><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></p>:
                    Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==2?<p className='star-para-program-list'><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>:
                    Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==1?<p className='star-para-program-list'><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>:<p className='star-para-program-list'><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>
                                  }
                  <p className='star-span-para'>({Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0)}/5)</p>
                </div>
                <p className='amt-para-in-prog-list'>${indicourse.CourseAMT}</p>
              </div>
              <div className='hovering-content-program-items'>
                <div className='hovering-content-container'>
                  <div className='difficulty-level-hover-bar'><p>{indicourse.studyLevel}</p></div>
                  <p className='hover-title'>{indicourse.courseTitle}</p>
                  <p className='star-para-hovering'>{
                  Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==5? <span className='star-hover'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>: 
                    Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==4?<span className='star-hover'><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span>:
                    Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==3?<span className='star-hover'><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span>:
                    Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==2?<span className='star-hover'><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>:
                    Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==1?<span className='star-hover'><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>:<span className='star-hover'><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>
                                  }<span className='star-hover-cont'>{Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0)}/5 Ratings</span></p>
                  <p className="hover-amount">${indicourse.CourseAMT}</p>
                  <p className="hover-sub-title">{String(indicourse.CoursePara).slice(0,150)+'...'}</p>
                  <div className='prog-info-hovering'>
                    <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>{indicourse.CourseDuration} Hours</p>
                    <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>{indicourse.totalLesson} Lesson</p>
                  </div>
                </div>
                <div className='hovering-btn-container'>
                  <div className='hover-enroll-btn'>
                    <Link  style={{textDecoration:'none',width:'100%'}}  to={{ pathname: "mindspire-course", hash: `#${indicourse.courseName}`}}   onClick={()=>sethashget(indicourse.courseName)}>
                      <div className='hover-enroll-btn-insider'>
                        Enroll Now
                        <div className='prog-enroll-design-one'></div>
                        <div className='prog-enroll-design-two'></div>
                      </div>
                    </Link>
                  </div>
                  
                  
                  <div className='hover-add-favorite-btn' onClick={()=>LikeCourse(indicourse.id)}>
                    {indicourse.Like?<FaHeart className='heart-transition'/>:<FaRegHeart className='heart-transition'/>}
                    <div className='hover-mess-box'><p>{indicourse.Like?'remove Like List':'Add Like List'}</p>
                    <span className='arrow-in-hover-mess'></span></div>
                  </div>
                  
                </div>
              </div>
              </div> 
            
          
          )}
            
          </div> :
          <div className='no-course-alert'>
            <div className="div-for-no-items-image"></div>
            <p className="para-in-no-items">The course you're searching for isn't available right now — but it's on the way! . We're working to add it soon.</p>
          </div>
          
        :
        
        <div className="loading-icon-shows">
                  
                 <div className='loader-sym-container-forviewall'>
                  { Array.from(coursearr).length?Array.from(coursearr).map((inditemforloading,index)=>
                          <div key={index} className="item-showing-in-loading-screen">
                            <div className="loading-div-for-img"></div>
                            <div className="loading-div-for-cont">
                              <div className='loading-cont-level'></div>
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                              <div className='loading-cont-btn'></div>
                            </div>
                          </div>
                  ):
                    <>
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                      </div>
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                      </div>
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                      </div>
                      <div  className="item-showing-in-loading-screen">
                        <div className="loading-div-for-img"></div>
                        <div className="loading-div-for-cont">
                              <div className='loading-cont-one'></div>
                              <div className='loading-cont-two'></div>
                              <div className='loading-cont-three'></div>
                        </div>
                      </div>
                    </>
                  }
                      
                      
                </div>

        </div>
        
        }
           
    </div>
    : <div className='program-list-main-container'>
      <div className='program-list-deisgn-div'></div>
      <div className='program-list-title-container'>
        <p className='program-list-para-one'>Popular Courses</p>
        <p className='program-list-para-two'>Our <span className='prog-list-underline-title'>Programs <span className='underline-for-prog-list-tit'></span></span> & <span className='span-for-title-in-program-list'>Courses</span></p>
        <p className='program-list-para-three'>At Mindspire Institute, we offer a wide range of expert-led courses tailored to today’s academic and career needs. With flexible learning, real-world relevance, and ongoing support, we make your journey impactful and future-ready.</p>
      </div>
      <div className='program-list-items-container'> 
        {
        Array.from(course).slice(-9).map((indicourse:any)=>
        
            <div key={indicourse.id} className='program-item-one'>
            <div className='program-image-bar' style={{backgroundImage:`url(${indicourse.courseIMG})`}}></div>
            <div className='program-content-bar'>
              <div className='program-info'>
                <p className='program-info-para-one'><PiClock className='icon'/>{indicourse.CourseDuration} Hours</p>
                <p className='program-info-para-two'><PiReadCvLogo className='icon'/>{indicourse.totalLesson} Lesson</p>
                <p className='program-info-para-three'><PiStudent  className='icon'/>{indicourse.totalEnroll} Students</p>
              </div>
              <div className='level-of-difficulty'>
                <p>{indicourse.studyLevel}</p>
              </div>
              <div className='prog-con-container'>
                <p className='program-title'>{indicourse.courseTitle}</p>
                <p className='program-sub-title'>{String(indicourse.CourseIntro).slice(0,100)+'.'}</p>
              </div>
            
            </div>
            <div className='program-star-bar'>
              <div className='star-div-for-program'>
                {
                Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==5? <p className='star-para-program-list'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>: 
                   Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==4?<p className='star-para-program-list'><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>:
                  Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==3?<p className='star-para-program-list'><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></p>:
                  Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==2?<p className='star-para-program-list'><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>:
                  Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==1?<p className='star-para-program-list'><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>:<p className='star-para-program-list'><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>
                                }
                <p className='star-span-para'>({Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0)}/5)</p>
              </div>
              <p className='amt-para-in-prog-list'>${indicourse.CourseAMT}</p>
            </div>
            <div className='hovering-content-program-items'>
              <div className='hovering-content-container'>
                <div className='difficulty-level-hover-bar'><p>{indicourse.studyLevel}</p></div>
                <p className='hover-title'>{indicourse.courseTitle}</p>
                <p className='star-para-hovering'>{
                Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==5? <span className='star-hover'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>: 
                   Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==4?<span className='star-hover'><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span>:
                  Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==3?<span className='star-hover'><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span>:
                  Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==2?<span className='star-hover'><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>:
                  Math.floor(Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0))==1?<span className='star-hover'><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>:<span className='star-hover'><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>
                                }<span className='star-hover-cont'>{Number(Number(Number(starcalc(indicourse.id))/Number((Number(indicourse.CourseReview.length)*5)))*5).toFixed(0)}/5 Ratings</span></p>
                <p className="hover-amount">${indicourse.CourseAMT}</p>
                <p className="hover-sub-title">{String(indicourse.CoursePara).slice(0,150)+'...'}</p>
                <div className='prog-info-hovering'>
                  <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>{indicourse.CourseDuration} Hours</p>
                  <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>{indicourse.totalLesson} Lesson</p>
                </div>
              </div>
              <div className='hovering-btn-container'>
                <div className='hover-enroll-btn'>
                  <Link onClick={()=>sethashget(indicourse.courseName)} style={{textDecoration:'none',width:'100%'}} to={{ pathname: "mindspire-course", hash: `#${indicourse.courseName}` }}>
                    <div className='hover-enroll-btn-insider'>
                      Enroll Now
                      <div className='prog-enroll-design-one'></div>
                      <div className='prog-enroll-design-two'></div>
                    </div>
                  </Link>
                </div>
                
                
                <div className='hover-add-favorite-btn' onClick={()=>LikeCourse(indicourse.id)}>
                  {indicourse.Like?<FaHeart className='heart-transition'/>:<FaRegHeart className='heart-transition'/>}
                  <div className='hover-mess-box'><p>{indicourse.Like?'remove Like List':'Add Like List'}</p>
                  <span className='arrow-in-hover-mess'></span></div>
                </div>
                
              </div>
            </div>
            </div> 
          
        
        )}  
      </div>
      

      <Link to={"Providing-Education's-in-Mindspire-Institute"} style={{textDecoration:'none'}} className='program-list-btn'>Expand Your Learning <FaArrowRight className='arrow-btn-prog-list-by'/>
        <div className='btn-design-in-prog-list-by-one'></div>
        <div className='btn-design-in-prog-list-by-two'></div> 
      </Link>
     
      
    </div>
    }
    </>
   
  )
}

export default ProgramList
