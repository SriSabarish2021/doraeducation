import '../../Styles/CourseOverviewCSS/CourseOverview.css'
import { FaStar } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";
import { PiSubtitles } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { GrUpdate } from "react-icons/gr";

const CourseOverview = () => {
  return (
    <div className='course-overview-main-conatainer'>
     <div className='course-overview-intro-div'>
      <div className='course-main-title-box'>
        <div className='course-title-main-container'>
          <p className='course-name-in-course-overview'>JavaScript Full Course</p>
          <p className='course-para-in-course-overview'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid pariatur reprehenderit molestiae minim ipsum, dolor sit amet consectetur adipisicing elit. Aliquid pariatur reprehenderit molestiae minim</p>
        </div>
        <div className='course-main-titile-content-container'>
          <div className='course-tutor-side'>
            <div className='tutor-img-for-course-overview'></div>
            <div className='tutor-name-for-course-overview'>
              <p className='tutor-name-tit'>Tutor</p>
              <p className='tutor-name'>David rangasamy</p>
            </div>
            <div className='total-enroll-for-course-overview'>
              <p className='tutor-name-tit'>Tutor</p>
              <p className='tutor-name'>David rangasamy</p>
            </div>
            <div className='cathegory-for-course-overview'>
              <p className='tutor-name-tit'>Tutor</p>
              <p className='tutor-name'>David rangasamy</p>
            </div>
          </div>
          <div className='course-audio-review-info-side'>
            <div className='course-review-bar'>
              <p>4.7</p>
              <p className='star-for-course-review'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
              <p>(98 reviews)</p>
            </div>
            <div className='course-audio-bar'>
              <p className='course-audio-para'><AiOutlineSound/><span className='audio-course-span-main'>Audio : <span>English</span></span></p>
            </div>
            <div className='course-language-bar'>
              <p className='course-lang-para'><PiSubtitles/><span className='audio-course-span-main'>Subtitles : <span>15+ Languages</span></span></p>
            </div>
          </div>
          <div className='course-calender-box'>
            <div className='course-calender-one'>
              <p className='calender-icon'><SlCalender/></p>
              <p className='calender-course-cont'>Last Update&nbsp;:&nbsp;<span>10 September 2024</span></p>
            </div>
            <div className='course-calender-two'>
              <p className='calender-icon'><GrUpdate/></p>
              <p className='calender-course-cont'>Released&nbsp;:&nbsp;<span>10 January 2025</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className='course-enroll-box'>
        <div className='course-enroll-video-overview'></div>
        <div className='course-enroll-amount-overview'>
          <div className='actual-course-cost'>
            <div className='actual-course-para'>
              <p>$100.00</p>
              <p>$150.00</p>
            </div>
            <div className='actual-course-discount'>
              <p>15% off</p>
            </div>
          </div>
          <div className='time-left-offer'>
            <p>Lorem ipsum dolor sit am</p>
          </div>
          <div className='course-join-btns'>
            <button className='course-btn'>Apllly</button><button className='course-btn'>Like</button>
          </div>
        </div>
      </div>
     </div>
     <div className='course-overview-content-div'></div>
    </div>
  )
}

export default CourseOverview
