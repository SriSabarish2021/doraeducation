import '../../Styles/CoursePageCSS/CoursePageMain.css'
import CourseListCoursePage from '../CoursePageComponents/CourseListCoursePage'
import TopShortCourse from "../CoursePageComponents/TopShortCourse"
import { useEffect } from 'react'

const CoursePage = () => {
   useEffect(() => {
      
      window.scrollTo(0,0)
    
      
    }, [])
  return (
    <div className="course-page-main-container">
      <TopShortCourse/>
      <CourseListCoursePage/>
    </div>
  )
}

export default CoursePage
