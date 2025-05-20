import '/src/Styles/Process.css'
import { IoSearch } from "react-icons/io5";

const Process = () => {
  return (
    <div className='process-container'>
      <div className='process-inner-container'>
        <div className='process-head-title-container'>
            <p className='process-title'>Process</p>
            <p className='process-main-title'>Follow Up Steps</p>
        </div>
        <div className='process-div-container'>
            <div className='process-inner-div process-one'>
                <div className='step-one'>
                    <div className='div-for-step-one-line'>
                        <div className='div-for-step-one-round'></div>
                    </div>
                </div>
            </div>
            <div className='process-inner-div process-two'>
                <div className='step-two'>
                    <div className='step-two-inner'>
                        <div className='step-two-title'>
                            <p className='step-tit-para-one'>Step 01</p>
                            <p className='step-tit-para-two'>Search For Your Course</p>
                        </div>
                        <div className='step-two-cont'>
                            <p className='step-cont-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eaque.</p>
                            <p className='step-cont-icon'><IoSearch/></p>
                        </div>
                    </div>
                    
                    <div className='div-for-step-two-line'>
                            <div className='div-for-step-two-round'></div>
                    </div>
                </div>
                
            </div>
            <div className='process-inner-div process-three'>
                <div className='step-three'>
                     <div className='step-three-inner'>
                        <div className='step-three-title'>
                            <p className='step-tit-para-one'>Step 01</p>
                            <p className='step-tit-para-two'>Search For Your Course</p>
                        </div>
                        <div className='step-three-cont'>
                            <p className='step-cont-icon'><IoSearch/></p>
                            <p className='step-cont-main'>LLorem ipsum dolor sit amet consectetur adipisicing elit. Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eaque.</p>
                            
                        </div>
                    </div>
                     <div className='div-for-step-three-line'>
                            <div className='div-for-step-three-round'></div>
                    </div>
                </div>
            </div>
            <div className='process-inner-div process-four'>
                <div className='step-four'>
                     <div className='step-four-inner'>
                        <div className='step-four-title'>
                            <p className='step-tit-para-one'>Step 01</p>
                            <p className='step-tit-para-two'>Search For Your Course</p>
                        </div>
                        <div className='step-four-cont'>
                            <p className='step-cont-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eaque.</p>
                           <p className='step-cont-icon'><IoSearch/></p>
                        </div>
                    </div>
                     <div className='div-for-step-four-line'>
                            <div className='div-for-step-four-round'></div>
                    </div>
                </div>
            </div>
            <div className='process-inner-div process-five'>
                 <div className='step-five'>
                     <div className='step-five-inner'>
                        <div className='step-five-title'>
                            <p className='step-tit-para-one'>Step 01</p>
                            <p className='step-tit-para-two'>Search For Your Course</p>
                        </div>
                        <div className='step-five-cont'>
                            <p className='step-cont-icon'><IoSearch/></p>
                            <p className='step-cont-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eaque.</p>
                            
                        </div>
                    </div>
                     <div className='div-for-step-five-line'>
                            <div className='div-for-step-five-round'></div>
                             <div className='div-for-step-five-round-two'></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Process
