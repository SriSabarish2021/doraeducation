import '../../../Styles/HomePageCSS/WhyChoose/WhyChoose.css'
import { MdDone } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const WhyChoose = () => {
     useEffect(() => {
            
        
            const getelementoneinwhychoose=document.querySelector('.why-choose-container') 
              const getanimateelementoneinwhychoose=document.querySelector('.image-design-one')        
              
              const getanimateelementtwoinwhychoose=document.querySelector('.image-design-two') 
            
            const observerinabout=new IntersectionObserver(([entry])=>{
              if (entry.intersectionRatio>0.6) {
               
                if (getanimateelementoneinwhychoose) {
                    getanimateelementoneinwhychoose.classList.add('nomove-img-about-one')
                }
                if (getanimateelementtwoinwhychoose) {
                    getanimateelementtwoinwhychoose.classList.add('nomove-img-about-two')
                }
                
              }
              else{
                
                if (getanimateelementoneinwhychoose) {
                    getanimateelementoneinwhychoose.classList.remove('nomove-img-about-one')
                }
                if (getanimateelementtwoinwhychoose) {
                    getanimateelementtwoinwhychoose.classList.remove('nomove-img-about-two')
                }
              }
            
            },{threshold:0.6})
        
            if (getelementoneinwhychoose) {
                  observerinabout.observe(getelementoneinwhychoose)
            }
        
        
             return () => {
              
              if (getelementoneinwhychoose) {
                    observerinabout.unobserve(getelementoneinwhychoose)
              }     
          }
            
            
          },[])

          useEffect(() => {
            
        
            const getelementoneinwhychoose=document.querySelector('.why-choose-container') 
              const getanimateelementoneinwhychoose=document.querySelector('.image-design-one-cont') 
              
              const getanimateelementtwoinwhychoose=document.querySelector('.image-design-two-cont') 
            const observerinabout=new IntersectionObserver(([entry])=>{
              if (entry.intersectionRatio>0.6) {
               
                if (getanimateelementoneinwhychoose) {
                    getanimateelementoneinwhychoose.classList.add('nomove-img-about-one')
                }
                if (getanimateelementtwoinwhychoose) {
                    getanimateelementtwoinwhychoose.classList.add('nomove-img-about-two')
                }
                
              }
              else{
                
                if (getanimateelementoneinwhychoose) {
                    getanimateelementoneinwhychoose.classList.remove('nomove-img-about-one')
                }
                if (getanimateelementtwoinwhychoose) {
                    getanimateelementtwoinwhychoose.classList.remove('nomove-img-about-two')
                }
              }
            
            },{threshold:0.6})
        
            if (getelementoneinwhychoose) {
                  observerinabout.observe(getelementoneinwhychoose)
            }
        
        
             return () => {
              
              if (getelementoneinwhychoose) {
                    observerinabout.unobserve(getelementoneinwhychoose)
              }     
          }
            
            
          },[])



      const getoffsetXwhy=useRef(0)
      const getoffsetYwhy=useRef(0)

      const getoffsetwhycomponent=useRef(null)
const getoffsetwhycomponenttwo=useRef(null)
const getoffsetwhycomponentthree=useRef(null)
    const MouseMoveEvent=(event)=>{
    
    
    const elementtargeting=event.currentTarget
    const viewelement=elementtargeting.getBoundingClientRect()

    const totwidht=event.clientX-viewelement.left
    const totheight=event.clientY-viewelement.top

    const offsetX=(totwidht/viewelement.width)*100
    const offsetY=(totheight/viewelement.height)*100
    getoffsetXwhy.current=-offsetX/5
    getoffsetYwhy.current=-offsetY/5

    if (getoffsetwhycomponent.current) {
        getoffsetwhycomponent.current.style.transform=`translateX(${-getoffsetXwhy.current}px) translateY(${-getoffsetYwhy.current}px)`
    }
     if (getoffsetwhycomponenttwo.current) {
        getoffsetwhycomponenttwo.current.style.transform=`translateX(${getoffsetXwhy.current}px) translateY(${getoffsetYwhy.current}px)`
    }
     if (getoffsetwhycomponentthree.current) {
        getoffsetwhycomponentthree.current.style.transform=`translateX(${-getoffsetXwhy.current}px) translateY(${-getoffsetYwhy.current}px)`
    }

   }
  return (
    <div className="why-choose-container" onMouseMove={(e)=>MouseMoveEvent(e)}>
        <div className='image-design-one-cont' >

                    <div className='image-box-one-totors'>
                        <div className='tutors-img-tag'>
                            <div className='tutor-round tutor-one'></div>
                            <div className='tutor-two'></div>
                            <div className='tutor-three'></div>
                            <div className='tutor-four'></div>
                            <div className='tutor-five'>
                                <p>+50</p>
                            </div>
                        </div>
                        <div className='tutor-cont'>
                            <p className='top-mentor'>Top-Mentors</p>
                            <p className='top-mentor-sub'>Around the Globe</p>
                        </div>
                    </div>
                </div>
                <div className='image-design-two-cont'>
                    <p className='success-rate'><IoIosStar className='star-in-sucess-rate'/>Success Rate 4.9</p>
                    <div className='line-div-one'>
                        <div className="line-div-one-inner"></div>
                        <div className='line-year'>
                            <p>2024</p>
                        </div>
                    </div>
                    <div className='line-div-two'>
                        <div className="line-div-two-inner"></div>
                        <div className='line-year'>
                            <p>2023</p>
                        </div>
                    </div>
                </div>
        <div className='why-choose-cont'>
             
            <div className='rounded-desing' ref={getoffsetwhycomponent} style={{transitionDuration:'0.2s'}}></div>
            <div className='why-choose-main-title'>
                <p className='why-choose'>Why Mindspire ?</p>
                <div className='Why-choose-title'>
                    <p className='Why-choose-title-one'>Not sure <span className='why-choose-tit-span'>where to begin?<span className='design-for-why-choose-tit-span'></span></span> <span className='start-with-tit'>Start</span></p>
                    <p className='Why-choose-title-two'> with Mindspire </p>
                </div>
                <p className='para-why-choose'>Choose Mindspire — where expert guidance and personalized learning come together. We nurture your strengths and inspire growth at every step. Join us to unlock your potential and build a future full of opportunities.</p>
            </div>
            <div className='why-choose-order-list'>
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>Innovative Teaching Methods</p>
                <p className='why-choose-ol'><span className='why-choose-ol-span'> <MdDone/></span>Proven Track Record</p>
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>Career-Focused Training</p> 
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>Skill-Driven Education</p>
                <p  className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>Real-World Curriculum</p>
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>Personalized Learning</p>
            </div>
            <Link to={'About-Mindspire-Institute'} style={{textDecoration:'none'}} className='why-choose-btn'>Why? Mindspire <div className='why-choose-btn-animation'></div></Link>
        </div>
        <div className='why-choose-img'>
                <div className='image-design-one' >

                    <div className='image-box-one-totors'>
                        <div className='tutors-img-tag'>
                            <div className='tutor-round tutor-one'></div>
                            <div className='tutor-two'></div>
                            <div className='tutor-three'></div>
                            <div className='tutor-four'></div>
                            <div className='tutor-five'>
                                <p>+50</p>
                            </div>
                        </div>
                        <div className='tutor-cont'>
                            <p className='top-mentor'>Top-Mentors</p>
                            <p className='top-mentor-sub'>Around the Globe</p>
                        </div>
                    </div>
                </div>
                <div className='image-design-two'>
                    <p className='success-rate'><IoIosStar className='star-in-sucess-rate'/>Success Rate 4.9</p>
                    <div className='line-div-one'>
                        <div className="line-div-one-inner"></div>
                        <div className='line-year'>
                            <p>2024</p>
                        </div>
                    </div>
                    <div className='line-div-two'>
                        <div className="line-div-two-inner"></div>
                        <div className='line-year'>
                            <p>2023</p>
                        </div>
                    </div>
                </div>
            <div className='why-choose-img-div'>
                
            </div>

            <div className='why-choose-img-style' ref={getoffsetwhycomponenttwo} style={{transitionDuration:'0.2s'}}></div>  
            <div className='why-choose-img-style-two' ref={getoffsetwhycomponentthree} style={{transitionDuration:'0.2s'}}></div>
        </div>

    </div>
  )
}

export default WhyChoose
