
import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import HomeMain from './Components/HomeMain/HomeMain'
import Nav from './Components/NavBar/Nav'
import ProgAdvantage from './Components/ProgAdvan/ProgAdvantage'
import ProgramList from './Components/ProgramList/ProgramList'
import SideBy from './Components/SideBy/SideBy'
import StaffPage from './Components/StaffPage/StaffPage'
import StudentJoin from './Components/StudentJoin/StudentJoin'
import StudentPage from './Components/StudentPage/StudentPage'
import Topcourses from './Components/TopCourses/Topcourses'
import WhyChoose from './Components/WhyChoose/WhyChoose'

function App() {


  return (
   <div className='edu-main-page'>
    <Nav/>
    <HomeMain/>
    <StaffPage/>
    <Topcourses/>
    <StudentPage/>
    <AboutUs/>
    <SideBy/>
    <WhyChoose/>
    <ProgramList/>
    <ProgAdvantage/>
    <StudentJoin/>
   </div>
  )
}

export default App
