import {render, screen} from "@testing-library/react";
import {Login} from "./Login";
import App from "../../App";
import userEvent from "@testing-library/user-event";
import {ON_LOGIN} from "../../modules/memos";

test(
    'should show a button with the text "| Login |"',
    () => {
        render(<Login _useDispatch={() => {}} _useSelector={() => {}}/>)
        const button = screen.getByText("| Login |");
        expect(button.tagName).toBe('BUTTON');
    }
)

test(
    `should show a input with placeholder "USERNAME" & "PASSWORD" and type text`,
    () => {
        // const _onSubmit = jest.fn()
        const dispatch = jest.fn()
        render(<Login _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const username = screen.getByPlaceholderText('USERNAME');
        expect(username).toHaveAttribute('type', 'username')
        const password = screen.getByPlaceholderText('PASSWORD');
        expect(password).toHaveAttribute('type', 'password')

        // userEvent.type(username, 'mike');
        // userEvent.type(password, 'pass');
        // userEvent.click(button)
        //
        // expect(_onSubmit).toHaveBeenLastCalledWith(
        //     {username: 'mike', password: 'pass'})
    }
)