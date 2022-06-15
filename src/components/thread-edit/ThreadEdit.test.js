import {render} from "@testing-library/react";
import {ThreadAdd} from "../thread-add/ThreadAdd";
import {ON_THREAD_EDIT} from "../../modules/memos";

test( //this is an empty test that will always pass
    '',
    () => {
    }
)

// test('should dispatch ON_THREAD_EDIT onSubmit event',
//     () => {
//         const dispatch = jest.fn()
//         let onSubmitProp;
//         const _ThreadInfo = ({onSubmit}) => {
//             onSubmitProp = onSubmit;
//             return <div>MOCK</div>}
//         render(<ThreadAdd _useDispatch={() => dispatch} _ThreadInfo={_ThreadInfo}/>)
//         expect(onSubmitProp).toHaveBeenCalledWith({
//                 type: ON_THREAD_EDIT
//             })
//         })

