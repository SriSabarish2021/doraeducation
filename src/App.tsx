
import './App.css'
import HomeMain from './Components/HomeMain/HomeMain'
import Nav from './Components/NavBar/Nav'
import StaffPage from './Components/StaffPage/StaffPage'
import StudentPage from './Components/StudentPage/StudentPage'
import Topcourses from './Components/TopCourses/Topcourses'

function App() {


  return (
   <div className='edu-main-page'>
    <Nav/>
    <HomeMain/>
    <StaffPage/>
    <Topcourses/>
    <StudentPage/>
   </div>
  )
}

export default App
