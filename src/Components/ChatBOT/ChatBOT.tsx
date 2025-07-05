import '../../Styles/ChatBotCSS/ChatBOT.css'
import { Image } from '@imagekit/react';
import { IoClose } from "react-icons/io5";
import { RiRobot3Fill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";


const ChatBOT = ({setchatbot,chatbot}) => {
  return (
    <div  className={`chat-bot-main-container ${chatbot?'chatbotshow':'chatbotnotshow'}`}>
      <div className='chat-bot-header'>
        <div className='dora-image-chat-bot'>
             <Image
                urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                src="/download.jpeg"
                
                alt="Website Logo"
                className='chat-bot-image'
            />
        </div>
        <div className='chat-with-title'>
            <p className='chat-title-one'>Dora AI</p>
            <p className='chat-title-two'>Speak With Dora</p>
        </div>
        <IoClose onClick={()=>setchatbot(false)} className='close-chat-bot'/>
      </div>
      <div className='chat-bot-contents'>
        <div className='main-chat-container'>
            <ol className='chat-order-list'>
                <li className='chat from-dora'>
                    <span className='dora-chat-icon'><RiRobot3Fill/></span>
                    <p className='chat-para-from-dora'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, error.</p>
                </li>
                <li className='chat from-user'>
                   
                    <p className='chat-para-from-user'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, error.</p>
                </li>
                
                
          
            </ol>
        </div>
      </div>
      <div className='chat-bot-input'>
        <div className='chat-input-box'>
                    <input type="text" placeholder='Ask Dora AI' className='chat-inp'/>
                    <button className='input-send-btn'><FiSend className='send-icon'/></button>
        </div>
      </div>
    </div>
  )
}

export default ChatBOT
