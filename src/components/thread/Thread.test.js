import {render, screen} from "@testing-library/react";
import {Thread} from "./Thread";
import {Login} from "../login/Login";
import {ThreadInfo} from "../sidebar/Sidebar";

// test(
//     'should a button with the text "Edit"',
//     () => {
//         render(<Thread thread={{}}/>)
//         const button = screen.getByText("|Edit|")
//         expect(button.tagName).toBe("BUTTON")
//     }
// )
//
// test(
//     'should show a button with the text "|Edit|"',
//     () => {
//         render(<Thread/>)
//         const button = screen.getByText("|Edit|");
//         expect(button.tagName).toBe('BUTTON');
//     }
// )

test( //this is an empty test that will always pass
    '',
    () => {
    }
)

test(
    'should a button with the text "|Chat|"',
    () => {
        const dispatch = jest.fn()
        render(<Thread thread={{}} _useDispatch={() => dispatch}/>)
        const button = screen.getByText("|Chat|")
        expect(button.tagName).toBe("BUTTON")
    }
)

test(
    'should a button with the text "|Edit|"',
    () => {
        const dispatch = jest.fn()
        render(<Thread thread={{}} _useDispatch={() => dispatch}/>)
        const button = screen.getByText("|Edit|")
        expect(button.tagName).toBe("BUTTON")
    }
)

// test('should show a button with text "Create Thread"', () => {
//     const _useSelector = (fn) => fn({userCreated: 'mike'})
//     render(<ThreadInfo _useSelector={_useSelector}/>)
//     const button = screen.getByText("Create Thread");
//     expect(button.tagName).toBe("BUTTON");
// })
