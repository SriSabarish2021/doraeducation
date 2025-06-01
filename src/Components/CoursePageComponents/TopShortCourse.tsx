import { useEffect } from 'react'
import '../../Styles/CoursePageCSS/TopShortCourse.css'
import { PiClock } from "react-icons/pi";
import { PiReadCvLogo } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa"; 
const TopShortCourse = () => {

 



     /*  const cards = document.querySelectorAll(".course-box") ;

      const stackArea = document.querySelector(".top-short-course-page-container");

      function rotateCards() {
        let angle = 0;
        if (cards) {
          cards.forEach((card, index) => {
          if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
          } else {
            card.style.transform = ` rotate(${angle}deg)`;
            angle = angle - 10;
            card.style.zIndex = cards.length - index;
          }
        });
        }
        
      }

     

  

        document.addEventListener("DOMContentLoaded", () => {
        rotateCards();
      }); */
        useEffect(() => {
    const cards = document.querySelectorAll(".course-box");
    const stackArea = document.querySelector(".top-short-course-page-container");

    function rotateCards() {
      let angle = 0;
      if (cards) {
        cards.forEach((card, index) => {
          if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
          } else {
            card.style.transform = `rotate(${angle}deg)`;
            angle = angle - 10;
            card.style.zIndex = cards.length - index;
          }
        });
      }
    }


    window.addEventListener("scroll", () => {
        const distance = window.innerHeight/2;

        if(stackArea){
          const topVal = stackArea.getBoundingClientRect().top;
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
    <div className='top-short-course-page-container'>
      <div className='top-short-course-title-container'>
        <div className='top-short-title-design'></div>
        <div className='top-short-title-design-two'></div>
        
        <div className='course-page-top-course-title'>
            <p>The Courses <span className='course-page-title-span'>Everyone’s</span></p>
            <p><span className='course-page-title-span-two'>Talking</span> About</p>
            <p><span className='course-page-title-line-span'>—</span> Only at <span className='course-page-title-span-name'>Mindspire <span className='course-page-title-design'></span></span></p>
        </div>
        <p className='para-in-course-page'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, ea tempora voluptatum nemo quod assumenda. Possimus nam distinctio sunt voluptates.</p>
        <button className='btn-in-course-page-title'>View Course
          <div className='btn-in-course-page-design-one'></div>
          <div className='btn-in-course-page-design-two'></div>
          <div className='btn-in-course-page-design-three'></div>
          <div className='btn-in-course-page-design-four'></div>
        </button>
       
      </div>
      <div className='top-short-course-content-container'>
        
        <div className='top-short-cont-design'></div>
        <div className='top-short-title-design-three'>
          <div className='top-short-title-design-three-inner'></div>
        </div>
        <div className='course-box course-box-one'>
          <div className='course-box-head-div'>
            <p>JavaScript</p>
            <p>Mastery</p>
          </div>
          <div className='course-box-course-info-div'>
            <p className='para-in-box-time'><PiClock/>6 months</p>
            <p className='para-in-box-lesson'><PiReadCvLogo/>10 Lesson</p>
          </div>
          <div  className='course-box-btn-div'>
            <button className='apply-btn-course-box'>Apply
              <div className='top-course-apply-btn-one'></div>
              <div className='top-course-apply-btn-two'></div>
              <div className='top-course-apply-btn-three'></div>
              <div className='top-course-apply-btn-four'></div>
            </button>
            <button className='like-btn-course-box'><FaRegHeart/>
            <div className='like-btn-mess-course-page'>Add whishlist <div className='arrow-desing-like-course-page'></div></div>
            </button>
          </div>
        </div>
        <div className='course-box course-box-two'>
           <div className='course-box-head-div'>
            <p>TypeScript</p>
            <p>Core</p>
          </div>
          <div className='course-box-course-info-div'>
            <p className='para-in-box-time'><PiClock/>6 months</p>
            <p className='para-in-box-lesson'><PiReadCvLogo/>10 Lesson</p>
          </div>
          <div  className='course-box-btn-div'>
            <button className='apply-btn-course-box'>Apply
              <div className='top-course-apply-btn-one'></div>
              <div className='top-course-apply-btn-two'></div>
              <div className='top-course-apply-btn-three'></div>
              <div className='top-course-apply-btn-four'></div>
            </button>
            <button className='like-btn-course-box'><FaRegHeart/><div className='like-btn-mess-course-page'>Add whishlist <div className='arrow-desing-like-course-page'></div></div></button>
          </div>
        </div>
        <div className='course-box course-box-three'>
           <div className='course-box-head-div'>
            <p>CSS</p>
            <p>Mastery</p>
          </div>
          <div className='course-box-course-info-div'>
            <p className='para-in-box-time'><PiClock/>6 months</p>
            <p className='para-in-box-lesson'><PiReadCvLogo/>10 Lesson</p>
          </div>
          <div  className='course-box-btn-div'>
            <button className='apply-btn-course-box'>Apply
              <div className='top-course-apply-btn-one'></div>
              <div className='top-course-apply-btn-two'></div>
              <div className='top-course-apply-btn-three'></div>
              <div className='top-course-apply-btn-four'></div>
            </button>
            <button className='like-btn-course-box'><FaRegHeart/><div className='like-btn-mess-course-page'>Add whishlist <div className='arrow-desing-like-course-page'></div></div></button>
          </div>
        </div>
        <div className='course-box course-box-four'>
           <div className='course-box-head-div'>
            <p>Backend</p>
            <p>Learning Path</p>
          </div>
          <div className='course-box-course-info-div'>
            <p className='para-in-box-time'><PiClock/>6 months</p>
            <p className='para-in-box-lesson'><PiReadCvLogo/>10 Lesson</p>
          </div>
          <div  className='course-box-btn-div'>
            <button className='apply-btn-course-box'>Apply
              <div className='top-course-apply-btn-one'></div>
              <div className='top-course-apply-btn-two'></div>
              <div className='top-course-apply-btn-three'></div>
              <div className='top-course-apply-btn-four'></div>
            </button>
            <button className='like-btn-course-box'><FaRegHeart/><div className='like-btn-mess-course-page'>Add whishlist <div className='arrow-desing-like-course-page'></div></div></button>
          </div>
        </div>
        <div className='course-box course-box-five'>
           <div className='course-box-head-div'>
            <p>Node.js</p>
            <p>Mastery</p>
          </div>
          <div className='course-box-course-info-div'>
            <p className='para-in-box-time'><PiClock/>6 months</p>
            <p className='para-in-box-lesson'><PiReadCvLogo/>10 Lesson</p>
          </div>
          <div  className='course-box-btn-div'>
            <button className='apply-btn-course-box'>Apply
              <div className='top-course-apply-btn-one'></div>
              <div className='top-course-apply-btn-two'></div>
              <div className='top-course-apply-btn-three'></div>
              <div className='top-course-apply-btn-four'></div>
            </button>
            <button className='like-btn-course-box'><FaRegHeart/><div className='like-btn-mess-course-page'>Add whishlist <div className='arrow-desing-like-course-page'></div></div></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopShortCourse

