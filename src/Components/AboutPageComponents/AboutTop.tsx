import '../../Styles/AboutPageCSS/AboutTop.css'
import { FaAnglesRight } from "react-icons/fa6";

const AboutTop = () => {
  return (
    <div className='about-page-top-container'>
        <div className='about-top-image-container'>
            <div className='top-about-image-content-container'>
                <div className='about-top-main-title'>
                    <p>Your Top Choice for the Better Future</p>
                    <p>With Quality Education</p>
                </div>
                <div className='about-to-home-btn'>
                    <p className='about-home-para'>Home</p>
                    <FaAnglesRight className='right-arrow-for-home-to-about'/>
                    <p className='about-paga-para'>About</p>
                </div>
                <div className='about-top-image-style'></div>
                <div className='about-top-image-style-two'></div>

            </div>
        </div>
        <div className='about-top-side-bar-container'>
            <div className='about-side-bar about-side-by-one'>
                <div className='about-side-bar-img'>
                    <div className='about-side-img about-side-img-one'></div>
                    <div className='about-side-img-design about-side-img-one-design-one'></div>
                    <div className='about-side-img-design-two about-side-img-one-design-two'></div>
                </div>
                <div className='about-side-bar-cont'>
                    <p className='about-side-para-one'>Gurenteed Certified</p>
                    <p className='about-side-para-two'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium amet perspiciatis, quis ad rerum tenetur reprehenderit minima quaerat repellendus?</p>
                </div>
            </div>
            <div className='about-side-bar  about-side-by-two'>
                <div className='about-side-bar-img '>
                    <div className='about-side-img  about-side-img-two'></div>
                    <div className='about-side-img-design about-side-img-two-design-one'></div>
                    <div className='about-side-img-design-two about-side-img-two-design-two'></div>
                </div>
                <div className='about-side-bar-cont  '>
                    <p className='about-side-para-one'>Gurenteed Certified</p>
                    <p className='about-side-para-two'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium amet perspiciatis, quis ad rerum tenetur reprehenderit minima quaerat repellendus?</p>
                </div>
            </div>
            <div className='about-side-bar about-side-by-three'>
                <div className='about-side-bar-img'>
                    <div className='about-side-img  about-side-img-three'></div>
                    <div className='about-side-img-design about-side-img-three-design-one'></div>
                    <div className='about-side-img-design-two about-side-img-three-design-two'></div>
                </div>
                <div className='about-side-bar-cont'>
                    <p className='about-side-para-one'>Gurenteed Certified</p>
                    <p className='about-side-para-two'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium amet perspiciatis, quis ad rerum tenetur reprehenderit minima quaerat repellendus?</p>
                </div>
            </div>
        </div>
        <div className='about-top-information-container'>
            <div className='about-information-image-div'>
                <div className='about-image-div'></div>
            </div>
            <div className='about-information-cont-div'>
                <div className='about-information-top-div'>
                    <p>Prestigious University with</p>
                    <p>Excellence in Education.</p>
                </div>
                <div className='about-information-main-content'>
                    <div className='about-information-cont-div-one'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi error vitae, consectetur praesentium quae ea minus corporis dignissimos eos! Et?</p>
                    </div>
                    <div className='student-image-and-number'>
                        <div className='student-image-bar'>
                            <div className='stud-img stud-img-one-abt'></div>
                            <div className='stud-img stud-img-two-abt'></div>
                            <div className='stud-img stud-img-three-abt'></div>
                            <div className='stud-img stud-img-four-abt'></div>
                            <div className='stud-img stud-img-five-abt'></div>
                        </div>
                        
                        <p className='stud-img-num-para'><span className='stud-img-num-span'>150+</span> Satisfied Students</p>
                       
                    </div>
                    <div className='about-staff-information'>
                        <div className='staff-infor-in-about-one'>
                            <div className='staff-info-one-head'>
                                <div className='staff-info-one-img'></div>
                                <p className='staff-one-head-tit'>helloo book</p>
                            </div>
                            <div className='staff-info-one-cont'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consecte</p>
                            </div>
                        </div>
                        <div className='staff-infor-in-about-two'>
                            <div className='staff-info-one-head'>
                                <div className='staff-info-one-img'></div>
                                <p className='staff-one-head-tit'>helloo book</p>
                            </div>
                            <div className='staff-info-one-cont'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consecte</p>
                            </div>
                        </div>
                    </div>
                    <button className='about-information-btn'>Know About Us</button>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutTop
