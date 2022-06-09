// import {Button, Card} from "react-bootstrap";
import {BsFillCheckCircleFill, BsFillCircleFill, BsFillGearFill, BsFillTrashFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {ON_THREAD_DELETE, ON_THREAD_SELECT_TO_EDIT, ON_THREAD_CHAT} from "../../modules/memos";

export function Thread({thread}) {


    const dispatch = useDispatch();

    return <div>
        Title:_
        {thread.title}_
        {thread.date?.toString().substring(3, 15).toLowerCase()}__
        {thread.invitedUser}_has been invited to this thread!!!___
        {thread.userCreated}_created this thread.
        <br/>
        {/*PUBLIC POSTS:*/}
        {/*{thread.posts}*/}

        <button onClick={() => dispatch({type: ON_THREAD_CHAT, thread: thread})}>
            Chat
        </button>
        <button onClick={() => dispatch({type: ON_THREAD_SELECT_TO_EDIT, thread: thread})}>
            Edit
        </button>
        <button onClick={() => dispatch({type: ON_THREAD_DELETE, thread})}>
            Delete
        </button>
    </div>
}