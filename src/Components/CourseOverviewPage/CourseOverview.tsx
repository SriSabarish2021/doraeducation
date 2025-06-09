import '../../Styles/CourseOverviewCSS/CourseOverview.css'
import { FaStar } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";
import { PiSubtitles } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { GrUpdate } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const CourseOverview = () => {
  return (
    <div className='course-overview-main-conatainer'>
     <div className='course-overview-intro-div'>
      <div className='course-main-title-box'>
        <div className='course-title-main-container'>

          <p className='course-name-in-course-overview'>JavaScript Course Details<span className='course-overview-title'>JavaScript Full Course</span></p>
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
              <p className='course-review-rating'>4.7</p>
              <p className='star-for-course-review'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
              <p className='course-review-total'>(&nbsp;98 reviews&nbsp;)</p>
            </div>
            <div className='course-audio-bar'>
              <p className='course-audio-para'><AiOutlineSound/><span className='audio-course-span-main'>Audio : <span className='audio-language'>English</span></span></p>
            </div>
            <div className='course-language-bar'>
              <p className='course-lang-para'><PiSubtitles/><span className='audio-course-span-main'>Subtitles : <span  className='avail-language'>15+ Languages</span></span></p>
            </div>
          </div>
          <div className='course-calender-box'>
            <div className='course-calender-one'>
              <p className='calender-icon'><SlCalender/></p>
              <p className='calender-course-cont'>Last Update&nbsp;:&nbsp;<span className='calender-cont'>10 September 2024</span></p>
            </div>
            <div className='course-calender-two'>
              <p className='calender-icon'><GrUpdate/></p>
              <p className='calender-course-cont'>Released&nbsp;:&nbsp;<span className='calender-cont'>10 January 2025</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className='course-enroll-box'>
        <div className='course-enroll-video-overview'>
          <div className='course-video-image'>
            <div className='video-play-btn-container'>
              <a href="">
                <div className='icon-play-vid'>
                  <FaPlay/>
                </div>
              </a>
              <div className='vid-play-design'></div>
            </div>
          </div>
        </div>
        <div className='course-enroll-amount-overview'>
          <div className='actual-course-cost'>
            <div className='actual-course-para'>
              <p className='actual-cost-para-one'>$100.00</p>
              <p className='actual-cost-para-two'>$150.00</p>
            </div>
            <div className='actual-course-discount'>
              <p>15% off</p>
            </div>
          </div>
          <div className='time-left-offer'>
            <p className='time-left-offer-para'><FaRegClock/> 5 Days left at this price!</p>
          </div>
          <div className='course-join-btns'>
            <button className='course-btn course-btn-one'>Pick JavaScript
              <div className='course-btn-design course-btn-design-one'></div>
              <div className='course-btn-design course-btn-design-two'></div>
              <div className='course-btn-design course-btn-design-three'></div>
              <div className='course-btn-design course-btn-design-four'></div>
            </button>
            <button className='course-btn course-btn-two'>Move to LikeList
              <div className='course-btn-design-two course-btn-design-two-one'></div>
              <div className='course-btn-design-two course-btn-design-two-two'></div>
              <div className='course-btn-design-two course-btn-design-two-three'></div>
              <div className='course-btn-design-two course-btn-design-two-four'></div>
            </button>
          </div>
        </div>
      </div>
     </div>
     <div className='course-overview-content-div'>
      <div className='course-overview-content-main'></div>
      <div className='course-overview-content-sider'></div>
     </div>
    </div>
  )
}

export default CourseOverview
