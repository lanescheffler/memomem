import {reducer, ON_REGISTAR, ON_LOGIN} from "./memos";

test(
    'should init to correct state',
    () => {
        const state = reducer()
        expect(state).toStrictEqual({
            registar: true,
            userList: [],
            loggedIn: false,
            currentUser: false,
            logOut: false,
            sidebarThreads: ['thread1', 'thread2', 'thread3'],
            selectedThread: null
        })
    }
)

test(
    '',
    () => {})



