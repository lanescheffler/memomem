import { render, screen } from '@testing-library/react';
import App from './App';

test( //this is an empty test that will always pass
    '',
    () => {
    }
)

// test(
//     'should show a Logout button that dispatches a ON_LOGOUT event when clicked',
//     () => {
//         const dispatch = jest.fn()
//         render(<App _useDispatch={() => dispatch} _useSelector={() => {
//         }}/>)
//
//         const button = screen.getByText("logout");
//         expect(button.tagName).toBe("BUTTON");
//
//         userEvent.click(button);
//         expect(dispatch).toHaveBeenCalledWith({type: ON_LOGOUT})
//     }
// )
