import '/src/Styles/ProgAdvantage.css'
import { FaArrowRight } from "react-icons/fa6";

const ProgAdvantage = () => {
  return (
    <div className='prog-advantage-main-container'>
        <div className='line-animation-in-prog-list-left'>
          <div className="line-div-for-prog-list line-one"></div>
          <div className="line-div-for-prog-list line-two"></div>
          <div className="line-div-for-prog-list line-three"></div>
          <div className="line-div-for-prog-list line-four"></div>
          <div className="line-div-for-prog-list line-five"></div>
          <div className="line-div-for-prog-list line-six"></div>
          <div className="line-div-for-prog-list line-seven"></div>
          <div className="line-div-for-prog-list line-eight"></div>
          
     </div>
        <div className='prog-advantage-image-container'>
            <div className='image-tag-prog-advantage'>
                <div className='prog-advantage-image-one'></div>
                <div className='prog-advantage-image-two'></div>
                <div className='prog-advantage-image-three'></div>
            </div>
        </div>
        <div className='prog-advantage-content-container'>
            <div className='prog-advantage-title-bar'>
                <div className='prog-advantage-tit-image'></div>
                <div className='prog-advantage-tit-cont'>
                    <p className='advan-tit-para-one'>Advantages Of <span className='span-tit-in-prog-advantage'>Our Program</span></p>
                    <p className='advan-tit-para-two'>Etiam sodales fermentum vivamus etiam tempor orci. Sem et tortor consequat egestas tellus. Nunc eu hendrerit turpis. Fusce non lectus sem In pellentesque nunc.</p>
                </div>
            </div>
            <div className='prog-advantage-progress-bar'>
                <div className='progress-one'>
                    <p className='progress-para'>Education : <span className='percentage-progress'>80%</span></p>
                    <div className='progress-line'>
                        <div className='progress-inner-line'></div>
                    </div>
                </div>
                <div className='progress-two'>
                    <p className='progress-para'>Education : <span className='percentage-progress'>80%</span></p>
                    <div className='progress-line'>
                        <div className='progress-inner-line'></div>
                    </div>
                </div>
                <div className='progress-three'>
                    <p className='progress-para'>Education : <span className='percentage-progress'>80%</span></p>
                    <div className='progress-line'>
                        <div className='progress-inner-line'></div>
                    </div>
                </div>
            </div>
            <button className='prog-advantage-btn'>Learn More <FaArrowRight className='arrow-btn-prog-advantage-by'/>
                <div className='btn-design-in-prog-advantage-by-one'></div>
                <div className='btn-design-in-prog-advantage-by-two'></div> 
            </button>
        </div>
    </div>
  )
}

export default ProgAdvantage
