import { useEffect, useState } from 'react';
import '../../../Styles/HomePageCSS/StudentJoin/StudentJoin.css'

import { FaArrowRight } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router-dom';

const StudentJoin = () => {

  useEffect(() => {
    
    const observercontent=document.querySelector('.student-join-container')as HTMLElement
    const observeelementone=document.querySelector('.student-join-image-one-insider-one')
    const observeelementtwo=document.querySelector('.student-join-image-one-insider-two')

    const observeelementthree=document.querySelector('.student-join-image-two-insider-one')
    const observeelementfour=document.querySelector('.student-join-image-two-insider-two')
    const observeelementfive=document.querySelector('.small-box-about-review-design')

    const observer=new IntersectionObserver(([entry])=>{
        if (entry.intersectionRatio>0.35) {
          observeelementone?.classList.add('student-join-image-one-insider-one-no-animation')
          observeelementtwo?.classList.add('student-join-image-one-insider-two-no-animation')
          observeelementthree?.classList.add('student-join-image-two-insider-one-no-animation')
          observeelementfour?.classList.add('student-join-image-two-insider-two-no-animation')
          observeelementfive?.classList.add('design-no-scale')
        }
        else{
          observeelementone?.classList.remove('student-join-image-one-insider-one-no-animation')
          observeelementtwo?.classList.remove('student-join-image-one-insider-two-no-animation')
          observeelementthree?.classList.remove('student-join-image-two-insider-one-no-animation')
          observeelementfour?.classList.remove('student-join-image-two-insider-two-no-animation')
          observeelementfive?.classList.remove('design-no-scale')
        }
      
      
      
    },{threshold: 0.35})



    if (observercontent) {
      observer.observe(observercontent)
      
    }
   
  
    return () => {
      if (observercontent) {
      observer.unobserve(observercontent)
    }
    
    }
  }, [])
  
  const [handX,setHandX]=useState(0)
  const [handY,setHandY]=useState(0)
    const MouseMoveEvent=(event:unknown)=>{

    
    const elementtargeting=event.currentTarget
    const viewelement=elementtargeting.getBoundingClientRect()

    const totwidht:number=event.clientX-viewelement.left
    const totheight:number=event.clientY-viewelement.top

    const offsetX:number=(totwidht/viewelement.width)*100
    const offsetY:number=(totheight/viewelement.height)*100
    setHandX(-offsetX/5)
    setHandY(-offsetY/5)

  }

  return (
    <div className='student-join-container' onMouseMove={(e)=>MouseMoveEvent(e)}>
      <div className='student-join-image-container'>
        <div className='small-box-about-review-design'>
          
            <div className='design-box-stud-reviews'>
              <p className='design-box-stud-rev'><span className='star-for-design-in-stug-join'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/> </span><span className='stud-join-design-para'>3.0</span></p>
            </div>
            <div className='number-of-student-reviewed'>
              <p  className='student-reviewed-number-para-one'>Learner Reviews</p>
              <p  className='student-reviewed-number-para-two'>+120</p>
            </div>
          
          
        </div>
        <div className='student-join-image-container-one'>
          <div className='student-join-image-one-insider-one'></div>
          <div className='student-join-image-one-insider-two'></div>
        </div>
        <div className='student-join-image-container-two'>
               <div className='student-join-image-two-insider-one'></div>
              <div className='student-join-image-two-insider-two'></div>
            
        </div>
      </div>
      
      <div className='student-join-content-container'>
        <div className="hand-shake-animation" style={{transform:`translateX(${handX}px) translateY(${handY}px)`,transitionDuration:'0.2s'}}></div>
        <div className="box-animation" > 
          <span className='inner-box-animation' style={{transform:`translateX(${-handX}px) translateY(${-handY}px)`,transitionDuration:'0.2s'}}></span>

        </div>
        <div className='main-title-in-student-join'>
          <p className='small-tit-in-student-join'>Academic Excellence</p>
          <div className='main-title-div-for-head-stud-join'>
            <p className='main-tit-one-stud-join'>Trusted by <span className='student-joinin-number'>25,000</span> happy</p>
            <p className='main-tit-two-stud-join'>Students and On the rise</p>
          </div>
          
          <p className='sub-tit-in-stud-join'>Over 25,000 students have chosen Mindspire for a flexible, expert-led learning journey. From live classes to on-demand sessions, our growing community trusts us to power their success.</p>
        </div>
        <div className='information-boxes-student-join'>
          <div className='information-box-one'>
            <div className='mode-of-student-join-one mode-of-stud-one'>
              <p>Online</p>
            </div>
            <div className='number-of-student-join-one'>
              <p  className='student-number-para-one'>Courses</p>
              <p  className='student-number-para-two'>+20</p>
            </div>
            <div className="break-circle-one"></div>
          </div>
          <div className='information-box-two'>
            <div className="break-circle-two"></div>
            <div className='mode-of-student-join-one mode-of-stud-two'>
              <p>Education</p>
            </div>
            <div className='number-of-student-join-one'>
              <p className='student-number-para-one'>Active Students</p>
              <p  className='student-number-para-two'>+320</p>
            </div>
          </div>
          <div className='small-box-about-review-design-cont'>
          
            <div className='design-box-stud-reviews'>
              <p className='design-box-stud-rev'><span className='star-for-design-in-stug-join'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/> </span><span className='stud-join-design-para'>3.0</span></p>
            </div>
            <div className='number-of-student-reviewed'>
              <p  className='student-reviewed-number-para-one'>Learner Reviews</p>
              <p  className='student-reviewed-number-para-two'>+120</p>
            </div>
          
          
        </div>
        </div>
        <div className='stud-join-main-btn'>
          <Link to={"Providing-Education's-in-Mindspire-Institute"} style={{textDecoration:'none'}} className='stud-join-btn'>View Programs <span className='span-for-btn-stud-join'><FaArrowRight/> </span><div className='design-div-for-tud-btn-join-stud'></div></Link>
        
        </div>
      </div>
    </div>
  )
}

export default StudentJoin
