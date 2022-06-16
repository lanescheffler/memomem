import {render} from "@testing-library/react";
import {ChatAdd} from "./ChatAdd";
import {ON_CHAT_ADD, ON_THREAD_ADD} from "../../modules/memos";

test( //this is an empty test that will always pass
    '',
    () => {
    }
)

// test('should dispatch ON_CHAT_ADD onSubmit event',
//     () => {
//         const dispatch = jest.fn()
//         let _onSubmitProp;
//         const _ThreadChat = ({onSubmit}) => {
//             _onSubmitProp = onSubmit
//             return <div>MOCK</div>
//         }
//         render(<ChatAdd _useDispatch={() => dispatch} _ThreadChat={_ThreadChat}/>)
//         expect(_onSubmitProp).toHaveBeenCalledWith({
//             type: ON_CHAT_ADD
//         })
// })

// test('should pass ThreadChat to onSubmit function that dispatches ON_CHAT_ADD' +
//     '& Returns message', () => {
//
//     const dispatch = jest.fn()
//     const _ThreadChat = ({onSubmit}) => {
//         onSubmit()
//     }
//
//     render(<ChatAdd _useDispatch={() => {return dispatch}}  _ThreadInfo={_ThreadChat}/>)
//     expect(dispatch).toHaveBeenCalledWith({
//         type: ON_CHAT_ADD,
//         message: undefined
//     })
// })