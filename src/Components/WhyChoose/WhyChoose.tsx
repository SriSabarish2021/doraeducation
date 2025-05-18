import '/src/Styles/WhyChoose.css'
import { MdDone } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { useEffect, useState } from 'react';

const WhyChoose = () => {
     useEffect(() => {
            
        
            const getelementoneinwhychoose=document.querySelector('.why-choose-container') as HTMLElement;
              const getanimateelementoneinwhychoose=document.querySelector('.image-design-one') as HTMLElement;       
              
              const getanimateelementtwoinwhychoose=document.querySelector('.image-design-two') as HTMLElement;
            
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

      const [getoffsetXwhy,setoffsetXwhy]=useState(0)
      const [getoffsetYwhy,setoffsetYwhy]=useState(0)
    const MouseMoveEvent=(event:unknown)=>{
    
    
    const elementtargeting=event.currentTarget
    const viewelement=elementtargeting.getBoundingClientRect()

    const totwidht:number=event.clientX-viewelement.left
    const totheight:number=event.clientY-viewelement.top

    const offsetX:number=(totwidht/viewelement.width)*100
    const offsetY:number=(totheight/viewelement.height)*100
    setoffsetXwhy(-offsetX/10)
    setoffsetYwhy(-offsetY/10)

   }
  return (
    <div className="why-choose-container" onMouseMove={(e)=>MouseMoveEvent(e)}>
        <div className='why-choose-cont'>
            <div className='rounded-desing' style={{transform:`translateX(${-getoffsetXwhy}px) translateY(${-getoffsetYwhy}px)`,transitionDuration:'0.2s'}}></div>
            <div className='why-choose-main-title'>
                <p className='why-choose'>Why Mindspire ?</p>
                <div className='Why-choose-title'>
                    <p className='Why-choose-title-one'>Don’t Know <span className='why-choose-tit-span'>How To Start <div className='design-for-why-choose-tit-span'></div></span> With</p>
                    <p className='Why-choose-title-two'>Quiklearn Courses</p>
                </div>
                <p className='para-why-choose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae saepe doloribus cum unde dolorem ipsa eligendi, illum aut officiis voluptatibus.</p>
            </div>
            <div className='why-choose-order-list'>
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>Special Lessons And Courses</p>
                <p className='why-choose-ol'><span className='why-choose-ol-span'> <MdDone/></span>World Largest Language</p>
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>15 Language For Beginners</p> 
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>Get Every General Answers</p>
                <p  className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>A Residential Campus</p>
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>A Residential Campus</p>
            </div>
            <button className='why-choose-btn'>Lear More <div className='why-choose-btn-animation'></div></button>
        </div>
        <div className='why-choose-img'>
            <div className='why-choose-img-div'>
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
            </div>

            <div className='why-choose-img-style' style={{transform:`translateX(${-getoffsetXwhy}px) translateY(${-getoffsetYwhy}px)`,transitionDuration:'0.2s'}}></div>  
            <div className='why-choose-img-style-two' style={{transform:`translateX(${getoffsetXwhy}px) translateY(${getoffsetYwhy}px)`,transitionDuration:'0.2s'}}></div>
        </div>

    </div>
  )
}

export default WhyChoose
