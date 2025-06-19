import { useRef, useState } from 'react';
import '../../Styles/LoginPageCSS/LoginPage.css'
import { FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa6";

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


  let UserLoginNameref=useRef('')
  let UserLoginEmailref=useRef('')
  let UserLoginPassref=useRef('')

 const removeredbordersignup=()=>{
  let allinputbordersignup=document.querySelectorAll('.input-border-login')
  let inputbox=document.querySelectorAll('.input-signup-bar')
    inputbox.forEach((indiinp,index)=>{
      if (String(indiinp.value).length!==0) {
        allinputbordersignup[index].classList.remove('login-no-input-border')
      }else{
        return
      }
    
        
      })
}


 const SigninSubmit=()=>{
  
  
    let allinputbordersignin=document.querySelectorAll('.input-border-login')
    let inputbox=document.querySelectorAll('.input-signup-bar')
    if (String(UserLoginEmailref.current.value).length!==0&&String(UserLoginPassref.current.value).length!==0) {

      inputbox.forEach((indiinp,index)=>{
        if (String(indiinp.value).length!==0) {
        allinputbordersignin[index].classList.remove('login-no-input-border')
        }else{
          return
        }
      })
      
      
    }
    else{
      
      
      
       inputbox.forEach((indiinp,index)=>{
        if (String(indiinp.value).length!==0) {
         
         allinputbordersignin[index].classList.remove('login-no-input-border')
        }else{
          
           allinputbordersignin[index].classList.add('login-no-input-border')
        }
      })
      
    }
 
  }

   const SignupSubmit=()=>{
  
  
    let allinputbordersignin=document.querySelectorAll('.input-border-login')
    let inputbox=document.querySelectorAll('.input-signup-bar')
    if (String(UserLoginNameref.current.value).length!==0&&String(UserLoginEmailref.current.value).length!==0&&String(UserLoginPassref.current.value).length!==0) {

      inputbox.forEach((indiinp,index)=>{
        if (String(indiinp.value).length!==0) {
        allinputbordersignin[index].classList.remove('login-no-input-border')
        }else{
          return
        }
      })
      
      
    }
    else{
      
      
      
       inputbox.forEach((indiinp,index)=>{
        if (String(indiinp.value).length!==0) {
         
         allinputbordersignin[index].classList.remove('login-no-input-border')
        }else{
          
           allinputbordersignin[index].classList.add('login-no-input-border')
        }
      })
      
    }
 
  }
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
                  {signup&&
                    <div className='login-page-email-input input-border-login login-input-border'>
                        <div className='input-login-icon'><FaAlignCenter/></div>
                        <input placeholder='Name' onChange={()=>removeredbordersignup()} ref={UserLoginNameref} type="text" className='input-login-input-bar input-signup-bar'/>
                    </div>
                  }
                    <div className='login-page-email-input input-border-login login-input-border'>
                        <div className='input-login-icon'><FaUser/></div>
                        <input placeholder='Email' onChange={()=>removeredbordersignup()} ref={UserLoginEmailref} type="text" className='input-login-input-bar input-signup-bar'/>
                    </div>
                    <div className='login-page-pass-input input-border-login login-input-border '>
                        <div className='input-login-icon'>{showpass?<FaUnlock/>:<FaLock/>}</div>
                        <input onChange={()=>removeredbordersignup()} ref={UserLoginPassref} placeholder='Password' type="text" className='input-login-input-bar-two input-signup-bar'/>
                        <div className='pass-show-btn' onClick={()=>setashowpass(!showpass)}>{showpass?'hide':'show'}</div>

                    </div>
                </div>
                {!signup&&
                  <div className='login-page-input-read-pass'>
                      <div className='forget-pass'><p>fogot password ?</p></div>
                  </div>
                }
                <div className='login-page-btn'><button onClick={()=>signup?SignupSubmit():SigninSubmit()} className='login-page-btn-inner'>{signup?'Sign Up':'Sign In'}</button></div>
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
