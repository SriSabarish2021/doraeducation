
import './App.css'
import HomeMain from './Components/HomeMain/HomeMain'
import Nav from './Components/NavBar/Nav'
import StaffPage from './Components/StaffPage/StaffPage'

function App() {


  return (
   <div className='edu-main-page'>
    <Nav/>
    <HomeMain/>
    <StaffPage/>
   </div>
  )
}

export default App
