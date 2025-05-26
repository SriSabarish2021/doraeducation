import { useEffect } from 'react'
import '../../Styles/AboutPageCSS/AboutPageCourse.css'

const AboutPageCourse = () => {
  
  useEffect(() => {

    const observingelement=document.querySelector('.about-page-analysis-box')
    const targetelementone=document.querySelector('.about-page-analysis-imgae-design')
    const targetelementtwo=document.querySelector('.analysis-design-one-about-page')
    const targetelementthree=document.querySelector('.analysis-design-two-about-page')
    const targetelementfour=document.querySelector('.analysis-design-three-about-page')
    const observer=new IntersectionObserver(([entry])=>{
      if (entry.intersectionRatio>0.4) {
        console.log('sdsd');
        targetelementtwo?.classList.add('about-analysis-cont-no-move')
        targetelementthree?.classList.add('about-analysis-cont-no-move')
        targetelementfour?.classList.add('about-analysis-cont-no-move')
        targetelementone?.classList.add('about-page-analysis-imgae-design-no-move')
      }else{
        console.log('no');
      targetelementone?.classList.remove('about-page-analysis-imgae-design-no-move')
      targetelementtwo?.classList.remove('about-analysis-cont-no-move')
        targetelementthree?.classList.remove('about-analysis-cont-no-move')
        targetelementfour?.classList.remove('about-analysis-cont-no-move')
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
      <div className='about-page-course-box'></div>
      <div className='about-page-analysis-box'>
        <div className='about-page-analysis-content'>
          <div className='about-page-analysis-content-showing'>
            <div className='about-page-analysis-head'>
              <p className='about-analysis-head-para-one'>University is the Best Time</p>
              <p className='about-analysis-head-para-two'>of Your Life.</p>
            </div>
            <p className='about-analysis-sub-head-para'>Explore university’s 20+ courses across various specialisations that
              provoke intellectual and intuitive learning among students.</p>
              <button className='about-page-analysis-btn'>View More</button>
          </div>
          <div className='about-page-analysis-imgae-design'></div>
          
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
        
      </div>
    </div>
  )
}

export default AboutPageCourse
