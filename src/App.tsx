
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import HomePage from './Components/WebsiteComponents/HomePage'
import Nav from './Components/NavBar/Nav'
import AboutPage from './Components/WebsiteComponents/AboutPage'
import CoursePage from './Components/WebsiteComponents/CoursePage'
import ContactPage from './Components/WebsiteComponents/ContactPage'
import ReviewMainPage from './Components/WebsiteComponents/ReviewMainPage'

function App() {


  return (
    
    <div className='website-main-container'>
      <Nav/>
      <div className='edu-main-page'>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>}/>
            <Route path='About-Mindspire-Institute' element={<AboutPage/>}/>
            <Route path="Providing-Education's-in-Mindspire-Institute" element={<CoursePage/>}/>
            <Route path="Contact-with-Mindspire-Institute" element={<ContactPage/>}/>
            <Route path="Mindspire-Institute-Student-Review-Page" element={<ReviewMainPage/>}/>
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
   
    
    
  )
}

export default App
