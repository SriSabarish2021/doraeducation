import '/src/Styles/AboutUs.css'
import { MdDone } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <div className='about-us-image-container'>
        <div className='about-image-box-one'>
          <div className='about-us-image-cont-one'>
            <div className='about-us-content-one-inner'>
              <p className='about-us-one-para-one'>20+</p>
              <p className='about-us-one-para-two'>Year of Excellence in Education</p>
            </div>
          </div>
          <div className='about-us-image-one'></div>
        </div>
        <div className='about-image-box-two'>
           <div className=' about-us-image-two'></div>
          <div className='about-us-image-cont-two'>
            <div className='about-us-cont-inner-two'>
              <div className='alumini-img-and-cont'>
                <div className='alumini-images'>
                  <div className='alumini-img-show'></div>
                </div>
                <div className='alumini-cont'>
                  <p>30K</p>
                </div>
              </div>
              <p className='alumini-cont-two'>Hello Every one here</p>
            </div>
          </div>
        </div>
      </div>
      <div className='about-us-content-container'>
        <div className='about-us-title-bar'>
          <p className='about-us-small'>About Us</p>
          <div className='about-us-main-tit-div'>
            <p className='about-us-main-tit'>Shaping Futures with</p>
            <p className='about-us-main-tit-two'>Quality Education</p>
          </div>
          
        </div>
        <div className='about-us-content-main'>
          <p className='para-in-about-us-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maiores omnis perspiciatis, provident quis dicta asperiores rerum! Voluptatem, numquam commodi?</p>
          <div className='order-list-of-about-us'>
            <p className='order-list-para'><span className='order-list-span'><MdDone/></span>Education Award Achived</p>
            <p className='order-list-para'><span className='order-list-span'><MdDone/></span>Access Lifetime any Device</p>
            <p className='order-list-para'><span className='order-list-span'><MdDone/></span>No Credit Card Required</p>
            <p className='order-list-para'><span className='order-list-span'><MdDone/></span>24*7 Staff Support</p>
            
          </div>
          <div className='about-us-btn-div'>
            <button className='about-us-btn'>Read More
              <div className='about-btn-animation'></div>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
