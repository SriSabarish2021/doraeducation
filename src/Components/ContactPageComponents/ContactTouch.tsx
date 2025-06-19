import { useEffect, useRef, useState } from 'react'
import '../../Styles/ContactPageCSS/ContactTouch.css'
import { FaArrowRight } from "react-icons/fa6";

const ContactTouch = ({setuserName,setuserEmail,userName,userEmail}) => {
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

    let userPhone=useRef('dasd')
    let userCity=useRef('')
    let userState=useRef('')
    let userCountry=useRef('')
    let userIdeas=useRef('')


  return (
    <div className='contact-touch-container' >
        <div className='contact-get-in-touch-input'  onMouseMove={(e)=>MouseMoveEvent(e)}>
           <div className='contact-page-circle-design'></div>
           
           <div className='contact-page-circle-design-two'></div>
            <div className='contact-page-circle-design-three' style={{transform:`translateX(${getoffsetXcontact}px) translateY(${getoffsetYcontact}px)`,transitionDuration:'0.3s'}}></div>
            <div className='contact-get-title-container'>
                <div className='contact-get-in-touch-title'>
                    <p className='contact-get-para-one'>Apply For Admission</p>
                    <p  className='contact-get-para-two'>Follow this comprehensive guide to navigate the application process for Universite, ensuring you complete every step accurately and on time.</p>
                </div>
                <div className='contact-get-in-touch-input-container'>
                    <div className='input-container-basic-info'>
                        <div className='input-bar'>
                            <input value={userName} onChange={(e)=>setuserName(e.target.value)} type="text" id='name' className='input-bar-contact-get' placeholder='Full Name'/>
                            
                        </div>
                        <div className='input-bar'>
                            <input value={userEmail} onChange={(e)=>setuserEmail(e.target.value)} type="text" name="" id="" className='input-bar-contact-get' placeholder='Email Address'/>
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
                          <button className='proceed-btn'>Proceed <span className='span-for-btn-proceed'><FaArrowRight/> </span><div className='design-div-for-tud-btn-proceed'></div></button>
                        
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