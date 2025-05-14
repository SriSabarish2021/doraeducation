import { useState } from 'react'
import '/src/Styles/StaffPage.css'
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
          <div className='image-box-one-image'></div>
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
        <div className='staff-page-image-box-two'>
          <div className='image-box-two-imageone'>
            <video  className='video-tag'
              src='./StaffPage/Home+1+Video.mp4'
              autoPlay
              muted 
              loop>
              
              </video>
              <div className='vid-cont-img-one'>
                <p className='our-story'>Our Story</p>
              </div>
          </div>
           
          <div className='image-box-two-imagetwo'></div>
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
                <p className='sub-heading-tutor-p-one'> Metus dictum at tempor commodo ullamcorper a lacus vestibulum. In hendrerit gravida rutrum quisque non tellus. Egestas sed sed risus pretium quam vulputate.</p>
            </div> 

          
      
        </div>
        <div className='total-number-in-staff-achievements'>
          <div className='number-analysis-box-one'>
            <div className='number-analysis-one'>
              <div className='analysis-tag-img-one'>
                <div className='img-for-analysis'></div>
              </div>
              <div className='analysis-tag-content-one'>
                <p  className='analysis-num'>70M</p>
                <p className='analysis-cont'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, tenetur?</p>
              </div>
            </div>
            <div className='number-analysis-two'>
              <div className='analysis-tag-img-two'>
                <div className='img-for-analysis'></div>
              </div>
              <div className='analysis-tag-content-two'>
                <p className='analysis-num'>9/10</p>
                <p className='analysis-cont'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, tenetur?</p>
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
                <p className='analysis-cont'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, tenetur?</p>
              </div>
            </div>
            <div className='number-analysis-four'>
              <div className='analysis-tag-img-four'>
                <div className='img-for-analysis'></div>
              </div>
              <div className='analysis-tag-content-four'>
                <p className='analysis-num'>50K</p>
                <p className='analysis-cont'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, tenetur?</p>
              </div>
              
              
            </div>
          </div>
        </div>
        <button className='btn-in-tutor-analysis'>Lear More
          <div className='btn-animation-in-staff-page'>

          </div>
        </button>
      </div>
    </div>
  )
}

export default StaffPage
