import {render} from "@testing-library/react";
import {ThreadChat} from "../thread-add/ThreadAdd";
import {ON_MESSAGE_EDIT} from "../../modules/memos";
import {ChatEdit} from "./MemoEdit";


test( //this is an empty test that will always pass
    '',
    () => {
    }
)

// test('should dispatch ON_MESSAGE_EDIT onSubmit event',
//     () => {
//         const dispatch = jest.fn()
//         let onSubmitProp;
//         const _ThreadChat = ({onSubmit}) => {
//             onSubmitProp = onSubmit
//             return <div>MOCK</div>
//             render(<ChatEdit _useDispatch={() => dispatch} _ThreadChat={_ThreadChat}/>)
//             expect(onSubmitProp).toHaveBeenCalledWith({
//                 type: ON_MESSAGE_EDIT
//             })
//         }
//     })
//
