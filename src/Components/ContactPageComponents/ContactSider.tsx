import { useEffect } from 'react'
import '../../Styles/ContactPageCSS/ContactSider.css'

const ContactSider = () => {
 
  
  useEffect(() => {

    const mainelement=document.querySelector('.contact-side-bar-conatainer')

    const itemone=document.querySelector('.contact-logo-one')
    const itemtwo=document.querySelector('.contact-logo-two')
    const itemthree=document.querySelector('.contact-logo-three')

    const boxone=document.querySelector('.contact-sider-box-one')
    const boxtwo=document.querySelector('.contact-sider-box-three')
    const observer=new IntersectionObserver(([entry])=>{
      if (entry.intersectionRatio>0.5) {
          itemone?.classList.add('no-logo-contact-move')
          itemtwo?.classList.add('no-logo-contact-move')
          itemthree?.classList.add('no-logo-contact-move')
          boxone?.classList.add('no-box-move-contact')
          boxtwo?.classList.add('no-box-move-contact')
      }
      else{
          itemone?.classList.remove('no-logo-contact-move')
          itemtwo?.classList.remove('no-logo-contact-move')
          itemthree?.classList.remove('no-logo-contact-move')
          boxone?.classList.remove('no-box-move-contact')
          boxtwo?.classList.remove('no-box-move-contact')
      }
    },{threshold:0.5})
    
    if (mainelement) {
      observer.observe(mainelement)
    }
  
    return () => {
      if (mainelement) {
      observer.unobserve(mainelement)
    }
    }
  }, [])
  

  

  return (
    <div className="contact-side-bar-conatainer">
      <div className='contact-side-box contact-sider-box-one'>
        <div className='contact-sider-logo'>
          <div className='contact-logo-one'>
            <img src="./ContactPageImage/location.png" alt="location-logo" className='contact-logo' />
          </div>
        </div>
        <div className='contact-sider-cont'>
          <div className='contact-title'>
            <p>Location</p>
          </div>
          <div className='contact-content'>
            <p>Thiru.Vi.Ka.Nagar,</p>
            <p>Vettuvapalayam,</p>
            <p>Erode.</p>
          </div>
        </div>
      </div>
      <div className='contact-side-box contact-sider-box-two'>
        <div className='contact-sider-logo contact-inner-logo-two'>
          <div className='contact-logo-two'>
            <img src="./ContactPageImage/call.png" alt="location-logo" className='contact-logo' />
          </div>
        </div>
        <div className='contact-sider-cont'>
          <div className='contact-title'>
            <p>Phone</p>
          </div>
          <div className='contact-content'>
            <p>80155-70575</p>
            <p>9445174277</p>
           
          </div>
        </div>
      </div>
      <div className='contact-side-box contact-sider-box-three'>
        <div className='contact-sider-logo'>
          <div className='contact-logo-three'>
            <img src="./ContactPageImage/message (1).png" alt="location-logo" className='contact-logo' />
          </div>
        </div>
        <div className='contact-sider-cont'>
          <div className='contact-title'>
            <p>Email</p>
          </div>
          <div className='contact-content'>
            <p>srisabarish003@gmail.com</p>
            <p>sabarishsri315@gmail.com</p>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSider