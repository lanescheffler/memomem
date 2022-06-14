import {render} from "@testing-library/react";
import {ChatAdd} from "../thread-add/ThreadAdd";
import {ON_CHAT_ADD} from "../../modules/memos";

test( //this is an empty test that will always pass
    '',
    () => {
    }
)

test('should dispatch ON_CHAT_ADD onSubmit event',
    () => {
        const dispatch = jest.fn()
        let onSubmitProp;
        const _ThreadChat = ({onSubmit}) => {
            onSubmitProp = onSubmit
            return <div>MOCK</div>
            render(<ChatAdd _useDispatch={() => dispatch} _ThreadChat={_ThreadChat}/>)
            expect(onSubmitProp).toHaveBeenCalledWith({
                type: ON_CHAT_ADD
            })
        }
    })