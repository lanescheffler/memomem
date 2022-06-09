import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {ON_CHAT,ON_THREAD_RELEASE} from "../../modules/memos";
import {useDispatch, useSelector} from "react-redux";

export function ThreadChat() {

    const dispatch = useDispatch();

    const chatList = useSelector(state => state.chatList);
    const userCreated = useSelector(state => state.currentUser)

    const [message, setMessage] = useState("");

    function onSubmitMessage(e) {
        e.preventDefault();
        dispatch({
            type: ON_CHAT,
            message: {
                id: uuidv4(),
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

    return (
        <div className="chat">
            <form className="chat_form" onSubmit={onSubmitMessage} >
                <input type="text" placeholder="message" value={message} onChange={e => setMessage(e.target.value)}/>
                <button type="submit" className="submit__btn">send.</button>
            </form>
            {chatList.map(message => <div key={message.id}>
                {message.id}
                {message.message}...from : {message.userCreated} @ {message.date} </div>)}
            <form className="leaveChat" onSubmit={LeaveChatRoom}>
            <button type="submit" className="submit__btn">leave chatroom.</button>
            </form>


        </div>
    );
}