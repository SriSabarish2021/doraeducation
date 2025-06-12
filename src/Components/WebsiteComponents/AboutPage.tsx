import AboutPageCourse from "../AboutPageComponents/AboutPageCourse"
import AboutTop from "../AboutPageComponents/AboutTop"
import StepPageAbout from "../AboutPageComponents/StepPageAbout"
import Tutor from "../AboutPageComponents/Tutor"
import { useEffect } from 'react'

const AboutPage = () => {
   useEffect(() => {
      
      window.scrollTo(0,0)
    
      
    }, [])
  return (
    <div className="about-page-main-container">
      <AboutTop/>
      <AboutPageCourse/>
      <Tutor/>
      <StepPageAbout/>
    </div>
  )
}

export default AboutPage
