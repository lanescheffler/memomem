import {ThreadChat} from "../thread-chat/ThreadChat";
import {useDispatch} from "react-redux";
import {ON_CHAT_ADD} from "../../modules/memos";

export function ChatAdd({_ThreadChat = ThreadChat}) {
    const dispatch = useDispatch()
    function onSubmit(message) {
        dispatch({
            type: ON_CHAT_ADD,
            message
        })
    }
    return <_ThreadChat onSubmit={onSubmit}/>
}