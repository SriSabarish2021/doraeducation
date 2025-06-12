import ProgramList from "../HomePageComponents/ProgramList/ProgramList"

const CourseListCoursePage = ({course,LikeCourse}) => {
  return (
    <>
    <ProgramList course={course} LikeCourse={LikeCourse}/>
    </>
  )
}

export default CourseListCoursePage