import {render, screen} from "@testing-library/react";
import {Registar} from "./Registar";
import App from "../../App";
import userEvent from "@testing-library/user-event";


test(
    'should show a button with the text "| Registar |"',
    () => {
        render(<Registar _useDispatch={() => {}} _useSelector={() => {}}/>)
        const button = screen.getByText("| Registar |");
        expect(button.tagName).toBe('BUTTON');
    }
)

test(
    `should show a input with placeholder "USERNAME" & "PASSWORD" and type text`,
    () => {
        const dispatch = jest.fn()
        render(<Registar _useDispatch={() => dispatch} _useSelector={() => {
        }}/>)

        const username = screen.getByPlaceholderText('USERNAME');
        expect(username).toHaveAttribute('type', 'username')
        const password = screen.getByPlaceholderText('PASSWORD');
        expect(password).toHaveAttribute('type', 'password')
    }
)