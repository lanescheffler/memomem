// import {Button, Card} from "react-bootstrap";
import {BsFillCheckCircleFill, BsFillCircleFill, BsFillGearFill, BsFillTrashFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {ON_MESSAGE_DELETE, ON_MESSAGE_SELECT_TO_EDIT} from "../../modules/memos";
import './Memo.css'

export function Message({message}) {


    const dispatch = useDispatch();

    return <div className="message">

        {message.userCreated}:
        ...{message.message} @
        {message.date?.toString().substring(3, 15).toLowerCase()}__

        <br/>
        {/*PUBLIC POSTS:*/}
        {/*{thread.posts}*/}

        <button className={'message_btn'} onClick={() => dispatch({type: ON_MESSAGE_SELECT_TO_EDIT, message: message})}>
            Edit
        </button>
        <button className={'message_btn'} onClick={() => dispatch({type: ON_MESSAGE_DELETE, message})}>
            Delete
        </button>
    </div>
}