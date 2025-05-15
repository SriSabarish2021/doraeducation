import { useEffect } from 'react';
import '/src/Styles/StudentPage.css'
import { FaArrowRight } from "react-icons/fa6";

const StudentPage = () => {

      useEffect(() => {
        
    
        const getelementoneinstud=document.querySelector('.student-page-container') as HTMLElement;
        const getanimateelementoneinstud=document.querySelector('.scale-img-one-stud') as HTMLElement;       const getanimateelementtwoinstud=document.querySelector('.scale-img-two-stud') as HTMLElement;
        const getanimateelementthreeinstud=document.querySelector('.scale-img-three-stud') as HTMLElement;
        const rockwtimage=document.querySelector('.design-element-stud-page')
        const observerinstud=new IntersectionObserver(([entry])=>{
          if (entry.intersectionRatio>0.4) {
            if (getanimateelementoneinstud) {
                getanimateelementoneinstud.classList.add('noscale-img-stud')
            }
            if (getanimateelementtwoinstud) {
                getanimateelementtwoinstud.classList.add('noscale-img-stud')
            }
            if (getanimateelementthreeinstud) {
                getanimateelementthreeinstud.classList.add('noscale-img-stud')
            }
            if (rockwtimage) {
                rockwtimage.classList.add('rocket-animation-show')
            }
            
          }
          else{
            if (getanimateelementoneinstud) {
                getanimateelementoneinstud.classList.remove('noscale-img-stud')
            }
            if (getanimateelementtwoinstud) {
                getanimateelementtwoinstud.classList.remove('noscale-img-stud')
            }
            if (getanimateelementthreeinstud) {
                getanimateelementthreeinstud.classList.remove('noscale-img-stud')
            }
            if (rockwtimage) {
                rockwtimage.classList.remove('rocket-animation-show')
            }
          }
        
        },{threshold:0.4})
    
        if (getelementoneinstud) {
              observerinstud.observe(getelementoneinstud)
        }
    
    
         return () => {
          
          if (getelementoneinstud) {
                observerinstud.unobserve(getelementoneinstud)
          }     
      }
        
        
      },[])
      
  return (
    <div className="student-page-container">
        <div className='student-page-inner-container'>
            <div className="student-page-image-container">
                <img  className='student-page-image-one scale-img-one-stud ' src='./StydentPage/stupage-img-one.webp' alt="Student Image"/>
                <img  className='student-page-image-two scale-img-two-stud' src='./StydentPage/stu-img-two.webp' alt="Student Image"/>
            </div>
            <div className="student-page-content-container">
                <div className='student-page-title-bar'>
                    <p className='student-page-top-tit'>Guarenteed & <span className='stud-main-cont-top-tit-span'>Certified</span></p>
                    <div className='student-page-title'>
                        <p className='main-tit-one-stud-page'>Develop Your Skills</p>
                        <p  className='main-tit-two-stud-page'>With Experience Staffs</p>
                    </div>
                </div>
                <div className='student-page-main-content'>
                    <div className='image-bar-in-main-content'>
                        <div className='content-image-bar-in-main-cont scale-img-three-stud'>
                            
                        </div>
                        <div className='stud-enroll-image-bar-in-main-cont'>
                            <div className='stu-enroll-image'>
                                <div className='stu-img stu-img-one'></div>
                                <div className=' stu-img  stu-img-two'></div>
                                <div className='stu-img  stu-img-three'></div>
                            </div>
                            <div className='stu-enroll-num'>
                                <p className='stu-enroll-para-one'>Joined <span className='span-in-stud-num'>120+</span></p>
                                <p className='stu-enroll-para-two'>People already</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-bar-in-main-content'>
                        <div  className='stud-content-main-para'>
                            <p className='conatent-bar-main-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem dolorum a illum veritatis ut incidunt molestias provident, adipisci tempora.</p>
                        </div>
                        
                        <div className='analysis-student-container'>
                            <div className='tot-stu-analysis'>
                                <div className='tot-stu-analysis-image'>
                                    <img className='img-for-main-analysis-one' src="./StydentPage/group.png" alt="" />
                                </div>
                                <div className='tot-stu-analysis-content'>
                                    <p  className='tot-stu-analysis-para-one'>20K</p>
                                    <p  className='tot-stu-analysis-para-two'>Total Students</p>
                                </div>
                            </div>
                            <div className='stu-thinking-analysis'>
                                <div className='stu-thinking-one'>
                                    <div className='stu-thinking-image'>
                                        <div className='stu-thinking-img img-one-stud-think'>
                                            <img className='img-for-main-analysis-two' src="./StydentPage/light-bulb.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='stu-thinking-content'>
                                        <p className='stu-thinking-main-para'>Building Trust</p>
                                        <p className='stu-thinking-sub-para'>Lorem ipsum dolor sit amet consectetur a</p>
                                    </div>
                                </div>
                                <div className='stu-thinking-two'>
                                    <div className='stu-thinking-image'>
                                        <div className='stu-thinking-img img-two-stud-think'>
                                            <img className='img-for-main-analysis-two' src="./StydentPage/diploma.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='stu-thinking-content'>
                                        <p className='stu-thinking-main-para'>Building Trust</p>
                                        <p className='stu-thinking-sub-para'>Lorem ipsum dolor sit amet consectetur a</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='stud-content-main-btn'>
                            <button className='stud-analysis-btn'>View Programs <span className='span-for-btn-stud-page'><FaArrowRight/> </span><div className='design-div-for-tud-btn'></div></button>

                        </div>
                    </div>
                </div>
            </div>

            <div className='design-element-stud-page'></div>
        </div>

        <div className='stud-design-main'></div>

        <div className='stud-round-design-one'>
            <div  className='stud-round-design-two'>

            </div>
        </div>
    </div>
  )
}

export default StudentPage
