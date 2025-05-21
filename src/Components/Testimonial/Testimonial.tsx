import { useState,useEffect,useRef } from 'react';
import '/src/Styles/Testimonial.css'
import { FaStar } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Testimonial = () => {

    const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
   
    
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 780; 
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
             const valueofscroll:number=scrollRef.current.scrollWidth - scrollRef.current.clientWidth

      if (scrollRef.current.scrollLeft>=valueofscroll) {
         scrollRef.current.scrollLeft = 0;
      }else{
      scrollRef.current.scrollLeft += 780;

      }
    }
  };

  useEffect(() => {
    
    const scrollContainer = scrollRef.current;

  const timer = setInterval(() => {
    if (scrollContainer) {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft >= maxScrollLeft) {
        
        scrollContainer.scrollLeft = 0;
      } else {
        
        scrollContainer.scrollLeft += 780;
      }
    }
  }, 5000);
    return () => {
      clearInterval(timer)
    }
  })
  

  return (
    <div className='testimonial-container'>
      <div className='tesitimonial-top-design'>
        <div className='testimonial-triangle-design'></div>
        <div className='testimonial-wave-design'></div>
      </div>
      
      <div className='testimonial-main-container'>
        <div className='testimonial-title-bar'>
          <div className='testimonial-main-title'>
            <p className='tistimonail-title'>Tetimonail</p>
            <p className='testimonial-main-title'>What Our Student's Think About</p>
          </div>
          <p className='quote-para-testimonial'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione magni quidem! Deleniti, voluptates repudiandae.</p>
        </div>
        <div className='testimonial-content-bar'>
          <div className='testimonial-image-bar'>
            <div className='image-border-line'>
              <div className='testimonial-border-image-one'></div>
              <div className='testimonial-border-image-two'></div>
              <div className='testimonial-border-image-three'></div>
              <div className='quote-image-bar'></div>
            </div>
          </div>
          <div className='testimonail-main-content-bar'>
            <div className='testimonial-inner-content-bar' ref={scrollRef}>
             
                <div className='student-testimonial-one'>
                <div className='student-star-rating'>
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <div className='student-comment'>
                  <p className='comment-student'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolorum magnam mollitia aut aliquam dolorem praesentium. Quisquam ut ex et voluptates reiciendis cum quibusdam similique ipsam, pariatur tenetur sed. Ullam?</p>
                </div>
                <div className='student-info'>
                  <div className='student-image-tag'></div>
                  <div className='student-info-tag'>
                    <p className='student-name-para'>Velu Mani</p>
                    <p className='student-degree-para'>Computer Science</p>
                  </div>
                </div>
                </div>
                <div className='student-testimonial-one'>
                <div className='student-star-rating'>
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <div className='student-comment'>
                  <p className='comment-student'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolorum magnam mollitia aut aliquam dolorem praesentium. Quisquam ut ex et voluptates reiciendis cum quibusdam similique ipsam, pariatur tenetur sed. Ullam?</p>
                </div>
                <div className='student-info'>
                  <div className='student-image-tag'></div>
                  <div className='student-info-tag'>
                    <p className='student-name-para'>Velu Mani</p>
                    <p className='student-degree-para'>Computer Science</p>
                  </div>
                </div>
                </div>
                <div className='student-testimonial-one'>
                <div className='student-star-rating'>
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <div className='student-comment'>
                  <p className='comment-student'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolorum magnam mollitia aut aliquam dolorem praesentium. Quisquam ut ex et voluptates reiciendis cum quibusdam similique ipsam, pariatur tenetur sed. Ullam?</p>
                </div>
                <div className='student-info'>
                  <div className='student-image-tag'></div>
                  <div className='student-info-tag'>
                    <p className='student-name-para'>Velu Mani</p>
                    <p className='student-degree-para'>Computer Science</p>
                  </div>
                </div>
                </div>
             
              
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
