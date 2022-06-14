import {ThreadInfo} from "../sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {ON_THREAD_ADD} from "../../modules/memos";

export function ThreadAdd({_ThreadInfo = ThreadInfo, _useDispatch = useDispatch}) {

    const dispatch = _useDispatch()

    function onSubmit(thread) {
        dispatch({
            type: ON_THREAD_ADD,
            thread
        })
    }
    return <_ThreadInfo onSubmit={onSubmit}/>
}