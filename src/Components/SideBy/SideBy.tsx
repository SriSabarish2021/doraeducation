import '/src/Styles/SideBy.css'
import { Video } from '@imagekit/react';
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

const SideBy = () => {
  return (
    <div className='side-by-elements-container'>
        <div className='side-by-inner-container'>
            <div className='side-by-one'>
                <div className='side-by-one-img-tag'>
                     <Video 
                        urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                        src="./5183279-hd_1920_1080_30fps.mp4"
                         autoPlay
                        muted 
                        loop
                        className='side-by-one-img'
                        />
                </div>
                <div  className='side-by-one-cont-tag'>
                    <div className='side-by-one-main-para'>
                        <p className='side-by-p-one'>Expert Instructor </p>
                        <div className='live-class-showing'>
                        <p  className='side-by-p-two live-class-para'><span className='live-class-indicator'><GoDotFill className='live-dot'/>Live</span> Classes Here!</p>
                        </div>
                        
                    </div>
                    <p className='side-by-sub-para'>When An Unknown Printer Took A Galley Offer Area Type Make Specimen Book Has Survived Type Make.</p>
                    <button className='btn-side-by'>Learn More <FaArrowRight className='arrow-btn-side-by'/>
                       <div className='btn-design-in-side-by-one'></div>
                        <div className='btn-design-in-side-by-two'></div> 
                    </button>
                </div>

                <div className='design-circle-one-box-one'></div>
                <div className='design-circle-two-box-one'></div>

            </div>
            <div className='side-by-two'>
                <div  className='side-by-two-img-tag'>
                     <div className='side-by-two-img'> </div>
                    
                </div>
                <div  className='side-by-two-cont-tag'>
                    <div className='side-by-two-main-para'>
                        <p  className='side-by-p-one'>Achieve Your Goals With</p>
                        <p  className='side-by-p-two'>Mindspire Insatitute</p>
                    </div>
                    <p className='side-by-sub-para'>When An Unknown Printer Took A Galley Offer Area Type Make Specimen Book Has Survived Type Make.</p>
                    <button className='btn-side-by'>Click Me <FaArrowRight  className='arrow-btn-side-by'/>
                          <div className='btn-design-in-side-by-one'></div>
                        <div className='btn-design-in-side-by-two'></div> 
                    </button>
                </div>

                 <div className='design-circle-two-box-one'></div>
                <div className='design-circle-two-box-two'></div>
            </div>
        </div>
    </div>
  )
}

export default SideBy
