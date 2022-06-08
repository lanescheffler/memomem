import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {useSelector} from "react-redux";

export function ThreadInfo(props) {

    const userCreated = useSelector(state => state.currentUser)
    // const posts = useSelector(state => state.selectedThread.posts)

    // const [userCreated, setuserCreated] = useState("");

    const newThread = {
        id: uuidv4(),
        userCreated: userCreated,
        invitedUser: [],
        title: '',
        date: new Date(),
        private: false,
        posts: []
    }

    const { onSubmit, thread = newThread,  } = props

    const [formState, setFormState] = useState(thread);

    function onFormSubmit(e) {
        e.preventDefault()
        onSubmit({...formState})
        setFormState(newThread);
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

    function onDelete(event) {
        setFormState({
            ...formState,
            private: event.target.checked
        })
    }

    return <form onSubmit={onFormSubmit}>
        <input onChange={onTitleChange} value={formState.title} type={'text'} placeholder={"THREAD TITLE"}/>
        <input onChange={onInviteChange} value={formState.invitedUser} type={'text'} placeholder={"INVITE USER"}/>
        <button>Create Thread</button>
        <label>
           <small>PRIVATE</small>
            <input onChange={onDelete} checked={formState.private} type={'checkbox'}/>
        </label>
    </form>
}