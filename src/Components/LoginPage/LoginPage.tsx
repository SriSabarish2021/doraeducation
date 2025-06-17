import '../../Styles/LoginPageCSS/LoginPage.css'
import { FaUser } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";

const LoginPage = ({login,setlogin}) => {
    const loginclose=(id)=>{
    if (String(id).includes('login-close')) {
      setlogin(false)
    }else{
      return
    }
  }
  return (
    <div id='login-close' onClick={(e)=>loginclose(e.target.id)} className={`login-page-main-container ${login?'showlogin':'notshowlogin'}`}>
      <div id='login-not-close' onClick={(e)=>loginclose(e.target.id)}  className={`login-page-inner-container ${login?'showlogininner':'notshowlogininner'}`} >
        <div className='login-close-btn' onClick={()=>setlogin(false)}>
                <div className='login-close-btn-x-one'></div>
                <div className='login-close-btn-x-two'></div>
        </div>
        <div className='login-page-intro'>
            <div className='login-page-intro-design'></div>
            <div className='login-page-intro-design-one'></div>
            <div className='login-page-intro-design-two'></div>
            <div className='login-intro-para-box'>
                <p className='welcome-para'>WELCOME <span className='welcome-para-span'>Sri Sabarish</span></p>
                <p  className='welcome-para-main'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id culpa veniam sint nam sapiente quae aliquid repellat saepe vel pariatur.</p>
            </div>
          
        </div>
        <div className='login-page-input-container'>
            <div className='login-page-input-design'></div>
            <div className='login-input-inner-box'>
                <div className='login-page-input-title'>
                    <p className='login-page-inp-title-para-one'>Sign In</p>
                    <p className='login-page-inp-title-para-two'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='login-page-input-box'>
                    <div className='login-page-email-input'>
                        <div className='input-login-icon'><FaUser/></div>
                        <input placeholder='Email' type="text" className='input-login-input-bar'/>
                    </div>
                    <div className='login-page-pass-input'>
                        <div className='input-login-icon'><FaUnlockAlt/></div>
                        <input placeholder='Password' type="text" className='input-login-input-bar-two'/>
                        <div className='pass-show-btn'>show</div>

                    </div>
                </div>
                <div className='login-page-input-read-pass'>
                    <div className='check-box-read-pass'>
                        <input className='check-box-show-pass' type="checkbox" />
                        <p className='para-show-pass'>Show Password</p>
                    </div>
                    <div className='forget-pass'><p>fogot password ?</p></div>
                </div>
                <div className='login-page-btn'><button className='login-page-btn-inner'>Sign In</button></div>
                <div className='sign-up-div'>
                    <p className='sign-up-btn'>don't have an account ? <span className='sign-up-span'>sign up</span></p>
                </div>
                
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default LoginPage
