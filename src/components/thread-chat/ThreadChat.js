// import {useState} from "react";
// import {v4 as uuidv4} from 'uuid';
// import {ON_CHAT,ON_THREAD_RELEASE} from "../../modules/memos";
// import {useDispatch, useSelector} from "react-redux";
// import {ChatList} from "../chat-list/ChatList";
//
// export function ThreadChat() {
//
//     const dispatch = useDispatch();
//
//     const userCreated = useSelector(state => state.currentUser)
//     const threadId = useSelector(state => state.selectedThread.id)
//     // const threadId = useSelector(state => state.selectedThread.id)
//     // const filteredChat = chatList.filter(t => t.threadId)
//
//     // const { onSubmit, message = newMessage,  } = props
//     // const [formState, setFormState] = useState(message);
//     const [message, setMessage] = useState("");
//
//     function onSubmitMessage(e) {
//         e.preventDefault();
//         dispatch({
//             type: ON_CHAT,
//             message: {
//                 id: uuidv4,
//                 threadId: threadId,
//                 message,
//                 date: new Date().toDateString(),
//                 userCreated,
//                 // message
//             }
//         })
//     }
//
//     // const message = {
//     //     id: uuidv4,
//     //     threadId: threadId,
//     //     message,
//     //     date: new Date().toDateString(),
//     //     userCreated,
//     //     // message
//     // }
//
//     // function onSubmitMessage(e) {
//     //     e.preventDefault()
//     //     onSubmit({...formState})
//     //     setFormState(newThread);
//     // }
//
//     // function onMessageChange(e) {
//     //     setFormState({
//     //         ...formState,
//     //         title: e.target.value
//     //     })
//     // }
//
//
//     function LeaveChatRoom() {
//         dispatch({
//             type: ON_THREAD_RELEASE
//         })
//     }
//
//
//
//     return (
//         <div className="chat">
//
//             <form className="leaveChat" onSubmit={LeaveChatRoom}>
//                 <button type="submit" className="submit__btn">leave chatroom.</button>
//             </form>
//
//             <ChatList/>
//
//             <form className="chat_form" onSubmit={onSubmitMessage} >
//                 <input type="text" placeholder="message" value={message} onChange={e => setMessage(e.target.value)}/>
//                 <button type="submit" className="submit__btn">send.</button>
//             </form>
//
//
//         </div>
//     );
// }
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {ON_CHAT,ON_THREAD_RELEASE} from "../../modules/memos";
import {useDispatch, useSelector} from "react-redux";
import {ChatList} from "../chat-list/ChatList";
import './ThreadChat.css'

export function ThreadChat(props) {

    const {onSubmit,
        _useSelector = useSelector,
        _useDispatch = useDispatch} = props

    const state = _useSelector(state => state)

    let {message} = props

    const dispatch = _useDispatch();

    const userCreated = state.currentUser
    const threadId = state.selectedThread.id

    // const threadId = useSelector(state => state.selectedThread.id)
    // const filteredChat = chatList.filter(t => t.threadId)

    // const [message, setMessage] = useState("");
    // function onSubmitMessage(e) {
    //     e.preventDefault();
    //     dispatch({
    //         type: ON_CHAT,
    //         message: {
    //             id: uuidv4,
    //             threadId: threadId,
    //             message,
    //             date: new Date().toDateString(),
    //             userCreated,
    //             // message
    //         }
    //     })
    // }

    const newMessage = {
        id: new Date().getMilliseconds(),
        threadId: threadId,
        message: '',
        date: new Date().toDateString(),
        userCreated: userCreated
        // message
    }

    if (!message) {
        message = newMessage
    }

    const [formState, setFormState] = useState(message);

    function onSubmitMessage(e) {
        e.preventDefault()
        onSubmit({...formState})
        setFormState(newMessage);
    }

    function onMessageChange(e) {
        setFormState({
            ...formState,
            message: e.target.value
        })
    }

    function LeaveChatRoom() {
        dispatch({
            type: ON_THREAD_RELEASE
        })
    }

    function MouseOver(event) {
        event.target.style.background = 'seagreen';
    }
    function MouseOut(event){
        event.target.style.background="";
    }



//     return (
//         <div className="chat">
//
//             <form className="leaveChat" onSubmit={LeaveChatRoom}>
//                 <button type="submit" className="submit__btn">leave chatroom.</button>
//             </form>
//
//             <ChatList/>
//
//             <form className="chat_form" onSubmit={onSubmitMessage} >
//                 <input type="text" placeholder="message" value={message} onChange={e => setMessage(e.target.value)}/>
//                 <button type="submit" className="submit__btn">send.</button>
//             </form>
//
//
//         </div>
//     );
// }

    return <> <form className={'message_form'} onSubmit={onSubmitMessage}>
        <input className={'message_input'} onChange={onMessageChange}
               value={formState.message} type={'text'} placeholder={"...reverseString('MeMoMeM')"}/>
        <button className={'message_button'}>Send.</button>
    </form>

        <form className="leaveChat" onSubmit={LeaveChatRoom}>
            <button onMouseOver={MouseOver} onMouseOut={MouseOut} type="submit" className="leaveChat_btn">leave chatroom</button>
        </form>

    </>
}

