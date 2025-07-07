import { useEffect } from 'react'
import '../../Styles/ContactPageCSS/ContactSider.css'

const ContactSider = () => {
 
    
  
  useEffect(() => {
    const mainelement=document.querySelector('.contact-side-bar-conatainer')

    const itemone=document.querySelector('.contact-logo-one')
    const itemtwo=document.querySelector('.contact-logo-two')
    const itemthree=document.querySelector('.contact-logo-three')
    const itemfour=document.querySelector('.contact-logo-last')
    
    const boxone=document.querySelector('.contact-sider-box-one')
    const boxtwo=document.querySelector('.contact-sider-box-three')

    const boxthree=document.querySelector('.contact-sider-box-two')
    const boxfour=document.querySelector('.contact-sider-box-four')
    

  let  observer=new IntersectionObserver(([entry])=>{
          if (entry.intersectionRatio>0.5) {
              itemone?.classList.add('no-logo-contact-move')
              itemtwo?.classList.add('no-logo-contact-move')
              itemthree?.classList.add('no-logo-contact-move')
              itemfour?.classList.add('no-logo-contact-move')
            
              boxone?.classList.add('no-box-move-contact')
              boxtwo?.classList.add('no-box-move-contact')
              boxthree?.classList.add('no-box-move-contact')
              boxfour?.classList.add('no-box-move-contact')
          }
          else{
              itemone?.classList.remove('no-logo-contact-move')
              itemtwo?.classList.remove('no-logo-contact-move')
              itemthree?.classList.remove('no-logo-contact-move')
              itemfour?.classList.remove('no-logo-contact-move')

              boxone?.classList.remove('no-box-move-contact')
              boxtwo?.classList.remove('no-box-move-contact')
              boxthree?.classList.remove('no-box-move-contact')
              boxfour?.classList.remove('no-box-move-contact')
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
      <div className={`contact-side-box  contact-sider-box-one`}>
        <div className='contact-sider-logo'>
          <div className='contact-logo-one logo-delay-one'>
            <img src="/ContactPageImage/location.png" alt="location-logo" className='contact-logo' />
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
      <div className={ `contact-side-box contact-sider-box-two`}>
        <div className='contact-sider-logo contact-inner-logo-two '>
          <div className='contact-logo-two logo-delay-two'>
            <img src="/ContactPageImage/call.png" alt="location-logo" className='contact-logo' />
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
      <div className={`contact-side-box contact-sider-box-three`}>
        <div className='contact-sider-logo'>
          <div className='contact-logo-three logo-delay-three'>
            <img src="/ContactPageImage/message (1).png" alt="location-logo" className='contact-logo' />
          </div>
        </div>
        <div className='contact-sider-cont'>
          <div className='contact-title'>
            <p>Email</p>
          </div>
          <div className='contact-content'>
            <p>{String('srisabarish003@gmail.com').slice(0,-7)+'..'}</p>
            <p>{String('sabarishsri315@gmail.com').slice(0,-7)+'..'}</p>
           
          </div>
        </div>
      </div>
      <div className={`contact-side-box  contact-sider-box-four`}>
        <div className='contact-sider-logo contact-inner-logo-two '>
          <div className='contact-logo-two contact-logo-last logo-delay-four'>
            <img src="/ContactPageImage/chain.png" alt="location-logo" className='contact-logo' />
          </div>
        </div>
        <div className='contact-sider-cont'>
          <div className='contact-title'>
            <p>Links</p>
          </div>
          <div className='contact-content'>
            <p>Linkedin</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSider