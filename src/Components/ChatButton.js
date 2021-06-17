import react from 'react'
import '../styles/ChatButton.scss'
import {BsChatSquareDots} from 'react-icons/bs'

const ChatButton = () => {
    return (
       
       <div id="chat-button-container">
           <div id="chat-button-background">

                <div id="chat-button">
                    <BsChatSquareDots/>
                </div>
            </div>
       </div>
       
    )
}

export default ChatButton;