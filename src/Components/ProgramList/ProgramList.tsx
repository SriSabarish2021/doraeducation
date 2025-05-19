import '/src/Styles/ProgramList.css'
import { PiClock } from "react-icons/pi";
import { PiReadCvLogo } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const ProgramList = () => {
  return (
    <div className='program-list-main-container'>
      <div className='program-list-title-container'>
        <p className='program-list-para-one'>Popular Courses</p>
        <p className='program-list-para-two'>Our Programs & Accrediation</p>
        <p className='program-list-para-three'>Viverra maecenas tempus facilisi pulvinar sapien. Fermentum egestas tellus consequat nisl vel pretium Nunc eu hendrerit turpis. Fusce non lectus sem In pellentesque nunc.</p>
      </div>
      <div className='program-list-items-container'>
        
          <div className='program-item-one'>
            <div className='program-image-bar'></div>
            <div className='program-content-bar'>
              <div className='program-info'>
                <p className='program-info-para-one'><PiClock className='icon'/>20 Hours</p>
                <p className='program-info-para-two'><PiReadCvLogo className='icon'/>10 Lesson</p>
                <p className='program-info-para-three'><PiStudent  className='icon'/>6 Students</p>
              </div>
              <div className='level-of-difficulty'>
                <p>Beginner</p>
              </div>
              <div className='prog-con-container'>
                <p className='program-title'>Stock Markting Ideas</p>
                <p className='program-sub-title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis.</p>
              </div>
            
            </div>
            <div className='program-star-bar'>
              <div className='star-div-for-program'>
                <p className='star-para-program-list'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></p>
                <p className='star-span-para'>(5.0/3)</p>
              </div>
              <p className='amt-para-in-prog-list'>$50</p>
            </div>
            <div className='hovering-content-program-items'>
              <div className='hovering-content-container'>
                <div className='difficulty-level-hover-bar'><p>Beginner</p></div>
                <p className='hover-title'>Stock Marketing Analysis</p>
                <p className='star-para-hovering'><span className='star-hover'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></span><span className='star-hover-cont'>0.5/3 Ratings</span></p>
                <p className="hover-amount">$50</p>
                <p className="hover-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni unde. Saepe nulla vero ullam quo. Qui accusantium non recusandae?</p>
                <div className='prog-info-hovering'>
                  <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>20 Hours</p>
                  <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>10 Lesson</p>
                </div>
              </div>
              <div className='hovering-btn-container'>
                <button className='hover-enroll-btn'>
                  Enroll Now
                  <div className='prog-enroll-design-one'></div>
                   <div className='prog-enroll-design-two'></div>
                </button>
                <div className='hover-add-favorite-btn'>
                  <FaRegHeart/>
                  <div className='hover-mess-box'><p>Add Like List</p>
                  <span className='arrow-in-hover-mess'></span></div>
                </div>
                
              </div>
            </div>
          </div>
         
       
          <div className='program-item-one'>
            <div className='program-image-bar'></div>
            <div className='program-content-bar'>
              <div className='program-info'>
                <p className='program-info-para-one'><PiClock className='icon'/>20 Hours</p>
                <p className='program-info-para-two'><PiReadCvLogo className='icon'/>10 Lesson</p>
                <p className='program-info-para-three'><PiStudent  className='icon'/>6 Students</p>
              </div>
              <div className='level-of-difficulty'>
                <p>Beginner</p>
              </div>
              <div className='prog-con-container'>
                <p className='program-title'>Stock Markting Ideas</p>
                <p className='program-sub-title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis.</p>
              </div>
            
            </div>
            <div className='program-star-bar'>
              <div className='star-div-for-program'>
                <p className='star-para-program-list'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></p>
                <p className='star-span-para'>(5.0/3)</p>
              </div>
              <p className='amt-para-in-prog-list'>$50</p>
            </div>
             <div className='hovering-content-program-items'>
              <div className='hovering-content-container'>
                <div className='difficulty-level-hover-bar'><p>Beginner</p></div>
                <p className='hover-title'>Stock Marketing Analysis</p>
                <p className='star-para-hovering'><span className='star-hover'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></span><span className='star-hover-cont'>0.5/3 Ratings</span></p>
                <p className="hover-amount">$50</p>
                <p className="hover-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni unde. Saepe nulla vero ullam quo. Qui accusantium non recusandae?</p>
                <div className='prog-info-hovering'>
                  <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>20 Hours</p>
                  <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>10 Lesson</p>
                </div>
              </div>
              <div className='hovering-btn-container'>
                <button className='hover-enroll-btn'>
                  Enroll Now
                  <div className='prog-enroll-design-one'></div>
                   <div className='prog-enroll-design-two'></div>
                </button>
                <div className='hover-add-favorite-btn'>
                  <FaRegHeart/>
                  <div className='hover-mess-box'><p>Add Like List</p>
                  <span className='arrow-in-hover-mess'></span></div>
                </div>
                
              </div>
            </div>
          </div>
        
        
          <div className='program-item-one'>
            <div className='program-image-bar'></div>
            <div className='program-content-bar'>
              <div className='program-info'>
                <p className='program-info-para-one'><PiClock className='icon'/>20 Hours</p>
                <p className='program-info-para-two'><PiReadCvLogo className='icon'/>10 Lesson</p>
                <p className='program-info-para-three'><PiStudent  className='icon'/>6 Students</p>
              </div>
              <div className='level-of-difficulty'>
                <p>Beginner</p>
              </div>
              <div className='prog-con-container'>
                <p className='program-title'>Stock Markting Ideas</p>
                <p className='program-sub-title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis.</p>
              </div>
            
            </div>
            <div className='program-star-bar'>
              <div className='star-div-for-program'>
                <p className='star-para-program-list'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></p>
                <p className='star-span-para'>(5.0/3)</p>
              </div>
              <p className='amt-para-in-prog-list'>$50</p>
            </div>
             <div className='hovering-content-program-items'>
              <div className='hovering-content-container'>
                <div className='difficulty-level-hover-bar'><p>Beginner</p></div>
                <p className='hover-title'>Stock Marketing Analysis</p>
                <p className='star-para-hovering'><span className='star-hover'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></span><span className='star-hover-cont'>0.5/3 Ratings</span></p>
                <p className="hover-amount">$50</p>
                <p className="hover-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni unde. Saepe nulla vero ullam quo. Qui accusantium non recusandae?</p>
                <div className='prog-info-hovering'>
                  <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>20 Hours</p>
                  <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>10 Lesson</p>
                </div>
              </div>
              <div className='hovering-btn-container'>
                <button className='hover-enroll-btn'>
                  Enroll Now
                  <div className='prog-enroll-design-one'></div>
                   <div className='prog-enroll-design-two'></div>
                </button>
                <div className='hover-add-favorite-btn'>
                  <FaRegHeart/>
                  <div className='hover-mess-box'><p>Add Like List</p>
                  <span className='arrow-in-hover-mess'></span></div>
                </div>
                
              </div>
            </div>
          </div>
        
       
          <div className='program-item-one'>
            <div className='program-image-bar'></div>
            <div className='program-content-bar'>
              <div className='program-info'>
                <p className='program-info-para-one'><PiClock className='icon'/>20 Hours</p>
                <p className='program-info-para-two'><PiReadCvLogo className='icon'/>10 Lesson</p>
                <p className='program-info-para-three'><PiStudent  className='icon'/>6 Students</p>
              </div>
              <div className='level-of-difficulty'>
                <p>Beginner</p>
              </div>
              <div className='prog-con-container'>
                <p className='program-title'>Stock Markting Ideas</p>
                <p className='program-sub-title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis.</p>
              </div>
            
            </div>
            <div className='program-star-bar'>
              <div className='star-div-for-program'>
                <p className='star-para-program-list'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></p>
                <p className='star-span-para'>(5.0/3)</p>
              </div>
              <p className='amt-para-in-prog-list'>$50</p>
            </div>
            <div className='hovering-content-program-items'>
              <div className='hovering-content-container'>
                <div className='difficulty-level-hover-bar'><p>Beginner</p></div>
                <p className='hover-title'>Stock Marketing Analysis</p>
                <p className='star-para-hovering'><span className='star-hover'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></span><span className='star-hover-cont'>0.5/3 Ratings</span></p>
                <p className="hover-amount">$50</p>
                <p className="hover-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni unde. Saepe nulla vero ullam quo. Qui accusantium non recusandae?</p>
                <div className='prog-info-hovering'>
                  <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>20 Hours</p>
                  <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>10 Lesson</p>
                </div>
              </div>
              <div className='hovering-btn-container'>
                <button className='hover-enroll-btn'>
                  Enroll Now
                  <div className='prog-enroll-design-one'></div>
                   <div className='prog-enroll-design-two'></div>
                </button>
                <div className='hover-add-favorite-btn'>
                  <FaRegHeart/>
                  <div className='hover-mess-box'><p>Add Like List</p>
                  <span className='arrow-in-hover-mess'></span></div>
                </div>
                
              </div>
            </div>
          </div>
       
       
          <div className='program-item-one'>
            <div className='program-image-bar'></div>
            <div className='program-content-bar'>
              <div className='program-info'>
                <p className='program-info-para-one'><PiClock className='icon'/>20 Hours</p>
                <p className='program-info-para-two'><PiReadCvLogo className='icon'/>10 Lesson</p>
                <p className='program-info-para-three'><PiStudent  className='icon'/>6 Students</p>
              </div>
              <div className='level-of-difficulty'>
                <p>Beginner</p>
              </div>
              <div className='prog-con-container'>
                <p className='program-title'>Stock Markting Ideas</p>
                <p className='program-sub-title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis.</p>
              </div>
            
            </div>
            <div className='program-star-bar'>
              <div className='star-div-for-program'>
                <p className='star-para-program-list'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></p>
                <p className='star-span-para'>(5.0/3)</p>
              </div>
              <p className='amt-para-in-prog-list'>$50</p>
            </div>
            <div className='hovering-content-program-items'>
              <div className='hovering-content-container'>
                <div className='difficulty-level-hover-bar'><p>Beginner</p></div>
                <p className='hover-title'>Stock Marketing Analysis</p>
                <p className='star-para-hovering'><span className='star-hover'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></span><span className='star-hover-cont'>0.5/3 Ratings</span></p>
                <p className="hover-amount">$50</p>
                <p className="hover-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni unde. Saepe nulla vero ullam quo. Qui accusantium non recusandae?</p>
                <div className='prog-info-hovering'>
                  <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>20 Hours</p>
                  <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>10 Lesson</p>
                </div>
              </div>
              <div className='hovering-btn-container'>
                <button className='hover-enroll-btn'>
                  Enroll Now
                  <div className='prog-enroll-design-one'></div>
                   <div className='prog-enroll-design-two'></div>
                </button>
                <div className='hover-add-favorite-btn'>
                  <FaRegHeart/>
                  <div className='hover-mess-box'><p>Add Like List</p>
                  <span className='arrow-in-hover-mess'></span></div>
                </div>
                
              </div>
            </div>
          </div>
      
        
          <div className='program-item-one'>
            <div className='program-image-bar'></div>
            <div className='program-content-bar'>
              <div className='program-info'>
                <p className='program-info-para-one'><PiClock className='icon'/>20 Hours</p>
                <p className='program-info-para-two'><PiReadCvLogo className='icon'/>10 Lesson</p>
                <p className='program-info-para-three'><PiStudent  className='icon'/>6 Students</p>
              </div>
              <div className='level-of-difficulty'>
                <p>Beginner</p>
              </div>
              <div className='prog-con-container'>
                <p className='program-title'>Stock Markting Ideas</p>
                <p className='program-sub-title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis.</p>
              </div>
            
            </div>
            <div className='program-star-bar'>
              <div className='star-div-for-program'>
                <p className='star-para-program-list'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></p>
                <p className='star-span-para'>(5.0/3)</p>
              </div>
              <p className='amt-para-in-prog-list'>$50</p>
            </div>
          <div className='hovering-content-program-items'>
              <div className='hovering-content-container'>
                <div className='difficulty-level-hover-bar'><p>Beginner</p></div>
                <p className='hover-title'>Stock Marketing Analysis</p>
                <p className='star-para-hovering'><span className='star-hover'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></span><span className='star-hover-cont'>0.5/3 Ratings</span></p>
                <p className="hover-amount">$50</p>
                <p className="hover-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni unde. Saepe nulla vero ullam quo. Qui accusantium non recusandae?</p>
                <div className='prog-info-hovering'>
                  <p className='hover-program-info-para-one'><PiClock className='icon-hover'/>20 Hours</p>
                  <p className='hover-program-info-para-two'><PiReadCvLogo className='icon-hover'/>10 Lesson</p>
                </div>
              </div>
              <div className='hovering-btn-container'>
                <button className='hover-enroll-btn'>
                  Enroll Now
                  <div className='prog-enroll-design-one'></div>
                   <div className='prog-enroll-design-two'></div>
                </button>
                <div className='hover-add-favorite-btn'>
                  <FaRegHeart/>
                  <div className='hover-mess-box'><p>Add Like List</p>
                  <span className='arrow-in-hover-mess'></span></div>
                </div>
                
              </div>
            </div>
          </div>
        
      </div>
      

      <button className='program-list-btn'>See More</button>
     
      
    </div>
  )
}

export default ProgramList
