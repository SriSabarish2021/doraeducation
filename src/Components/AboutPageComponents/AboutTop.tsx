import { useEffect, useRef, useState } from 'react';
import '../../Styles/AboutPageCSS/AboutTop.css'
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const AboutTop = () => {
    const scrollRefAbout = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
        const scrollContainer = scrollRefAbout.current;
    
      const timer = setInterval(() => {
        if (scrollContainer) {
          const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    
          if (scrollContainer.scrollLeft >= maxScrollLeft) {
            
            scrollContainer.scrollLeft = 0;
          } else {
            
            scrollContainer.scrollLeft += 500;
          }
        }
      }, 5000);
        return () => {
          clearInterval(timer)
        }
      })

      useEffect(() => {

        const observeelement=document.querySelector('.about-top-side-bar-container')
        const targetelementone=document.querySelector('.about-side-by-one')
        const targetelementtwo=document.querySelector('.about-side-by-two')
        const targetelementthree=document.querySelector('.about-side-by-three')
        const aboutobserver=new IntersectionObserver(([entry])=>{
            if (entry.intersectionRatio>0.5) {
                targetelementone?.classList.add('no-move-side-by')
                targetelementtwo?.classList.add('no-move-side-by')
                targetelementthree?.classList.add('no-move-side-by')
            }else{
                targetelementone?.classList.remove('no-move-side-by')
                targetelementtwo?.classList.remove('no-move-side-by')
                targetelementthree?.classList.remove('no-move-side-by')
            }
        },{threshold:0.5})
        if (observeelement) {
                    aboutobserver.observe(observeelement)

        }
        return () => {
          if (observeelement) {
                    aboutobserver.unobserve(observeelement)

            }
        }
      }, [])


       const [offsetforaboutX,setoffsetforaboutX]=useState(0)
        const [offsetforaboutY,setoffsetforaboutY]=useState(0)
      
         const MouseMoveEvent=(event:unknown)=>{
      
          
          const elementtargeting=event.currentTarget
          const viewelement=elementtargeting.getBoundingClientRect()
      
          const totwidht:number=event.clientX-viewelement.left
          const totheight:number=event.clientY-viewelement.top
      
          const offsetX:number=(totwidht/viewelement.width)*100
          const offsetY:number=(totheight/viewelement.height)*100
          setoffsetforaboutX(-offsetX/2)
          setoffsetforaboutY(-offsetY/2)
      
        }
        
      

  return (
    <div className='about-page-top-container'>
        <div className='about-top-image-container'>
            <div className='top-about-image-content-container'>
                <div className='about-top-main-title'>
                    <p>Your Top Choice</p>
                    <p>With <span className='title-span-about-page'>Quality</span> Education</p>
                </div>
                <div className='about-to-home-btn'>
                    <Link to={'/'} style={{textDecoration:'none'}}>
                    <p className='about-home-para'>Home</p>
                    </Link>
                    <FaAnglesRight className='right-arrow-for-home-to-about'/>
                    <p className='about-paga-para'>About</p>
                    <div className='about-to-home-btn-design'></div>
                </div>
                <div className='student-testimonial-in-about-page'  ref={scrollRefAbout}>
                    <div className='testi-for-about-page'>
                        <p className='testi-for-about-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor quam, dolorem magnam maiores necessitatibus molestiae laudantium doloribus officia harum?</p>
                        <div className='testimonial-person'>
                            <div className='person-image-testi'></div>
                            <div className='testi-person-info'>
                                <p className='teti-about-page-person-name'>Velu Mani</p>
                                <p className='teti-about-page-person-degree'>Computer Science</p>
                            </div>
                        </div>
                    </div>
                    <div className='testi-for-about-page'>
                        <p className='testi-for-about-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor quam, dolorem magnam maiores necessitatibus molestiae laudantium doloribus officia harum?</p>
                        <div className='testimonial-person'>
                            <div className='person-image-testi'></div>
                            <div className='testi-person-info'>
                                <p className='teti-about-page-person-name'>Velu Mani</p>
                                <p className='teti-about-page-person-degree'>Computer Science</p>
                            </div>
                        </div>
                    </div>
                    <div className='testi-for-about-page'>
                        <p className='testi-for-about-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor quam, dolorem magnam maiores necessitatibus molestiae laudantium doloribus officia harum?</p>
                        <div className='testimonial-person'>
                            <div className='person-image-testi'></div>
                            <div className='testi-person-info'>
                                <p className='teti-about-page-person-name'>Velu Mani</p>
                                <p className='teti-about-page-person-degree'>Computer Science</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-top-image-style'></div>
                <div className='about-top-image-style-two'></div>

            </div>
        </div>
        <div className='about-top-side-bar-container' onMouseMove={(e)=>MouseMoveEvent(e)}>
            <div className='about-special-design'></div>
            <div className='about-special-design-one' style={{transform:`translateX(${-offsetforaboutX}px) translateY(${-offsetforaboutY}px)`,transitionDuration:'0.3s'}}></div>
            <div className='about-special-design-two' style={{transform:`translateX(${offsetforaboutX}px) translateY(${offsetforaboutY}px)`,transitionDuration:'0.3s'}}></div>
            <div className='about-side-bar about-side-by-one'>
                <div className='about-side-bar-img'>
                    <div className='about-side-img about-side-img-one'>
                        <img className='img-for-side-by-about img-about-side-one' src='./AboutPageImage/ABOUT-TOP/ic42.svg' ></img>
                    </div>
                    
                    <div className='about-side-img-design about-side-img-one-design-one'>
                        
                    </div>
                    <div className='about-side-img-design-two about-side-img-one-design-two'>
                        
                    </div>
                </div>
                <div className='about-side-bar-cont'>
                    <p className='about-side-para-one'>Gurenteed Certified</p>
                    <p className='about-side-para-two'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium amet perspiciatis, quis ad rerum tenetur reprehenderit minima quaerat repellendus?</p>
                </div>
            </div>
            <div className='about-side-bar  about-side-by-two'>
                <div className='about-side-bar-img '>
                    <div className='about-side-img  about-side-img-two'>
                        <img className='img-for-side-by-about img-about-side-two' src='./AboutPageImage/ABOUT-TOP/ic41.svg' ></img>
                    </div>
                    <div className='about-side-img-design about-side-img-two-design-one'></div>
                    <div className='about-side-img-design-two about-side-img-two-design-two'></div>
                </div>
                <div className='about-side-bar-cont  '>
                    <p className='about-side-para-one'>Gurenteed Certified</p>
                    <p className='about-side-para-two'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium amet perspiciatis, quis ad rerum tenetur reprehenderit minima quaerat repellendus?</p>
                </div>
            </div>
            <div className='about-side-bar about-side-by-three'>
                <div className='about-side-bar-img'>
                    <div className='about-side-img  about-side-img-three'>
                        <img className='img-for-side-by-about img-about-side-three' src='./AboutPageImage/ABOUT-TOP/ic40.svg' ></img>
                    </div>
                    <div className='about-side-img-design about-side-img-three-design-one'></div>
                    <div className='about-side-img-design-two about-side-img-three-design-two'></div>
                </div>
                <div className='about-side-bar-cont'>
                    <p className='about-side-para-one'>Gurenteed Certified</p>
                    <p className='about-side-para-two'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium amet perspiciatis, quis ad rerum tenetur reprehenderit minima quaerat repellendus?</p>
                </div>
            </div>
        </div>
        <div className='about-top-information-container' onMouseMove={(e)=>MouseMoveEvent(e)}>
            <div className='about-top-information-design' ></div>
            <div className='div-for-design'><div className='div-for-inner-design'  style={{transform:`translateX(${-offsetforaboutX}px) translateY(${-offsetforaboutY}px)`,transitionDuration:'0.3s'}}></div></div>
            <div className='about-top-information-design-two' style={{transform:`translateX(${offsetforaboutX}px) translateY(${offsetforaboutY}px)`,transitionDuration:'0.3s'}}></div>
            <div className='about-information-image-div'>
                <div className='about-image-div'></div>
                <div className='about-image-div-design'></div>
            </div>
            <div className='about-information-cont-div'>
                <div className='about-information-top-div'>
                    <p>Prestigious <span className='insitute-tit-design'>Institute</span> with</p>
                    <p><span className='about-infor-para-span'>Excellence</span> in <span className='education-underline-about-page'>Education <span className='education-underline-img'></span></span>.</p>
                </div>
                <div className='about-information-main-content'>
                    <div className='about-information-cont-div-one'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ducimus. Quaerat hic atque placeat quas perspiciatis ab quibusdam eaque vero ex dolorum, vel tempore. Quam beatae soluta incidunt saepe rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, impedit?</p>
                    </div>
                    <div className='student-image-and-number'>
                        <div className='student-image-bar'>
                            <img src='./StaffPage/Top-staff-Four.avif' className='stud-img stud-img-one-abt'></img>
                            <img src='./StaffPage/Staff-one.webp' className='stud-img stud-img-two-abt'></img>
                            <img src='./StaffPage/Top-staff-three.avif' className='stud-img stud-img-three-abt'></img>
                            <img  src='./StaffPage/Top-staff-two.avif' className='stud-img stud-img-four-abt'></img>
                            <img src='./StaffPage/Top-staff-one.avif' className='stud-img stud-img-five-abt'></img>
                        </div>
                        
                        <p className='stud-img-num-para'><span className='stud-img-num-span'>150+</span> Satisfied Students</p>
                       
                    </div>
                    <div className='about-staff-information'>
                        <div className='staff-infor-in-about-one'>
                            <div className='staff-info-one-head'>
                                <div className='staff-info-one-img'>
                                    <img src="./AboutPageImage/ABOUT-TOP/ic43.svg" alt="stud-image" className='staff-infor-in-about-top-one'/>
                                </div>
                                <p className='staff-one-head-tit'>Skilled Lecturers</p>
                            </div>
                            <div className='staff-info-one-cont'>
                                <p>Our prestigious university is dedicated to academic excellence and innovation.</p>
                            </div>
                        </div>
                        <div className='staff-infor-in-about-two'>
                            <div className='staff-info-one-head'>
                                <div className='staff-info-one-img'>
                                     <img src="./AboutPageImage/ABOUT-TOP/ic44.svg" alt="stud-image" className='staff-infor-in-about-top-two'/>
                                </div>
                                <p className='staff-one-head-tit'>Book Library</p>
                            </div>
                            <div className='staff-info-one-cont'>
                                <p>Our prestigious university is dedicated to academic excellence and innovation.</p>
                            </div>
                        </div>
                    </div>
                    <button className='about-information-btn'>Know About Us
                        <div className='about-information-btn-design-one'></div>
                        <div className='about-information-btn-design-two'></div>
                    </button>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutTop
