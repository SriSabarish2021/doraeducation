import { useEffect,useRef, useState } from 'react';
import '../../../Styles/HomePageCSS/Testimonial/Testimonial.css'
import { FaStar } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const Testimonial = ({course}) => {

    const scrollRef = useRef<HTMLDivElement>(null);

useEffect(() => {

  

  
}, [])

    

  const scrollLeft = () => {
   
    
    if (scrollRef.current) {
        const commentbox=document.querySelector('.testimonial-inner-content-bar')?.getBoundingClientRect().width
       
      scrollRef.current.scrollLeft -= Number(commentbox)+80; 
    }
  };

  const scrollRight = () => {
        const commentboxright=document.querySelector('.testimonial-inner-content-bar')?.getBoundingClientRect().width

    if (scrollRef.current) {
             const valueofscroll:number=scrollRef.current.scrollWidth - scrollRef.current.clientWidth

      if (scrollRef.current.scrollLeft>=valueofscroll) {
         scrollRef.current.scrollLeft = 0;
      }else{
      scrollRef.current.scrollLeft += Number(commentboxright)+80;

      }
    }
  };

  useEffect(() => {
    
    const scrollContainer = scrollRef.current;

  const timer = setInterval(() => {
    if (scrollContainer) {
      const commentboxscroll=document.querySelector('.testimonial-inner-content-bar')?.getBoundingClientRect().width

      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft >= maxScrollLeft) {
        
        scrollContainer.scrollLeft = 0;
      } else {
        
        scrollContainer.scrollLeft += Number(commentboxscroll)+80;
      }
    }
  }, 5000);
    return () => {
      clearInterval(timer)
    }
  })
  
  const [parawidth,setparawidth]=useState(0)
  useEffect(() => {


    
    setparawidth(window.innerWidth)
   
    
     return () => {
      setparawidth(0)
    }
  
  
  }, [])

  
  

  return (
    <div  className='testimonial-container'>
    <div className='comment-image-design'></div>
    <div className='side-image-design'></div>
    <div className='book-image-testimonial'></div>
    <div className='line-image-testimonial'></div>
    <div className='dots-image-testimonial-one'></div>
    <div className='dots-image-testimonial-two'></div>
     <div className='dots-image-testimonial-three'></div>
      <div className='tesitimonial-top-design'>
        <div className='testimonial-triangle-design'></div>
        <div className='testimonial-wave-design'></div>
      </div>
      
      <div className='testimonial-main-container'>
        <div className='testimonial-title-bar'>
          <div className='testimonial-main-title'>
            <p className='tistimonail-title'>Testimonial</p>
            <p className='testimonial-main-title-para'>What Our Student's <span className='stud-think'>Think About <span className='stud-think-design'></span></span></p>
          </div>
          <p className='quote-para-testimonial'>{parawidth<610?String('Every student’s story is a reflection of hard work, transformation, and success. These real experiences show how the right guidance and learning environment can shape brighter futures').slice(0,80)+'...':parawidth<830?String('Every student’s story is a reflection of hard work, transformation, and success. These real experiences show how the right guidance and learning environment can shape brighter futures').slice(0,100)+'...':parawidth<1100?String('Every student’s story is a reflection of hard work, transformation, and success. These real experiences show how the right guidance and learning environment can shape brighter futures').slice(0,140)+'...':'Every student’s story is a reflection of hard work, transformation, and success. These real experiences show how the right guidance and learning environment can shape brighter futures'}</p>
        </div>
        <div className='testimonial-content-bar'>
          <div className='testimonial-image-bar'>
            <div className='image-border-line'>
               {Array.from(course).slice(-3).map((indireviewforquote,index)=>
                <div className={`${index==0?'testimonial-border-image-one':index==1?'testimonial-border-image-two':'testimonial-border-image-three'}`} style={{backgroundImage:`url(${indireviewforquote.CourseReview[0].ReviewerIMG})`}}></div>
              )}
              <div className='quote-image-bar'></div>
            </div>
          </div>
          <div className='testimonail-main-content-bar'>
            <div className='testimonial-inner-content-bar' ref={scrollRef}>

              {Array.from(course).map((indireview)=>
                  <div className='student-testimonial-one'>
                    {indireview.CourseReview[0].RaatingNUM==5?
                      <div className='student-star-rating'>
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                      </div>:
                      indireview.CourseReview[0].RaatingNUM==4?
                      <div className='student-star-rating'>
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/>
                      </div>:
                      indireview.CourseReview[0].RaatingNUM==3?
                      <div className='student-star-rating'>
                        <FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/>
                      </div>:
                      indireview.CourseReview[0].RaatingNUM==2?
                      <div className='student-star-rating'>
                        <FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/>
                      </div>:
                      indireview.CourseReview[0].RaatingNUM==1?
                      <div className='student-star-rating'>
                        <FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
                      </div>:
                      <div className='student-star-rating'>
                        <FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
                      </div>
                    }
                    
                    <div className='student-comment'>
                      <p className='comment-student'>{parawidth<450?String(indireview.CourseReview[0].ReviewerContent).slice(0,200)+'...':parawidth<830?String(indireview.CourseReview[0].ReviewerContent).slice(0):String(indireview.CourseReview[0].ReviewerContent).slice(0,300)+'......'}</p>
                    </div>
                    <div className='student-info'>
                      <div className='student-image-tag' style={{backgroundImage:`url(${indireview.CourseReview[0].ReviewerIMG})`}}></div>
                      <div className='student-info-tag'>
                        <p className='student-name-para'>{indireview.CourseReview[0].ReviewerName}</p>
                        <p className='student-degree-para'>{indireview.CourseReview[0].Qualification}</p>
                      </div>
                    </div>
                    </div>
              )}
                         
              
            </div>

            <div className='testimonial-move-button'>
              <button className='testimonial-left-btn' onClick={()=>scrollLeft()}><FaAngleLeft className='btn-cont'/></button>
              <button className='testimonial-right-btn' onClick={()=>scrollRight()}><FaAngleRight  className='btn-cont'/></button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
