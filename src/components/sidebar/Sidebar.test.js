import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {ThreadInfo} from './Sidebar'
import {ThreadAdd} from "../thread-add/ThreadAdd";
import {ON_THREAD_ADD, reducer} from "../../modules/memos";
import {Login} from "../login/Login";
// import {useState} from "@types/react";

// test(
//     'should show a button with the text "Create Thread"',
//     () => {
//         render(<ThreadInfo _useDispatch={() => {}} _useSelector={() => {}}/>)
//         const button = screen.getByText("Create Thread");
//         expect(button.tagName).toBe('BUTTON');
//     }
// )

test('should show a input with type text with placeholder "THREAD TITLE"', () => {
    render(<ThreadInfo _useDispatch={() => {}} _useSelector={() => {}}/>)

    const input = screen.getByPlaceholderText('THREAD TITLE');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
})