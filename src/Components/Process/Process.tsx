import '/src/Styles/Process.css'
import { IoSearch } from "react-icons/io5";
import { VscSymbolConstant } from "react-icons/vsc";
import { MdOutlineJoinInner } from "react-icons/md";
import { MdOutlineNotStarted } from "react-icons/md";

const Process = () => {
  return (
    <div className='process-container'>
      <div className='process-inner-container'>
        <div className='process-head-title-container'>
            <p className='process-title'>Process</p>
            <div className='process-main-tit-div'>
                <p className='process-main-title'>Step Into Success</p>
                <p className='process-sub-main-title'>By staying engaged, practicing regularly, and using our resources, every student can make steady progress and achieve meaningful results.Once enrolled, students gain access to live and recorded classes, expert guidance, and hands-on support.</p>
            </div>
            
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
                            <p className='step-cont-main'>Start by exploring courses that match your goals and interests. Choosing the right course is your first step toward success at Mindspire.</p>
                            <p className='step-cont-icon'><IoSearch/></p>
                        </div>
                    </div>
                    
                    <div className='div-for-step-two-line'>
                            <div className='div-for-step-two-round'></div>
                    </div>
                </div>
                <div className='search-book-image'></div>
                
            </div>
            <div className='process-inner-div process-three'>
                <div className='step-three'>
                     <div className='step-three-inner'>
                        <div className='step-three-title'>
                            <p className='step-tit-para-one'>Step 02</p>
                            <p className='step-tit-para-two'>Preview the Syllabus</p>
                        </div>
                        <div className='step-three-cont'>
                            <p className='step-cont-icon'><VscSymbolConstant/></p>
                            <p className='step-cont-main'>Preview the syllabus to get a clear overview of the topics and course structure before you begin.</p>
                        </div>
                    </div>
                     <div className='div-for-step-three-line'>
                            <div className='div-for-step-three-round'></div>
                    </div>
                </div>
                <div className="test-image"></div>
            </div>
            <div className='process-inner-div process-four'>
                <div className='step-four'>
                     <div className='step-four-inner'>
                        <div className='step-four-title'>
                            <p className='step-tit-para-one'>Step 03</p>
                            <p className='step-tit-para-two'>Easy Course Enrollment</p>
                        </div>
                        <div className='step-four-cont'>
                            <p className='step-cont-main'>Enroll easily and get instant access to all course materials to start learning right away.</p>
                           <p className='step-cont-icon'><MdOutlineJoinInner/></p>
                        </div>
                    </div>
                     <div className='div-for-step-four-line'>
                            <div className='div-for-step-four-round'></div>
                    </div>
                </div>
                <div className="enroll-image" ></div>
            </div>
            <div className='process-inner-div process-five'>
                 <div className='step-five'>
                     <div className='step-five-inner'>
                        <div className='step-five-title'>
                            <p className='step-tit-para-one'>Step 04</p>
                            <p className='step-tit-para-two'>Kickstart Your Success</p>
                        </div>
                        <div className='step-five-cont'>
                            <p className='step-cont-icon'><MdOutlineNotStarted/></p>
                            <p className='step-cont-main'>Dive into your lessons with enthusiasm and make every session count. Engage actively and enjoy your learning journey with Mindspire.</p>
                            
                        </div>
                    </div>
                     <div className='div-for-step-five-line'>
                            <div className='div-for-step-five-round'></div>
                             <div className='div-for-step-five-round-two'></div>
                    </div>
                </div>
               <div className="computer-image"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Process
