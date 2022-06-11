import './App.css'
import {Login} from "./components/login/Login";
import {Registar} from "./components/registar/Registar";
import {ON_LOGOUT} from "./modules/memos";
import {useDispatch, useSelector} from "react-redux";
import {ThreadAdd} from "./components/thread-add/ThreadAdd";
import {ThreadList} from "./components/thread-list/ThreadList";
import {ThreadEdit} from "./components/thread-edit/ThreadEdit";
import {ThreadChat} from "./components/thread-chat/ThreadChat";
import {ChatEdit} from "./components/memo-edit/MemoEdit";
import {ChatAdd} from "./components/chat-add/ChatAdd";
import {ChatList} from "./components/chat-list/ChatList";



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
    const selectedMessageToEdit = useSelector(state => state.selectedMessageToEdit);

    if (selectedThreadToEdit)  {
        return <div className="chatEdit_page">
            {/*<span className="chatEdit_page">*/}
            <span className="user_list">
                userlist:_{userList.map(user => <div key={user.id} className='userList' >{user.username},</div>)}
            </span>

            <ThreadEdit/>...edit thread
            {/*</span>*/}
        </div>
    }

    if (selectedMessageToEdit) {
        return  <div className="chatEdit_page">
            <ChatEdit/>...edit message
        </div>

    }

    if (selectedThread) {
        return  <>
                <div className="chat_page">  this is a chat room...
                    <span>
                    <ChatList/>
                    <ChatAdd/>
                </span>
        </div>
        <div className={"chat_back"}></div>
    </>
    }


    if (!loggedIn) {
        return <div className="landing_page">
            <Registar/>
            <Login/>
        </div>
    }

    function MouseOver(event) {
            event.target.style.background = 'seagreen';
        }
    function MouseOut(event){
        event.target.style.background="";
    }

    return <div className="user_back">

            <span className="current_user">
                you are logged in as ...{currentUser}
            </span>

            <span>
                <input onMouseOver={MouseOver} onMouseOut={MouseOut} className="logout_btn" type="button" value="logout"
                       onClick={() => {dispatch({type: ON_LOGOUT})}}/>
            </span>
        <br/>
            <span className="user_list">
                userlist:_{userList.map(user => <div key={user.id} className='userList' >{user.username},</div>)}
            </span>

            <span className="home_page">
                <ThreadList/>
                <ThreadAdd/>
            </span>
    </div>
}

export default App;


