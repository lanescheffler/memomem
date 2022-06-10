import {useSelector} from "react-redux";

export function ChatList() {

    const chatList = useSelector(state => state.chatList)
    const threadId = useSelector(state => state.selectedThread.id)
    const selectedChatList = chatList.filter(m => m.threadId == threadId)

    return <>

        <strong>CHAT LIST:</strong>{

            selectedChatList.map(message =>

            <div>
                {message.id}{message.message}...from : {message.userCreated} @ {message.date}
            </div>)
        }

        <br/>
    </>
}