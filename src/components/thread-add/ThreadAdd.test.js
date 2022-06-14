import {render, screen} from "@testing-library/react";
import {ThreadAdd} from "./ThreadAdd";
import userEvent from "@testing-library/user-event";
import {ON_THREAD_ADD} from "../../modules/memos";
import {ThreadChat} from "../thread-chat/ThreadChat";
import {ThreadInfo} from "../sidebar/Sidebar";

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
//
//         const thread = {id: 123, userCreated: 'mike'}
//         const _useSelector = (fn) => fn({thread})
//         const dispatch = jest.fn()
//         render(<ThreadAdd _useDispatch={() => dispatch} _useSelector={_useSelector}/>)
//         const button = screen.getByText("Creat Thread");
//         userEvent.click(button)
//
//         expect(dispatch).toHaveBeenCalledWith({
//             type: ON_THREAD_ADD
//         })
//     }
// )

test('should dispatch ON_ADD_THREAD onSubmit event',
    () => {
        const dispatch = jest.fn()
        let onSubmitProp;
        const _ThreadInfo = ({onSubmit}) => {
            onSubmitProp = onSubmit
            return <div>MOCK</div>
            render(<ThreadAdd _useDispatch={() => dispatch} _ThreadInfo={_ThreadInfo}/>)
            expect(onSubmitProp).toHaveBeenCalledWith({
                type: ON_THREAD_ADD
            })
        }
    })