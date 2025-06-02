import '../../Styles/ContactPageCSS/ContactSider.css'

const ContactSider = () => {
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
        <div className='contact-sider-logo contact-logo-two'>
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