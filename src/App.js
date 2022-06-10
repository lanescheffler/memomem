import './App.css'
import {Login} from "./components/login/Login";
import {Registar} from "./components/registar/Registar";
import {ON_LOGOUT} from "./modules/memos";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ThreadAdd} from "./components/thread-add/ThreadAdd";
import {ThreadList} from "./components/thread-list/ThreadList";
import {ThreadEdit} from "./components/thread-edit/ThreadEdit";
import {ThreadChat} from "./components/thread-chat/ThreadChat";
import dropdown from "bootstrap/js/src/dropdown";


// useState()

function App() {

    // const {
    //     _Login = Login,
    //     _Registar = Registar,
    //     _ThreadAdd = ThreadAdd,
    //     _ThreadList = ThreadList,
    //     _ThreadEdit = ThreadEdit
    //
    // } = props;


    const dispatch = useDispatch();

    const userList = useSelector(state => state.userList);
    const currentUser = useSelector(state => state.currentUser);
    const loggedIn = useSelector(state => state.loggedIn);
    const selectedThread = useSelector(state => state.selectedThread)
    const selectedThreadToEdit = useSelector(state => state.selectedThreadToEdit);

    if (selectedThreadToEdit) {
        return  <div><ThreadEdit/></div>
    }

    if (selectedThread) {
        return  <div>this is a chat room
            {/*<ChatList/>*/}
            {<ThreadChat/>}
            {/*<>{chatList.map(message => <div key={message.id}> {message.message}*/}
            {/*    ...from : {message.userCreated} @ {message.date} </div>)}</>*/}

        </div>
    }


    if (!loggedIn) {
        return <div className="login_page">
            <Registar/>
            <Login/>
        </div>
    }

    return <div>
        <> you are logged in as...{currentUser} </>
        <> USERLIST: {userList.map(user => <div key={user.id} className='userList' >{user.username}</div>)} </>
        <>
            <input type="button" value="logout" onClick={() => {dispatch({type: ON_LOGOUT})}}/>
        </>
            <>
                <ThreadAdd/>
                <ThreadList/>
            </>
    </div>

}

export default App;


