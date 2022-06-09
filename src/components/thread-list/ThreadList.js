import {Thread} from "../thread/Thread";
import {useSelector} from "react-redux";


// list.map((memoData) => {
//     return <Memo memo={memoData}/>
// })

export function ThreadList({onEditSelect, onDelete, _Thread = Thread}) {

    const threadList = useSelector(state => state.threadList)

    function sortThreadList(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }

    const userThreadList = threadList.filter(t => !t.private)
    const privateList = threadList.filter(t => t.private)

    return <>
        <strong>THREAD LIST:</strong>
        {
            userThreadList.sort(sortThreadList)
                .map((threadData, idx) => {
                    return <div key={idx} className={'m-3'}>
                        <_Thread thread={threadData} onEditSelect={onEditSelect} onDelete={onDelete}/>
                    </div>
                })
        }
        <br/>
        {/*<strong>PRIVATE LIST:</strong>*/}
        {/*{*/}
        {/*    privateList.sort(sortThreadList)*/}
        {/*        .map((threadData, idx) => {*/}
        {/*            return <div key={idx} className={'m-3'}>*/}
        {/*                <_Thread thread={threadData} onEditSelect={onEditSelect} onDelete={onDelete}/>*/}
        {/*            </div>*/}
        {/*        })*/}
        {/*}*/}
    </>
}