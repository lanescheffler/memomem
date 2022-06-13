import {useState} from "react";
import {ON_LOGIN} from "../../modules/memos";
import {useDispatch, useSelector} from "react-redux";
import './Login.css';

export function Login({_useDispatch = useDispatch, _useSelector = useSelector}) {

    const dispatch = _useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function onSubmitLogin(e) {
        e.preventDefault();
            dispatch({
                type: ON_LOGIN,
                loginInfo: {
                    username,
                    password
                }
            })
    }

    return (
        <div className="login">
            <form onSubmit={onSubmitLogin} className={"login__form"}>
                <input className={"login__input"} type="username" placeholder="USERNAME" value={username}
                       onChange={e => setUsername(e.target.value)}/>
                <input className={"login__input"} type="password" placeholder="PASSWORD" value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="login__btn">| Login |</button>
            </form>
        </div>
    );
}