import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {ON_CHAT,ON_THREAD_RELEASE} from "../../modules/memos";
import {useDispatch, useSelector} from "react-redux";
import {ChatList} from "../chat-list/ChatList";

export function ThreadChat() {

    const dispatch = useDispatch();

    const userCreated = useSelector(state => state.currentUser)
    const threadId = useSelector(state => state.selectedThread.id)
    // const threadId = useSelector(state => state.selectedThread.id)
    // const filteredChat = chatList.filter(t => t.threadId)

    const [message, setMessage] = useState("");

    function onSubmitMessage(e) {
        e.preventDefault();
        dispatch({
            type: ON_CHAT,
            message: {
                id: uuidv4,
                threadId: threadId,
                message,
                date: new Date().toDateString(),
                userCreated,
                // message
            }
        })
    }

    function LeaveChatRoom() {
        dispatch({
            type: ON_THREAD_RELEASE
        })
    }

    // function ChatFilter() {
    //     state.userList.find(user => user.username === action.regInfo.username)
    // }
    //
    // function Chatfilter()
    //     if (chatId == threadId) {
    //
    //     }
    // )

    return (
        <div className="chat">
            <form className="chat_form" onSubmit={onSubmitMessage} >
                <input type="text" placeholder="message" value={message} onChange={e => setMessage(e.target.value)}/>
                <button type="submit" className="submit__btn">send.</button>
            </form>

            <ChatList/>

            <form className="leaveChat" onSubmit={LeaveChatRoom}>
            <button type="submit" className="submit__btn">leave chatroom.</button>
            </form>


        </div>
    );
}