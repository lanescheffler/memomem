// import {Button, Card} from "react-bootstrap";
import {BsFillCheckCircleFill, BsFillCircleFill, BsFillGearFill, BsFillTrashFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {ON_MESSAGE_DELETE, ON_MESSAGE_SELECT_TO_EDIT} from "../../modules/memos";
import './Memo.css'

export function Message({message, _useDispatch = useDispatch}) {


    const dispatch = _useDispatch();

    function MouseOver(event) {
        event.target.style.background = 'azure';
    }
    function MouseOut(event){
        event.target.style.background="";
    }

    return <div className="message">

        {message.userCreated}:
        ...{message.message} @
        {message.date?.toString().substring(3, 15).toLowerCase()}__

        <br/>
        {/*PUBLIC POSTS:*/}
        {/*{thread.posts}*/}

        <button className={'message_btn'} onMouseOver={MouseOver} onMouseOut={MouseOut}
                onClick={() => dispatch({type: ON_MESSAGE_SELECT_TO_EDIT, message: message})}>
            Edit
        </button>
        <button className={'message_btn2'}
                onClick={() => dispatch({type: ON_MESSAGE_DELETE, message})}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-trash"
                 viewBox="0 0 16 16" onMouseOver={MouseOver} onMouseOut={MouseOut}>
                <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </button>
    </div>
}