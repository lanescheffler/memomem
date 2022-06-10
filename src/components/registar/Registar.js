import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {ON_REGISTAR} from "../../modules/memos";
import {useDispatch} from "react-redux";
import './Registar.css'

export function Registar() {

    const dispatch = useDispatch();

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
            <form className="registar_form" onSubmit={onSubmitRegistar} >
                <input type="username" placeholder="USERNAME" value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="password" placeholder="PASSWORD" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="submit__btn">| Registar |</button>
            </form>
        </div>
    );
}