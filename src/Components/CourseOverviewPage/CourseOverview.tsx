import '../../Styles/CourseOverviewCSS/CourseOverview.css'
import { FaStar } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";
import { PiSubtitles } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { GrUpdate } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react';
import { IoIosVideocam } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const CourseOverview = () => {

  const [showcont,setshowcont]=useState(false)

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
      <div className='course-overview-content-main'>
        <div className='course-overview-nav-bar'>
          <p>Summary</p>
          <p>Content</p>
          <p>Outline</p>
          <p>Instructor</p>
          <p>Review</p>
        </div>
        <div className='Course-detail-container'>
          <div className='course-detail-title-bar'>
            <p className='course-detail-title-para-one'>Course Detail</p>
            <p className='course-detail-title-para-two'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus quasi totam quia provident! Accusamus fugiat natus quam necessitatibus magni!</p>
          </div>
          <div className='course-detail-main-point-content'>
            <p className='course-detail-points'><GoDotFill/>Introduction to Graphic Design</p>
            <p className='course-detail-points'><GoDotFill/>Basics of Typography</p>
            <p className='course-detail-points'><GoDotFill/>Color Theory and Applications</p>
            <p className='course-detail-points'><GoDotFill/>Layout and Composition Techniques</p>
            <p className='course-detail-points'><GoDotFill/>Branding and Visual Identity</p>
            <p className='course-detail-points'><GoDotFill/>Real-World Design Projects</p>
          </div>
        </div>
        <div className='course-content-container'>
          <div className='course-content-title'>
            <p>Course Content</p>
          </div>
          <div className='course-content-main-list'>
            <div className='course-content-list'>
              <div className='course-content-list-title' onClick={()=>setshowcont(!showcont)}>
                <p>Lorem ipsum dolor sit amet.</p>
                <p><FaChevronDown className='arrow-icon-for-course-cont' style={{transform:showcont?`rotate(-180deg)`:`rotate(0deg)`}}/></p>
              </div>
              <div className={showcont?'course-content-list-cont-show':'course-content-list-cont'}>
                <p className='course-content-list-inner-para'><IoIosVideocam/>Lorem ipsum dolor sit.</p>
                <p className='course-content-list-inner-time'>10:15</p>
              </div>
            </div>
              <div className='course-content-list'>
              <div className='course-content-list-title' onClick={()=>setshowcont(!showcont)}>
                <p>Lorem ipsum dolor sit amet.</p>
                <p><FaChevronDown className='arrow-icon-for-course-cont' style={{transform:showcont?`rotate(-180deg)`:`rotate(0deg)`}}/></p>
              </div>
              <div className={showcont?'course-content-list-cont-show':'course-content-list-cont'}>
                <p className='course-content-list-inner-para'><IoIosVideocam/>Lorem ipsum dolor sit.</p>
                <p className='course-content-list-inner-time'>10:15</p>
              </div>
            </div>
              <div className='course-content-list'>
              <div className='course-content-list-title' onClick={()=>setshowcont(!showcont)}>
                <p>Lorem ipsum dolor sit amet.</p>
                <p><FaChevronDown className='arrow-icon-for-course-cont' style={{transform:showcont?`rotate(-180deg)`:`rotate(0deg)`}}/></p>
              </div>
              <div className={showcont?'course-content-list-cont-show':'course-content-list-cont'}>
                <p className='course-content-list-inner-para'><IoIosVideocam/>Lorem ipsum dolor sit.</p>
                <p className='course-content-list-inner-time'>10:15</p>
              </div>
            </div>
              <div className='course-content-list'>
              <div className='course-content-list-title' onClick={()=>setshowcont(!showcont)}>
                <p>Lorem ipsum dolor sit amet.</p>
                <p><FaChevronDown className='arrow-icon-for-course-cont' style={{transform:showcont?`rotate(-180deg)`:`rotate(0deg)`}}/></p>
              </div>
              <div className={showcont?'course-content-list-cont-show':'course-content-list-cont'}>
                <p className='course-content-list-inner-para'><IoIosVideocam/>Lorem ipsum dolor sit.</p>
                <p className='course-content-list-inner-time'>10:15</p>
              </div>
            </div>
              <div className='course-content-list'>
              <div className='course-content-list-title' onClick={()=>setshowcont(!showcont)}>
                <p>Lorem ipsum dolor sit amet.</p>
                <p><FaChevronDown className='arrow-icon-for-course-cont' style={{transform:showcont?`rotate(-180deg)`:`rotate(0deg)`}}/></p>
              </div>
              <div className={showcont?'course-content-list-cont-show':'course-content-list-cont'}>
                <p className='course-content-list-inner-para'><IoIosVideocam/>Lorem ipsum dolor sit.</p>
                <p className='course-content-list-inner-time'>10:15</p>
              </div>
            </div>
              <div className='course-content-list'>
              <div className='course-content-list-title' onClick={()=>setshowcont(!showcont)}>
                <p>Lorem ipsum dolor sit amet.</p>
                <p><FaChevronDown className='arrow-icon-for-course-cont' style={{transform:showcont?`rotate(-180deg)`:`rotate(0deg)`}}/></p>
              </div>
              <div className={showcont?'course-content-list-cont-show':'course-content-list-cont'}>
                <p className='course-content-list-inner-para'><IoIosVideocam/>Lorem ipsum dolor sit.</p>
                <p className='course-content-list-inner-time'>10:15</p>
              </div>
            </div>
            
          </div>
        </div>
        <div className='what-learn-from-course-container'>
          <p className='what-learn-title'>What you'll learn</p>
          <div className='what-learn-content-holder'>
            <div className='what-learn-content'>
              <IoIosCheckmarkCircleOutline className='tick-what-learn'/>
              <p className='para-what-learn'>Master the principles of design: typography, layout, and color theory</p>
            </div>
            <div className='what-learn-content'>
              <IoIosCheckmarkCircleOutline className='tick-what-learn'/>
              <p className='para-what-learn'>Master the principles of design: typography, layout, and color theory</p>
            </div>
            <div className='what-learn-content'>
              <IoIosCheckmarkCircleOutline className='tick-what-learn'/>
              <p className='para-what-learn'>Master the principles of design: typography, layout, and color theory</p>
            </div>
            <div className='what-learn-content'>
              <IoIosCheckmarkCircleOutline className='tick-what-learn'/>
              <p className='para-what-learn'>Master the principles of design: typography, layout, and color theory</p>
            </div>
            <div className='what-learn-content'>
              <IoIosCheckmarkCircleOutline className='tick-what-learn'/>
              <p className='para-what-learn'>Master the principles of design: typography, layout, and color theory</p>
            </div>
            <div className='what-learn-content'>
              <IoIosCheckmarkCircleOutline className='tick-what-learn'/>
              <p className='para-what-learn'>Master the principles of design: typography, layout, and color theory</p>
            </div>
          </div>
        </div>
        <div className='course-instructor-container'>
          <p className='what-learn-title'>Course Instructor</p>
          <div className='course-instructor-info'>
            <div className='course-intructor-image'></div>
            <div className='course-instructor-main-info'>
              <div className='instructor-name'>
                <p>Jhon Smith</p>
                <p>Learned Graphic Designer, Chennai</p>
              </div>
              <div className='instructor-information'>
                <p className='instructor-infor-para-one'><FaStar/>4.8<span>(250 reviews)</span></p>
                <p  className='instructor-infor-para-two'><FaPaintBrush/>8 Courses</p>
                <p className='instructor-infor-para-three'><MdOutlinePersonOutline/>50,000 Students</p>
              </div>
              <p className='instructor-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reiciendis consequatur, quia illum fugiat aut tempore nemo obcaecati illo omnis necessitatibus possimus iste, dolore eos laboriosam repudiandae rem fuga reprehenderit.</p>
            </div>
            <div className='course-instructor-social-media'>
              <div className='instructor-media'><FaFacebookF/></div>
              <div className='instructor-media'><FaXTwitter/></div>
              <div className='instructor-media'><FaLinkedinIn/></div>
              <div className='instructor-media'><FaInstagram/></div>
            </div>
          </div>

        </div>
        <div className='course-rating'>
          <p className='what-learn-title'>Course Rating</p>
          <div className='course-rating-container-main'>
            <div className='total-rating-star-average'>
              <p className='total-rating-para'>4.1</p>
              <div className='total-rating-average-star'>
                <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                <p>(233 reviews)</p>
              </div>
            </div>
            <div className='total-rating-star-lineup'>
              <div className='total-rating-star-line'>
                <p>5</p>
                <div className='line-rating-bg'>
                  <div className='line-rating-inner'></div>
                </div>
                <p>82%</p>
                <p>122</p>
              </div>
              <div className='total-rating-star-line'>
                <p>5</p>
                <div className='line-rating-bg'>
                  <div className='line-rating-inner'></div>
                </div>
                <p>82%</p>
                <p>122</p>
              </div>
              <div className='total-rating-star-line'>
                <p>5</p>
                <div className='line-rating-bg'>
                  <div className='line-rating-inner'></div>
                </div>
                <p>82%</p>
                <p>122</p>
              </div>
              <div className='total-rating-star-line'>
                <p>5</p>
                <div className='line-rating-bg'>
                  <div className='line-rating-inner'></div>
                </div>
                <p>82%</p>
                <p>122</p>
              </div>
              <div className='total-rating-star-line'>
                <p>5</p>
                <div className='line-rating-bg'>
                  <div className='line-rating-inner'></div>
                </div>
                <p>82%</p>
                <p>122</p>
              </div>
              
            </div>
          </div>

        </div>
        <div className='course-review-container'>
          <p className='what-learn-title'>Course Review</p>
          <div className='review-of-the-course'>
            <div className='review-of-the-course-reviewer-img'>
              <div className='reviewer-image'></div>
            </div>
            <div className='review-of-the-course-cont'>
              <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
              <div className='reviewer-content'>
                <p className='reviewer-name-review'>Jame Bond</p>
                <p className='reviewer-date-review'>July 20 2020</p>
                <p className='reviewer-cont-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quia facilis necessitatibus vel repellat nobis assumenda possimus illo debitis.</p>
              </div>
            </div>
          </div>
           <div className='review-of-the-course'>
            <div className='review-of-the-course-reviewer-img'>
              <div className='reviewer-image'></div>
            </div>
            <div className='review-of-the-course-cont'>
              <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
              <div className='reviewer-content'>
                <p className='reviewer-name-review'>Jame Bond</p>
                <p className='reviewer-date-review'>July 20 2020</p>
                <p className='reviewer-cont-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quia facilis necessitatibus vel repellat nobis assumenda possimus illo debitis.</p>
              </div>
            </div>
          </div>
           <div className='review-of-the-course'>
            <div className='review-of-the-course-reviewer-img'>
              <div className='reviewer-image'></div>
            </div>
            <div className='review-of-the-course-cont'>
              <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
              <div className='reviewer-content'>
                <p className='reviewer-name-review'>Jame Bond</p>
                <p className='reviewer-date-review'>July 20 2020</p>
                <p className='reviewer-cont-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quia facilis necessitatibus vel repellat nobis assumenda possimus illo debitis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='course-overview-content-sider'></div>
     </div>
    </div>
  )
}

export default CourseOverview
