import React, { useEffect, useState,useRef,useMemo } from 'react'
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    ConversationHeader,
    Avatar,
    InfoButton,
    ConversationList,
    Conversation,
    Sidebar,
    Search,
    TypingIndicator,
    MessageSeparator
} from "@chatscope/chat-ui-kit-react";
import { AiOutlineLogout } from "react-icons/ai"
import axios from 'axios';

export default function Chat() {

    
    const [messageInputValue, setMessageInputValue] = useState("");
    const [userData,setUserdata]=useState([])
   // console.log(messageInputValue)
    
//     useEffect(()=>{
//     let logoutHandler=()=>{
//         try{
//         axios.post("http://localhost:8000/api/user/logout",{},{
//             withCredentials:true,
//         })
        
//     }catch(err){
//         console.log(err)
//     }
//     }
// },[logoutHandler])
     

    useEffect(()=>{
        let getAlluser=async()=>{
            try{
               await axios.get("http://localhost:8000/api/user")
                .then(res=>setUserdata(res.data))
                .catch(res=>console.log(res))
            }catch(err){
    
            }
        }
        getAlluser()
       
    },[])
  
   // console.log(userData);
    // console.log(userData.user[0].name)
    return (
        <div style={{
            height: "600px",
            position: "relative"
        }}>
            <MainContainer responsive>
                <Sidebar position="left" scrollable={false}>
                    <ConversationHeader>
                        <Avatar src={"https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"} name="Zoe" />
                        <ConversationHeader.Content userName="Zoe" />
                        <ConversationHeader.Actions>
                            <AiOutlineLogout size={26}  />
                        </ConversationHeader.Actions>

                    </ConversationHeader>
                    <Search placeholder="Search..." />
                    
                   
                    <ConversationList>
                      
                      {userData.map((v,i)=><Conversation key={i} name={v.name} lastSenderName="Lilly">
                            <Avatar src={"https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"} name={v.name} status="available" />
                        </Conversation>)}
                      </ConversationList> 
                </Sidebar>

                <ChatContainer>
                    <ConversationHeader>
                        <ConversationHeader.Back />
                        <Avatar src={"https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"} name="Zoe" />
                        <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />

                    </ConversationHeader>
                    <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
                        <MessageSeparator content="Saturday, 30 November 2019" />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "single"
                        }}>
                            <Avatar src={"https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"} name="Zoe" />
                        </Message>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "single"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={"https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"} name="Zoe" />
                        </Message>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "first"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "last"
                        }} />

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "last"
                        }}>
                            <Avatar src={"https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"} name="Zoe" />
                        </Message>
                    </MessageList>
                    <MessageInput placeholder="Type message here" value={messageInputValue} onChange={val=> setMessageInputValue(val)} />
                </ChatContainer>
            </MainContainer>
        </div>
    )
}
