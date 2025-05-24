import { useState } from 'react';
import '../../../Styles/HomePageCSS/ProgAdvantage/ProgAdvantage.css'
import { FaArrowRight } from "react-icons/fa6";
import { Image } from '@imagekit/react';

const ProgAdvantage = () => {
    
      const [AdvanX,setAdvanX]=useState(0)
      const [AdvanY,setAdvanY]=useState(0)
        const MouseMoveEvent=(event:unknown)=>{
    
        
        const elementtargeting=event.currentTarget
        const viewelement=elementtargeting.getBoundingClientRect()
    
        const totwidht:number=event.clientX-viewelement.left
        const totheight:number=event.clientY-viewelement.top
    
        const offsetX:number=(totwidht/viewelement.width)*100
        const offsetY:number=(totheight/viewelement.height)*100
        setAdvanX(-offsetX/5)
        setAdvanY(-offsetY/5)
    
      }
  return (
    <div className='prog-advantage-main-container' onMouseMove={(e)=>MouseMoveEvent(e)}>
        <div className='dotted-animation' style={{transform:`translateX(${AdvanX}px) translateY(${AdvanY}px)`,transitionDuration:'0.2s'}}></div>
        <div className='prog-advantage-image-container'>
            <div className='image-tag-prog-advantage'>
                <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/side-img-one.avif"
                    alt="Student Image"
                    className='prog-advantage-image-one'
                />
                <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/side-img-two.avif"
                    alt="Student Image"
                    className='prog-advantage-image-two'       
                />
                <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/side-img-three.avif"   
                    alt="Student Image"
                    className='prog-advantage-image-three'  
                />
            </div>
        </div>
        <div className='prog-advantage-content-container'>
            <div className='prog-advantage-title-bar'>
                <div className='prog-advantage-tit-image'></div>
                <div className='prog-advantage-tit-cont'>
                    <p className='advan-tit-para-one'>Advantages Of <span className='span-tit-in-prog-advantage'>Our Program</span></p>
                    <p className='advan-tit-para-two'>At Mindspire Institute, our courses blend expert instruction, real-world content, and hands-on learning. With flexible schedules and personalized support, we help students build the skills and confidence to achieve their goals.</p>
                </div>
            </div>
            <div className='prog-advantage-progress-bar'>
                <div className='progress-one'>
                    <p className='progress-para'>Education : <span className='percentage-progress'>80%</span></p>
                    <div className='progress-line'>
                        <div className='progress-inner-line'></div>
                    </div>
                </div>
                <div className='progress-two'>
                    <p className='progress-para'>Innovation : <span className='percentage-progress'>80%</span></p>
                    <div className='progress-line'>
                        <div className='progress-inner-line'></div>
                    </div>
                </div>
                <div className='progress-three'>
                    <p className='progress-para'>Growth : <span className='percentage-progress'>80%</span></p>
                    <div className='progress-line'>
                        <div className='progress-inner-line'></div>
                    </div>
                </div>
            </div>
            <button className='prog-advantage-btn'>Learn More<FaArrowRight className='arrow-btn-prog-advantage-by'/>
                <div className='btn-design-in-prog-advantage-by-one'></div>
                <div className='btn-design-in-prog-advantage-by-two'></div> 
            </button>
        </div>
    </div>
  )
}

export default ProgAdvantage
