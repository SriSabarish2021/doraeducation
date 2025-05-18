import '/src/Styles/WhyChoose.css'
import { MdDone } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

const WhyChoose = () => {
  return (
    <div className="why-choose-container">
        <div className='why-choose-cont'>
            <div className='why-choose-main-title'>
                <p className='why-choose'>Why Minspire ?</p>
                <div className='Why-choose-title'>
                    <p className='Why-choose-title-one'>Don’t Know How To Start Wit</p>
                    <p className='Why-choose-title-two'>Quiklearn Courses</p>
                </div>
                <p className='para-why-choose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae saepe doloribus cum unde dolorem ipsa eligendi, illum aut officiis voluptatibus.</p>
            </div>
            <div className='why-choose-order-list'>
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>Special Lessons And Courses</p>
                <p className='why-choose-ol'><span className='why-choose-ol-span'> <MdDone/></span>World Largest Language</p>
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>15 Language For Beginners</p> 
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>Get Every General Answers</p>
                <p  className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>A Residential Campus</p>
                <p className='why-choose-ol'><span className='why-choose-ol-span'><MdDone/></span>A Residential Campus</p>
            </div>
            <button className='why-choose-btn'>Lear More</button>
        </div>
        <div className='why-choose-img'>
            <div className='why-choose-img-div'>
                <div className='image-design-one'>

                    <div className='image-box-one-totors'>
                        <div className='tutors-img-tag'>
                            <div className='tutor-round tutor-one'></div>
                            <div className='tutor-two'></div>
                            <div className='tutor-three'></div>
                            <div className='tutor-four'></div>
                            <div className='tutor-five'>
                                <p>+50</p>
                            </div>
                        </div>
                        <div className='tutor-cont'>
                            <p className='top-mentor'>Top-Mentors</p>
                            <p className='top-mentor-sub'>Around the Globe</p>
                        </div>
                    </div>
                </div>
                <div className='image-design-two'>
                    <p className='success-rate'><IoIosStar className='star-in-sucess-rate'/>Success Rate 4.9%</p>
                    <div className='line-div-one'>
                        <div className="line-div-one-inner"></div>
                    </div>
                    <div className='line-div-two'>
                        <div className="line-div-two-inner"></div>
                    </div>
                </div>
            </div>

            <div className='why-choose-img-style'></div>  
            <div className='why-choose-img-style-two'></div>
        </div>

    </div>
  )
}

export default WhyChoose
