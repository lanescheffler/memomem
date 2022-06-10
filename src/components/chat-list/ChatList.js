// import {useSelector} from "react-redux";
//
// export function ChatList() {
//
//     const chatList = useSelector(state => state.chatList)
//     const threadId = useSelector(state => state.selectedThread.id)
//     const selectedChatList = chatList.filter(m => m.threadId == threadId)
//
//     return <>
//
//         <strong>CHAT LIST:</strong>{
//
//             selectedChatList.map(message =>
//
//             <div>
//                 {message.id}{message.message}...from : {message.userCreated} @ {message.date}
//             </div>)
//         }
//
//         <br/>
//     </>
// }

import {Message} from "../memo/Memo";
import {useSelector} from "react-redux";


export function ChatList({onEditSelect, onDelete, _Message = Message}) {

    function sortChatList(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }

    // const userThreadList = threadList.filter(t => !t.invitedUser)
    // const privateList = threadList.filter(t => t.invitedUser)

    const chatList = useSelector(state => state.chatList)
    const threadId = useSelector(state => state.selectedThread.id)
    const selectedChatList = chatList.filter(m => m.threadId == threadId)

    return <>
        <strong>MESSAGES</strong>
        {
            selectedChatList.sort(sortChatList)
                .map((messageData, idx) => {
                    return <div key={idx} className={'m-3'}>
                        <_Message message={messageData} onEditSelect={onEditSelect} onDelete={onDelete}/>
                    </div>
                })
        }
    </>
}