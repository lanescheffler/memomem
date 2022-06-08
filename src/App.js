import {Login} from "./components/login/Login";
import {Registar} from "./components/registar/Registar";
import {ON_LOGOUT} from "./modules/memos";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ThreadAdd} from "./components/thread-add/ThreadAdd";
import {ThreadList} from "./components/thread-list/ThreadList";
import {ThreadEdit} from "./components/thread-edit/ThreadEdit";

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

    // const sidebar = useSelector(state => )
    const userList = useSelector(state => state.userList);
    const currentUser = useSelector(state => state.currentUser);
    const loggedIn = useSelector(state => state.loggedIn);
    const selectedThread = useSelector(state => state.selectedThread);
    const invitedUser = useSelector(state => state.invitedUser)
    const userCreated = useSelector(state => state.userCreated)

    if (selectedThread) {
        return  <div><ThreadEdit/></div>
    }

    if (!loggedIn) {
        return <div>


            <Registar/>
            <Login/>


            user list: {userList.map(user => <div key={user.id}> {user.id}: {user.username}: {user.password}</div>)}

        </div>
    }

    return <div>

        you are logged in as...current user: {currentUser}
        // current invited user: {invitedUser}
        // created user: {userCreated}
        <br/>
        user list: {userList.map(user => <div key={user.id}> {user.username}</div>)}

        <input type="button" value="logout" onClick={() => {dispatch({type: ON_LOGOUT})}}/>

        <>
            <small> this is a small message </small>
        </>

        <>
            <ThreadAdd/>
            <ThreadList/>
        </>
    </div>

}

export default App;


