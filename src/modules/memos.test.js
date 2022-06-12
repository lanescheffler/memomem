import {
    ON_LOGIN,
    ON_LOGOUT,
    ON_REGISTAR,
    ON_THREAD_ADD, ON_THREAD_DELETE, ON_THREAD_EDIT,
    ON_THREAD_RELEASE,
    ON_THREAD_SELECT_TO_EDIT,
    reducer
} from "./memos";

test( //this is an empty test that will always pass
    '',
    () => {
    }
)

test(
    'should initiate correct state',
    () => {
        const state = reducer()
        expect(state).toStrictEqual({
            userList: [],
            loggedIn: false,
            currentUser: false,
            logOut: false, //idk if i need this.

            threadList: [],
            selectedThread: null,
            selectedThreadToEdit: null,

            chatList: [],
            selectedMessageToEdit: null,
        })
    }
)

test('should add empty username to empty user list', () => {
    const iState = reducer();
    const state = reducer(iState, {type: ON_REGISTAR})
    expect(state).toStrictEqual({...iState, userList: [undefined]})
})

test('should add id, username, & password to user list', () => {
    const iState = reducer();
    const state = reducer(iState, {type: ON_REGISTAR, regInfo: {id: 1, username: 'mike', password: 'pass'}})
    expect(state).toStrictEqual({...iState, userList: [{id: 1, username: 'mike', password: 'pass'}]})
})

// test('should check for match in username & existing user', () => {
//     const iState = (reducer);
//     const state = reducer(iState, {type: ON_LOGIN})
//     expect(state).toStrictEqual({...iState, username: 'mike'})
// })

test('should logout user & return current user to null', () => {
    const iState = reducer();
    const state = reducer(iState, {type: ON_LOGOUT})
    expect(state).toStrictEqual({...iState, currentUser: null})
})

test('should add thread to thread List', () => {
    const iState = reducer();
    const state = reducer(iState, {
        type: ON_THREAD_ADD, thread: {
            id: 123,
            userCreated: 'mike',
            invitedUser: 'john',
            title: '',
            date: 123,
        }
    })
    expect(state).toStrictEqual({
        ...iState,
        threadList: [{
            id: 123,
            userCreated: 'mike',
            invitedUser: 'john',
            title: '',
            date: 123,
        }],
    })
})

test( 'should return selectedThread & selectedMessageToEdit to null', () => {
    const iState = reducer();
    const state = reducer(iState, {
        type: ON_THREAD_RELEASE, selectedThread: '123', selectedMessageToEdit: '456'
    })
    expect(state).toStrictEqual({
        ...iState,
        selectedThread: null,
        selectedMessageToEdit: null
    })
})

// test('should select a thread with a given thread ID', () => {
//     const iState = reducer();
//     const state = reducer(iState, {
//         type: ON_THREAD_SELECT_TO_EDIT,
//         thread: {id: 123, userCreated: 'mike', invitedUser: '', title: '', date: 456}
//     })
//     expect(state).toStrictEqual({
//         ...iState,
//         thread: {id: 123, userCreated: 'mike', invitedUser: '', title: '', date: 456}
//     })
// })

// test('should return either the same thread list or an updated thread list', ()=>{
//     const iState = reducer();
//     const state = reducer(iState, {
//         type: ON_THREAD_EDIT,
//         threadList: [{id: 123}],
//         thread: {
//             id: 456,
//             userCreated: 'mike',
//             invitedUser: 'john',
//             title: '',
//             date: 123,
//         }
//     })
//     expect(state).toStrictEqual({
//         ...iState,
//         threadList: [{id: 456,
//             userCreated: 'mike',
//             invitedUser: 'john',
//             title: 'dogs',
//             date: 123,}],
//         })
//     })

// test('should return new thread', () => {
//     const iState = reducer();
//     const thread = {id: 123, title: 'dogs'};
//     const threadList = [{id: 123, title: 'cats'}];
//     const state = reducer(iState, {type: ON_THREAD_EDIT, thread })
//     expect(state).toStrictEqual({
//         ...iState,
//         threadList: [{id: 123, title: 'dogs'}]
//     })
// })

// test('should remove thread from thread list', () => {
//     const iState = reducer();
//     const thread = {id: 123};
//     const threadList = [{id: 123}];
//     const state = reducer(iState, {type: ON_THREAD_DELETE, thread, threadList })
//     expect(state).toStrictEqual({
//         ...iState,
//         threadList: []
//     })
// })

// test('should delete thread off threadlist by ID match', () => {
//     const thread = {id: 123}
//     const threadList = [{id: 123}]
//     const iState = reducer(thread, {id: 123});
//     const state = reducer(iState, {
//         type: ON_THREAD_DELETE, thread
//     })
//     expect(state).toEqual(
//         expect.arrayContaining([
//             expect.objectContaining({threadList})]))
//
// })









