import {render, screen} from "@testing-library/react";
import {useDispatch} from "react-redux";
import {Login} from "../login/Login";
import {ThreadChat} from "./ThreadChat";

test( //this is an empty test that will always pass
    '',
    () => {
    }
)


// test('should show a input with type text with placeholder ""...reverseString(\'MeMoMeM\')"', () => {
//     const _useSelector = (fn) => fn({userCreated: 'mike'})
//     render(<ThreadChat _useSelector={_useSelector}/>)
//
//     const input = screen.getByPlaceholderText('"...reverseString(\'MeMoMeM\')"');
//     expect(input.tagName).toBe('INPUT');
//     expect(input).toHaveAttribute('type', 'text');
// })

// test('should show a button with text "Send."', () => {
//     const dispatch = jest.fn
//     const _useSelector = (fn) => fn({userCreated: 'mike', threadId: 123})
//     render(<ThreadChat _useSelector={_useSelector} _useDispatch={dispatch}/>)
//     const button = screen.getByText("Send.");
//     expect(button.tagName).toBe("BUTTON");
// })

test('should show a input with type text with placeholder "...reverseString(\'MeMoMeM\')"', () => {

    const dispatch = jest.fn();
    const _useSelector = (fn) => fn({selectedThread: {id: 123}, currentUser: 'mike'})
    render(<ThreadChat _useSelector={_useSelector} _useDispatch={dispatch}/>)

    const input = screen.getByPlaceholderText('...reverseString(\'MeMoMeM\')');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
})

test(
    'should show a button with the text "Send."',
    () => {
        const dispatch = jest.fn()
        const _useSelector = (fn) => fn({selectedThread: {id: 123}, currentUser: 'mike'})
        render(<ThreadChat _useSelector={_useSelector} _useDispatch={dispatch}/>)
        const button = screen.getByText("Send.");
        expect(button.tagName).toBe('BUTTON');
    }
)
