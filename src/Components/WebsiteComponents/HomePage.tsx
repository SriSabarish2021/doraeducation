import TopShortCourse from "../CoursePageComponents/TopShortCourse"
import AboutUs from "../HomePageComponents/AboutUs/AboutUs"
import Blog from "../HomePageComponents/Blog/Blog"
import HomeMain from "../HomePageComponents/HomeMain/HomeMain"
import Process from "../HomePageComponents/Process/Process"
import ProgAdvantage from "../HomePageComponents/ProgAdvan/ProgAdvantage"
import ProgramList from "../HomePageComponents/ProgramList/ProgramList"
import SideBy from "../HomePageComponents/SideBy/SideBy"
import StaffPage from "../HomePageComponents/StaffPage/StaffPage"
import StudentJoin from "../HomePageComponents/StudentJoin/StudentJoin"
import StudentPage from "../HomePageComponents/StudentPage/StudentPage"
import Testimonial from "../HomePageComponents/Testimonial/Testimonial"
import Topcourses from "../HomePageComponents/TopCourses/Topcourses"
import WhyChoose from "../HomePageComponents/WhyChoose/WhyChoose"
import { useEffect } from 'react'


const HomePage = ({course,LikeCourse,sethashget,starcalc}) => {
   useEffect(() => {
      
      window.scrollTo(0,0)
    
      
    }, [])
  return (
    <>
      <HomeMain/>
      <StaffPage/>
      <Topcourses/>
      <StudentPage/>
      <AboutUs/>
      <SideBy/>
      <WhyChoose/>
      <ProgramList starcalc={starcalc} sethashget={sethashget} course={course} LikeCourse={LikeCourse} />
      <TopShortCourse/>
      <StudentJoin/>
      <Process/>
      <Testimonial course={course}/>
      <Blog/>
    </>
  )
}

export default HomePage
