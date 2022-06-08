import {ThreadInfo} from "../sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {ON_THREAD_EDIT} from "../../modules/memos";

export function ThreadEdit({_ThreadInfo = ThreadInfo}) {

    const thread = useSelector(state => state.selectedThread)

    const dispatch = useDispatch();
    return <_ThreadInfo thread={thread} onSubmit={thread =>
        dispatch({type: ON_THREAD_EDIT, thread})
    }/>
}