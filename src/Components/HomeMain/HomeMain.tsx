import { useEffect } from 'react';
import '/src/Styles/HomeMain.css'
import { IoIosStar } from "react-icons/io";

const HomeMain = () => {


  useEffect(() => {
    

    let getelementone=document.querySelector('.home-main-for-intro')
    let getanimateelementone=document.querySelector('.smallcontent-one-home')
    let observer=new IntersectionObserver(([entry])=>{
      if (entry.intersectionRatio>0.7) {
        console.log('heloo');
        if (getanimateelementone) {
                  getanimateelementone?.classList.add('smallcontent-one-home-move')

        }
        
      }
    
    },{threshold:0.7})

    if (getelementone) {
          observer.observe(getelementone)
    }



    let getelementtwo=document.querySelector('.home-main-for-intro')
    let getanimateelementtwo=document.querySelector('.smallcontent-two-home')
    let observertwo=new IntersectionObserver(([entry])=>{
      if (entry.intersectionRatio>0.7) {
        console.log('heloo');
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
    
    
  })
  


  
 

  return (
    <div className='home-main-container'>
        <div className='home-main-for-intro'>
          <div className='man-img-for-home'>
            <div className='rouonded-bg-home'>
              
            </div>
            <div className='man-image-in-home'></div>

            <div className='smalldesign-two-home'></div>
            <div className='smalldesign-four-home'></div>
            <div className='smalldesign-five-home'></div>

            <div className='smallcontent-one-home'>
              <div className='smallcontent-img'>
                <img className='img-for-small-cont' src="./HomeImg/read.png" alt="" />
              </div>
              <div className='smallcontent-content'>
                <p className='p-one-small-cont'>10K</p>
                <p  className='p-two-small-cont'>Students</p>
              </div>
              
            </div>
            <div className='smallcontent-two-home'>
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
                <button className='inp-bar-search-btn'>Search
                  <span className='hover-btn-design'></span>
                </button>
              </div>
              <div className='search-below'>
                <p className='home-qual-para'><span className='star-span'><IoIosStar/><IoIosStar/> <IoIosStar/> <IoIosStar/> <IoIosStar/> </span>5-Star ratings on G2, Discord and More</p>
              </div>
            </div>

            <div className='smalldesign-one-home'></div>
            <div className='smalldesign-three-home'></div>
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
  )
}

export default HomeMain
