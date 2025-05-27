import AboutPageCourse from "../AboutPageComponents/AboutPageCourse"
import AboutTop from "../AboutPageComponents/AboutTop"
import Tutor from "../AboutPageComponents/Tutor"

const AboutPage = () => {
  return (
    <div className="about-page-main-container">
      <AboutTop/>
      <AboutPageCourse/>
      <Tutor/>
    </div>
  )
}

export default AboutPage
