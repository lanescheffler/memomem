import {ThreadInfo} from "../sidebar/Sidebar";
import {useDispatch} from "react-redux";
import {ON_THREAD_ADD} from "../../modules/memos";

export function ThreadAdd({_ThreadInfo = ThreadInfo}) {
    const dispatch = useDispatch()
    function onSubmit(thread) {
        dispatch({
            type: ON_THREAD_ADD,
            thread
        })
    }
    return <_ThreadInfo onSubmit={onSubmit}/>
}