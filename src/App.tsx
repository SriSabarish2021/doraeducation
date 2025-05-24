
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import HomePage from './Components/WebsiteComponents/HomePage'
import Nav from './Components/NavBar/Nav'
import AboutPage from './Components/WebsiteComponents/AboutPage'

function App() {


  return (
    
    <div className='website-main-container'>
      <Nav/>
      <div className='edu-main-page'>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>}/>
            <Route path='About-Mindspire-Institute' element={<AboutPage/>}/>
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
   
    
    
  )
}

export default App
