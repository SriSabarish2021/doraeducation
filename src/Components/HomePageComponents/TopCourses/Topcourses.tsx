import '../../../Styles/HomePageCSS/TopCourse/TopCourses.css'

import { LuBriefcaseBusiness } from "react-icons/lu";
import { GiPencilBrush } from "react-icons/gi";
import { LuListTodo } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { RiDatabaseLine } from "react-icons/ri";
import { AiTwotoneSound } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaPhotoFilm } from "react-icons/fa6";

const Topcourses = () => {

    

  
  return (
    <div className='top-courses-container'>
        <div className='line-move-animation-main'>
            <div className='line-div line-arrow-one'></div>
            <div  className='line-div line-arrow-two'></div>
            <div  className='line-div line-arrow-three'></div>
            <div  className='line-div line-arrow-four'></div>
            <div className='line-div line-arrow-five' ></div>
        </div>
        <div className='top-course-header'>
           
            <div className='top-courses-title-main'>
                 <div className='arrow-teaching-design'>

                </div>
                <p className='top-course-title-para'>Top Category
                    <span className='top-course-underline'></span>
                </p>
                
            </div>
            <p className='top-courses-title-sub'>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore</p>
        </div>
        <div className='top-course-course-list'>
            
            <div className='course-box-top course-box-top-one'>
                <div className='course-box-design'></div>
                <div className='course-box-icon icon-course-one'>
                    <LuBriefcaseBusiness/>
                </div>
                <div  className='course-box-cont'>
                    <p>Business Management</p>
                </div>
            </div>
            <div className='course-box-top course-box-top-two'>
                 <div className='course-box-design'></div>
                <div className='course-box-icon icon-course-two'>
                    <GiPencilBrush/>
                </div>
                <div  className='course-box-cont'>
                    <p>Art & Design</p>
                </div>
                
            </div>
            <div className='course-box-top course-box-top-three'>
                 <div className='course-box-design'></div>
                <div className='course-box-icon icon-course-three'>
                    <LuListTodo/>
                </div>
                <div  className='course-box-cont'>
                    <p>Personal Development</p>
                </div>
            </div>
            <div className='course-box-top course-box-top-four'>
                 <div className='course-box-design'></div>
                <div className='course-box-icon icon-course-four'>
                    <GiMedicines/>
                </div>
                <div  className='course-box-cont'>
                    <p>Health & Fitness</p>
                </div>
            </div>
           
            <div className='course-box-top course-box-top-five'>
                 <div className='course-box-design'></div>
                <div className='course-box-icon icon-course-five'>
                    <RiDatabaseLine/>
                </div>
                <div  className='course-box-cont'>
                    <p>Data Science</p>
                </div>
            </div>
            
            <div className='course-box-top course-box-top-six'>
                 <div className='course-box-design'></div>
                <div className='course-box-icon icon-course-six'>
                    <AiTwotoneSound/>
                </div>
                <div  className='course-box-cont'>
                    <p>Marketing</p>
                </div>
            </div>
            <div className='course-box-top course-box-top-seven'>
                 <div className='course-box-design'></div>
                <div className='course-box-icon icon-course-seven'>
                    <FaRegHandshake/>
                </div>
                <div  className='course-box-cont'>
                    <p>Business & Finance</p>
                </div>
            </div>

            <div className='course-box-top course-box-top-eight'>
                 <div className='course-box-design'></div>
                <div className='course-box-icon icon-course-eight'>
                    <HiMiniComputerDesktop/>
                </div>
                <div  className='course-box-cont'>
                     <p>Computer Science</p>
                </div>
               
            </div>
            
            <div className='course-box-top course-box-top-nine'>
                 <div className='course-box-design'></div>
                <div className='course-box-icon icon-course-nine'>
                    <FaPhotoFilm/>
                </div>
                <div  className='course-box-cont'>
                    <p>Videos & Photography</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Topcourses
