import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {ON_REGISTAR} from "../../modules/memos";
import {useDispatch, useSelector} from "react-redux";
import './Registar.css'

export function Registar({_useDispatch = useDispatch, _useSelector = useSelector}) {

    const dispatch = _useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function onSubmitRegistar(e) {
        e.preventDefault();
        dispatch({
            type: ON_REGISTAR,
            regInfo: {
                id: uuidv4(),
                username, password
            }
        })
    }

    return (
        <div className="registar">
            <h2>welcome to ...memomem</h2>
            <form className={"registar__form"} onSubmit={onSubmitRegistar}>
                <input className={"regi__input"} type="username" placeholder="USERNAME" value={username} onChange={e => setUsername(e.target.value)}/>
                <input className={"regi__input"} type="password" placeholder="PASSWORD" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="regi__btn">| Registar |</button>
            </form>
        </div>
    );
}