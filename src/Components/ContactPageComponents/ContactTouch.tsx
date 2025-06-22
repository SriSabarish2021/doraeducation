import { useEffect, useRef, useState } from 'react'
import '../../Styles/ContactPageCSS/ContactTouch.css'
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineLoading } from "react-icons/ai";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Image } from '@imagekit/react';

const ContactTouch = () => {
      const [getoffsetXcontact,setoffsetXcontact]=useState(0)
      const [getoffsetYcontact,setoffsetYcontact]=useState(0)
const MouseMoveEvent=(event:unknown)=>{

    
    const elementtargeting=event.currentTarget
    const viewelement=elementtargeting.getBoundingClientRect()

    const totwidht:number=event.clientX-viewelement.left
    const totheight:number=event.clientY-viewelement.top

    const offsetX:number=(totwidht/viewelement.width)*100
    const offsetY:number=(totheight/viewelement.height)*100
    setoffsetXcontact(-offsetX/1)
    setoffsetYcontact(-offsetY/1)

  }
    useEffect(() => {
        const contactpagemain=document.querySelector('.contact-get-in-touch-img')

        const contactimgone=document.querySelector('.contact-get-img-one')      
        const contactimgtwo=document.querySelector('.contact-get-img-two')

        const obsever=new IntersectionObserver(([entry])=>{
            if (entry.intersectionRatio>0.5) {
                contactimgone?.classList.add('contact-get-img-one-no-move')
                contactimgtwo?.classList.add('contact-get-img-two-no-move')
            }else{
                contactimgone?.classList.remove('contact-get-img-one-no-move')
                contactimgtwo?.classList.remove('contact-get-img-two-no-move')
            }
        },{threshold:0.5})

        if (contactpagemain) {
                    obsever.observe(contactpagemain)

        }

          
      return () => {
        if (contactpagemain) {
                    obsever.unobserve(contactpagemain)

        }
      }
    }, [])

    let userName=useRef('')
    let userEmail=useRef('')
    let userPhone=useRef('')
    let userCity=useRef('')
    let userState=useRef('')
    let userCountry=useRef('')
    let userIdeas=useRef('')

    const [proceedingbtn,setproceedingbtn]=useState(false)
    const [proceeded,setproceeded]=useState(false)

    const[alert,setalert]=useState(false)
    useEffect(() => {
      
        console.log('sdsdsdsd');
        let proceedtimer;
        if (proceedingbtn) {
            proceedtimer=setTimeout(() => {
            setproceedingbtn(false)
            setalert(true)
            setproceeded(true)
        
        }, 2000);
        }
        
        
    
      return () => {
      
        clearTimeout(proceedtimer)
      }
    }, [proceedingbtn])
    
    useEffect(() => {
        let alerttimer;
      if (alert) {
        
            alerttimer=setTimeout(() => {
            setalert(false)
        
        }, 3000);
        }

       
    
      return () => {
        clearTimeout(alerttimer)
      }
    }, [alert])
    


    const formproceed=()=>{
        if (String(userName.current.value).length!==0&&String(userEmail.current.value).length!==0&&String(userPhone.current.value).length!==0&&String(userCity.current.value).length!==0&&String(userState.current.value).length!==0&&String(userCountry.current.value).length!==0&&String(userIdeas.current.value).length!==0) {
            setproceedingbtn(true)
        }else{
            console.log('hello');
            setproceeded(false)
            setalert(true)
        }
}

const [contacttouchwidth,setcontacttouchwidth]=useState(0)
    useEffect(() => {
  
  
      setcontacttouchwidth(window.innerWidth)
     
      
       return () => {
        setcontacttouchwidth(0)
      }
    
    
    }, [])
  return (
    <div className='contact-touch-container' >
        <div className={`contact-submitted-alert-div ${alert?'submittedalert':'nosubmittedalert'}` }>
            <div className={`contat-alert-loading ${alert?'lineloading':''}`}></div>
            <div className='contact-alert-img-div'>
                <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/proceed-contact.png"      
                    alt='study-image' 
                    className={`contact-alert-img ${alert?'alrtimageshow':'noalrtimageshow'}`}        
                />
            </div>
            <div  className='contact-alert-cont-div'>
                <IoIosCheckmarkCircle className='checkmark-done'/>
                <p>{proceeded?'Your Form has been Submitted':'Make Sure Your Form is Correct to Proceed'}</p>
            </div>
        </div>
        <div className='contact-get-in-touch-input'  onMouseMove={(e)=>MouseMoveEvent(e)}>
           <div className='contact-page-circle-design'></div>
           
           <div className='contact-page-circle-design-two'></div>
            <div className='contact-page-circle-design-three' style={{transform:`translateX(${getoffsetXcontact}px) translateY(${getoffsetYcontact}px)`,transitionDuration:'0.3s'}}></div>
            <div className='contact-get-title-container'>
                <div className='contact-get-in-touch-title'>
                    <p className='contact-get-para-one'><span className='apply-for-contact'>Apply</span> For Admission</p>
                    <p  className='contact-get-para-two'>{contacttouchwidth<610?'Follow this comprehensive guide to navigate the application process for Universite, ensuring you complete every step accurately and on time.':contacttouchwidth<930?'Follow this comprehensive guide to navigate the application':'Follow this comprehensive guide to navigate the application process for Universite, ensuring you complete every step accurately and on time.'}</p>
                </div>
                <div className='contact-get-in-touch-input-container'>
                    <div className='input-container-basic-info'>
                        <div className='input-bar'>
                            <input ref={userName}  type="text" id='name' className='input-bar-contact-get' placeholder='Full Name'/>
                            
                        </div>
                        <div className='input-bar'>
                            <input ref={userEmail}  type="text" name="" id="" className='input-bar-contact-get' placeholder='Email Address'/>
                        </div>
                        <div className='input-bar'>
                             <input ref={userPhone}  type="number" name="" id="" className='input-bar-contact-get' placeholder='80155-75757' />
                        </div>
                        <div className='input-bar'>
                             <input ref={userCity} type="text" name="" id="" className='input-bar-contact-get' placeholder='Country'/>
                        </div>
                        <div className='input-bar'>
                            <input ref={userState} type="text" name="" id="" className='input-bar-contact-get' placeholder='State'/>
                        </div>
                        <div className='input-bar'>
                             <input ref={userCountry} type="text" name="" id="" className='input-bar-contact-get' placeholder='City'/>
                        </div>
                    </div>
                    <div className='input-container-message'>
                        <textarea ref={userIdeas} name="" id="" className='message-inp' placeholder='Enter Your Ideas....'></textarea>
                    </div>
                </div>
                <div className='proceed-main-btn'>
                    {proceedingbtn?<button  className='proceeding-btn'>Proceeding<span className='span-for-btn-proceeding'><AiOutlineLoading className='loading-for-btn-proceeding'/> </span></button>:
                    
                    
                          <button onClick={()=>formproceed()} className='proceed-btn'>Proceed<span className='span-for-btn-proceed'><FaArrowRight/> </span><div className='design-div-for-tud-btn-proceed'></div></button>}
                        
                        </div>
            </div>
          
        </div>
        <div className='contact-get-in-touch-img'>
            <div className='contact-get-in-touch-inner-img'>
                <div className='contact-get-img-one'>
                    <div className='contact-get-img-inner-one'></div>
                </div>
                <div className='contact-get-img-two'>
                    <div className='contact-get-img-inner-two'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactTouch