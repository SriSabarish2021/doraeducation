import '../../Styles/AboutPageCSS/Tutro.css'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Tutor = () => {
  return (
    <div className='tutor-about-page-container'>
      <div className='tutor-elements'>
        <div className='tutor-box tutor-title-box'>
            <div className='tutor-indicator '>
                <p>Tutor</p>
                <div className='tutor-indicator-design-bar-one'></div>
                <div className='tutor-indicator-design-bar-two'></div>
            </div>
            <p className='tutor-page-para'>Meet the Experts <span>Who Inspire and</span><span className='tutor-title-span'>Educate.</span></p>
            <button className='btn-for-tutor-page'>View More
              <div className='tutor-page-abt-btn-design'></div>
            </button>
        </div>
        <div className='tutor-box  tutor-box-one'>
            <div className='tutor-img tutor-img-one'>
            </div>
            <div className='tutor-img-design  tutor-img-design-one'></div>
            <div className='name-tutor-box tutor-name-one'>
              <p className='tutor-name'>Velu Mani</p>
              <p className='tutor-study-field'>phd. in Computer SCience</p>
            </div>
            <div className='info-tutor-box tutor-info-one'>
              <div className='div-for-tutor-btn'>
                <div className='fb-tutor-btn tutor-btn'><FaFacebookF className='tutor-btn-icon'/></div>
                <div className='linkedin-tutor-btn tutor-btn'><FaLinkedinIn className='tutor-btn-icon'/></div>
                <div className='twitter-tutor-btn tutor-btn'><FaXTwitter className='tutor-btn-icon'/></div>
              </div>
              <div className='div-for-tutor-plus'>
                <div className='plus-for-tutor-show'></div>
              </div>
              
            </div>

        </div>
        <div className='tutor-box tutor-box-two'>
            <div className='tutor-img tutor-img-two' >
                
            </div>
              <div className='tutor-img-design  tutor-img-design-two'></div>
              <div className='name-tutor-box tutor-name-two'>
                <p className='tutor-name'>Velu Mani</p>
              <p className='tutor-study-field'>phd. in Computer SCience</p>
              </div>
            <div className='info-tutor-box tutor-info-two'>
                <div className='div-for-tutor-btn'>
                <div className='fb-tutor-btn tutor-btn'><FaFacebookF className='tutor-btn-icon'/></div>
                <div className='linkedin-tutor-btn tutor-btn'><FaLinkedinIn className='tutor-btn-icon'/></div>
                <div className='twitter-tutor-btn tutor-btn'><FaXTwitter className='tutor-btn-icon'/></div>
              </div>
              <div className='div-for-tutor-plus'>
                <div className='plus-for-tutor-show'></div>
              </div>
            </div>

        </div>
        <div className='tutor-box tutor-box-three'>
            <div className='tutor-img tutor-img-three'>
                
            </div>
              <div className='tutor-img-design  tutor-img-design-three'></div>
              <div className='name-tutor-box tutor-name-three'>
                <p className='tutor-name'>Velu Mani</p>
              <p className='tutor-study-field'>phd. in Computer SCience</p>
              </div>
            <div className='info-tutor-box tutor-info-three'>
                <div className='div-for-tutor-btn'>
                <div className='fb-tutor-btn tutor-btn'><FaFacebookF  className='tutor-btn-icon'/></div>
                <div className='linkedin-tutor-btn tutor-btn'><FaLinkedinIn className='tutor-btn-icon'/></div>
                <div className='twitter-tutor-btn tutor-btn'><FaXTwitter className='tutor-btn-icon'/></div>
              </div>
              <div className='div-for-tutor-plus'>
                <div className='plus-for-tutor-show'></div>
              </div>
            </div>

        </div>
        <div className='tutor-box tutor-box-four'>
             <div className='tutor-img tutor-img-four '>
                
            </div>
              <div className='tutor-img-design  tutor-img-design-four'></div>
              <div className='name-tutor-box tutor-name-four'>
                <p className='tutor-name'>Velu Mani</p>
              <p className='tutor-study-field'>Computer Science</p>
              </div>
            <div className='info-tutor-box tutor-info-four'>
                <div className='div-for-tutor-btn'>
                <div className='fb-tutor-btn tutor-btn'><FaFacebookF className='tutor-btn-icon'/></div>
                <div className='linkedin-tutor-btn tutor-btn'><FaLinkedinIn className='tutor-btn-icon'/></div>
                <div className='twitter-tutor-btn tutor-btn'><FaXTwitter className='tutor-btn-icon'/></div>
              </div>
              <div className='div-for-tutor-plus'>
                <div className='plus-for-tutor-show'></div>
              </div>
            </div>

        </div>
        <div className='tutor-box tutor-box-five'>
           <div className='tutor-img tutor-img-five'>
                
            </div>
              <div className='tutor-img-design tutor-img-design-five'></div>
              <div className='name-tutor-box tutor-name-five'>
                <p className='tutor-name'>Velu Mani</p>
              <p className='tutor-study-field'>Computer Science</p>
              </div>
            <div className='info-tutor-box tutor-info-five'>
                <div className='div-for-tutor-btn'>
                <div className='fb-tutor-btn tutor-btn'><FaFacebookF className='tutor-btn-icon'/></div>
                <div className='linkedin-tutor-btn tutor-btn'><FaLinkedinIn className='tutor-btn-icon'/></div>
                <div className='twitter-tutor-btn tutor-btn'><FaXTwitter className='tutor-btn-icon'/></div>
              </div>
              <div className='div-for-tutor-plus'>
                <div className='plus-for-tutor-show'></div>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Tutor
