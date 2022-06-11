// import {Button, Card} from "react-bootstrap";
import {BsFillCheckCircleFill, BsFillCircleFill, BsFillGearFill, BsFillTrashFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {ON_THREAD_DELETE, ON_THREAD_SELECT_TO_EDIT, ON_THREAD_CHAT} from "../../modules/memos";
import './Thread.css'

export function Thread({thread}) {


    const dispatch = useDispatch();

    function MouseOver(event) {
        event.target.style.background = 'azure';
    }
    function MouseOut(event){
        event.target.style.background="";
    }

    return <div className="thread">
        about:
        [{thread.title}] ...on
        {thread.date?.toString().substring(3, 15).toLowerCase()} ... with {thread.userCreated} &... {thread.invitedUser}
        <br/>
        {/*PUBLIC POSTS:*/}
        {/*{thread.posts}*/}

        <button className={'thread__btn'} onMouseOver={MouseOver} onMouseOut={MouseOut}
                onClick={() => dispatch({type: ON_THREAD_CHAT, thread: thread})}>
            |Chat|
        </button>
        <button className={'thread__btn'} onMouseOver={MouseOver} onMouseOut={MouseOut}
                onClick={() => dispatch({type: ON_THREAD_SELECT_TO_EDIT, thread: thread})}>
            |Edit|
        </button>
        <button className={'thread__btn'} onMouseOver={MouseOver} onMouseOut={MouseOut}
                onClick={() => dispatch({type: ON_THREAD_DELETE, thread})}>
            |Delete|
        </button>
    </div>
}