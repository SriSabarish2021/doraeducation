import { useEffect, useRef } from 'react';
import '../../Styles/AboutPageCSS/AboutTop.css'
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Image } from '@imagekit/react';

const AboutTop = ({course}) => {
    const scrollRefAbout = useRef(null);

    useEffect(() => {
        
        const scrollContainer = scrollRefAbout.current;

        const gettotalwidth=document.querySelector('.student-testimonial-in-about-page')
    
      const timer = setInterval(() => {
        if (scrollContainer) {
          const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    
          if (scrollContainer.scrollLeft >= maxScrollLeft) {
            
            scrollContainer.scrollLeft = 0;
          } else {
            
            scrollContainer.scrollLeft +=Number(gettotalwidth?.getBoundingClientRect().width)+50;
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




        const minusdesignref=useRef(null)
        const plusdesignref=useRef(null)
        const minusdesignreftwo=useRef(null)
        const plusdesignreftwo=useRef(null)

        const offsetforaboutX=useRef(0)
        const offsetforaboutY=useRef(0)
      
         const MouseMoveEvent=(event,targetone,targettwo)=>{
      
          
          const elementtargeting=event.currentTarget
          const viewelement=elementtargeting.getBoundingClientRect()
      
          const totwidht=event.clientX-viewelement.left
          const totheight=event.clientY-viewelement.top
      
          const offsetX=(totwidht/viewelement.width)*100
          const offsetY=(totheight/viewelement.height)*100

          offsetforaboutX.current=-offsetX/2
          
          offsetforaboutY.current=-offsetY/2

          if (targetone.current) {
           targetone.current.style.transform=`translateX(${-offsetforaboutX.current}px) translateY(${-offsetforaboutY.current}px)`;
          }
          if (targettwo.current) {
           targettwo.current.style.transform=`translateX(${offsetforaboutX.current}px) translateY(${offsetforaboutY.current}px)`;
          }

      
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
                    {Array.from(course).map((indicoursereview)=>
                     <div key={indicoursereview.id} className='testi-for-about-page'>
                        <p className='testi-for-about-para'>{String(indicoursereview.CourseReview[0].ReviewerContent).slice(0,200)+'......'}</p>
                        <div className='testimonial-person'>
                            <div className='person-image-testi' style={{backgroundImage:`url(${indicoursereview.CourseReview[0].ReviewerIMG})`}}></div>
                            <div className='testi-person-info'>
                                <p className='teti-about-page-person-name'>{indicoursereview.CourseReview[0].ReviewerName}</p>
                                <p className='teti-about-page-person-degree'>{indicoursereview.CourseReview[0].Qualification}</p>
                            </div>
                        </div>
                    </div>
                    )}
                   
                </div>
                
                    <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/hs6_1.webp"
                    alt="Student Image"
                    className='about-top-image-style'
                    />
                    <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/hero6_2.webp"
                    alt="Student Image"
                    className='about-top-image-style-two'
                    />
                     <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/hero6_2.webp"
                    alt="Student Image"
                    className='about-top-image-style-three'
                    />
                     
            </div>
        </div> 
          <div className='about-top-side-bar-container' onMouseMove={(e)=>MouseMoveEvent(e,minusdesignreftwo,plusdesignreftwo)}>
            <div className='about-special-design'></div>
            <div className='about-special-design-one' ref={minusdesignreftwo} style={{transitionDuration:'0.3s'}}></div>
            <div className='about-special-design-two'  ref={plusdesignreftwo} style={{transitionDuration:'0.3s'}}></div>
            <div className='about-side-bar about-side-by-one'>
                <div className='about-side-bar-img'>
                    <div className='about-side-img about-side-img-one'>
                        <img className='img-for-side-by-about img-about-side-one' src='/AboutPageImage/ABOUT-TOP/ic42.svg' ></img>
                    </div>
                    
                    <div className='about-side-img-design about-side-img-one-design-one'>
                        
                    </div>
                    <div className='about-side-img-design-two about-side-img-one-design-two'>
                        
                    </div>
                </div>
                <div className='about-side-bar-cont'>
                    <p className='about-side-para-one'>Gurenteed Certified</p>
                    <p className='about-side-para-two'>{window.innerWidth<460?'Complete your course and earn a professional certificate recognized across industries.Showcase your skills and stand out with Mindspire’s.':window.innerWidth<620?'Complete your course and earn a professional certificate recognized across industries.Showcase your skills, boost your resume, and stand out with Mindspire’s trusted validation.':window.innerWidth<900?'Complete your course and earn a professional certificate recognized across industries.Showcase your skills and stand out with Mindspire’s.':'Complete your course and earn a professional certificate recognized across industries.Showcase your skills, boost your resume, and stand out with Mindspire’s trusted validation.'}</p>
                </div>
            </div>
            <div className='about-side-bar  about-side-by-two'>
                <div className='about-side-bar-img '>
                    <div className='about-side-img  about-side-img-two'>
                        <img className='img-for-side-by-about img-about-side-two' src='/AboutPageImage/ABOUT-TOP/ic41.svg' ></img>
                    </div>
                    <div className='about-side-img-design about-side-img-two-design-one'></div>
                    <div className='about-side-img-design-two about-side-img-two-design-two'></div>
                </div>
                <div className='about-side-bar-cont  '>
                    <p className='about-side-para-one'>Global Standards</p>
                    <p className='about-side-para-two'>{window.innerWidth<460?"Mindspire delivers courses aligned with internationally recognized education frameworks.Our curriculum ensures you're industry-ready .":window.innerWidth<620?"Mindspire delivers courses aligned with internationally recognized education frameworks.Our curriculum ensures you're industry-ready, competitive, and globally competent.":window.innerWidth<900?"Mindspire delivers courses aligned with internationally recognized education frameworks.Our curriculum ensures you're industry-ready .":"Mindspire delivers courses aligned with internationally recognized education frameworks.Our curriculum ensures you're industry-ready, competitive, and globally competent."}</p>
                </div>
            </div>
            <div className='about-side-bar about-side-by-three'>
                <div className='about-side-bar-img'>
                    <div className='about-side-img  about-side-img-three'>
                        <img className='img-for-side-by-about img-about-side-three' src='/AboutPageImage/ABOUT-TOP/ic40.svg' ></img>
                    </div>
                    <div className='about-side-img-design about-side-img-three-design-one'></div>
                    <div className='about-side-img-design-two about-side-img-three-design-two'></div>
                </div>
                <div className='about-side-bar-cont'>
                    <p className='about-side-para-one'>Job-Ready Training</p>
                    <p className='about-side-para-two'>{window.innerWidth<460?"Gain real-world skills with hands-on projects, industry tools, and expert mentorship.Walk out with confidence, a strong portfolio.":window.innerWidth<620?'Gain real-world skills with hands-on projects, industry tools, and expert mentorship.Walk out with confidence, a strong portfolio, and the ability to land your dream job.':window.innerWidth<900?'Gain real-world skills with hands-on projects, industry tools, and expert mentorship.Walk out with confidence, a strong portfolio.':'Gain real-world skills with hands-on projects, industry tools, and expert mentorship.Walk out with confidence, a strong portfolio, and the ability to land your dream job.'}</p>
                </div>
            </div>
        </div> 
    <div className='about-top-information-container' onMouseMove={(e)=>MouseMoveEvent(e,minusdesignref,plusdesignref)}>
            <div className='about-top-information-design' ></div>
            <div className='about-top-information-design-three' ></div>
            <div className='div-for-design'><div className='div-for-inner-design' ref={minusdesignref}  style={{transitionDuration:'0.3s'}}></div></div>
            <div className='about-top-information-design-two' ref={plusdesignref} style={{transitionDuration:'0.3s'}}></div>
            <div className='about-information-image-div'>
                
                  <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/ab13.webp"
                    alt="Student Image"
                    className='about-image-div'
                    />
                    <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/ab14.webp"
                    alt="Student Image"
                    className='about-image-div-design'
                    />
                
            </div>
            <div className='about-information-cont-div'>
                <div className='about-information-top-div'>
                    <p>Prestigious <span className='insitute-tit-design'>Institute</span> with</p>
                    <p><span className='about-infor-para-span'>Excellence</span> in <span className='education-underline-about-page'>Education <span className='education-underline-img'></span></span>.</p>
                </div>
                <div className='about-information-main-content'>
                    <div className='about-information-cont-div-one'>
                        <p>{window.innerWidth<600?String('Mindspire Institute stands as a beacon of academic excellence, innovation, and student success.With a legacy of empowering learners, we have cultivated a reputation for delivering world-class education.Our carefully crafted curriculum blends theory with real-world application, preparing students for modern careers.').slice(0,200)+'...':'Mindspire Institute stands as a beacon of academic excellence, innovation, and student success.With a legacy of empowering learners, we have cultivated a reputation for delivering world-class education.Our carefully crafted curriculum blends theory with real-world application, preparing students for modern careers.'}</p>
                    </div>
                    <div className='student-image-and-number'>
                        <div className='student-image-bar'>
                            <img src='/StaffPage/Top-staff-Four.avif' className='stud-img stud-img-one-abt'></img>
                            <img src='/StaffPage/Staff-one.webp' className='stud-img stud-img-two-abt'></img>
                            <img src='/StaffPage/Top-staff-three.avif' className='stud-img stud-img-three-abt'></img>
                            <img  src='/StaffPage/Top-staff-two.avif' className='stud-img stud-img-four-abt'></img>
                            <img src='/StaffPage/Top-staff-one.avif' className='stud-img stud-img-five-abt'></img>
                        </div>
                        
                        <p className='stud-img-num-para'><span className='stud-img-num-span'>150+</span> Satisfied Students</p>
                       
                    </div>
                    <div className='about-staff-information'>
                        <div className='staff-infor-in-about-one'>
                            <div className='staff-info-one-head'>
                                <div className='staff-info-one-img'>
                                    <img src="/AboutPageImage/ABOUT-TOP/ic43.svg" alt="stud-image" className='staff-infor-in-about-top-one'/>
                                </div>
                                <p className='staff-one-head-tit'>Skilled Lecturers</p>
                            </div>
                            <div className='staff-info-one-cont'>
                                <p>Our skilled lecturers bring real-world experience and passion to every lesson</p>
                            </div>
                        </div>
                        <div className='staff-infor-in-about-two'>
                            <div className='staff-info-one-head'>
                                <div className='staff-info-one-img'>
                                     <img src="/AboutPageImage/ABOUT-TOP/ic44.svg" alt="stud-image" className='staff-infor-in-about-top-two'/>
                                </div>
                                <p className='staff-one-head-tit'>Academic Excellence</p>
                            </div>
                            <div className='staff-info-one-cont'>
                                <p>Our prestigious university is dedicated to academic excellence and innovation.</p>
                            </div>
                        </div>
                    </div>
                    <Link style={{textDecoration:'none'}} to={"/Providing-Education's-in-Mindspire-Institute"} className='about-information-btn'>Know About Us
                        <div className='about-information-btn-design-one'></div>
                        <div className='about-information-btn-design-two'></div>
                    </Link>
                   
                </div>
            </div>
        </div> 
    </div>
  )
}

export default AboutTop
