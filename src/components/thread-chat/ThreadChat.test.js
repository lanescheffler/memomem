import {render, screen} from "@testing-library/react";
import {ThreadChat, ThreadInfo} from "../sidebar/Sidebar";

test( //this is an empty test that will always pass
    '',
    () => {
    }
)


test('should show a input with type text with placeholder ""...reverseString(\'MeMoMeM\')"', () => {
    const _useSelector = (fn) => fn({userCreated: 'mike'})
    render(<ThreadChat _useSelector={_useSelector}/>)

    const input = screen.getByPlaceholderText('"...reverseString(\'MeMoMeM\')"');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
})

test('should show a button with text "Create Thread"', () => {
    const _useSelector = (fn) => fn({userCreated: 'mike'})
    render(<ThreadChat _useSelector={_useSelector}/>)
    const button = screen.getByText("Send.");
    expect(button.tagName).toBe("BUTTON");
})
