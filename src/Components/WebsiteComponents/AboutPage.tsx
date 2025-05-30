import AboutPageCourse from "../AboutPageComponents/AboutPageCourse"
import AboutTop from "../AboutPageComponents/AboutTop"
import StepPageAbout from "../AboutPageComponents/StepPageAbout"
import Tutor from "../AboutPageComponents/Tutor"

const AboutPage = () => {
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
