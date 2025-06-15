import ProgramList from "../HomePageComponents/ProgramList/ProgramList"

const CourseListCoursePage = ({course,LikeCourse,getstarnum}) => {
  return (
    <>
    <ProgramList getstarnum={getstarnum} course={course} LikeCourse={LikeCourse}/>
    </>
  )
}

export default CourseListCoursePage