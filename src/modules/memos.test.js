import {
    ON_CHAT_ADD,
    ON_LOGIN,
    ON_LOGOUT, ON_MESSAGE_DELETE, ON_MESSAGE_EDIT, ON_MESSAGE_SELECT_TO_EDIT,
    ON_REGISTAR,
    ON_THREAD_ADD, ON_THREAD_CHAT, ON_THREAD_DELETE, ON_THREAD_EDIT,
    ON_THREAD_RELEASE,
    ON_THREAD_SELECT_TO_EDIT,
    reducer
} from "./memos";
import {useState} from "react";

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

// test('should add empty username to empty user list', () => {
//     const iState = reducer();
//     const state = reducer(iState, {type: ON_REGISTAR})
//     expect(state).toStrictEqual({...iState, userList: [undefined]})
// })

test('should add id, username, & password to user list', () => {
    const iState = reducer();
    const state = reducer(iState, {type: ON_REGISTAR, regInfo: {id: 1, username: 'mike', password: 'pass'}})
    expect(state).toStrictEqual({...iState, userList: [{id: 1, username: 'mike', password: 'pass'}]})
})

// test('should set current user to login Info username', () => {
//     const userList = [{username: 'mike'}]
//     const logInfo = 'mike'
//     const iState = () => {useState(userList)};
//     const state = reducer(iState, {type: ON_LOGIN, logInfo})
//     expect(state).toStrictEqual({...iState, currentUser: ['mike']})
// })

// this test works without find.
test('should set current user to login Info username and logged in to true', () => {
    const loginInfo = {username: 'mike'};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const iState = () => {useState(loginInfo)};
    const state = reducer(iState, {
        type: ON_LOGIN, loginInfo})
    expect(state).toStrictEqual({
        currentUser: 'mike',
        loggedIn: true
    })
})

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
            title: 'hello',
            date: 123,
        }
    })
    expect(state).toStrictEqual({
        ...iState,
        threadList: [{
            id: 123,
            userCreated: 'mike',
            invitedUser: 'john',
            title: 'hello',
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
});

// Seperate formState to test state - all tests selectedThread = null.

test('should select a thread to edit with a given thread ID and return to state', () => {
    const thread = [{id: 123}];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const iState = () => {useState(thread)};
    const state = reducer(iState, {
        type: ON_THREAD_SELECT_TO_EDIT, thread})
    expect(state).toStrictEqual({
        selectedThreadToEdit: [{id: 123}]
    })
})

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

test('should return the thread if no edit is made', () => {
    const threadList = [{id: 123}];
    const thread = [{id: 123}];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const iState = () => {useState(threadList.map((thread) => {
        if (thread.id === thread.id) {
            return thread
        } return threadList}))}
    const state = reducer(iState, {
        type: ON_THREAD_EDIT, thread})
    expect(state).toStrictEqual({
        chatList: [{id: 123}]
    })
})

test('should filter out thread list where created thread is being passed', () => {
    const threadList = [{id: 123}];
    const thread = [{id: 123}];
    const iState = () => {useState(threadList)};
    const state = reducer(iState, {
        type: ON_THREAD_DELETE, thread})
    expect(state).toStrictEqual({
        threadList: []
    })
})

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

// const threadList = [{id: 123}];
//
// test('should delete thread off threadlist by ID match', () => {
//     const thread = {id: 123}
//     const iState = reducer(thread, {id: 123});
//     const state = reducer(iState, {
//         type: ON_THREAD_DELETE, thread
//     })
//     expect(state).toEqual(
//         expect.arrayContaining([
//             expect.objectContaining({threadList})]))
//
// })


test('should select a thread and return selected thread to state', () => {
    const thread = [{id: 123}];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const iState = () => {useState(thread)};
    const state = reducer(iState, {type: ON_THREAD_CHAT, thread })
    expect(state).toStrictEqual({
        selectedThread: [{id: 123}]
    })
})

test('should add chat to chat List', () => {
    const iState = reducer();
    const state = reducer(iState, {
        type: ON_CHAT_ADD, message: {
            id: 123,
            threadId: 456,
            message: 'hello',
            date: 789,
            userCreated: 'mike'
        }
    })
    expect(state).toStrictEqual({
        ...iState,
        chatList: [{
            id: 123,
            threadId: 456,
            message: 'hello',
            date: 789,
            userCreated: 'mike'
        }],
    })
})

test('should select a message to edit with a given thread ID and return to state', () => {
    const message = [{id: 123}];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const iState = () => {useState(message)};
    const state = reducer(iState, {
        type: ON_MESSAGE_SELECT_TO_EDIT, message})
    expect(state).toStrictEqual({
        selectedMessageToEdit: [{id: 123}]
    })
})

test('should return the message if no edit is made', () => {
    const chatList = [{id: 123}];
    const message = [{id: 123}];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const iState = () => {useState(chatList.map((message) => {
        if (message.id === message.id) {
            return message
        } return chatList}))}
    const state = reducer(iState, {
        type: ON_MESSAGE_EDIT, message})
    expect(state).toStrictEqual({
        chatList: [{id: 123}]
    })
})

test('should filter out chat list where created message is being passed', () => {
    const chatList = [{id: 123, userCreated: 'mike'}];
    const message = {id: 123, userCreated: 'mike'};
    const iState = () => {useState(message)};
    const state = reducer(iState, {
        type: ON_MESSAGE_DELETE, chatList})
    expect(state).toStrictEqual({
        chatList: []
    })
})


