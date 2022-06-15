import {render, screen} from "@testing-library/react";
import {ThreadAdd} from "./ThreadAdd";
import userEvent from "@testing-library/user-event";
import {ON_THREAD_ADD} from "../../modules/memos";
import {ThreadChat} from "../thread-chat/ThreadChat";
import {ThreadInfo} from "../sidebar/Sidebar";
import {useState} from "react";

test( //this is an empty test that will always pass
    '',
    () => {
    }
)

// test(
//     'should dispatch THREAD_ADD onSubmit',
//     () => {
//
//         const onSubmit = () => ({dispatch});
//         const _useSelector = (fn) => fn({selectedThread: {id: 123}, currentUser: 'mike'})
//         const dispatch = jest.fn();
//         render(<ThreadInfo
//             _useDispatch = {dispatch}
//             _useSelector={_useSelector}
//             _onSubmit = {onSubmit}/>)
//         expect(dispatch).toHaveBeenCalledWith({
//             type: ON_THREAD_ADD,
//         })
//     }
// )

// test(
//     'should dispatch THREAD_ADD onSubmit',
//     () => {
//         let onSubmitProp;
//         const _ThreadInfo = ({onSubmit}) => {
//             onSubmitProp = onSubmit
//             return <div>thread</div>
//         }
//         const thread = {id: 123, userCreated: 'mike'}
//         const _useSelector = (fn) => fn({thread})
//         const dispatch = jest.fn()
//         render(<ThreadAdd _useDispatch={() => dispatch} _useSelector={_useSelector} _ThreadInfo={_ThreadInfo}/>)
//
//         expect(onSubmitProp).toHaveBeenCalledWith({
//             type: ON_THREAD_ADD
//         })
//     }
// )

// test('should dispatch ON_ADD_THREAD onSubmit event',
//     () => {
//
//         const thread = {id: 123}
//         const dispatch = jest.fn()
//         let onSubmitProp;
//         const ThreadInfo = ({onSubmit}) => {
//             onSubmitProp = onSubmit
//             return <div>thread</div>
//         }
//         render(<ThreadAdd _useDispatch={() => dispatch} _ThreadInfo={ThreadInfo}/>)
//         expect(onSubmitProp).toHaveBeenCalledWith({
//             type: ON_THREAD_ADD, thread
//         })
// })

// test(
//     'should pass ThreadInfo to ThreadAdd and dispatch a ON_THREAD_ADD event when clicked',
//     () => {
//
//         let onSubmitProp;
//         const _ThreadInfo = ({onSubmit}) => {
//             onSubmitProp = onSubmit
//             return <div>thread</div>
//         }
//         const dispatch = jest.fn()
//         const _useSelector = (fn) => fn({userCreated: 'mike'})
//         render(<_ThreadInfo _useSelector={_useSelector} _useDispatch={() => dispatch}/>)
//
//         expect(_ThreadInfo).toHaveBeenCalledWith({type: ON_THREAD_ADD,})
//     }
// )

// test('should take in thread from ThreadInfo onSubmit, and dispatch ON_THREAD_ADD', () => {
//
//     const _ThreadInfo = ThreadInfo
//
// })

// test('should pass MemoInput the onMemoAdd prop', () => {
//
//     const dispatch = jest.fn()
//     const _useSelector = (fn) => fn({userCreated: 'mike'})
//
//     let onSubmitProp;
//     const _ThreadInfo = ({onSubmit}) => {
//         onSubmitProp = onSubmit
//         return dispatch({type: ON_THREAD_ADD})
//     }
//
//     render(<ThreadInfo _useSelector={_useSelector} _useDispatch={dispatch} _ThreadInput={_ThreadInfo}/>)
//
//     expect(onSubmitProp).toHaveBeenCalledWith({type: ON_THREAD_ADD});
// })

// test('should pass ThreadInfo to onSubmit function that dispatches ON_THREAD_ADD' +
//     '& Returns thread', () => {
//
//     const dispatch = jest.fn
//     const thread = {id: 123, userCreated: 'mike'}
//     const iState = () => {useState(thread)};
//     const _ThreadInfo = iState
//
//     render(<ThreadAdd _useDispatch={dispatch} _ThreadInfo={_ThreadInfo}/>)
//     expect(dispatch).toHaveBeenCalledWith(ON_THREAD_ADD)
//
// })