import {ThreadChat} from "../thread-chat/ThreadChat";
import {useDispatch, useSelector} from "react-redux";
import {ON_MESSAGE_EDIT} from "../../modules/memos";

export function ChatEdit({_ThreadChat = ThreadChat}) {

    const message = useSelector(state => state.selectedMessageToEdit)

    const dispatch = useDispatch();
    return <_ThreadChat message={message} onSubmit={message =>
        dispatch({type: ON_MESSAGE_EDIT, message})
    }/>
}