import ProgramList from "../HomePageComponents/ProgramList/ProgramList"

const CourseListCoursePage = ({course,LikeCourse,sethashget,starcalc}) => {
  return (
    <>
    <ProgramList starcalc={starcalc} sethashget={sethashget}  course={course} LikeCourse={LikeCourse}/>
    </>
  )
}

export default CourseListCoursePage