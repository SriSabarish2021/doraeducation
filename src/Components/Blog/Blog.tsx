import { useState } from 'react';
import '/src/Styles/Blog.css'
import { FaCircleArrowRight } from "react-icons/fa6";

const Blog = () => {

  const [blogmoveX,setblogmoveX]=useState(0)
  const [blogmoveY,setblogmoveY]=useState(0)
  
   const MouseMoveEvent=(event:unknown)=>{

    
    const elementtargeting=event.currentTarget
    const viewelement=elementtargeting.getBoundingClientRect()

    const totwidht:number=event.clientX-viewelement.left
    const totheight:number=event.clientY-viewelement.top

    const offsetX:number=(totwidht/viewelement.width)*100
    const offsetY:number=(totheight/viewelement.height)*100
    setblogmoveX(-offsetX/10)
    setblogmoveY(-offsetY/10)

  }
  
  return (
    <div className='blog-main-container' onMouseMove={(e)=>MouseMoveEvent(e)}>
      <div className='blog-container-title-div'>
        <p className='blog-site-name' style={{transform:`translateX(${blogmoveX}px) translateY(${blogmoveY}px)`,transitionDuration:'0.2s'}}>MindSpires's</p>
        <p className='blog-site-sub-name'>Blog, News & Updates</p>
      </div>
      <div className='blog-container-main-content-div'>
        <div className='blog-news-one-div'>
          <div className='blog-image-container'></div>
          <div className='blog-content-container'>
            <div className='blog-upload-date'>
               <p>March 20 2023</p>
            </div>
            <div className='blog-news-main-content'>
              <p className='blog-main-cont-para-one'>Lorem ipsum, dolor sit amet co</p>
              <p className='blog-main-cont-para-two'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, velit.</p>
            </div>
            <button className='read-news-btn'>Read News <FaCircleArrowRight className='right-btn-icon'/></button>
          </div>
        </div>
        <div className='blog-news-two-div'>
          <div className='blog-image-container'></div>
          <div className='blog-content-container'>
             <div className='blog-upload-date'>
               <p>March 20 2023</p>
            </div>
            <div className='blog-news-main-content'>
              <p className='blog-main-cont-para-one'>Lorem ipsum, dolor sit amet co</p>
              <p className='blog-main-cont-para-two'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, velit.</p>
            </div>
            <button className='read-news-btn'>Read News <FaCircleArrowRight className='right-btn-icon'/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
