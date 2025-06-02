import '../../Styles/ContactPageCSS/ContactTouch.css'

const ContactTouch = () => {
  return (
    <div className='contact-touch-container'>
        <div className='contact-get-in-touch-input'>
            <div className='contact-get-title-container'>
                <div className='contact-get-in-touch-title'>
                    <p className='contact-get-para-one'>Apply For Admission</p>
                    <p  className='contact-get-para-two'>Follow this comprehensive guide to navigate the application process for Universite, ensuring you complete every step accurately and on time.</p>
                </div>
                <div className='contact-get-in-touch-input-container'>
                    <div className='input-container-basic-info'>
                        <div className='input-bar'>
                            <input type="text" id='name' className='input-bar-contact-get' placeholder='Full Name'/>
                            
                        </div>
                        <div className='input-bar'>
                            <input type="text" name="" id="" className='input-bar-contact-get' placeholder='Email Address'/>
                        </div>
                        <div className='input-bar'>
                             <input type="text" name="" id="" className='input-bar-contact-get' placeholder='80155-75757' />
                        </div>
                        <div className='input-bar'>
                             <input type="text" name="" id="" className='input-bar-contact-get' placeholder='Country'/>
                        </div>
                        <div className='input-bar'>
                            <input type="text" name="" id="" className='input-bar-contact-get' placeholder='State'/>
                        </div>
                        <div className='input-bar'>
                             <input type="text" name="" id="" className='input-bar-contact-get' placeholder='City'/>
                        </div>
                    </div>
                    <div className='input-container-message'>
                        <textarea name="" id="" className='message-inp' placeholder='Enter Your Ideas....'></textarea>
                    </div>
                </div>
                <div className='contact-get-in-touch-btn'><button className='get-in-touch-btn'>Proceed</button></div>
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