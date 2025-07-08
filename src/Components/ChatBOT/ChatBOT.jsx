import '../../Styles/ChatBotCSS/ChatBOT.css'
import { Image } from '@imagekit/react';
import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { useRef } from 'react';


const ChatBOT = ({setchatbot,chatbot}) => {

  const chatref=useRef('')


  

  const enterclick=(e)=>{
    if (e.key=='Enter') {
      Chatfunction()
      
    }
  }

  const Chatfunction=()=>{
     const getorderlist=document.querySelector('.chat-order-list')
     if (chatref.current.value=='') {
      return
      
    }
    else{
      getorderlist?.appendChild(chatsender(String(chatref.current.value).trim(),'from-user'))

     
      setTimeout(() => {
        
       
        const getlistelement=chatsender('Thinking...','from-dora')
        getorderlist?.appendChild(getlistelement)
          getreplyfromdora(getlistelement)
           getorderlist.scrollTop = getorderlist.scrollHeight
      }, 600);    
    }
  }


  const getreplyfromdora = (message) => {
  const APIkey = "f1e46a90-b68e-4e33-9df0-de3ae9106008";
  let replyuser=message.querySelector("p")
  const getdata = async () => {
    try {
      const fetchingmessage = await fetch("https://api.sambanova.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${APIkey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "DeepSeek-R1-Distill-Llama-70B", 
          messages: [
           
            { role: "user", content: `${String(chatref.current.value).trim()}` }
          ],
          temperature: 0.1,
          top_p: 0.1
        })
      });

      if (!fetchingmessage.ok) throw new Error('There is an error');

      const json = await fetchingmessage.json();
      
      
     
      
       replyuser.textContent=String(json.choices[0].message.content).slice(19)
    } catch (err) {
      console.error(err);
      replyuser.textContent= "Something went wrong. Please Come Back Later";
    }finally{
      chatref.current.value=''
    }
  };

  getdata(); 
};


  const chatsender=(Value,classname)=>{

      const userchat=document.createElement('li')
      userchat.classList.add('chat',`${String(classname)=='from-user'?classname:'from-dora'}`)
    
      const datacolectioninlist=String(classname)=='from-user'?`<p  class='chat-para-from-user'>${Value}</p>`:`<span class='dora-chat-icon'>  <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="white"
                              d="M17 2h-4V1h-2v1H7a3 3 0 0 0-3 3v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a3 3 0 0 0-3-3m-6 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M4 22a8 8 0 1 1 16 0z"
                            ></path>
                          </svg></span><p class='chat-para-from-dora'>${Value}</p>`
      userchat.innerHTML=datacolectioninlist
      return userchat
  }
  return (
    <div className={`chat-bot-main-container ${chatbot?'chatbotshow':'chatbotnotshow'}`}>
      <div className='chat-bot-header'>
      
             <Image
                urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                src="/download.jpeg"
                
                alt="Website Logo"
                className='chat-bot-image'
            />
        
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
                    <span className='dora-chat-icon'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="white"
                              d="M17 2h-4V1h-2v1H7a3 3 0 0 0-3 3v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a3 3 0 0 0-3-3m-6 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M4 22a8 8 0 1 1 16 0z"
                            ></path>
                          </svg>
                      </span>
                    <p className='chat-para-from-dora'>👋 Hello, User!<br></br>I'm DORA, here to assist you — just ask away! 🧠💬</p>
                </li>          
            </ol>
        </div>
      </div>
      <div className='chat-bot-input'>
        <div className='chat-input-box'>
                    <input ref={chatref} onKeyDown={(e)=>enterclick(e)} type="text" placeholder='Ask Dora AI' className='chat-inp'/>
                    <button onClick={()=>Chatfunction()} className='input-send-btn'><FiSend className='send-icon'/></button>
        </div>
      </div>
    </div>
  )
}

export default ChatBOT
