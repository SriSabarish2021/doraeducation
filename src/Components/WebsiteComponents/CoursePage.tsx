import '../../Styles/CoursePageCSS/CoursePageMain.css'
import CourseListCoursePage from '../CoursePageComponents/CourseListCoursePage'
import TopShortCourse from "../CoursePageComponents/TopShortCourse"
import { useEffect } from 'react'

const CoursePage = ({course,LikeCourse,sethashget,starcalc}) => {
   useEffect(() => {
      
      window.scrollTo(0,0)
    
      
    }, [])
  return (
    <div className="course-page-main-container">
      <TopShortCourse sethashget={sethashget}/>
    {/*   <CourseListCoursePage starcalc={starcalc}  sethashget={sethashget} course={course} LikeCourse={LikeCourse}/> */}
    </div>
  )
}

export default CoursePage
