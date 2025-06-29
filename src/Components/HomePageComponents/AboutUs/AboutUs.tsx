import { useEffect } from 'react';
import '../../../Styles/HomePageCSS/AboutUs/AboutUs.css'
import { MdDone } from "react-icons/md";
import { Image } from '@imagekit/react';
import { Link } from 'react-router-dom';

const AboutUs = () => {

 useEffect(() => {
        
    
       const getelementoneinabout=document.querySelector('.about-us-container') as HTMLElement;
          const getanimateelementoneinaboutud=document.querySelector('.about-us-image-one') as HTMLElement;       
          
          const getanimateelementtwoinaboutus=document.querySelector('.about-us-image-two') as HTMLElement;
        
        const observerinabout=new IntersectionObserver(([entry])=>{
          if (entry.intersectionRatio>0.5) {
           
            if (getanimateelementoneinaboutud) {
                getanimateelementoneinaboutud.classList.add('noscale-img-about-one')
            }
            if (getanimateelementtwoinaboutus) {
                getanimateelementtwoinaboutus.classList.add('noscale-img-about-two')
            }
            
          }
          else{
            
            if (getanimateelementoneinaboutud) {
                getanimateelementoneinaboutud.classList.remove('noscale-img-about-one')
            }
            if (getanimateelementtwoinaboutus) {
                getanimateelementtwoinaboutus.classList.remove('noscale-img-about-two')
            }
          }
        
        },{threshold:0.5})
    
        if (getelementoneinabout) {
              observerinabout.observe(getelementoneinabout)
        }
    
    
         return () => {
          
          if (getelementoneinabout) {
                observerinabout.unobserve(getelementoneinabout)
          }     
      }
        
        
      },[])


   

  return (
    <div className='about-us-container'>
      <div className='bubble-boxer'></div>
        <div className='ball-move-animation-main'>
            <div className='ball-div ball-arrow-one'></div>
            <div  className='ball-div  ball-arrow-two'></div>
            <div  className='ball-div  ball-arrow-three'></div>
            <div  className='ball-div  ball-arrow-four'></div>
            <div className='ball-div ball-arrow-five' ></div>
        </div>
      <div className='about-us-image-container'>
        <div className='about-image-box-one'>
          <div className='about-us-image-cont-one'>
            <div className='about-us-content-one-inner'>
              <p className='about-us-one-para-one'>20+</p>
              <p className='about-us-one-para-two'>Year of Excellence in Education</p>
            </div>
          </div>
           <Image
            urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
            src="/about-thumb-02.webp"
            
            alt='study-image' 
            className='about-us-image-one'
            
          />
        </div>
        <div className='about-image-box-two'>
           <Image
            urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
            src="/about-thumb-03.webp"
            
          alt='study-image' 
          className=' about-us-image-two'
            
          />
          <div className='about-us-image-cont-two'>
            <div className='about-us-cont-inner-two'>
              <div className='alumini-img-and-cont'>
                <div className='alumini-images'>
                  <div className='alumini-img-show'></div>
                </div>
                <div className='alumini-cont'>
                  <p>30K</p>
                </div>
              </div>
              <p className='alumini-cont-two'>Alumni in top positions</p>


              <div className='ellipse-design'></div>
            </div>
          </div>
        </div>

        <div className='circle-img-about'></div>
      </div>
      <div className='about-us-content-container'>
      <div className='about-us-image-cont-two-cont'>
            <div className='about-us-cont-inner-two'>
              <div className='alumini-img-and-cont'>
                <div className='alumini-images'>
                  <div className='alumini-img-show'></div>
                </div>
                <div className='alumini-cont'>
                  <p>30K</p>
                </div>
              </div>
              <p className='alumini-cont-two'>Alumni in top positions</p>


              <div className='ellipse-design'></div>
            </div>
          </div>
        <div className='about-us-title-bar'>
          <p className='about-us-small'>About Us</p>
          <div className='about-us-main-tit-div'>
            <p className='about-us-main-tit'>Shaping Futures with</p>
            <p className='about-us-main-tit-two'><span className='span-tit-in-about-us'>Quality</span> <span className='about-us-underline-parent'>Education
              <span className='about-us-underline'></span></span></p>
          </div>
          
        </div>
        <div className='about-us-content-main'>
          <p className='para-in-about-us-main'>At Mindspire Education Institute, we shape futures with quality education that inspires and empowers. Our expert educators create a supportive space for students to unlock their potential and succeed.</p>
          <div className='order-list-of-about-us'>
            <p className='order-list-para'><span className='order-list-span'><MdDone/></span>Education Award Achived</p>
            <p className='order-list-para'><span className='order-list-span'><MdDone/></span>Lifetime Access any Device</p>
            <p className='order-list-para'><span className='order-list-span'><MdDone/></span>Flexible Learning Options</p>
            <p className='order-list-para'><span className='order-list-span'><MdDone/></span>24*7 Staff Support</p>
            
          </div>
          <div className='about-us-btn-div'>
            <Link style={{textDecoration:'none'}} className='about-us-btn' to={'About-Mindspire-Institute'}>
              <p >Read More</p>
              <div className='about-btn-animation'></div>
            </Link>  
          </div>
        </div>

        
        <img src="./Aboutus/open-book.png" alt="Book-Image"  className='design-image-about' />
      </div>
            

    </div>
  )
}

export default AboutUs
