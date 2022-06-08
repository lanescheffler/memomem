import {render, screen} from "@testing-library/react";
import {Registar} from "./Registar";
import userEvent from "@testing-library/user-event";

test('should show input with type name and placeholder "username" ', () => {
    render(<Registar/>);
    const input = screen.getByPlaceholderText('username');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'username');
})

test('should show a input with type password and placeholder "password" ', () => {
    render(<Registar/>);
    const input = screen.getByPlaceholderText('password');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'password');
})

test('should show a button that has the text "Login"', () => {
    render(<Registar/>)
    const button = screen.getByText('Registar');
    expect(button.tagName).toBe('BUTTON');
})