import {useState} from "react";
import {ON_LOGIN} from "../../modules/memos";
import {useDispatch, useSelector} from "react-redux";
import './Login.css';

export function Login() {

    const dispatch = useDispatch();

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
            <form className="login_form" onSubmit={onSubmitLogin}  >
                <input type="USERNAME" placeholder="USERNAME" value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="PASSWORD" placeholder="PASSWORD" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="submit__btn">|  Login  |</button>
            </form>
        </div>
    );
}