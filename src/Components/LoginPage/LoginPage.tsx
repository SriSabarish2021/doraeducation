import { useState } from 'react';
import '../../Styles/LoginPageCSS/LoginPage.css'
import { FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginPage = ({login,setlogin}) => {
    const loginclose=(id)=>{
    if (String(id).includes('login-close')) {
      setlogin(false)
    }else{
      return
    }
  }

  const[showpass,setashowpass]=useState(false)
  const[signup,setsignup]=useState(false)
  return (
    <div id='login-close' onClick={(e)=>loginclose(e.target.id)} className={`login-page-main-container ${login?'showlogin':'notshowlogin'} `}>
      <div id='login-not-close' onClick={(e)=>loginclose(e.target.id)}  className={`login-page-inner-container ${login?'showlogininner':'notshowlogininner'} ${signup?'rotatelogin':''}`} >
        <div className='login-close-btn' onClick={()=>setlogin(false)}>
                <div className='login-close-btn-x-one'></div>
                <div className='login-close-btn-x-two'></div>
        </div>
        <div className='login-page-intro'>
            <div className='login-page-intro-design'></div>
            <div className='login-page-intro-design-one'></div>
            <div className='login-page-intro-design-two'></div>
            <div className='login-intro-para-box'>
                <p className='welcome-para'>{signup?'Welcome to':'WELCOME'}<span className='welcome-para-span'>{signup?'MindSpire Institute':'Sri Sabarish'}</span></p>
                <p  className='welcome-para-main'>{signup?'We’re happy to have you join our learning community. Start exploring courses, discover your passions, and take the first step toward building your future.':"We're excited to have you continue your learning journey with us. Access your courses, track your progress, and stay inspired as you move forward in mastering new skills"}</p>
            </div>
          
        </div>
        <div className='login-page-input-container'>
            <div className='login-page-input-design'></div>
            <div className='login-input-inner-box'>
                <div className='login-page-input-title'>
                    <p className='login-page-inp-title-para-one'>{signup?'Sign Up':'Sign In'}</p>
                    <p className='login-page-inp-title-para-two'>Let’s keep growing, one lesson at a time!</p>
                </div>
                <div className='login-page-input-box'>
                    <div className='login-page-email-input'>
                        <div className='input-login-icon'><FaUser/></div>
                        <input placeholder='Email' type="text" className='input-login-input-bar'/>
                    </div>
                    <div className='login-page-pass-input'>
                        <div className='input-login-icon'>{showpass?<FaUnlock/>:<FaLock/>}</div>
                        <input placeholder='Password' type="text" className='input-login-input-bar-two'/>
                        <div className='pass-show-btn' onClick={()=>setashowpass(!showpass)}>{showpass?'hide':'show'}</div>

                    </div>
                </div>
                {!signup&&
                  <div className='login-page-input-read-pass'>
                      <div className='forget-pass'><p>fogot password ?</p></div>
                  </div>
                }
                <div className='login-page-btn'><button className='login-page-btn-inner'>{signup?'Sign Up':'Sign In'}</button></div>
                {!signup&&
                <div className='sign-up-div'>
                    <p className='sign-up-btn'>don't have an account ? <span className='sign-up-span' onClick={()=>setsignup(!signup)}>sign up</span></p>
                </div>}
                
                
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default LoginPage
