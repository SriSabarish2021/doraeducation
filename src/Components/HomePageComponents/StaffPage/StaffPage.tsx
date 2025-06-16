import { useState } from 'react'
import '../../../Styles/HomePageCSS/StaffPage/StaffPage.css'
import { Image } from '@imagekit/react';
import { Video } from '@imagekit/react';
import { Link } from 'react-router-dom';

const StaffPage = () => {
  
  const [getoffsetXstaff,setoffsetXstaff]=useState(0)
  const [getoffsetYstaff,setoffsetYstaff]=useState(0)
   const MouseMoveEvent=(event:unknown)=>{
    
    
    const elementtargeting=event.currentTarget
    const viewelement=elementtargeting.getBoundingClientRect()

    const totwidht:number=event.clientX-viewelement.left
    const totheight:number=event.clientY-viewelement.top

    const offsetX:number=(totwidht/viewelement.width)*100
    const offsetY:number=(totheight/viewelement.height)*100
    setoffsetXstaff(-offsetX/10)
    setoffsetYstaff(-offsetY/10)

   }
   
  return (
    <div className='staff-page-container' onMouseMove={(e)=>MouseMoveEvent(e)}>
      <div className='staff-page-image-container'>
        <div className='staff-page-image-box-one'>
          
            <img src="./StaffPage/Staff-one.webp" alt="Staff Image "
            className='image-box-one-image Staff-Image-Scroll'/>
          <div className='image-box-one-totors'>
            <div className='tutors-img-tag'>
               <img src="./StaffPage/Top-staff-one.avif" alt="Staff Image"
             className='tutor-round tutor-one'/>
              <img src="./StaffPage/Top-staff-two.avif" alt="Staff Image"
             className='tutor-two'/>
              <img src="./StaffPage/Top-staff-three.avif" alt="Staff Image"
             className='tutor-three'/>
             <img src="./StaffPage/Top-staff-Four.avif" alt="Staff Image"
             className='tutor-four'/>
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
        <div className='staff-page-image-box-two'>
          <div className='image-box-two-imageone'>
              <Video 
                urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                src="./Home+1+Video.mp4"
                  autoPlay
                muted 
                loop
                className='video-tag'
                />
              <div className='vid-cont-img-one'>
                <p className='our-story'>Our Story</p>
              </div>
          </div>
           <img src="./StaffPage/Staff-page-img.webp" alt="Staff Image "
             className='image-box-two-imagetwo Staff-Image-Scroll'/>
          
        </div>
      </div>
      <div className='staff-page-content-container'>
        <div className='short-title-staff-page'>
          <div className='line-img-tag'></div>
          <p className='flexible-short-tit'>FLEXIBLE SUPPORTED LEARNING</p> 
        </div>
        
        <div className='tutor-title-content'>
            <div className='heading-tutor'>
              <p className='heading-tutor-p-one'>Expertise Across <span   className='span-in-analysis' >All</span> </p>
              <p className='heading-tutor-p-two'  style={{transform:`translateX(${getoffsetXstaff}px) translateY(${getoffsetYstaff}px)`,transitionDuration:'0.2s'}} >Disciplines</p>
            </div>
            <div className='sub-heading-tutor'>
                <p className='sub-heading-tutor-p-one'> At MindSpire, our teachers are more than educators — they are mentors who ignite curiosity and inspire achievement. Their unwavering dedication shapes confident, lifelong learners ready for tomorrow.</p>
            </div> 

          
      
        </div>
        <div className='total-number-in-staff-achievements'>
          <div className='number-analysis-box-one'>
            <div className='number-analysis-one'>
              <div className='analysis-tag-img-one'>
                <div className='img-for-analysis'></div>
              </div>
              <div className='analysis-tag-content-one'>
                <p  className='analysis-num'>70%</p>
                <p className='analysis-cont'>70% of our  educators have 5+ years of experience, enriching classrooms.</p>
              </div>
            </div>
            <div className='number-analysis-two'>
              <div className='analysis-tag-img-two'>
                <div className='img-for-analysis'></div>
              </div>
              <div className='analysis-tag-content-two'>
                <p className='analysis-num'>9/10</p>
                <p className='analysis-cont'>9 out of 10 teachers exceed benchmarks, showing dedication.</p>
              </div>
            </div>
          </div>
          <div className='number-analysis-box-two'>
            <div className='number-analysis-three'>
              <div className='analysis-tag-img-three'>
                <div className='img-for-analysis'></div>
              </div>
              <div className='analysis-tag-content-three'>
                <p className='analysis-num'>95%</p>
                <p className='analysis-cont'>Our faculty hold advanced degrees and provide excellent guidance.
</p>
              </div>
            </div>
            <div className='number-analysis-four'>
              <div className='analysis-tag-img-four'>
                <div className='img-for-analysis'></div>
              </div>
              <div className='analysis-tag-content-four'>
                <p className='analysis-num'>10+</p>
                <p className='analysis-cont'>10 staff excel in personalized academic and career guidance.</p>
              </div>
              
              
            </div>
          </div>
        </div>
        <Link to={'About-Mindspire-Institute'} style={{textDecoration:'none'}} className='btn-in-tutor-analysis'>Learn More
          <div className='btn-animation-in-staff-page'>

          </div>
        </Link>
      </div>
    </div>
  )
}

export default StaffPage
