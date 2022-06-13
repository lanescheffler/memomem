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


test(
    '',
    () => {
    }
)

//this would pass without selector
test('should show a input with type text with placeholder "THREAD TITLE"', () => {
    const _useSelector = (fn) => fn({userCreated: 'mike'})
    render(<ThreadInfo _useSelector={_useSelector}/>)

    const input = screen.getByPlaceholderText('THREAD TITLE');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
})

test('should show a input with type text with placeholder "INVITE USER"', () => {
    const _useSelector = (fn) => fn({userCreated: 'mike'})
    render(<ThreadInfo _useSelector={_useSelector}/>)

    const input = screen.getByPlaceholderText('INVITE USER');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
})

test('should show a button with text "Create Thread"', () => {
    const _useSelector = (fn) => fn({userCreated: 'mike'})
    render(<ThreadInfo _useSelector={_useSelector}/>)
    const button = screen.getByText("Create Thread");
    expect(button.tagName).toBe("BUTTON");
})

