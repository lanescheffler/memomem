// import {Button, Card} from "react-bootstrap";
// import {BsFillCheckCircleFill, BsFillCircleFill, BsFillGearFill, BsFillTrashFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {
    ON_THREAD_DELETE,
    ON_THREAD_SELECT_TO_EDIT,
    ON_THREAD_CHAT,
    getThreadList,
    deletingThread,
    editThread
} from "../../modules/memos";
import './Thread.css'
import {useEffect} from "react";

export function Thread({thread, _useDispatch = useDispatch}) {


    const dispatch = _useDispatch();
    const threadList = useSelector(state => state.threadList)
    const currentUser = useSelector(state => state.currentUser)

    useEffect(() => {
        dispatch(getThreadList())
    }, [])

    function MouseOver(event) {
        event.target.style.background = 'azure';
    }

    function MouseOut(event) {
        event.target.style.background = "";
    }

    // function editThread(e) {
    //     const selectedThreadToEdit = threadList.filter(s => s.id === thread.id && s.userCreated === thread.userCreated)
    //     dispatch({type: ON_THREAD_SELECT_TO_EDIT, selectedThreadToEdit: selectedThreadToEdit})
    //
    // }

    function deleteThread(e) {
        if (currentUser !== thread.userCreated) {
            alert("you did not create this thread...")
        } else {
            const selectedThread = threadList.filter(s => s.id === thread.id)
            dispatch(deletingThread(selectedThread[0].id))
        }
    }

    return <div className="thread">
        about:
        [{thread.title}] ...on_
        {thread.date?.toString().substring(0, 10).toLowerCase()} ... with {thread.userCreated} &... {thread.invitedUser}
        <br/>
        {/*PUBLIC POSTS:*/}
        {/*{thread.posts}*/}

        <button className={'thread__btn'} onMouseOver={MouseOver} onMouseOut={MouseOut}
                onClick={() => dispatch({type: ON_THREAD_CHAT, thread: thread})}>
            |Chat|
        </button>
        <button className={'thread__btn'} onMouseOver={MouseOver} onMouseOut={MouseOut}
            // onClick={(e) => {editThread(e)}}>
                onClick={() => dispatch({type: ON_THREAD_SELECT_TO_EDIT, thread: thread})}>
            |Edit|
        </button>
        <button className={'thread__btn2'}
                onClick={(e) => {
                    deleteThread(e)
                }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-trash"
                 viewBox="0 0 16 16" onMouseOver={MouseOver} onMouseOut={MouseOut}>
                <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </button>
    </div>
}