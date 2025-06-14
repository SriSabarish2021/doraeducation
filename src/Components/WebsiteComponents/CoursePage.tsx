import '../../Styles/CoursePageCSS/CoursePageMain.css'
import CourseListCoursePage from '../CoursePageComponents/CourseListCoursePage'
import TopShortCourse from "../CoursePageComponents/TopShortCourse"
import { useEffect } from 'react'

const CoursePage = ({course,LikeCourse,getstarnum}) => {
   useEffect(() => {
      
      window.scrollTo(0,0)
    
      
    }, [])
  return (
    <div className="course-page-main-container">
      <TopShortCourse/>
      <CourseListCoursePage getstarnum={getstarnum} course={course} LikeCourse={LikeCourse}/>
    </div>
  )
}

export default CoursePage
