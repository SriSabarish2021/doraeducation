import '../../Styles/CourseOverviewCSS/CourseOverview.css'
import { FaStar } from "react-icons/fa";

import { AiOutlineSound } from "react-icons/ai";
import { PiSubtitles } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { GrUpdate } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { IoIosVideocam } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosFunnel } from "react-icons/io";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaRegClock } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import { IoMdBowtie } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { FaMale } from "react-icons/fa";
import { VscEyeClosed } from "react-icons/vsc";
import { FaRegStar } from "react-icons/fa";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';

const CourseOverview = ({course,LikeCourse}) => {

  const gethash=useLocation().hash

  const [coursedetail,setcoursedetail]=useState([])

  useEffect(() => {
    
    window.scrollTo(0,0)
    console.log(gethash);
    
    const gettingcoursedetail=Array.from(course).filter((indicourse)=>String(indicourse.courseName)==String(gethash).slice(1))
    setcoursedetail(gettingcoursedetail)
    console.log(gettingcoursedetail);
    
    
  }, [course])
  

  const [showcont,setshowcont]=useState(false)

  const [reviewwrite,setreviewwrite]=useState(false)

  const [starnum,setstarnum]=useState(0)
  const [reviewername,setreviewername]=useState('')
  const [revieweremail,setrevieweremail]=useState('')
  const [reviewcomment,setreviewcomment]=useState('')

  const cancelreview=()=>{
    setreviewername('')
    setrevieweremail('')
    setreviewcomment('')
    setreviewwrite(false)
    setstarnum(0)
  }

  const starsvg=document.querySelectorAll('.star-svg')

   const colorfixfive=()=>{
          setstarnum(5)
          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.add('hexa')
          starsvg[3].classList.add('hexa')
          starsvg[4].classList.add('hexa')

    }
    const colorfixfour=()=>{
      setstarnum(4)

          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.add('hexa')
          starsvg[3].classList.add('hexa')
          starsvg[4].classList.remove('hexa')


    }
    const colorfixthree=()=>{
      setstarnum(3)

          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.add('hexa')
          starsvg[3].classList.remove('hexa')
          starsvg[4].classList.remove('hexa')


    }
    const colorfixtwo=()=>{
      setstarnum(2)

          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.remove('hexa')
          starsvg[3].classList.remove('hexa')
          starsvg[4].classList.remove('hexa')


    }
    const colorfixone=()=>{
      setstarnum(1)

          starsvg[0].classList.add('hexa')
          starsvg[1].classList.remove('hexa')
          starsvg[2].classList.remove('hexa')
          starsvg[3].classList.remove('hexa')
          starsvg[4].classList.remove('hexa')


    }

      const colorchangeforfive=()=>{
      
      
      starsvg[0].style.fill=`rgb(255, 157, 0)`
      starsvg[0].style.transition='fill 0.6s ease 0.1s'
      starsvg[1].style.fill=`rgb(255, 157, 0)`
      starsvg[1].style.transition='fill 0.6s ease 0.2s'
      starsvg[2].style.fill=`rgb(255, 157, 0)`
      starsvg[2].style.transition='fill 0.6s ease 0.3s'
      starsvg[3].style.fill=`rgb(255, 157, 0)`
      starsvg[3].style.transition='fill 0.6s ease 0.4s'
      starsvg[4].style.fill=`rgba(255, 178, 55, 0.69)`
      starsvg[4].style.stroke=`rgba(255, 178, 55, 0.69)`
      starsvg[4].style.transition='fill 0.6s ease'
      
    }
    const colornotchangeforfive=()=>{
      starsvg[0].style.fill=``
      starsvg[0].style.transition='fill 0.6s ease 0.4s'
      starsvg[1].style.fill=``
      starsvg[1].style.transition='fill 0.6s ease 0.3s'
      starsvg[2].style.fill=``
      starsvg[2].style.transition='fill 0.6s ease 0.2s'
      starsvg[3].style.fill=``
      starsvg[3].style.transition='fill 0.6s ease 0.1s'
      starsvg[4].style.fill=``
      starsvg[4].style.stroke=``

      starsvg[4].style.transition='fill 0.6s ease'

    }

   const colorchangeforfour=()=>{

      starsvg[0].style.fill=`rgb(255, 157, 0)`
      starsvg[0].style.transition='fill 0.6s ease 0.1s'
      starsvg[1].style.fill=`rgb(255, 157, 0)`
      starsvg[1].style.transition='fill 0.6s ease 0.2s'
      starsvg[2].style.fill=`rgb(255, 157, 0)`
      starsvg[2].style.transition='fill 0.6s ease 0.3s'
      
      starsvg[3].style.fill=`rgba(255, 178, 55, 0.69)`
      starsvg[3].style.stroke=`rgba(255, 178, 55, 0.69)`
      starsvg[3].style.transition='fill 0.6s ease'
      
    }
    const colornotchangeforfour=()=>{
      starsvg[0].style.fill=``
      starsvg[0].style.transition='fill 0.6s ease 0.3s'
      starsvg[1].style.fill=``
      starsvg[1].style.transition='fill 0.6s ease 0.2s'
      starsvg[2].style.fill=``
      starsvg[2].style.transition='fill 0.6s ease 0.1s'

      starsvg[3].style.fill=``
      starsvg[3].style.stroke=``

      starsvg[3].style.transition='fill 0.6s ease'

    }
    const colorchangeforthree=()=>{
     
      starsvg[0].style.fill=`rgb(255, 157, 0)`
      starsvg[0].style.transition='fill 0.6s ease 0.1s'
      starsvg[1].style.fill=`rgb(255, 157, 0)`
      starsvg[1].style.transition='fill 0.6s ease 0.2s'
      starsvg[2].style.fill=`rgba(255, 178, 55, 0.69)`
      starsvg[2].style.stroke=`rgba(255, 178, 55, 0.69)`
      starsvg[2].style.transition='fill 0.6s ease'
      
      
    }
    const colornotchangeforthree=()=>{
      starsvg[0].style.fill=``
      starsvg[0].style.transition='fill 0.6s ease 0.2s'
      starsvg[1].style.fill=``
      starsvg[1].style.transition='fill 0.6s ease 0.1s'
      starsvg[2].style.fill=``
      starsvg[2].style.stroke=``
      starsvg[2].style.transition='fill 0.6s ease'

    }
    const colorchangefortwo=()=>{
      
      
      starsvg[0].style.fill=`rgb(255, 157, 0)`
      starsvg[0].style.transition='fill 0.6s ease 0.1s'
      starsvg[1].style.fill=`rgba(255, 178, 55, 0.69)`
      starsvg[1].style.stroke=`rgba(255, 178, 55, 0.69)`
      starsvg[1].style.transition='fill 0.6s ease'
      
    
    }
    const colornotchangefortwo=()=>{
      starsvg[0].style.fill=``
      starsvg[0].style.transition='fill 0.6s ease 0.1s'
      starsvg[1].style.fill=``
      starsvg[1].style.stroke=``
      starsvg[1].style.transition='fill 0.6s ease'

    }
    const colorchangeforone=()=>{
     
      
      starsvg[0].style.fill=`rgba(255, 178, 55, 0.69)`
      starsvg[0].style.stroke=`rgba(255, 178, 55, 0.69)`

      starsvg[0].style.transition='fill 0.3s ease'
      
      
    }
    const colornotchangeforone=()=>{

      starsvg[0].style.fill=``
      starsvg[0].style.stroke=``

      starsvg[0].style.transition='fill 0.3s ease'
      

    }

    
    const removelike=()=>{
        setstarnum(0)

          starsvg[0].classList.remove('hexa')
          starsvg[1].classList.remove('hexa')
          starsvg[2].classList.remove('hexa')
          starsvg[3].classList.remove('hexa')
          starsvg[4].classList.remove('hexa')
    }

    const [summary,setsummary]=useState(false)
    const [content,setcontent]=useState(false)
    const [learn,setlearn]=useState(false)
    const [instructor,setinstructor]=useState(false)
    const [review,setreview]=useState(false)


    const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
 
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.className);
            console.log(entry.target.className);
            setsummary(false)
            setcontent(false)
            setlearn(false)
            setinstructor(false)
            setreview(false)
            
          }
        });
      },
      {
        threshold: 0.4, 
      }
    );

    if (sections) {
      
    
      sections.forEach((section) => {
      observer.observe(section);
    });
    }
    

    return () => {
      if (sections) {
         sections.forEach((section) => {
        observer.unobserve(section);
      });
      }
     
    };
  });

  

  return (
    <div className='course-overview-main-conatainer'>
      <style>{
        `html{
          overflow-x: hidden;
          overflow-y:${reviewwrite?'hidden':'auto'}
        }`}
        </style>
        {Array.from(coursedetail).map((coursedetails)=>
        <>
          <div className='course-overview-intro-div'>
        <div className='course-main-title-box'>
          <div className='course-title-main-container'>

            <p className='course-name-in-course-overview'>{coursedetails.courseName}<span className='course-overview-title'>{coursedetails.courseTitle}</span></p>
            <p className='course-para-in-course-overview'>{coursedetails.CoursePara}</p>
          </div>
          <div className='course-main-titile-content-container'>
            <div className='course-tutor-side'>
              <div className='tutor-img-for-course-overview' style={{backgroundImage:`url(${coursedetails.Tutor.TutorIMG})`}}></div>
              <div className='tutor-name-for-course-overview'>
                <p className='tutor-name-tit'>Tutor</p>
                <p className='tutor-name'>{coursedetails.Tutor.TutorName}</p>
              </div>
              <div className='total-enroll-for-course-overview'>
                <p className='tutor-name-tit'>Total Enrolled</p>
                <p className='tutor-name'>{coursedetails.totalEnroll}</p>
              </div>
              <div className='cathegory-for-course-overview'>
                <p className='tutor-name-tit'>Category</p>
                <p className='tutor-name'>{coursedetails.Category}</p>
              </div>
            </div>
            <div className='course-audio-review-info-side'>
              <div className='course-review-bar'>
                <p className='course-review-rating'>{coursedetails.rating}</p>
                <p className='star-for-course-review'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                <p className='course-review-total'>(&nbsp;{coursedetails.rating} reviews&nbsp;)</p>
              </div>
              <div className='course-audio-bar'>
                <p className='course-audio-para'><AiOutlineSound/><span className='audio-course-span-main'>Audio : <span className='audio-language'>{Array.from(coursedetails.Audio).map((indicourselang:any)=>indicourselang)}</span></span></p>
              </div>
              <div className='course-language-bar'>
                <p className='course-lang-para'><PiSubtitles/><span className='audio-course-span-main'>Subtitles : <span  className='avail-language'>{coursedetails.SubtitlesNUM}+ Languages</span></span></p>
              </div>
            </div>
            <div className='course-calender-box'>
              <div className='course-calender-one'>
                <p className='calender-icon'><SlCalender/></p>
                <p className='calender-course-cont'>Last Update&nbsp;:&nbsp;<span className='calender-cont'>{coursedetails.LastUpdate}</span></p>
              </div>
              <div className='course-calender-two'>
                <p className='calender-icon'><GrUpdate/></p>
                <p className='calender-course-cont'>Released&nbsp;:&nbsp;<span className='calender-cont'>{coursedetails.Published}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className='course-enroll-box'>
          <div className='course-enroll-video-overview'>
            <div className='course-video-image'>
              <div className='video-play-btn-container'>
                <a href="">
                  <div className='icon-play-vid'>
                    <FaPlay/>
                  </div>
                </a>
                <div className='vid-play-design'></div>
              </div>
            </div>
          </div>
          <div className='course-enroll-amount-overview'>
            <div className='actual-course-cost'>
              <div className='actual-course-para'>
                <p className='actual-cost-para-one'>${Math.floor(Number(coursedetails.CourseAMT)-(Number(coursedetails.CourseAMT)*15)/100)}.00</p>
                <p className='actual-cost-para-two'>${coursedetails.CourseAMT}.00</p>
              </div>
              <div className='actual-course-discount'>
                <p>15% off</p>
              </div>
            </div>
            <div className='time-left-offer'>
              <p className='time-left-offer-para'><FaRegClock/> 5 Days left at this price!</p>
            </div>
            <div className='course-join-btns'>
              <button className='course-btn course-btn-one'>Pick JavaScript
                <div className='course-btn-design course-btn-design-one'></div>
                <div className='course-btn-design course-btn-design-two'></div>
                <div className='course-btn-design course-btn-design-three'></div>
                <div className='course-btn-design course-btn-design-four'></div>
              </button>
              <button onClick={()=>LikeCourse(coursedetails.id)} className='course-btn course-btn-two'>{coursedetails.Like?'in LikeList':'Move to LikeList'}
                <div className='course-btn-design-two course-btn-design-two-one'></div>
                <div className='course-btn-design-two course-btn-design-two-two'></div>
                <div className='course-btn-design-two course-btn-design-two-three'></div>
                <div className='course-btn-design-two course-btn-design-two-four'></div>
              </button>
            </div>
          </div>
        </div>
          </div>
          <div className='course-overview-content-div'>
              <div className='course-overview-content-main'>
                
                  <div  className='course-overview-nav-bar'>
                    <a href="#" style={{textDecoration:'none'}}
                        onClick={(e) => {
                          setsummary(true)
                          setcontent(false)
                          setlearn(false)
                          setinstructor(false)
                          setreview(false)
                          e.preventDefault();
                          const element = document.getElementById("course-summary");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "center"
                            });
                            
                          }
                        }}>
                      <p className={`course-overview-nav-bar-para summary-para ${summary||activeId.includes('Course-detail-container')?'red-nav-cont':'black-nav-cont'}` }>Summary</p>
                    </a>

                    <a href="#" style={{textDecoration:'none'}}
                        onClick={(e) => {
                          setsummary(false)
                          setcontent(true)
                          setlearn(false)
                          setinstructor(false)
                          setreview(false)
                          e.preventDefault();
                          const element = document.getElementById("course-content");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "center"});
                            
                          }
                        }}>
                      <p className={`course-overview-nav-bar-para content-para ${content||activeId.includes('course-content-container')?'red-nav-cont':'black-nav-cont'}` }>Content</p>
                    </a>

                    <a href="#" style={{textDecoration:'none'}}
                        onClick={(e) => {
                          setsummary(false)
                          setcontent(false)
                          setlearn(true)
                          setinstructor(false)
                          setreview(false)
                          e.preventDefault();
                          const element = document.getElementById("what-learn");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "center"});
                            
                          }
                        }}>
                      <p className={`course-overview-nav-bar-para what-para ${learn||activeId.includes('what-learn-from-course-container')?'red-nav-cont':'black-nav-cont'}` }>what-learn</p>
                    </a>

                    <a href="#" style={{textDecoration:'none'}}
                        onClick={(e) => {
                          setsummary(false)
                          setcontent(false)
                          setlearn(false)
                          setinstructor(true)
                          setreview(false)
                          e.preventDefault();
                          const element = document.getElementById("course-instructor");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "center" });
                            
                          }
                        }}>
                      <p className={`course-overview-nav-bar-para ins-para ${instructor||activeId.includes('course-instructor-container')?'red-nav-cont':'black-nav-cont'}` }>Instructor</p>
                    </a>

                    <a href="#" style={{textDecoration:'none'}}
                        onClick={(e) => {
                          setsummary(false)
                          setcontent(false)
                          setlearn(false)
                          setinstructor(false)
                          setreview(true)
                          e.preventDefault();
                          const element = document.getElementById("course-review");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "center" });
                            
                          }
                        }}>
                      <p className={`course-overview-nav-bar-para rev-para ${review||activeId.includes('course-review-container')?'red-nav-cont':'black-nav-cont'}` }>Review</p>
                    </a>
                    
                  </div>
            
                
                <div id='course-summary' className='Course-detail-container section'>
                  <div className='course-detail-title-bar'>
                    <p className='all-box-overview-title'>Course Detail <span className='course-section-tit-underline'></span></p>
                    <p className='all-box-overview-para'>{coursedetails.CoursePara}</p>
                  </div>
                  <div className='course-detail-main-point-content'>
                    {Array.from(coursedetails.CourseSummaryList).map((courselist)=>
                     <p className='course-detail-points'><GoDotFill className='bullet-icon'/>{courselist}</p>
                  )}
                    
                  </div>
                </div>
                <div id='course-content' className='course-content-container section'>
                  <div className='course-content-title'>
                    <p className='all-box-overview-title'>Course Content<span className='course-section-tit-underline'></span></p>
                  </div>
                  <div className='course-content-main-list'>
                    <div className='course-content-list'>
                      <div className='course-content-list-title' onClick={()=>setshowcont(!showcont)}>
                        <p className='course-para-course-content'><span className='number-course-content'>01</span>Lorem ipsum dolor sit amet.</p>
                        <FaChevronDown className='arrow-icon-for-course-cont' style={{transform:showcont?`rotate(-180deg)`:`rotate(0deg)`}}/>
                      </div>
                      <div className={showcont?'course-content-list-cont-show':'course-content-list-cont'}>
                        <p className='course-content-list-inner-para'><IoIosVideocam className='video-cam'/>Lorem ipsum dolor sit.</p>
                        <p className='course-content-list-inner-time'>10:15</p>
                      </div>
                    </div>
                    <div className='course-content-list'>
                      <div className='course-content-list-title' onClick={()=>setshowcont(!showcont)}>
                        <p className='course-para-course-content'><span className='number-course-content'>01</span>Lorem ipsum dolor sit amet.</p>
                        <FaChevronDown className='arrow-icon-for-course-cont' style={{transform:showcont?`rotate(-180deg)`:`rotate(0deg)`}}/>
                      </div>
                      <div className={showcont?'course-content-list-cont-show':'course-content-list-cont'}>
                        <p className='course-content-list-inner-para'><IoIosVideocam className='video-cam'/>Lorem ipsum dolor sit.</p>
                        <p className='course-content-list-inner-time'>10:15</p>
                      </div>
                    </div>
                    <div className='course-content-list'>
                      <div className='course-content-list-title' onClick={()=>setshowcont(!showcont)}>
                        <p className='course-para-course-content'><span className='number-course-content'>01</span>Lorem ipsum dolor sit amet.</p>
                        <FaChevronDown className='arrow-icon-for-course-cont' style={{transform:showcont?`rotate(-180deg)`:`rotate(0deg)`}}/>
                      </div>
                      <div className={showcont?'course-content-list-cont-show':'course-content-list-cont'}>
                        <p className='course-content-list-inner-para'><IoIosVideocam className='video-cam'/>Lorem ipsum dolor sit.</p>
                        <p className='course-content-list-inner-time'>10:15</p>
                      </div>
                    </div>
                    <div className='course-content-list'>
                      <div className='course-content-list-title' onClick={()=>setshowcont(!showcont)}>
                        <p className='course-para-course-content'><span className='number-course-content'>01</span>Lorem ipsum dolor sit amet.</p>
                        <FaChevronDown className='arrow-icon-for-course-cont' style={{transform:showcont?`rotate(-180deg)`:`rotate(0deg)`}}/>
                      </div>
                      <div className={showcont?'course-content-list-cont-show':'course-content-list-cont'}>
                        <p className='course-content-list-inner-para'><IoIosVideocam className='video-cam'/>Lorem ipsum dolor sit.</p>
                        <p className='course-content-list-inner-time'>10:15</p>
                      </div>
                    </div>
                    <div className='course-content-list'>
                      <div className='course-content-list-title' onClick={()=>setshowcont(!showcont)}>
                        <p className='course-para-course-content'><span className='number-course-content'>01</span>Lorem ipsum dolor sit amet.</p>
                        <FaChevronDown className='arrow-icon-for-course-cont' style={{transform:showcont?`rotate(-180deg)`:`rotate(0deg)`}}/>
                      </div>
                      <div className={showcont?'course-content-list-cont-show':'course-content-list-cont'}>
                        <p className='course-content-list-inner-para'><IoIosVideocam className='video-cam'/>Lorem ipsum dolor sit.</p>
                        <p className='course-content-list-inner-time'>10:15</p>
                      </div>
                    </div>
                      
                    
                  </div>
                </div>
                <div id='what-learn' className='what-learn-from-course-container section'>
                  <p className='all-box-overview-title'>What you'll learn<span className='course-section-tit-underline'></span></p>
                  <div className='what-learn-content-holder'>
                    {Array.from(coursedetails.WhatLearn).map((whatlearn)=>
                      <div className='what-learn-content'>
                        <IoIosCheckmarkCircleOutline className='tick-what-learn'/>
                        <p className='para-what-learn'>{whatlearn}</p>
                      </div>
                  )}
                    
                    
                  </div>
                </div>
                <div id='course-instructor' className='course-instructor-container section'>
                  <p className='all-box-overview-title'>Course Instructor<span className='course-section-tit-underline'></span></p>
                  <div className='course-instructor-info'>
                    <div className='course-intructor-image' style={{backgroundImage:`url(${coursedetails.Tutor.TutorIMG})`}}></div>
                    <div className='course-instructor-main-info'>
                      <div className='instructor-name'>
                        <p>{coursedetails.Tutor.TutorName}</p>
                        <p className='instructor-qualification'>{coursedetails.Tutor.TutorQualification}</p>
                      </div>
                      <div className='instructor-information'>
                        <p className='instructor-infor-para-one'><FaStar className='star-of-tutor'/>{coursedetails.Tutor.TutorRating}<span className='tutor-number-of-review'>(&nbsp;{coursedetails.Tutor.TutorReview} reviews&nbsp;)</span></p>
                        <p  className='instructor-infor-para-two'><FaPaintBrush className='tutor-infor-icon'/>{coursedetails.Tutor.NumOfTeaching} Courses</p>
                        <p className='instructor-infor-para-three'><FaMale className='tutor-infor-icon'/>{coursedetails.Tutor.TotStudUnder} Students</p>
                      </div>
                      <p className='all-box-overview-para tutor-intro-para'>{String(coursedetails.Tutor.TeacherAbout).slice(0,370)+'.....'}</p>
                    </div>
                    <div className='course-instructor-social-media'>
                      <a href={`${coursedetails.Tutor.TeacherFBlink}`} target='_blank' className='instructor-media med-fb'><FaFacebookF className='icon-for-clr-fb'/></a>
                      <a href={`${coursedetails.Tutor.TeacherTwitterlink}`} target='_blank'  className='instructor-media  med-twitt'><FaXTwitter className='icon-for-clr-twitter'/></a>
                      <a href={`${coursedetails.Tutor.TeacherLinkedinlink}`} target='_blank'  className='instructor-media  med-linkedin'><FaLinkedinIn className='icon-for-clr-linkedin'/></a>
                      <a href={`${coursedetails.Tutor.TeacherInstalink}`} target='_blank'  className='instructor-media  med-insta'><FaInstagram className='icon-for-clr-insta'/></a>
                    </div>
                  </div>

                </div>
                <div id='course-rating' className='course-rating'>
                  <p className='all-box-overview-title'>Course Rating<span className='course-section-tit-underline'></span></p>
                  <div className='course-rating-container-main'>
                    <div className='total-rating-star-average'>
                      <p className='total-rating-para'>4.1</p>
                      <div className='total-rating-average-star'>
                        <p className='star-in-rating'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <p className='number-review-in-rating'>(&nbsp;233 reviews&nbsp;)</p>
                      </div>
                    </div>
                    <div className='total-rating-star-lineup'>
                      <div className='total-rating-star-line'>
                        <p className='star-number-rating-box'>5</p>
                        <div className='line-rating-bg'>
                          <div className='line-rating-inner line-inner-for-five'></div>
                        </div>
                        <p className='percentage-star-rating-box'>82%</p>
                        <p className='total-rating-in-rating-box'>122</p>
                      </div>
                      <div className='total-rating-star-line'>
                        <p className='star-number-rating-box'>4</p>
                        <div className='line-rating-bg'>
                          <div className='line-rating-inner line-inner-for-four'></div>
                        </div>
                        <p className='percentage-star-rating-box'>82%</p>
                        <p className='total-rating-in-rating-box'>122</p>
                      </div>
                      <div className='total-rating-star-line'>
                        <p className='star-number-rating-box'>3</p>
                        <div className='line-rating-bg'>
                          <div className='line-rating-inner line-inner-for-three'></div>
                        </div>
                        <p className='percentage-star-rating-box'>82%</p>
                        <p className='total-rating-in-rating-box'>122</p>
                      </div>
                      <div className='total-rating-star-line'>
                        <p className='star-number-rating-box'>2</p>
                        <div className='line-rating-bg'>
                          <div className='line-rating-inner line-inner-for-two'></div>
                        </div>
                        <p className='percentage-star-rating-box'>82%</p>
                        <p className='total-rating-in-rating-box'>122</p>
                      </div>
                      <div className='total-rating-star-line'>
                        <p className='star-number-rating-box'>1</p>
                        <div className='line-rating-bg'>
                          <div className='line-rating-inner line-inner-for-one'></div>
                        </div>
                        <p className='percentage-star-rating-box'>82%</p>
                        <p className='total-rating-in-rating-box'>122</p>
                      </div>
                      
                    </div>
                  </div>

                </div>
                <div id='course-review' className='course-review-container section'>
                  <p className='all-box-overview-title'>Course Review<span className='course-section-tit-underline'></span></p>
                  <div className='review-of-the-course'>
                    <div className='review-of-the-course-reviewer-img'>
                      <div className='reviewer-image'></div>
                    </div>
                    <div className='review-of-the-course-cont'>
                      <p className='star-in-review'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      <div className='reviewer-content'>
                        <p className='reviewer-name-review'>Jame Bond</p>
                        <p className='reviewer-date-review'>July 20 2020</p>
                        <p className='reviewer-cont-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quia facilis necessitatibus vel repellat nobis assumenda possimus illo debitis.</p>
                      </div>
                    </div>
                  </div>
                  <div className='review-of-the-course'>
                    <div className='review-of-the-course-reviewer-img'>
                      <div className='reviewer-image'></div>
                    </div>
                    <div className='review-of-the-course-cont'>
                      <p className='star-in-review'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      <div className='reviewer-content'>
                        <p className='reviewer-name-review'>Jame Bond</p>
                        <p className='reviewer-date-review'>July 20 2020</p>
                        <p className='reviewer-cont-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quia facilis necessitatibus vel repellat nobis assumenda possimus illo debitis.</p>
                      </div>
                    </div>
                  </div>
                  <div className='review-of-the-course'>
                    <div className='review-of-the-course-reviewer-img'>
                      <div className='reviewer-image'></div>
                    </div>
                    <div className='review-of-the-course-cont'>
                      <p className='star-in-review'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      <div className='reviewer-content'>
                        <p className='reviewer-name-review'>Jame Bond</p>
                        <p className='reviewer-date-review'>July 20 2020</p>
                        <p className='reviewer-cont-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quia facilis necessitatibus vel repellat nobis assumenda possimus illo debitis.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className='review-written-btn' onClick={()=>setreviewwrite(!reviewwrite)}>
                  <div className='review-written-btn-inner'>
                    Write Review
                    <div className='review-write-btn-design'></div>

                  </div>
                </button>
              </div>
              <div className='course-overview-content-sider'>
                <p className='course-content-sider-title'>This Course Includes :</p>
                <div className='course-includes-list'>
                  <div className='course-includes-list-items'>
                    <p className='corse-includes-list-para-one'><IoIosFunnel className='sider-list-icon'/>Level</p>
                    <p className='course-list-cont'>{coursedetails.studyLevel}</p>
                  </div>
                  <div className='course-includes-list-items'>
                    <p className='corse-includes-list-para-one'><HiComputerDesktop className='sider-list-icon'/>Lectures</p>
                    <p className='course-list-cont'>{coursedetails.totalLesson} Lectures</p>
                  </div>
                  <div className='course-includes-list-items'>
                    <p className='corse-includes-list-para-one'><FaListUl className='sider-list-icon'/>Category</p>
                    <p className='course-list-cont'>{coursedetails.Category}</p>
                  </div>
                  <div className='course-includes-list-items'>
                    <p className='corse-includes-list-para-one'><IoEarthOutline className='sider-list-icon'/>Language</p>
                    <p className='course-list-cont'>{Array.from(coursedetails.Audio).map((indicourselang:any)=>indicourselang)}</p>
                  </div>
                  <div className='course-includes-list-items'>
                    <p className='corse-includes-list-para-one'><IoMdBowtie className='sider-list-icon'/>Access</p>
                    <p className='course-list-cont'>{coursedetails.Access}</p>
                  </div>
                  <div className='course-includes-list-items'>
                    <p className='corse-includes-list-para-one'><TbCertificate className='sider-list-icon'/>Certificate</p>
                    <p className='course-list-cont'>{coursedetails.Certification}</p>
                  </div>
                  <div className='course-includes-list-items'>
                    <p className='corse-includes-list-para-one'><IoDocumentText className='sider-list-icon'/>Resource</p>
                    <p className='course-list-cont'>{Array.from(coursedetails.DownloadResourses).length} Downloadable Files</p>
                  </div>
                  <div className='course-includes-list-items'>
                    <p className='corse-includes-list-para-one'><FaRegClock className='sider-list-icon'/>Duration</p>
                    <p className='course-list-cont'>{coursedetails.CourseDuration}</p>
                  </div>
                </div>
                <div className='course-sharing-path'>
                  <p className='course-sharing-path-title'>Share Now :</p>
                  <div className='course-share-path-icon'>
                      <a   href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:5173/mindspire-course#javascript"
                      target="_blank"
                      rel="noopener noreferrer"  className='instructor-media med-fb'><FaFacebookF className='icon-for-clr-fb'/></a>
                      <a href="https://twitter.com/intent/tweet?url=localhost:5173/mindspire-course#javascript&text=Check%20out%20my%20site!"
                      target="_blank"
                      rel="noopener noreferrer" className='instructor-media  med-twitt'><FaXTwitter className='icon-for-clr-twitter'/></a>
                      <a  href="https://www.linkedin.com/shareArticle?mini=true&url=localhost:5173/mindspire-course#javascript"
                        target="_blank"
                        rel="noopener noreferrer" className='instructor-media  med-linkedin'><FaLinkedinIn className='icon-for-clr-linkedin'/></a>
                      <a href='https://www.instagram.com/' target='_blank'  className='instructor-media  med-insta'><FaInstagram className='icon-for-clr-insta'/></a>

                  </div>
                </div>
                <button className='enroll-btn-sider-course'>Enroll Course
                  <div className='enroll-design-one'></div>
                  <div className='enroll-design-two'></div>
                </button>
              </div>
          </div>

          <div className={`review-written-container ${reviewwrite?'move':'remove'}`}>
            <div className='review-written-input-container'>
              <div className="review-input-main-container">
                <div className='review-input-title-bar'>
                  <p>Voice Your Opinion</p>
                </div>
                <div className='rating-bar-in-review'>
                  <p className='all-review-input-title'>Rating</p>
                  <div className='all-star-inreview'>
                    <div onMouseOver={()=>colorchangeforone()} onMouseOut={()=>colornotchangeforone()}  onClick={()=>colorfixone()} className='star-for-review'><svg className='star-svg one-star ' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                      <div onMouseOver={()=>colorchangefortwo()} onMouseOut={()=>colornotchangefortwo()}  onClick={()=>colorfixtwo()} className='star-for-review'><svg className='star-svg two-star ' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                      <div onMouseOver={()=>colorchangeforthree()} onMouseOut={()=>colornotchangeforthree()}  onClick={()=>colorfixthree()} className='star-for-review'><svg className='star-svg three-star ' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                      <div onMouseOver={()=>colorchangeforfour()} onMouseOut={()=>colornotchangeforfour()}  onClick={()=>colorfixfour()} className='star-for-review'><svg className='star-svg four-star ' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                      <div onMouseOver={()=>colorchangeforfive()} onMouseOut={()=>colornotchangeforfive()}  onClick={()=>colorfixfive()} className='star-for-review'><svg className='star-svg five-star ' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>

                    <p className='remove-like' onClick={()=>removelike()}><IoRemoveCircleOutline/></p>
                  
                  </div>
                </div>
                <div className="review-writing-name-by-user">
                  <p className='all-review-input-title'>Name (display publicly)</p>
                  <input value={reviewername} onChange={(e)=>setreviewername(e.target.value)}  type="text" className="inpreview name-input-for-comment review-input-border"  placeholder="Enter your name"/>
                </div>
                <div className="review-writing-email-by-user">
                  <p className='all-review-input-title'>Email (Private)</p>
                  <input value={revieweremail} onChange={(e)=>setrevieweremail(e.target.value)}  type="email" className="inpreview email-input-for-comment review-input-border"  placeholder="Enter your email (private)"/>
                </div>
                <div className="comment-writing-review-box">
                        <p className='all-review-input-title'>Review</p>
                        
                        <textarea value={reviewcomment} onChange={(e)=>setreviewcomment(e.target.value)}   className="inpreview review-input-for-comment review-input-border"  placeholder="Write your comment here" ></textarea>
                  </div>
                <div className="privacy-policy-for-comment">
                  <p className='comment-writing-email'>How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Fox CART’s <span className='comment-condition'>terms</span>, <span className='comment-condition'>privacy</span> and <span className='comment-condition'>content</span> policies.</p>
                </div>
                <div className='review-btn-container'>
                  <button className='review-btn-submit review-btn'>Submit</button>
                  <button className='review-btn-cancel review-btn' onClick={()=>cancelreview()}>Cancel</button>
                </div>
                        <button onClick={()=>setreviewwrite(false)} className='review-input-close-btn'><VscEyeClosed/></button>

              </div>
            </div>
          </div>
        </>
       
        )}
     
     


    </div>
  )
}

export default CourseOverview
