import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import './Sibebar.css'
import {initiateCreateThread, editThread} from "../../modules/memos";

export function ThreadInfo(props) {

    const dispatch = useDispatch()
    const {_useSelector = useSelector} = props
    let {onSubmit} = props
    let {thread} = props
    const userCreated = _useSelector(state => state.currentUser)
    const threadEditing =_useSelector(state => state.threadEditing)
    let selectedThreadToEdit = _useSelector(state => state.selectedThreadToEdit)
    // const threadList = _useSelector(state => state.threadList)
    // const selectedThread = threadList.filter(s => s.id === thread.id)
    // const posts = useSelector(state => state.selectedThread.posts)

    const newThread = {
        // id: new Date().getMilliseconds(),
        userCreated: userCreated,
        invitedUser: '',
        title: '',
        date: new Date(),
        // private: false,
        // posts: []
    }

    if (!thread) {
        thread = newThread
    }

    const [formState, setFormState] = useState(thread);

    function onFormSubmit(e) {
        e.preventDefault()
        //dispatch
        if(!threadEditing) {
            dispatch(initiateCreateThread(formState))
            setFormState(newThread);
        } else {
            console.log(thread.id)
            dispatch(editThread(formState, thread.id))
        }
        // dispatch(getThreadList())
    }

    function onTitleChange(e) {
        setFormState({
            ...formState,
            title: e.target.value
        })
    }

    function onInviteChange(e) {
        setFormState({
            ...formState,
            invitedUser: e.target.value,
        })
    }

    // function onPost(e) {
    //     setFormState({
    //         ...formState,
    //         posts: e.target.value,
    //     })
    // }

    // function onPrivate(event) {
    //     setFormState({
    //         ...formState,
    //         private: event.target.checked
    //     })
    // }

    return <div className="sidebar">
        <form onSubmit={onFormSubmit} className={"thread__form"}>
            <input required className={"thread__input"} onChange={onTitleChange}
                   value={formState.title} type={'text'} placeholder={"THREAD TITLE"}/>
            <input className={"thread__input"} onChange={onInviteChange}
                   value={formState.invitedUser} type={'text'} placeholder={"INVITE USER"}/>
            {/*<input onChange={onPost}
                   value={formState.posts} type={'text'} placeholder={"POST TO THREAD"}/>*/}
            <button className="threadList__btn">Create Thread</button>
            {/*<label>*/}
            {/*   <small>PRIVATE</small>*/}
            {/*    <input onChange={onPrivate} checked={formState.private} type={'checkbox'}/>*/}
            {/*</label>*/}
        </form>
    </div>
}