import { useEffect, useState } from 'react'
import '../../Styles/ContactPageCSS/ContactSider.css'

const ContactSider = () => {
 
  const [contactwidth,setcontactwidth]=useState(0)
    useEffect(() => {
  
  
      setcontactwidth(window.innerWidth)
      
     
      
       return () => {
        setcontactwidth(0)
      }
    
    
    }, [])
  
  useEffect(() => {



    

    const mainelement=document.querySelector('.contact-side-bar-conatainer')

    const itemone=document.querySelector('.contact-logo-one')
    const itemtwo=document.querySelector('.contact-logo-two')
    const itemthree=document.querySelector('.contact-logo-three')

    const boxone=document.querySelector('.contact-sider-box-one')
    const boxtwo=document.querySelector('.contact-sider-box-three')

    const boxonemob=document.querySelector('.contact-sider-left-one')
    const boxtwomob=document.querySelector('.contact-sider-left-two')
    const boxthreemob=document.querySelector('.contact-sider-left-three')
    const boxfourmob=document.querySelector('.contact-sider-left-four')
    

    let observer;

    if (Number(contactwidth)>930) {
          observer=new IntersectionObserver(([entry])=>{
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
    }
    else{
          observer=new IntersectionObserver(([entry])=>{
          if (entry.intersectionRatio>0.5) {
              itemone?.classList.add('no-logo-contact-move')
              itemtwo?.classList.add('no-logo-contact-move')
              itemthree?.classList.add('no-logo-contact-move')
              boxonemob?.classList.add('no-box-move-contact')
              boxtwomob?.classList.add('no-box-move-contact')
              boxthreemob?.classList.add('no-box-move-contact')
              boxfourmob?.classList.add('no-box-move-contact')

          }
          else{
              itemone?.classList.remove('no-logo-contact-move')
              itemtwo?.classList.remove('no-logo-contact-move')
              itemthree?.classList.remove('no-logo-contact-move')
              boxonemob?.classList.remove('no-box-move-contact')
              boxtwomob?.classList.remove('no-box-move-contact')
              boxthreemob?.classList.remove('no-box-move-contact')
              boxfourmob?.classList.remove('no-box-move-contact')
          }
        },{threshold:0.5})
        
        if (mainelement) {
          observer.observe(mainelement)
        }
    }
    
  
    return () => {
      if (Number(contactwidth)>930) {
        if (mainelement) {
      observer.unobserve(mainelement)
    }
      }else{
          if (mainelement) {
        observer.unobserve(mainelement)
        }
      }
      
    }
  }, [contactwidth])
  

  

  return (
    <div className="contact-side-bar-conatainer">
      <div className={`contact-side-box  ${Number(contactwidth)>930?'contact-sider-box-one':'contact-sider-left-one'}`}>
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
      <div className={ `contact-side-box  ${Number(contactwidth)>930?'contact-sider-box-two':'contact-sider-right-one'}`}>
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
      <div className={`contact-side-box ${Number(contactwidth)>930?'contact-sider-box-three':'contact-sider-left-two'}`}>
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
      <div className={`contact-side-box  contact-sider-box-four${Number(contactwidth)>930?'':'contact-sider-right-two'}`}>
        <div className='contact-sider-logo contact-inner-logo-two'>
          <div className='contact-logo-two'>
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