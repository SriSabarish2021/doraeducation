import { useEffect, useState } from 'react'
import '../../Styles/CoursePageCSS/TopShortCourse.css'
import { PiClock } from "react-icons/pi";
import { PiReadCvLogo } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa"; 
import { Link, useLocation } from 'react-router-dom';
const TopShortCourse = ({sethashget}) => {


  const [coursewidth,setcoursewidth]=useState(0)
      useEffect(() => {
    
    
        setcoursewidth(window.innerWidth)
       
        
         return () => {
          setcoursewidth(0)
        }
      
      
      }, [])

    const getlocation=useLocation()



        useEffect(() => {
          console.log(getlocation.pathname);

          const mobilescreen=document.querySelector('.for-mobile-short-course-page')
          
    const cards = document.querySelectorAll(".course-box");
    const stackArea = document.querySelector(".top-short-course-page-container");

    function rotateCards() {
      let angle = 0;
      if (cards) {
        

        cards.forEach((card, index) => {
          if (card.classList.contains("away")&&getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
          } else if(card.classList.contains("away")&&getlocation.pathname.includes("/")){
            card.style.transform = `translateX(-120vh) rotate(-48deg)`;
          }
           else {
            card.style.transform = `rotate(${angle}deg)`;
            angle = angle - Number(coursewidth<400?'6':'10');
            card.style.zIndex = cards.length - index;
          }
        });
      }
    }

 window.addEventListener("scroll", () => {
        const distance = window.innerHeight/2;

        if(stackArea){
          let topVal;
          if (window.innerWidth<700) {
            topVal = stackArea.getBoundingClientRect().top-Number(mobilescreen?.getBoundingClientRect().height)+Number(mobilescreen?.getBoundingClientRect().height/2);
          }else{
             topVal = stackArea.getBoundingClientRect().top
          }
          
           let index = -1 * (topVal / distance + 1);
            index = Math.floor(index);
             for (let i = 0; i < cards.length; i++) {
            if (i == 4) {
               cards[i].classList.remove("away");
            }else if (i <= index) {
              cards[i].classList.add("away");
             
            }  else {
              cards[i].classList.remove("away");
            }
          }
        }
 
        rotateCards();
      });

    rotateCards();
  }, []);
        
      
      
     

      
  return (
    <>
      <div className=' for-mobile-short-course-page' style={{flexDirection:getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?'row':'row-reverse'}}>
        <div className='student-design-mobile-course'></div>
         <div className='student-design-mobile-course-two'></div>
        <div className=' for-mobile-course-title'>
          
          <div className='top-short-title-design'></div>
          <div className='top-short-title-design-two'></div>
          
          <div className='course-page-top-course-title'>
              <p>{getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?'The Courses':'The Reason'} <span className='course-page-title-span'>Everyone’s</span></p>
              <p><span className='course-page-title-span-two'>{getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?'Talking':'Choosing'}</span> {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?'About':'For'}</p>
              <p><span className='course-page-title-line-span'>—</span> Only at <span className='course-page-title-span-name'>Mindspire <span className='course-page-title-design'></span></span></p>
          </div>
          <p className='para-in-course-page'>At Mindspire Institute, our courses blend expert instruction, real-world content, and hands-on learning. With flexible schedules and personalized support, we help students build the skills and confidence to achieve their goals.</p>
          <Link to={'/About-Mindspire-Institute'} style={{textDecoration:'none'}} className='btn-in-course-page-title'>{getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?'To Know Why ?':'Learn More'}
            <div className='btn-in-course-page-design-one'></div>
            <div className='btn-in-course-page-design-two'></div>
            <div className='btn-in-course-page-design-three'></div>
            <div className='btn-in-course-page-design-four'></div>
          </Link>
        
        </div>
      </div>
      <div className='top-short-course-page-container' style={{flexDirection:getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?'row':'row-reverse',display:getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")||getlocation.pathname.includes("/")&&window.innerWidth>700?'flex':'none'}}>
        <div className='top-short-course-title-container'>
          <div className='top-short-title-design'></div>
          <div className='top-short-title-design-two'></div>
          
          <div className='course-page-top-course-title'>
              <p>{getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?'The Courses':'The Reason'} <span className='course-page-title-span'>Everyone’s</span></p>
              <p><span className='course-page-title-span-two'>{getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?'Talking':'Choosing'}</span> {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?'About':'For'}</p>
              <p><span className='course-page-title-line-span'>—</span> Only at <span className='course-page-title-span-name'>Mindspire <span className='course-page-title-design'></span></span></p>
          </div>
          <p className='para-in-course-page'>{getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")&&coursewidth<1000?'At Mindspire Institute, our courses blend expert instruction, real-world content, and hands-on learning. With flexible schedules and personalized support':'At Mindspire Institute, our courses blend expert instruction, real-world content, and hands-on learning. With flexible schedules and personalized support, we help students build the skills and confidence to achieve their goals.'}</p>
          <Link to={'/About-Mindspire-Institute'} style={{textDecoration:'none'}} className='btn-in-course-page-title'>{getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?'To Know Why ?':'Learn More'}
            <div className='btn-in-course-page-design-one'></div>
            <div className='btn-in-course-page-design-two'></div>
            <div className='btn-in-course-page-design-three'></div>
            <div className='btn-in-course-page-design-four'></div>
          </Link>
        
        </div>
        <div  className='top-short-course-content-container'>
          <div className="ball-move-animation-top-course">
            <div className='ball-div ball-arrow-one'></div>
            <div  className='ball-div  ball-arrow-two'></div>
            <div  className='ball-div  ball-arrow-three'></div>
            <div  className='ball-div  ball-arrow-four'></div>
            <div className='ball-div ball-arrow-five' ></div>
          </div>
          <div className='top-short-cont-design'></div>
          <div className='top-short-cont-stud-img-design'>
            <div className='top-course-scroll-info-img'>
              <img className='img-for-small-cont-short-course' src="./HomeImg/online-learning.png" alt="" />
            </div>
            <div className='top-course-scroll-info-cont'>
               <p className='p-one-small-cont-short-course'>20+</p>
                  <p  className='p-two-small-cont-short-course'>Online Courses</p>
            </div>
          </div>
          <div className='top-short-title-design-three'>
            <div className='top-short-title-design-three-inner'></div>
          </div>
          <div className='course-box course-box-one'>
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?
              <div className='course-box-head-div'>
                <p>JavaScript</p>
                <p>Mastery</p>
              </div>:
              <div className='course-box-head-div home-para-small'>
                <p>Expert-Curated</p>
                <p>Curriculum</p>
              </div>
            }
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?
              <div className='course-box-course-info-div'>
                <p className='para-in-box-time'><PiClock/>6 months</p>
                <p className='para-in-box-lesson'><PiReadCvLogo/>10 Lesson</p>
              </div>:
              <div className='advantage-progress-line-div'>
                <p className='progress-para'>Innovation : <span className='percentage-progress'>84%</span></p>
                <div className='progress-line'>
                              <div className='progress-inner-line' style={{width:'84%'}}></div>
                </div>
              </div>
            }
            
            
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")&&
              <div  className='course-box-btn-div'>
              <Link onClick={()=>sethashget('JavaScript')} style={{textDecoration:'none'}} to={`/Providing-Education's-in-Mindspire-Institute/mindspire-course#JavaScript`} style={{textDecoration:'none'}} className='apply-btn-course-box'>Apply
                <div className='top-course-apply-btn-one'></div>
                <div className='top-course-apply-btn-two'></div>
                <div className='top-course-apply-btn-three'></div>
                <div className='top-course-apply-btn-four'></div>
              </Link>
              <button className='like-btn-course-box'><FaRegHeart/>
              <div className='like-btn-mess-course-page'>Add whishlist <div className='arrow-desing-like-course-page'></div></div>
              </button>
            </div>
            }
          
          </div>
          <div className='course-box course-box-two'>
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?
            <div className='course-box-head-div'>
              <p>TypeScript</p>
              <p>Core</p>
            </div>:
            <div className='course-box-head-div home-para-small'>
              <p>Project-Based</p>
              <p>Learning</p>
            </div>
            }
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?
              <div className='course-box-course-info-div'>
                <p className='para-in-box-time'><PiClock/>6 months</p>
                <p className='para-in-box-lesson'><PiReadCvLogo/>10 Lesson</p>
              </div>:
            <div className='advantage-progress-line-div'>
                <p className='progress-para'>Practical Learning : <span className='percentage-progress'>90%</span></p>
                <div className='progress-line'>
                              <div className='progress-inner-line' style={{width:'90%'}}></div>
                </div>
              </div>
            }
          
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")&&
              <div  className='course-box-btn-div'>
                <Link  onClick={()=>sethashget('TypeScript')} style={{textDecoration:'none'}} to={`/Providing-Education's-in-Mindspire-Institute/mindspire-course#TypeScript`} className='apply-btn-course-box'>Apply
                  <div className='top-course-apply-btn-one'></div>
                  <div className='top-course-apply-btn-two'></div>
                  <div className='top-course-apply-btn-three'></div>
                  <div className='top-course-apply-btn-four'></div>
                </Link>
                <button className='like-btn-course-box'><FaRegHeart/><div className='like-btn-mess-course-page'>Add whishlist <div className='arrow-desing-like-course-page'></div></div></button>
              </div>
            }
            
          </div>
          <div className='course-box course-box-three'>
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?
            <div className='course-box-head-div'>
              <p>CSS</p>
              <p>Mastery</p>
            </div>:
            <div className='course-box-head-div home-para-small'>
              <p>Certification</p>
              <p>That Counts</p>
            </div>
            }
            
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?
              <div className='course-box-course-info-div'>
                <p className='para-in-box-time'><PiClock/>6 months</p>
                <p className='para-in-box-lesson'><PiReadCvLogo/>10 Lesson</p>
              </div>:
              <div className='advantage-progress-line-div'>
                <p className='progress-para'>Job Assurence : <span className='percentage-progress'>95%</span></p>
                <div className='progress-line'>
                              <div className='progress-inner-line' style={{width:'95%'}}></div>
                </div>
              </div>
            }
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")&&
              <div  className='course-box-btn-div'>
                <Link onClick={()=>sethashget('CSS')} style={{textDecoration:'none'}} to={`/Providing-Education's-in-Mindspire-Institute/mindspire-course#CSS`} className='apply-btn-course-box'>Apply
                  <div className='top-course-apply-btn-one'></div>
                  <div className='top-course-apply-btn-two'></div>
                  <div className='top-course-apply-btn-three'></div>
                  <div className='top-course-apply-btn-four'></div>
                </Link>
                <button className='like-btn-course-box'><FaRegHeart/><div className='like-btn-mess-course-page'>Add whishlist <div className='arrow-desing-like-course-page'></div></div></button>
              </div>
            }
            
          </div>
          <div className='course-box course-box-four'>
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?
            <div className='course-box-head-div'>
              <p>Backend</p>
              <p>Learning Path</p>
            </div>:
            <div className='course-box-head-div home-para-small'>
              <p>Career-Ready</p>
              <p>Skills</p>
            </div>
            }
            
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?
              <div className='course-box-course-info-div'>
                <p className='para-in-box-time'><PiClock/>6 months</p>
                <p className='para-in-box-lesson'><PiReadCvLogo/>10 Lesson</p>
              </div>:
              <div className='advantage-progress-line-div'>
                <p className='progress-para'>Skill Enhancement : <span className='percentage-progress'>88%</span></p>
                <div className='progress-line'>
                              <div className='progress-inner-line' style={{width:'88%'}}></div>
                </div>
              </div>
            }
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")&&
              <div  className='course-box-btn-div'>
                <Link onClick={()=>sethashget('NextJS')} style={{textDecoration:'none'}} to={`/Providing-Education's-in-Mindspire-Institute/mindspire-course#NextJS`} className='apply-btn-course-box'>Apply
                  <div className='top-course-apply-btn-one'></div>
                  <div className='top-course-apply-btn-two'></div>
                  <div className='top-course-apply-btn-three'></div>
                  <div className='top-course-apply-btn-four'></div>
                </Link>
                <button className='like-btn-course-box'><FaRegHeart/><div className='like-btn-mess-course-page'>Add whishlist <div className='arrow-desing-like-course-page'></div></div></button>
              </div>
            }
            
          </div>
          <div className='course-box course-box-five'>
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?
            <div className='course-box-head-div'>
              <p>React</p>
              <p>Mastery</p>
            </div>:
            <div className='course-box-head-div home-para-small'>
              <p>Job & Portfolio</p>
              <p>Assistance</p>
            </div>
            }
            
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")?
              <div className='course-box-course-info-div'>
                <p className='para-in-box-time'><PiClock/>6 months</p>
                <p className='para-in-box-lesson'><PiReadCvLogo/>10 Lesson</p>
              </div>:
              <div className='advantage-progress-line-div'>
                <p className='progress-para'>Suppotivity : <span className='percentage-progress'>90%</span></p>
                <div className='progress-line'>
                      <div className='progress-inner-line' style={{width:'90%'}}></div>
                </div>
              </div>
              
            }
            {getlocation.pathname.includes("Providing-Education's-in-Mindspire-Institute")&&
            <div  className='course-box-btn-div'>
              <Link onClick={()=>sethashget('ReactJS')} to={`/Providing-Education's-in-Mindspire-Institute/mindspire-course#React`} style={{textDecoration:'none'}} className='apply-btn-course-box'>Apply
                <div className='top-course-apply-btn-one'></div>
                <div className='top-course-apply-btn-two'></div>
                <div className='top-course-apply-btn-three'></div>
                <div className='top-course-apply-btn-four'></div>
              </Link>
              <button className='like-btn-course-box'><FaRegHeart/><div className='like-btn-mess-course-page'>Add whishlist <div className='arrow-desing-like-course-page'></div></div></button>
            </div>
            }
            
          </div>
        </div>
      </div>
    </>
   
  )
}

export default TopShortCourse

