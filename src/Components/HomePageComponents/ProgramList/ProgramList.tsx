import '../../../Styles/HomePageCSS/ProgramList/ProgramList.css'

import { PiClock } from "react-icons/pi";
import { PiReadCvLogo } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa"; 
import { FaArrowRight } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const ProgramList = ({course,LikeCourse}) => {
  let getlocation=useLocation()
  getlocation.pathname

  
  
  return (
    <>
    {getlocation.pathname.includes("/Providing-Education's-in-Mindspire-Institute")?
    <div className='program-list-main-container'>
      <div className='program-list-deisgn-div'></div>
      <div className='program-list-title-container'>
        <p className='program-list-para-one'>Popular Courses</p>
        <p className='program-list-para-two'>Our <span className='prog-list-underline-title'>Programs <span className='underline-for-prog-list-tit'></span></span> & <span className='span-for-title-in-program-list'>Courses</span></p>
        <p className='program-list-para-three'>At Mindspire Institute, we offer a wide range of expert-led courses tailored to today’s academic and career needs. With flexible learning, real-world relevance, and ongoing support, we make your journey impactful and future-ready.</p>
        <div className='course-filter-bar-for-course-page'>
          <div className='course-filter-btn'>
            <div className='course-filter'><p>All Programs</p></div>
            <div className='course-filter'><p>Front-End</p></div>
            <div className='course-filter'><p>Back-End</p></div>
            <div className='course-filter-more'><p>+</p></div>
          </div>
          <div className='selected-filter'>
            <p className='filter-para-course-page'>Your Filter : <span className='filter-span-course-page'>All Program</span></p>
            <button className='filt-clear-btn'>clear</button>
          </div>
          
         
        </div>
      </div>
      <div className='program-list-items-container'>
        {
        Array.from(course).map((indicourse:any)=>
        
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
                <p className='star-para-program-list'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></p>
                <p className='star-span-para'>({indicourse.rating}/5)</p>
              </div>
              <p className='amt-para-in-prog-list'>${indicourse.CourseAMT}</p>
            </div>
            <div className='hovering-content-program-items'>
              <div className='hovering-content-container'>
                <div className='difficulty-level-hover-bar'><p>{indicourse.studyLevel}</p></div>
                <p className='hover-title'>{indicourse.courseTitle}</p>
                <p className='star-para-hovering'><span className='star-hover'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></span><span className='star-hover-cont'>{indicourse.rating}/5 Ratings</span></p>
                <p className="hover-amount">${indicourse.CourseAMT}</p>
                <p className="hover-sub-title">{String(indicourse.CoursePara).slice(0,150)+'...'}</p>
                <div className='prog-info-hovering'>
                  <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>{indicourse.CourseDuration} Hours</p>
                  <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>{indicourse.totalLesson} Lesson</p>
                </div>
              </div>
              <div className='hovering-btn-container'>
                <div className='hover-enroll-btn'>
                  <Link style={{textDecoration:'none',width:'100%'}} to={{ pathname: "mindspire-course", hash: `#${indicourse.courseName}` }}>
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
        Array.from(course).map((indicourse:any)=>
        
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
                <p className='star-para-program-list'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></p>
                <p className='star-span-para'>({indicourse.rating}/5)</p>
              </div>
              <p className='amt-para-in-prog-list'>${indicourse.CourseAMT}</p>
            </div>
            <div className='hovering-content-program-items'>
              <div className='hovering-content-container'>
                <div className='difficulty-level-hover-bar'><p>{indicourse.studyLevel}</p></div>
                <p className='hover-title'>{indicourse.courseTitle}</p>
                <p className='star-para-hovering'><span className='star-hover'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></span><span className='star-hover-cont'>{indicourse.rating}/5 Ratings</span></p>
                <p className="hover-amount">${indicourse.CourseAMT}</p>
                <p className="hover-sub-title">{String(indicourse.CoursePara).slice(0,150)+'...'}</p>
                <div className='prog-info-hovering'>
                  <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>{indicourse.CourseDuration} Hours</p>
                  <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>{indicourse.totalLesson} Lesson</p>
                </div>
              </div>
              <div className='hovering-btn-container'>
                <div className='hover-enroll-btn'>
                  <Link style={{textDecoration:'none',width:'100%'}} to={{ pathname: "mindspire-course", hash: `#${indicourse.courseName}` }}>
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
