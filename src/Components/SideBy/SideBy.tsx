import '/src/Styles/SideBy.css'
import { Video } from '@imagekit/react';

const SideBy = () => {
  return (
    <div className='side-by-elements-container'>
        <div className='side-by-inner-container'>
            <div className='side-by-one'>
                <div className='side-by-one-img-tag'>
                    <div className='side-by-one-img'> </div>
                </div>
                <div  className='side-by-one-cont-tag'>
                    <div className='side-by-one-main-para'>
                        <p className='side-by-p-one'>Expert Instructor </p>
                        <p  className='side-by-p-two'>Live Classes Here!</p>
                    </div>
                    <p className='side-by-sub-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, qui.</p>
                    <button className='btn-side-by'>Click Me</button>
                </div>
            </div>
            <div className='side-by-two'>
                <div  className='side-by-two-img-tag'>
                     
                     <Video 
                        urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                        src="./5183279-hd_1920_1080_30fps.mp4"
                         autoPlay
                        muted 
                        loop
                        className='side-by-two-img'
                        />
                </div>
                <div  className='side-by-two-cont-tag'>
                    <div className='side-by-two-main-para'>
                        <p  className='side-by-p-one'>Achieve Your Goals With</p>
                        <p  className='side-by-p-two'>Mindspire Insatitute</p>
                    </div>
                    <p className='side-by-sub-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, qui.</p>
                    <button className='btn-side-by'>Click Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBy
