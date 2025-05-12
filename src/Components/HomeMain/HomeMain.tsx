import '/src/Styles/HomeMain.css'
import { IoIosStar } from "react-icons/io";

const HomeMain = () => {
  return (
    <div className='home-main-container'>
        <div className='home-main-for-intro'>
          <div className='man-img-for-home'>
            <div className='rouonded-bg-home'>
              
            </div>
            <div className='man-image-in-home'></div>
          </div>
          <div className='home-content-div'>
            <div className='tit-for-home-content'>
              <div className='top-border-div-home'></div>
              <div className='main-cont-home'>
                <p className='main-cont-one'>The Worlds Best Online</p>
                <p className='main-cont-two'> Education Institude</p>
              </div>
            </div>
            <div  className='subtit-for-home-content'>
              <p className='para-for-sub-cont'>Empowering minds of all ages in a vibrant space where learning comes to life, curiosity is guided with creativity, and a brighter future is built one student at a time.</p>
            </div>
            <div  className='search-for-home-content'>
              <div className='inpt-box-home'>
                <input className='inp-bar-home' type="text" placeholder='Search for Courses'/>
                <button className='inp-bar-search-btn'>Search
                  <span className='hover-btn-design'></span>
                </button>
              </div>
              <div className='search-below'>
                <p className='home-qual-para'><span className='star-span'><IoIosStar/><IoIosStar/> <IoIosStar/> <IoIosStar/> <IoIosStar/> </span>5-Star ratings on G2, Discord and More</p>
              </div>
            </div>
          </div>
          <p className='learn-p-in-bottom'>LEARN FUNDAMENTALS</p>
          <div className='light-design-one'></div>
          <div className='light-design-two'></div>
          <div className='light-design-three'></div>
          <div className='light-design-four'></div>
        </div>
        <div className='home-main-for-design'>
          <div className='div-for-bottom-image-clody'></div>
        </div>
      
    </div>
  )
}

export default HomeMain
