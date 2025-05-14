import '/src/Styles/Topcourses.css'
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
        <div className='top-course-header'>
            <div className='top-courses-title-main'>
                <p className='top-course-title-para'>Top Cathegory
                    <div className='top-course-underline'></div>
                </p>
                
            </div>
            <p className='top-courses-title-sub'>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore</p>
        </div>
        <div className='top-course-course-list'>
            
            <div className='course-box course-box-one'>
                <div className='course-box-icon icon-course-one'>
                    <LuBriefcaseBusiness/>
                </div>
                <div  className='course-box-cont'>
                    <p>Business Management</p>
                </div>
            </div>
            <div className='course-box course-box-two'>
                <div className='course-box-icon icon-course-two'>
                    <GiPencilBrush/>
                </div>
                <div  className='course-box-cont'>
                    <p>Business Management</p>
                </div>
                
            </div>
            <div className='course-box course-box-three'>
                <div className='course-box-icon icon-course-three'>
                    <LuListTodo/>
                </div>
                <div  className='course-box-cont'>
                    <p>Business Management</p>
                </div>
            </div>
            <div className='course-box course-box-four'>
                <div className='course-box-icon icon-course-four'>
                    <GiMedicines/>
                </div>
                <div  className='course-box-cont'>
                    <p>Business Management</p>
                </div>
            </div>
           
            <div className='course-box course-box-five'>
                <div className='course-box-icon icon-course-five'>
                    <RiDatabaseLine/>
                </div>
                <div  className='course-box-cont'>
                    <p>Business Management</p>
                </div>
            </div>
            
            <div className='course-box course-box-six'>
                <div className='course-box-icon icon-course-six'>
                    <AiTwotoneSound/>
                </div>
                <div  className='course-box-cont'>
                    <p>Business Management</p>
                </div>
            </div>
            <div className='course-box course-box-seven'>
                <div className='course-box-icon icon-course-seven'>
                    <FaRegHandshake/>
                </div>
                <div  className='course-box-cont'>
                    <p>Business Management</p>
                </div>
            </div>

            <div className='course-box course-box-eight'>
                <div className='course-box-icon icon-course-eight'>
                    <HiMiniComputerDesktop/>
                </div>
                <div  className='course-box-cont'>
                     <p>Business Management</p>
                </div>
               
            </div>
            
            <div className='course-box course-box-nine'>
                <div className='course-box-icon icon-course-nine'>
                    <FaPhotoFilm/>
                </div>
                <div  className='course-box-cont'>
                    <p>Business Management</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topcourses
