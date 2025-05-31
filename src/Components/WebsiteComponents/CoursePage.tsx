import '../../Styles/CoursePageCSS/CoursePageMain.css'
import CourseListCoursePage from '../CoursePageComponents/CourseListCoursePage'
import TopShortCourse from "../CoursePageComponents/TopShortCourse"

const CoursePage = () => {
  return (
    <div className="course-page-main-container">
      <TopShortCourse/>
      <CourseListCoursePage/>
    </div>
  )
}

export default CoursePage
