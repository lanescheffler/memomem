import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {initiateRegistar, ON_REGISTAR} from "../../modules/memos";
import {useDispatch, useSelector} from "react-redux";
import './Registar.css'

export function Registar({_useDispatch = useDispatch}) {

    const dispatch = _useDispatch();
    const userList = useSelector(state => state.userList)
    // the userlist needs to be from the back end, not state.
    const existingUser = userList.find(user => user.username === user.username)

    // const regiMessage = useSelector(state => state.regiMessage)


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function onSubmitRegistar(e) {
        e.preventDefault();
        if (existingUser || username === '' || password === '') {
            alert("invalid username & password...")
        } else {
            // dispatch({
            //     type: ON_REGISTAR,
            //     regInfo: {
            //         id: uuidv4(),
            //         username, password
            //     }
            // })
            // if(username === '' || password === '') {
            //     alert("invalid username & password...")
            // } else {
            dispatch(initiateRegistar({id: uuidv4(), username, password}))
            setUsername("");
            setPassword("");
            // }
        }
    }

    return (
        <div className="registar">
            <h2>welcome to ...memomem</h2>
            <form className={"registar__form"} onSubmit={onSubmitRegistar}>
                <input required className={"regi__input"} type="username" placeholder="USERNAME" value={username}
                       onChange={e => setUsername(e.target.value)}/>
                <input required className={"regi__input"} type="password" placeholder="PASSWORD" value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="regi__btn">| Registar |</button>
                {/*<br/>{regiMessage && <div><font color="black"> {regiMessage}</font></div>}*/}
            </form>
        </div>
    );
}