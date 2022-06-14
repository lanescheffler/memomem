import {render, screen} from "@testing-library/react";
import {Message} from "./Memo";

test( //this is an empty test that will always pass
    '',
    () => {
    }
)

test(
    'should a button with the text "EDIT"',
    () => {
        const userCreated = [{userCreated:'mike'}]
        const dispatch = jest.fn()
        render(<Message message={[{userCreated}]} _useDispatch={() => dispatch}/>)
        const button = screen.getByText("Edit")
        expect(button.tagName).toBe("BUTTON")
    }
)