import {useState} from "react";
import {ON_LOGIN} from "../../modules/memos";
import {useDispatch, useSelector} from "react-redux";

export function Login() {

    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const userList = useSelector(state => state.userList)

    function onSubmitLogin(e) {
        e.preventDefault();
        // to create found user
        // const foundUser = userList.find(user => user.username === username && user.password === password)
        //
        // if (foundUser){
            dispatch({
                type: ON_LOGIN,
                loginInfo: {
                    username,
                    password
                }
            })
        // there is a hidden alert here.
        //     alert('Login Success!!!')
        // } else {
        //     alert('Invalid Username or Password!!!')
        // }
    }

    return (
        <div className="login">
            <form className="login_form" onSubmit={onSubmitLogin}  >
                <input type="USERNAME" placeholder="USERNAME" value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="PASSWORD" placeholder="PASSWORD" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="submit__btn">Login</button>
            </form>
        </div>
    );
}