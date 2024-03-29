import {Thread} from "../thread/Thread";
import {useDispatch, useSelector} from "react-redux";
import {Button, Dropdown} from "react-bootstrap";
import './ThreadList.css'
import {useEffect} from "react";
import {getThreadList} from "../../modules/memos";


export function ThreadList({onEditSelect, onDelete, _Thread = Thread}) {

    const threadList = useSelector(state => state.threadList)
    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getThreadList());
        }, 50);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function sortThreadList(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }

    const userThreadList = threadList.filter(t => !t.invitedUser)
    const privateList = threadList.filter(t => t.invitedUser)

    return <>
        <div className={"pubHdr1"}><h1>public chat...</h1></div>
        <div className={'public_thread'}>
                <strong></strong>
                {
                    userThreadList.map((threadData, idNA) => {
                            return <div key={idNA} className={'public_thread_list'}>
                                <_Thread thread={threadData} onEditSelect={onEditSelect} onDelete={onDelete}/>
                            </div>
                        })
                }
        </div>
        <div className={"privHdr1"}><h1>private chat...</h1></div>
        <div className={'private_thread'}>
                <strong></strong>
                {
                    privateList.reverse(sortThreadList).map((threadData, idNA) => {
                            return <div key={idNA} className={'private_thread_list'}>
                                <_Thread thread={threadData} onEditSelect={onEditSelect} onDelete={onDelete}/>
                            </div>
                        })
                }
        </div>
    </>

    // <div className={'public_thread'}>
    //     <p>
    //     <strong></strong>
    //     {
    //         userThreadList.sort(sortThreadList)
    //             .map((threadData, idx) => {
    //                 return <div key={idx} className={'public_thread_list'}>
    //                     <_Thread thread={threadData} onEditSelect={onEditSelect} onDelete={onDelete}/>
    //                 </div>
    //             })
    //     }
    //     </p>
    //     <br/>
    //     <p>
    //     <strong>PRIVATE LIST:</strong>
    //     {
    //         privateList.sort(sortThreadList)
    //             .map((threadData, idx) => {
    //                 return <div key={idx} className={'private_thread_list'}>
    //                     <_Thread thread={threadData} onEditSelect={onEditSelect} onDelete={onDelete}/>
    //                 </div>
    //             })
    //     }
    //     </p>
    // </div>
}