import {useState} from "react";
import {initiateLogin, ON_LOGIN} from "../../modules/memos";
import {useDispatch, useSelector} from "react-redux";
import './Login.css';

export function Login({_useDispatch = useDispatch}) {

    const dispatch = _useDispatch();
    // const loginMessage = useSelector(state => state.loginMessage)
    const regiMessage = useSelector(state => state.regiMessage)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userList = useSelector(state => state.userList)
    // const foundUser = userList.find(user => user.username === username && user.password === password)

    const {loginPending, loginFailed} = useSelector(state => ({
        loginPending: state.loginPending,
        loginFailed: state.loginFailed
    }))


    function onSubmitLogin(e) {
        e.preventDefault();
        if(username === '' || password === '') {
            alert("invalid username & password...")
        } else {
            dispatch(initiateLogin({username, password}))
            setUsername("");
            setPassword("");
        }
    }

    return (
        <div className="login">
            <form onSubmit={onSubmitLogin} className={"login__form"}>
                <input required className={"login__input"} type="username" placeholder="USERNAME" value={username}
                       onChange={e => setUsername(e.target.value)}/>
                <input required className={"login__input"} type="password" placeholder="PASSWORD" value={password}
                       onChange={e => setPassword(e.target.value)}/>

                <button type="submit" className="login__btn" disabled={loginPending}>| Login |</button>

                <br/>{loginFailed && <h2>Username and password are incorrect</h2>}
                {/*<br/>{loginMessage && <div><font color="white"> {loginMessage}</font></div>}*/}
                <br/>{regiMessage && <div className="regiMessage"><font color="black"> {regiMessage}</font></div>}
            </form>
        </div>
    );
}