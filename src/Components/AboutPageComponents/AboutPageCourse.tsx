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
      <div className='about-page-course-box'></div>
      <div className='about-page-analysis-box'>
        
        <div className='about-page-analysis-content'>
          <div className='about-bottom-white'></div>
          <div className='about-page-analysis-content-showing'>
            <div className='about-page-analysis-head'>
              <p className='about-analysis-head-para-one'>University is the <span className='span-title-for-head-para'>Best Time</span></p>
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
      <div className='why-showing-container'>
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
            <p className='why-about-page-sub-main'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quo iusto provident consectetur possimus porro corrupti consequuntur consequatur sint accusantium?</p>
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
                <p className='why-cont-head'>Heading TiTLE</p>
                <p className='why-cont-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum officiis officia ut perspiciatis at!</p>
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
                 <p className='why-cont-head'>Heading TiTLE</p>
                <p className='why-cont-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum officiis officia ut perspiciatis at!</p>
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
                       <p className='why-cont-head'>Heading TiTLE</p>
                <p className='why-cont-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum officiis officia ut perspiciatis at!</p>
              </div>
        
            </div>
            </div>
           
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPageCourse
