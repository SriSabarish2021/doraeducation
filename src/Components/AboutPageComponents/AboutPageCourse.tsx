import { useEffect } from 'react'
import '../../Styles/AboutPageCSS/AboutPageCourse.css'
import { PiClock } from "react-icons/pi";
import { PiReadCvLogo } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa"; 
import { FaArrowRight } from "react-icons/fa6";
import { Image } from '@imagekit/react';
import { Link } from 'react-router-dom';

const AboutPageCourse = ({course}) => {
  
  useEffect(() => {

    const observingelement=document.querySelector('.about-page-analysis-box')
    const targetelementone=document.querySelector('.about-page-analysis-imgae-design')
    const targetelementtwo=document.querySelector('.analysis-design-one-about-page')
    const targetelementthree=document.querySelector('.analysis-design-two-about-page')
    const targetelementfour=document.querySelector('.analysis-design-three-about-page')
    const observer=new IntersectionObserver(([entry])=>{
      if (entry.intersectionRatio<0.4) {
        console.log('no');
        targetelementone?.classList.remove('about-page-analysis-imgae-design-no-move')
        targetelementtwo?.classList.remove('about-analysis-cont-no-move')
        targetelementthree?.classList.remove('about-analysis-cont-no-move')
        targetelementfour?.classList.remove('about-analysis-cont-no-move-for-three')
        
      }else if(entry.intersectionRatio>0.4){
       console.log('sdsd');
        targetelementtwo?.classList.add('about-analysis-cont-no-move')
        targetelementthree?.classList.add('about-analysis-cont-no-move')
        targetelementfour?.classList.add('about-analysis-cont-no-move-for-three')
        targetelementone?.classList.add('about-page-analysis-imgae-design-no-move')
      }
    },{threshold:0.4})
    if (observingelement) {
         observer.observe(observingelement)
    }
 
    return () => {
       if (observingelement) {
         observer.unobserve(observingelement)
    }
    }
  })
  
  return (
    <div className='about-page-course-container'>
   {/*    <div className='about-page-course-box'>
        
         <div className='about-page-program-list'>
          <div className='abt-prog-list-tit-div'>
               <p className='abt-page-course-box-para'>Our <span className='span-in-prog-list-tit-abt-page'>Programs</span></p> 
               <p className='span-prog-list-abt-tit'>At Mindspire, we offer a diverse range of programs designed to equip learners with in-demand skills and practical experience.Our courses are tailored to help you thrive in today’s competitive landscape.</p>
               <Link style={{textDecoration:'none'}} to={"/Providing-Education's-in-Mindspire-Institute"} className='abt-page-btn-prog-list'>More Course <FaArrowRight className='right-arrow-icon'/>
               <div className='abt-page-prog-list-btn-one-des'></div>
               <div className='abt-page-prog-list-btn-two-des'></div>
               </Link>
          </div>
        
        {Array.from(course).slice(-3).map((indicourseabtpage,index)=>
          <div className={`about-page-prog-one ${Number(index)==0?'prog-one-ani-abt-page':Number(index)==2?'prog-two-ani-abt-page':''}`}>
            <div className='about-page-prog-img' style={{backgroundImage:`url(${indicourseabtpage.courseIMG})`}}></div>
            <div className='about-page-prog-cont'>
              <div className='level-in-prog-ab-list'>{indicourseabtpage.studyLevel}</div>
              <div className='prog-list-abt-page-cont-div'>
                <p className='prog-abt-page-title'>{indicourseabtpage.courseName}</p>
                <p className='prog-abt-page-cont'>{indicourseabtpage.CourseIntro}</p>
              </div>
              
              <div className='addi-info-prog-list-abt-page'>
                <p className='addi-info-cont-one'><PiClock className='icon-prog-list-abt-page'/>{indicourseabtpage.CourseDuration}</p>
                <p className='addi-info-cont-two'><PiReadCvLogo className='icon-prog-list-abt-page'/>5+ Credits</p>
                <Link style={{textDecoration:'none'}} to={`/mindspire-course/#${indicourseabtpage.courseName}`} className='addi-info-cont-btn'>Apply
                  <div className='abt-page-prog-list-btn-design'></div>
                </Link>
              </div>
            </div>
          </div>
        )}

         </div>
      </div> */}
      <div className='about-page-analysis-box'>
        
        <div className='about-page-analysis-content'>
          
          <div className='about-page-analysis-content-showing'>
            <div className='about-page-analysis-head'>
              <p className='about-analysis-head-para-one'>University is the <span className='span-title-for-head-para'>Best Time</span></p>
              <p className='about-analysis-head-para-two'>of <span className='best-time-tit'>Your Life <div className='design-div-for-best-time-tit'></div></span>.</p>
            </div>
            <p className='about-analysis-sub-head-para'>Explore university’s 20+ courses across various specialisations that
              provoke intellectual and intuitive learning among students.</p>
          </div>
         
           <Image
            urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
            src="/cta6.webp"
            alt="Student Image"
            className='about-page-analysis-imgae-design'
            />
        </div>
        <div className='analysis-design-one-about-page'>
          <p className='analysis-about-page-one-para-one'><span className='span-for-analysisi-one-para-one'>50</span>+</p>
          <p className='analysis-about-page-one-para-two'>years of <span className='span-for-analysisi-one-para-two'>Experience</span></p>
        </div>
        <div className='analysis-design-two-about-page'>
          <p className='analysis-about-page-one-para-one'><span className='span-for-analysisi-one-para-one'>50</span>+</p>
          <p className='analysis-about-page-one-para-two'>years of <span className='span-for-analysisi-one-para-two'>Experience</span></p>
        </div>
        <div className='analysis-design-three-about-page'>
          <p className='analysis-about-page-one-para-one'><span className='span-for-analysisi-one-para-one'>50</span>+</p>
          <p className='analysis-about-page-one-para-two'>years of <span className='span-for-analysisi-one-para-two'>Experience</span></p>
        </div>
        <div className='div-for-about-analysis-design'></div>
         <div className='div-for-about-analysis-design-two'></div>
      </div>
      {/* <div className='why-showing-container'>
        <div className='about-page-why-image-container'>
          <div className='about-why-image-one'></div>
          <div className='why-image-container'>
            <div className='why-about-image-container-small-box'>
              <div className='why-about-image-small-box-cont-div'>
                <p className='number-for-why-small-box'>15 <span className='number-plus-for-small-box'>+</span></p>
                <p className='para-for-why-small-box'>Customizable <span>Courses</span></p>
              </div>
            </div>
            <div className='about-why-image-two'></div>

          </div>
        </div>
        <div className='about-page-why-content-container'>
          <div className='why-indicator-in-about-page'>
            <p>Why Choose ?</p>
            <div className='why-indicator-design-bar-one'></div>
            <div className='why-indicator-design-bar-two'></div>
          </div>
          <div className='why-about-page-title-bar'>
            <p className='why-about-page-title-main'>Education Built Around <span className='slide-about-tit-underline'></span><span>Your Personal
            </span><span className='why-about-page-tit-red'>Aspirations.</span></p>
            <p className='why-about-page-sub-main'>At Mindspire, we believe learning should align with your goals — not the other way around. Our programs are crafted to empower your unique journey, whether it's career growth, creativity, or curiosity.</p>
          </div>
          <div className='why-about-page-slide-bar'>
            <div className='why-content-container-one'>
               <div className='why-content-about-page-one why-cont-bar-abt-page'>
              <div className='why-cont-border-dsign-one why-cont-bar-design'></div>
              <div className='why-content-image-bar'>
                <div className='why-about-page-image'>
                  <img className='img-in-why-about-slide' src="./AboutPageImage/AboutPageCourse/ic37.svg"  />
                </div>
              </div>
              <div className='why-content-cont-bar'>
                <p className='why-cont-head'>Real Success Stories</p>
                <p className='why-cont-para'>See how learners turned passion into careers with hands-on training at Mindspire.</p>
              </div>
            </div>
            </div>
            <div className='why-content-container-two'>
              <div className='why-content-about-page-two why-cont-bar-abt-page'>
               <div className='why-cont-border-dsign-two why-cont-bar-design'></div>
              <div className='why-content-image-bar'>
                <div className='why-about-page-image'>
                  <img className='img-in-why-about-slide' src="./AboutPageImage/AboutPageCourse/ic38.svg"  />
                </div>
              </div>
              <div className='why-content-cont-bar'>
                 <p className='why-cont-head'>Your Dream, Your Direction</p>
                <p className='why-cont-para'>At Mindspire, we help you shape your path and turn your dreams into reality.</p>
              </div>
            </div>
            </div>
            <div className='why-content-container-three'>
              <div className='why-content-about-page-three why-cont-bar-abt-page'>
               <div className='why-cont-border-dsign-three why-cont-bar-design'></div>
              <div className='why-content-image-bar'>
                <div className='why-about-page-image'>
                  <img className='img-in-why-about-slide' src="./AboutPageImage/AboutPageCourse/ic39.svg"  />
                </div>
              </div>
              <div className='why-content-cont-bar'>
                       <p className='why-cont-head'>Passion to Profession</p>
                <p className='why-cont-para'>At Mindspire, we turn your passion into a profession through hands-on learning and career-focused guidance.</p>
              </div>
        
            </div>
            </div>
           
            
            
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default AboutPageCourse
