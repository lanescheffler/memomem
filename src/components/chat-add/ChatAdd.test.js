import {render} from "@testing-library/react";
import {ChatAdd} from "./ChatAdd";
import {ON_CHAT_ADD} from "../../modules/memos";

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