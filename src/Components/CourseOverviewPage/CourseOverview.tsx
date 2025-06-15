import '../../Styles/CourseOverviewCSS/CourseOverview.css'
import { FaStar } from "react-icons/fa";
import { RiUploadCloud2Line } from "react-icons/ri";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import ReactFileReader from 'react-file-reader';
import { IoSettings } from "react-icons/io5";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { AiOutlineSound } from "react-icons/ai";
import { PiSubtitles } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { GrUpdate } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
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
import { Link, NavLink, useLocation } from 'react-router-dom';

const CourseOverview = ({likepage,course,LikeCourse,setcourse,setcartpage,cartpage}) => {



  const gethash=useLocation().hash

  const [coursedetail,setcoursedetail]=useState([])

    const [getstarnum,setstartotalnum]=useState(0)

    const [onestarnum,setonestarnum]=useState(0)
    const [twostarnum,settwostarnum]=useState(0)
    const [threestarnum,setthreestarnum]=useState(0)
    const [fourstarnum,setfourstarnum]=useState(0)
    const [fivestarnum,setfivestarnum]=useState(0)


      const [reviewwrite,setreviewwrite]=useState(false)

       const [commentimg,setcommentimg]=useState([])


    useEffect(() => {
      
     window.scrollTo(0,0)
      
    }, [])

    useEffect(() => {
      
      const reviewwrittenbox=document.querySelector('.review-input-main-container')

    reviewwrittenbox?.scrollTo(0,0)
      
    }, [reviewwrite])
    
    

  useEffect(() => {
   

   
    
    const gettingcoursedetail=Array.from(course).filter((indicourse)=>String(indicourse.courseName)==String(gethash).slice(1))
    setcoursedetail(gettingcoursedetail)
    setstartotalnum((number)=>{
      let starinitial=number
      const reviewnumberarray=gettingcoursedetail.map((indiitemforreview)=>
        indiitemforreview.CourseReview
      )
      const reviewnumber=reviewnumberarray[0].map((reviewnumber)=>{
        
        
       
        
        starinitial=Number(starinitial)+Number(reviewnumber.RaatingNUM)
      
      })
      return starinitial
      
    })

    const reviewtotal=gettingcoursedetail.map((indiitemfortotalreview)=>
        indiitemfortotalreview.CourseReview
      )
      const reviewnumber=reviewtotal[0].map((reviewtotnumber)=>{
            if (Number(reviewtotnumber.RaatingNUM)==5) {
                  
                    setfivestarnum((fivestarnum)=>{
                      let oldernum=fivestarnum
                      let newnum=oldernum+1
                      return newnum
                      
                    }) 
                  
                  
                }else if (Number(reviewtotnumber.RaatingNUM)==4) {
                  setfourstarnum((fourstarnum)=>{
                      let oldernum=fourstarnum
                      let newnum=oldernum+1
                      return newnum
                      
                    })
                 
                }
                else if (Number(reviewtotnumber.RaatingNUM)==3) {
                  setthreestarnum((threestarnum)=>{
                      let oldernum=threestarnum
                      let newnum=oldernum+1
                      return newnum
                      
                    })
                 
                }
                else if (Number(reviewtotnumber.RaatingNUM)==2) {
                  settwostarnum((twostarnum)=>{
                      let oldernum=twostarnum
                      let newnum=oldernum+1
                      return newnum
                      
                    })

                }
                else if (Number(reviewtotnumber.RaatingNUM)==1) {
                  setonestarnum((onestarnum)=>{
                      let oldernum=onestarnum
                      let newnum=oldernum+1
                      return newnum
                      
                    })
                }
                else{
                  return
                }
      })

     
    

    return () => {
      setcoursedetail([])
      setstartotalnum(0)
      setfivestarnum(0)
      setfourstarnum(0)
      setthreestarnum(0)
      settwostarnum(0)
      setonestarnum(0)
    }
    
  }, [course])


  
  let Starnumref=useRef(0)
  let reviewNameref=useRef('')
  let reviewEmailref=useRef('')
    let reviewCommentref=useRef('')

  

  const handleFiles = (files) => {
    setcommentimg((curfiles)=>{
      let imgone=files.base64
      let arrayofoldimg=imgone
      return arrayofoldimg       
    })
  };

  const removeimgincomment=(url)=>{
    let removedimgofcomment=commentimg.filter((indiimgurl)=>indiimgurl!=url)
    setcommentimg(removedimgofcomment)
    
  }


  const ReviewSubmit=(contentID)=>{
    
    
    let month=['January','February','March','April','May','June','July','August','September','November','December']
    let getdate=new Date().getDate()
    let getmonth=new Date().getMonth()
    let getYear=new Date().getFullYear()
   

    
    const updatedreview=Array.from(course).map((reviewupdate)=>
      reviewupdate.id==contentID?{...reviewupdate,CourseReview:[...reviewupdate.CourseReview,{ReviewId:Number(reviewupdate.CourseReview.length)+1,ReviewerName:reviewNameref.current.value,ReviewerContent:reviewCommentref.current.value,RaatingNUM:Starnumref.current,ReviewedDate:`${month[getmonth]} ${getdate} ${getYear}`,ReviewerIMG:commentimg[0]}]}:{...reviewupdate}
    )
    setcourse(updatedreview)
   
    setreviewwrite(false)
    
  }

  const cancelreview=()=>{
    Starnumref.current=0
    reviewNameref.current.value = '';
    reviewEmailref.current.value = '';
    reviewCommentref.current.value = '';
    setreviewwrite(false)
    
  }

  const starsvg=document.querySelectorAll('.star-svg')

   const removelike=()=>{
          Starnumref.current=0
          starsvg[0].classList.remove('hexa')
          starsvg[1].classList.remove('hexa')
          starsvg[2].classList.remove('hexa')
          starsvg[3].classList.remove('hexa')
          starsvg[4].classList.remove('hexa')
    }

   const colorfixfive=()=>{
           Starnumref.current=5
          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.add('hexa')
          starsvg[3].classList.add('hexa')
          starsvg[4].classList.add('hexa')

    }
    const colorfixfour=()=>{
 Starnumref.current=4
          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.add('hexa')
          starsvg[3].classList.add('hexa')
          starsvg[4].classList.remove('hexa')


    }
    const colorfixthree=()=>{
          Starnumref.current=3
          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.add('hexa')
          starsvg[3].classList.remove('hexa')
          starsvg[4].classList.remove('hexa')


    }
    const colorfixtwo=()=>{
           Starnumref.current=2
          starsvg[0].classList.add('hexa')
          starsvg[1].classList.add('hexa')
          starsvg[2].classList.remove('hexa')
          starsvg[3].classList.remove('hexa')
          starsvg[4].classList.remove('hexa')


    }
    const colorfixone=()=>{
          Starnumref.current=1

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
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.className);
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



  const ShowContent=(indexnumber)=>{
    const parentElement=document.querySelectorAll('.course-content-list')

    if (parentElement) {
      let elementdestructure=parentElement[indexnumber]
      let InnerElementONE=elementdestructure.querySelector('.course-content-list-title')
        let ArrowIcon=InnerElementONE?.querySelector('.arrow-icon-for-course-cont')
        if (ArrowIcon.style.rotate=='-180deg') {
          ArrowIcon.style.rotate='0deg'
        }else{
        ArrowIcon.style.rotate='-180deg'

        }


        let InnerElementTWO=elementdestructure.querySelector('.Course-Content-List')
        
    
      
         if (InnerElementTWO?.className=='Course-Content-List course-content-list-cont') {
           
           
          InnerElementTWO?.classList.remove('course-content-list-cont')
          InnerElementTWO?.classList.add('course-content-list-cont-show')
         }else{
         
          
          InnerElementTWO?.classList.remove('course-content-list-cont-show')
          InnerElementTWO?.classList.add('course-content-list-cont')
        } 
        
      
      
      
      
    }
  }



  const [enrollbtn,setenrollbtn]=useState(false)
  const [enrollbtncont,setenrollbtncont]=useState(false)
  const [enrollbtntick,setenrollbtntick]=useState(false)

  useEffect(() => {
    let timer
    if (enrollbtn) {
       timer=setTimeout(() => {
      setenrollbtn(false)
      setenrollbtntick(true)
    }, 3000);
    }
  let timertwo
     if (enrollbtntick) {
       timertwo=setTimeout(() => {
      setenrollbtntick(false)
      setenrollbtncont(true)
    }, 5000);
    }
   
  
    return () => {
      
      clearTimeout(timer)
      clearTimeout(timertwo)
    }
  }, [enrollbtn])


  const courseenrolled=(enrollid)=>{
     const enrollcourse=Array.from(course).map((indicourse)=>
      Number(indicourse.id)==Number(enrollid)?{...indicourse,Enroll:true}:{...indicourse}
    )
    
     setcourse(enrollcourse)

    setcartpage(true)
  }
  

  const clickreviewcloser=(id)=>{
    if (String(id).includes('close-review-write')) {
      setreviewwrite(false)
    }else{
      return
    }
  }

  const [pick,setpick]=useState(false)
  const pickcourse=(id)=>{
    if (enrollbtn||enrollbtncont||enrollbtntick) {
      courseenrolled(id)
    }else{
      setpick(true)
    }
  }
  useEffect(() => {
    setpick(false)
  
    return () => {
      setpick(false)
    }
  }, [enrollbtn])
  
  
  

  return (
    <div className='course-overview-main-conatainer'>
      <style>{
        `html{
          overflow-x: hidden;
          overflow-y:${reviewwrite||cartpage||likepage?'hidden':'auto'}
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
                <p className='course-review-rating'>{Math.floor(Number(Number(Number(getstarnum)/Number((Number(coursedetails.CourseReview.length)*5)))*5).toFixed(0))}/5</p>
                {
                  Math.floor(Number(Number(Number(getstarnum)/Number((Number(coursedetails.CourseReview.length)*5)))*5).toFixed(0))==5? <p className='star-for-course-review'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>: 
                   Math.floor(Number(Number(Number(getstarnum)/Number((Number(coursedetails.CourseReview.length)*5)))*5).toFixed(0))==4?<p className='star-for-course-review'><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>:
                   Math.floor(Number(Number(Number(getstarnum)/Number((Number(coursedetails.CourseReview.length)*5)))*5).toFixed(0))==3?<p className='star-for-course-review'><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></p>:
                   Math.floor(Number(Number(Number(getstarnum)/Number((Number(coursedetails.CourseReview.length)*5)))*5).toFixed(0))==2?<p className='star-for-course-review'><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>:
                   Math.floor(Number(Number(Number(getstarnum)/Number((Number(coursedetails.CourseReview.length)*5)))*5).toFixed(0))==1?<p className='star-for-course-review'><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>:<p className='star-for-course-review'><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>
                }
                
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
            <div className='course-video-image' style={{backgroundImage:`url(${coursedetails.courseIMG})`}}>
              <div className='video-play-btn-container'>
                <a href={coursedetails.CourseIntroVid} target='_blank'>
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
              <div className='btn-for-pick-enroll-div'>
                <button onClick={()=>pickcourse(coursedetails.id)} className={`course-btn course-btn-one ${pick?'':'design-pick'}`} >{pick?'Please Enroll':'Pick JavaScript'}
                {pick?<>
               
                </>:<>
                <div className='course-btn-design course-btn-design-one'></div>
                <div className='course-btn-design course-btn-design-two'></div>
                <div className='course-btn-design course-btn-design-three'></div>
                <div className='course-btn-design course-btn-design-four'></div>
                </>}
                
              </button>
              {pick&&<div className='pick-alert-box'>Scroll Down to Enroll
                  <div className='pick-alert-arrow'></div>
                </div>}
               
              </div>
             
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
                    {Array.from(coursedetails.CourseContent).map((CourseContentIndi,index)=>
                      <div key={CourseContentIndi.CourseContentID} className='course-content-list'>
                        <div className='course-content-list-title' onClick={()=>ShowContent(index)}>
                          <p className='course-para-course-content'><span className='number-course-content'>{CourseContentIndi.CourseContentID<10?`0${CourseContentIndi.CourseContentID}`:CourseContentIndi.CourseContentID}</span>{CourseContentIndi.ContentTitle}</p>
                          <FaChevronDown className='arrow-icon-for-course-cont' />
                        </div>
                        <div className='Course-Content-List course-content-list-cont'>
                          <p className='course-content-list-inner-para'><IoIosVideocam className='video-cam'/>{CourseContentIndi.ContentItem}</p>
                          <p className='course-content-list-inner-time'>{CourseContentIndi.VideoDuration}</p>
                        </div>
                      </div>
                    )}
                    
                    
                      
                    
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
                      <p className='total-rating-para'>{Number(Number(Number(getstarnum)/Number((Number(coursedetails.CourseReview.length)*5)))*5).toFixed(1)}</p>
                      <div className='total-rating-average-star'>
                        <p className='star-in-rating'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <p className='number-review-in-rating'>(&nbsp;{coursedetails.CourseReview.length} reviews&nbsp;)</p>
                      </div>
                    </div>
                    <div className='total-rating-star-lineup'>
                      <div className='total-rating-star-line'>
                        <p className='star-number-rating-box'>5</p>
                        <div className='line-rating-bg'>
                          <div className='line-rating-inner line-inner-for-five' style={{width:`${Number(Number(fivestarnum)/Number(coursedetails.CourseReview.length)*100).toFixed(0)+'%'}`}}></div>
                        </div>
                        <p className='percentage-star-rating-box'>{Number(Number(fivestarnum)/Number(coursedetails.CourseReview.length)*100).toFixed(0)+'%'}</p>
                        <p className='total-rating-in-rating-box'>{fivestarnum}</p>
                      </div>
                      <div className='total-rating-star-line'>
                        <p className='star-number-rating-box'>4</p>
                        <div className='line-rating-bg'>
                          <div className='line-rating-inner line-inner-for-four' style={{width:`${Number(Number(fourstarnum)/Number(coursedetails.CourseReview.length)*100).toFixed(0)+'%'}`}}></div>
                        </div>
                        <p className='percentage-star-rating-box'>{Number(Number(fourstarnum)/Number(coursedetails.CourseReview.length)*100).toFixed(0)+'%'}</p>
                        <p className='total-rating-in-rating-box'>{fourstarnum}</p>
                      </div>
                      <div className='total-rating-star-line'>
                        <p className='star-number-rating-box'>3</p>
                        <div className='line-rating-bg'>
                          <div className='line-rating-inner line-inner-for-three' style={{width:`${Number(Number(threestarnum)/Number(coursedetails.CourseReview.length)*100).toFixed(0)+'%'}`}}></div>
                        </div>
                        <p className='percentage-star-rating-box'>{Number(Number(threestarnum)/Number(coursedetails.CourseReview.length)*100).toFixed(0)+'%'}</p>
                        <p className='total-rating-in-rating-box'>{threestarnum}</p>
                      </div>
                      <div className='total-rating-star-line'>
                        <p className='star-number-rating-box'>2</p>
                        <div className='line-rating-bg'>
                          <div className='line-rating-inner line-inner-for-two' style={{width:`${Number(Number(twostarnum)/Number(coursedetails.CourseReview.length)*100).toFixed(0)+'%'}`}}></div>
                        </div>
                        <p className='percentage-star-rating-box'>{Number(Number(twostarnum)/Number(coursedetails.CourseReview.length)*100).toFixed(0)+'%'}</p>
                        <p className='total-rating-in-rating-box'>{twostarnum}</p>
                      </div>
                      <div className='total-rating-star-line'>
                        <p className='star-number-rating-box'>1</p>
                        <div className='line-rating-bg'>
                          <div className='line-rating-inner line-inner-for-one' style={{width:`${Number(Number(onestarnum)/Number(coursedetails.CourseReview.length)*100).toFixed(0)+'%'}`}}></div>
                        </div>
                        <p className='percentage-star-rating-box'>{Number(Number(onestarnum)/Number(coursedetails.CourseReview.length)*100).toFixed(0)+'%'}</p>
                        <p className='total-rating-in-rating-box'>{onestarnum}</p>
                      </div>
                      
                    </div>
                  </div>

                </div>
                <div id='course-review' className='course-review-container section'>
                  <p className='all-box-overview-title'>Course Review<span className='course-section-tit-underline'></span></p>
                  {Array.from(coursedetails.CourseReview).slice(-3).map((indiReview)=>
                   <div key={indiReview.ReviewId} className='review-of-the-course'>
                    <div className='review-of-the-course-reviewer-img'>
                      <div className='reviewer-image' style={{backgroundImage:indiReview.ReviewerIMG?`url(${indiReview.ReviewerIMG})`:`url(${coursedetails.courseIMG})`}}>

                      </div>
                    </div>
                    <div className='review-of-the-course-cont'>
                      
                        {Number(indiReview.RaatingNUM)==1?
                          <p className='star-in-review'>
                          <FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
                          </p>
                          :Number(indiReview.RaatingNUM)==2?
                          <p className='star-in-review'>
                          <FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/>
                          </p>
                          :Number(indiReview.RaatingNUM)==3?
                          <p className='star-in-review'>
                          <FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/>
                          </p>
                          :Number(indiReview.RaatingNUM)==4?
                          <p className='star-in-review'>
                           <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/>
                           </p>
                           :Number(indiReview.RaatingNUM)==5?
                           <p className='star-in-review'>
                           <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                           </p>
                           
                           :
                            <p className='star-in-review'>
                               <FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
                            </p>
                        }
                      
                        
                      <div className='reviewer-content'>
                        <p className='reviewer-name-review'>{indiReview.ReviewerName}</p>
                        <p className='reviewer-date-review'>{indiReview.ReviewedDate}</p>
                        <p className='reviewer-cont-review'>{indiReview.ReviewerContent}</p>
                      </div>
                    </div>
                  </div>
                  )}
                 
                </div>
                <button className='review-written-btn' onClick={()=>setreviewwrite(true)}>
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
                    <p className='course-list-cont'>{coursedetails.CourseDuration}/ hr:min</p>
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
                {coursedetails.Enroll?<div className='enroll-done-para-div'>
                    <p  className='enroll-done-para'>Your Enrollement for the Course <span className='course-name-in-enroll-done'>{coursedetails.courseName}</span> has Successfully Done Please Visit Your <span onClick={()=>courseenrolled(coursedetails.id)} className='cart-page-link-in-enroll-cont'>Cart Page</span> </p>
                  </div> :
                  enrollbtn && !enrollbtncont && !enrollbtntick? 
                  <button onClick={()=>setenrollbtn(!enrollbtn)} className='enrolling-btn-sider-course'>Enrolling <span className='enroll-ball enroll-ball-one'></span>
                  <span className='enroll-ball enroll-ball-two'></span>
                  <span className='enroll-ball enroll-ball-three'></span>
                  <span className='enroll-ball enroll-ball-four'></span>
                  <span className='enroll-ball enroll-ball-five'></span>
                  <span className='rotate-in-enroll'><IoSettings className='rotate-icon-enroll'/></span>
                  
                  </button>: !enrollbtn && !enrollbtncont && enrollbtntick?
                     <DotLottieReact
                          src="https://lottie.host/4a15363c-8297-4af5-b506-b8b95205e70a/STQRQoNmVA.lottie"
                          loop
                          autoplay
                          className='lottie-file-tick'
                        />
                 
                  : !enrollbtn && !enrollbtntick && enrollbtncont?<div className='enroll-done-para-div'>
                    <p  className='enroll-done-para'>Your Enrollement for the Course <span className='course-name-in-enroll-done'>{coursedetails.courseName}</span> has Successfully Done Please Visit Your <span onClick={()=>courseenrolled(coursedetails.id)} className='cart-page-link-in-enroll-cont'>Cart Page</span> </p>
                  </div> :
                  <button onClick={()=>setenrollbtn(!enrollbtn)} className='enroll-btn-sider-course'>Enroll Course
                    <div className='enroll-design-one'></div>
                    <div className='enroll-design-two'></div>
                  </button>
                }
               
              </div>
          </div>

          <div id='close-review-write' onClick={(e)=>clickreviewcloser(e.target.id)} className={`review-written-container ${reviewwrite?'move':'remove'}`}>
            <div id='not-close-review-write' onClick={(e)=>clickreviewcloser(e.target.id)} className='review-written-input-container'>
              <div className="review-input-main-container">
                <div className='review-input-title-bar'>
                  <p>Voice Your Opinion</p>
                </div>
                <div className='rating-bar-in-review'>
                  <p className='all-review-input-title'>Rating</p>
                  <div className='all-star-inreview'>
                    <div ref={Starnumref} onMouseOver={()=>colorchangeforone()} onMouseOut={()=>colornotchangeforone()}  onClick={()=>colorfixone()} className='star-for-review'><svg className='star-svg one-star ' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                      <div ref={Starnumref} onMouseOver={()=>colorchangefortwo()} onMouseOut={()=>colornotchangefortwo()}  onClick={()=>colorfixtwo()} className='star-for-review'><svg className='star-svg two-star ' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                      <div ref={Starnumref} onMouseOver={()=>colorchangeforthree()} onMouseOut={()=>colornotchangeforthree()}  onClick={()=>colorfixthree()} className='star-for-review'><svg className='star-svg three-star ' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                      <div ref={Starnumref} onMouseOver={()=>colorchangeforfour()} onMouseOut={()=>colornotchangeforfour()}  onClick={()=>colorfixfour()} className='star-for-review'><svg className='star-svg four-star ' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>
                      <div ref={Starnumref} onMouseOver={()=>colorchangeforfive()} onMouseOut={()=>colornotchangeforfive()}  onClick={()=>colorfixfive()} className='star-for-review'><svg className='star-svg five-star ' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
                      </svg>
                    </div>

                    <p className='remove-like' onClick={()=>removelike()}><IoRemoveCircleOutline/></p>
                  
                  </div>
                </div>
                <div className="review-writing-name-by-user">
                  <p className='all-review-input-title'>Name (display publicly)</p>
                  <input ref={reviewNameref}    type="text" className="inpreview name-input-for-comment review-input-border"  placeholder="Enter your name"/>
                </div>
                <div className="review-writing-email-by-user">
                  <p className='all-review-input-title'>Email (Private)</p>
                  <input ref={reviewEmailref}   type="email" className="inpreview email-input-for-comment review-input-border"  placeholder="Enter your email (private)"/>
                </div>
                <div className="comment-writing-image-box">
                  <p className='all-review-input-title'>Profile Picture [100 X 100]</p>
                  <div className="image-selection-box">
                    <ReactFileReader base64={true}  multipleFiles={true}   handleFiles={handleFiles}   fileTypes={[".jpg",".gif",".jpeg","png"]}>
                      <p className="btn-for-image-select" ><RiUploadCloud2Line className="image-to-upload-in-comment" style={{color:`#707070`,cursor:'pointer'}}/></p>
                    </ReactFileReader>
                  </div>
                  <div className="comment-img-showing-box">
                    {commentimg.map((indiimgforcomment,index)=>
                      
                      <div key={index} className="user-putted-image-for-review">
                        <img src={indiimgforcomment} className="img-of-review" />
                        <p className='comment-img-remove' onClick={()=>removeimgincomment(indiimgforcomment)}><IoIosRemoveCircleOutline style={{cursor:'pointer'}}/></p>
                      </div>
                    )}
                    
                    
                  </div>
                  
                  
                </div>
                <div className="comment-writing-review-box">
                        <p className='all-review-input-title'>Review</p>
                        
                        <textarea ref={reviewCommentref}   className="inpreview review-input-for-comment review-input-border"  placeholder="Write your comment here" ></textarea>
                  </div>
                <div className="privacy-policy-for-comment">
                  <p className='comment-writing-email'>How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Fox CART’s <span className='comment-condition'>terms</span>, <span className='comment-condition'>privacy</span> and <span className='comment-condition'>content</span> policies.</p>
                </div>
                <div className='review-btn-container'>
                  <button onClick={()=>{ReviewSubmit(coursedetails.id),cancelreview()}} className='review-btn-submit review-btn'>Submit</button>
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
