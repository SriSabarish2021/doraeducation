import { useEffect, useState } from 'react';

import '../../../Styles/HomePageCSS/HomeMain/HomeMain.css'

import { IoIosStar } from "react-icons/io";
import { Image } from '@imagekit/react';
import { Link } from 'react-router-dom';


const HomeMain = () => {


  useEffect(() => {
    

    const getelementone=document.querySelector('.home-main-for-intro') as HTMLElement
    const getanimateelementone=document.querySelector('.smallcontent-one-home') as HTMLElement
    const observer=new IntersectionObserver(([entry])=>{
      if (entry.intersectionRatio>0.7) {
        if (getanimateelementone) {
                  getanimateelementone?.classList.add('smallcontent-one-home-move')

        }
        
      }
    
    },{threshold:0.7})

    if (getelementone) {
          observer.observe(getelementone)
    }



    const getelementtwo=document.querySelector('.home-main-for-intro') as HTMLElement
    const getanimateelementtwo=document.querySelector('.smallcontent-two-home') as HTMLElement
    const observertwo=new IntersectionObserver(([entry])=>{
      if (entry.intersectionRatio>0.7) {
        if (getanimateelementtwo) {
                  getanimateelementtwo?.classList.add('smallcontent-two-home-move')

        }
        
      }
      
    },{threshold:0.7})

    if (getelementtwo) {
          observertwo.observe(getelementtwo)
    }
     return () => {
      if (getelementone) {
          observer.unobserve(getelementone)
      } 
      if (getelementtwo) {
            observertwo.unobserve(getelementtwo)
      }     
  }
    
    
  },[])
  useEffect(() => {
    

    const getelementone=document.querySelector('.home-main-for-intro') as HTMLElement
    const getanimateelementone=document.querySelector('.smallcontent-one-home-cont') as HTMLElement
    const observer=new IntersectionObserver(([entry])=>{
      if (entry.intersectionRatio>0.7) {
        if (getanimateelementone) {
                  getanimateelementone?.classList.add('smallcontent-one-home-move')

        }
        
      }
    
    },{threshold:0.7})

    if (getelementone) {
          observer.observe(getelementone)
    }



    const getelementtwo=document.querySelector('.home-main-for-intro') as HTMLElement
    const getanimateelementtwo=document.querySelector('.smallcontent-two-home-cont') as HTMLElement
    const observertwo=new IntersectionObserver(([entry])=>{
      if (entry.intersectionRatio>0.7) {
        if (getanimateelementtwo) {
                  getanimateelementtwo?.classList.add('smallcontent-two-home-move')

        }
        
      }
      
    },{threshold:0.7})

    if (getelementtwo) {
          observertwo.observe(getelementtwo)
    }
     return () => {
      if (getelementone) {
          observer.unobserve(getelementone)
      } 
      if (getelementtwo) {
            observertwo.unobserve(getelementtwo)
      }     
  }
    
    
  },[])
  const [getoffsetX,setoffsetX]=useState(0)
  const [getoffsetY,setoffsetY]=useState(0)

   const MouseMoveEvent=(event:unknown)=>{

    
    const elementtargeting=event.currentTarget
    const viewelement=elementtargeting.getBoundingClientRect()

    const totwidht:number=event.clientX-viewelement.left
    const totheight:number=event.clientY-viewelement.top

    const offsetX:number=(totwidht/viewelement.width)*100
    const offsetY:number=(totheight/viewelement.height)*100
    setoffsetX(-offsetX/10)
    setoffsetY(-offsetY/10)

  }
  


  
 

  return (
    <div className='Home-Main-Top'>
      
      <div className='home-main-container'>
          <div className='home-main-for-intro' onMouseMove={(e)=>MouseMoveEvent(e)}>
            <div className='man-img-for-home'>
              <div className='rouonded-bg-home'>
                
              </div>
              <Image
                urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                src="/man-image.png"
                
                alt="Student Image"
                className='man-image-in-home-img'
                
              />
              <div className='smalldesign-two-home' style={{transform:`translateX(${getoffsetX}px) translateY(${getoffsetY}px)`,transitionDuration:'0.3s'}}></div>
              <div className='smalldesign-four-home' style={{transform:`translateX(${getoffsetX}px) translateY(${getoffsetY}px)`}}></div>
              <div className='smalldesign-five-home' style={{transform:`translateX(${getoffsetX}px) translateY(${getoffsetY}px)`}}></div>

              <div className='smallcontent-one-home' >
                <div className='smallcontent-img'>
                  <img className='img-for-small-cont' src="./HomeImg/read.png" alt="" />
                </div>
                <div className='smallcontent-content'>
                  <p className='p-one-small-cont'>10K</p>
                  <p  className='p-two-small-cont'>Students</p>
                </div>
                
              </div>
              <div className='smallcontent-two-home' >
                <div className='smallcontent-img'>
                  <img className='img-for-small-cont' src="./HomeImg/online-learning.png" alt="" />
                </div>
                <div className='smallcontent-content'>
                  <p className='p-one-small-cont'>20+</p>
                  <p  className='p-two-small-cont'>Online Courses</p>
                </div>
                
              </div>
            </div>
            <div className='home-content-div'>
              <div className='smallcontent-one-home-cont' >
                <div className='smallcontent-img'>
                  <img className='img-for-small-cont' src="./HomeImg/read.png" alt="" />
                </div>
                <div className='smallcontent-content'>
                  <p className='p-one-small-cont'>10K</p>
                  <p  className='p-two-small-cont'>Students</p>
                </div>
                
              </div>
              <div className='smallcontent-two-home-cont' >
                <div className='smallcontent-img'>
                  <img className='img-for-small-cont' src="./HomeImg/online-learning.png" alt="" />
                </div>
                <div className='smallcontent-content'>
                  <p className='p-one-small-cont'>20+</p>
                  <p  className='p-two-small-cont'>Online Courses</p>
                </div>
                
              </div>
              <div className='tit-for-home-content'>
                <div className='top-border-div-home'></div>
                <div className='main-cont-home'>
                  <p className='main-cont-one'>The Worlds Best Online</p>
                  <p className='main-cont-two'> Education Institude</p>
                </div>
              </div>
              <div  className='subtit-for-home-content'>
                <p className='para-for-sub-cont'>Empowering minds of all ages in a vibrant space where learning comes to life, curiosity is guided with creativity, and a brighter future is built one student at a time.</p>
              </div>
              <div  className='search-for-home-content'>
                <div className='inpt-box-home'>
                  <input className='inp-bar-home' type="text" placeholder='Search for Courses'/>
                  <Link style={{textDecoration:'none'}} to={"Providing-Education's-in-Mindspire-Institute"} className='inp-bar-search-btn'>Search
                    <span className='hover-btn-design'></span>
                  </Link>
                </div>
                <div className='search-below'>
                  <p className='home-qual-para'><span className='star-span'><IoIosStar/><IoIosStar/> <IoIosStar/> <IoIosStar/> <IoIosStar/> </span>5-Star ratings on G2, Discord and More</p>
                </div>
              </div>

              <div className='smalldesign-one-home' style={{transform:`translateX(${getoffsetX}px) translateY(${getoffsetY}px)`,transitionDuration:'0.2s'}}></div>
              <div className='smalldesign-three-home' style={{transform:`translateX(${getoffsetX}px) translateY(${getoffsetY}px)`,transitionDuration:'0.5s'}}></div>
            </div>
            <p className='learn-p-in-bottom'>LEARN FUNDAMENTALS</p>
            <div className='light-design-one'></div>
            <div className='light-design-two'></div>
            <div className='light-design-three'></div>
            <div className='light-design-four'></div>
            <div className='light-design-five'></div>
          </div>
          <div className='home-main-for-design'>
            <div className='div-for-bottom-image-clody'></div>
          </div>
        
      </div>
    </div>
    
  )
}

export default HomeMain
