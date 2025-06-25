import { useEffect } from 'react'
import '../../Styles/AboutPageCSS/StepPageAbout.css'

const StepPageAbout = () => {
    useEffect(() => {
      
        const observerabtpage=document.querySelector('.step-container-in-about-page')
                const observerabtpagemobile=document.querySelector('.step-container-in-about-page-for-mobile')

        const observerabtpageone=document.querySelector('.step-one-about')
        const observerabtpagetwo=document.querySelector('.step-two-about')
        const observerabtpagethree=document.querySelector('.step-three-about')
        

        const observerabtpageonemobile=document.querySelector('.step-one-about-mob')
        const observerabtpagetwomobile=document.querySelector('.step-two-about-mob')
        const observerabtpagethreemobile=document.querySelector('.step-three-about-mob')


        const observer=new IntersectionObserver(([entry])=>{
            if (entry.intersectionRatio>0.5) {
                observerabtpageone?.classList.add('step-move')
                observerabtpagetwo?.classList.add('step-move')
                observerabtpagethree?.classList.add('step-move')
            }else{
                observerabtpageone?.classList.remove('step-move')
                observerabtpagetwo?.classList.remove('step-move')
                observerabtpagethree?.classList.remove('step-move')
            }
        },{threshold:0.5})


        if(observerabtpage){
            observer.observe(observerabtpage)
        }

        const observermobile=new IntersectionObserver(([entry])=>{
            if (entry.intersectionRatio>0.5) {
                observerabtpageonemobile?.classList.add('step-move-mob')
                observerabtpagetwomobile?.classList.add('step-move-mob')
                observerabtpagethreemobile?.classList.add('step-move-mob')
            }else{
                observerabtpageonemobile?.classList.remove('step-move-mob')
                observerabtpagetwomobile?.classList.remove('step-move-mob')
                observerabtpagethreemobile?.classList.remove('step-move-mob')
            }
        },{threshold:0.5})
         if(observerabtpagemobile){
            observermobile.observe(observerabtpagemobile)
        }
    
      return () => {
         if(observerabtpage){
            observer.unobserve(observerabtpage)
        }
        if(observerabtpagemobile){
            observermobile.unobserve(observerabtpagemobile)
        }
      }
    })

    
    
  return (
    <div id='step-page' className='step-page-container-for-about-page'>
        <div className='step-page-title-bat-in-about'>
            <p className='step-in-about-page-para-one'>
                <span>How to <span className='apply-in-tit-bar'>Apply</span> For the</span><span className='span-in-title-one'>Course <span className='step-underline-design'></span><span className='dot-in-tit-abt-page'>:</span></span>
            </p>
            <p className='step-in-about-page-para-two'><span className='span-in-title-two'>step-by-step</span> Guid</p>
        </div>
        <div className='step-container-in-about-page'>
            <div className='book-move-design-step-abt-page'></div>
            <div className='book-move-design-step-abt-page-two'></div> 
            <div className='step-about-page step-one-about'>
                <div className='step-line-abt-page-bg bg-abt-step-one'></div>
                <p className='step-title-about-page'>Start Journey</p>
                <p className='step-para-about-page'>Dive into your lessons with enthusiasm and make every session count.</p>
                 <div className='step-num-abt-page step-num-bg-four'><p>step <span className='num-step'>04</span></p></div>
            </div>
            <div className='step-about-page step-two-about'>
                <div className='step-line-abt-page-bg bg-abt-step-two'></div>
                <p className='step-title-about-page'>Course Enrollment</p>
                <p className='step-para-about-page'>Enroll easily and get instant access to all course materials to start learning right away.</p> 
                 <div className='step-num-abt-page  step-num-bg-three'><p>step <span className='num-step'>03</span></p></div>
                                 <div className='step-line-abt-page'></div>

            </div>
            <div className='step-about-page step-three-about'> 
                <div className='step-line-abt-page-bg bg-abt-step-three'></div>
                 <p className='step-title-about-page'>Preview Syllabus</p>
                <p className='step-para-about-page'>Preview the syllabus to get a clear overview of the topics and course structure before you begin.</p>
                 <div className='step-num-abt-page  step-num-bg-two'><p>step <span className='num-step'>02</span></p></div>
                                 <div className='step-line-abt-page'></div>

            </div>
            <div className='step-about-page step-four-about'>
                <div className='step-line-abt-page-bg bg-abt-step-four'></div>
                <div className='step-line-abt-page'></div>
                <p className='step-title-about-page'>Search For Course</p>
                <p className='step-para-about-page'>Start by exploring courses that match your goals and interests.</p> 
                <div className='step-num-abt-page step-num-bg-one'><p>step <span className='num-step'>01</span></p></div>
            </div>
        </div>
        <div className='step-container-in-about-page-for-mobile '>
            <div className='book-move-design-step-abt-page'></div>
            <div className='book-move-design-step-abt-page-two'></div> 
            <div className='step-about-page step-three-about-mob'> 
                <div className='step-line-abt-page-bg bg-abt-step-three'></div>
                 <p className='step-title-about-page'>Preview Syllabus</p>
                <p className='step-para-about-page'>Preview the syllabus to get a clear overview of the topics and course structure before you begin.</p>
                 <div className='step-num-abt-page  step-num-bg-two'><p>step <span className='num-step'>02</span></p></div>
                 <div className='step-line-abt-page'></div>
                               <div className='rotate-for-step-one'></div>  

            </div>
            <div className='step-about-page step-four-about'>
                <div className='step-line-abt-page-bg bg-abt-step-four'></div>
                
                <p className='step-title-about-page'>Search For Course</p>
                <p className='step-para-about-page'>Start by exploring courses that match your goals and interests.</p> 
                <div className='step-num-abt-page step-num-bg-one'><p>step <span className='num-step'>01</span></p></div>
                
            </div>
             <div className='step-about-page step-two-about-mob'>
                <div className='step-line-abt-page-bg bg-abt-step-two'></div>
                <p className='step-title-about-page'>Course Enrollment</p>
                <p className='step-para-about-page'>Enroll easily and get instant access to all course materials to start learning right away.</p> 
                 <div className='step-num-abt-page  step-num-bg-three'><p>step <span className='num-step'>03</span></p></div>
                <div className='rotate-for-step-four'></div>

            </div>
            <div className='step-about-page step-one-about-mob'>
                <div className='step-line-abt-page-bg bg-abt-step-one'></div>
                <p className='step-title-about-page'>Start Journey</p>
                <p className='step-para-about-page'>Dive into your lessons with enthusiasm and make every session count.</p>
                 <div className='step-num-abt-page step-num-bg-four'><p>step <span className='num-step'>04</span></p></div>
            </div>
           
            
            
        </div>
        
        <div className='step-page-bottom-para'>
            <p className='step-page-bottom-para-one'>Follow this comprehensive guide to navigate the <span className='step-page-bottom-para-one-span'>application</span></p>
            <p className='step-page-bottom-para-two'>process for Universite, ensuring you complete every step
                </p>
            <p className='step-page-bottom-para-three'>accurately and on time.</p>
        </div>
    </div>
  )
}

export default StepPageAbout
