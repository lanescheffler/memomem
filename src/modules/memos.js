export const ON_REGISTAR = 'memos/ON_REGISTAR';
export const ON_LOGIN = 'memos/ON_LOGIN';
export const ON_LOGOUT = 'memos/ON_LOGOUT';
export const ON_THREAD_ADD = 'memos/ON_MEMO_ADD';
export const ON_THREAD_DELETE = 'memos/ON_THREAD_DELETE';
export const ON_THREAD_SELECT = 'memos/ON_THREAD_SELECT';
export const ON_THREAD_SELECT_TO_EDIT = 'memos/ON_THREAD_SELECT_TO_EDIT';
export const ON_THREAD_EDIT = 'memos/ON_THREAD_EDIT';
export const ON_THREAD_CHAT = 'memos/ON_THREAD_CHAT';
export const ON_CHAT = 'memos/ON_CHAT'
export const ON_THREAD_RELEASE = 'memos/ON_THREAD_RELEASE';

const initState = {

    userList: [],
    loggedIn: false,
    currentUser: false,
    userCreated: false,
    invitedUserList: [],
    logOut: false, //idk if i need this.

    threadList: [], //this is the memoInput & memoList, with a list of all chats,
    selectedThread: null,//message board - shows the messages ie Memos
    selectedThreadToEdit: null,
    selectedPosts: null,
    chatList: [], // this is currently one chat list. this needs to be filter out
    //to display only the selected chats, with the matched ID.
    selectedChatList: [] //specific ids, in array. dump id messages in array

}

export function reducer(state = initState, action) {
    switch (action?.type) {
        case ON_REGISTAR:
            //does not allow duplicate usernames
            const existingUser = state.userList.find(user => user.username === action.regInfo.username)
            if (existingUser) {
                alert('That username is already taken.')
                return {...state}
            }
            return {
                ...state,
                userList: [...state.userList, action.regInfo]
            }
        case ON_LOGIN:
            const foundUser = state.userList.find(user => user.username === action.loginInfo.username && user.password === action.loginInfo.password);
            if (!foundUser) {
                alert('invalid login')
                return {...state}
            }
                // alert('valid login')
            return {
                ...state,
                currentUser: action.loginInfo.username,
                loggedIn: true
                }
        case ON_LOGOUT:
            return {
                ...state,
                loggedIn: false,
                currentUser: null
            }
        case ON_THREAD_ADD:
            console.log(state.invitedUserList, 'this is the invitedUserList')
            return {
                ...state,
                threadList:
                    [...state.threadList,
                    action.thread ],
                invitedUserList: [...state.invitedUserList, action.thread.invitedUser],
                userCreated: action.thread.userCreated,
            }
        case ON_THREAD_DELETE:
            //const newUserCreated = state.userList.find(user => user.username === action.thread.userCreated);
            //console.log(newUserCreated)
            if (state.currentUser !== action.thread.userCreated){
            //if (!newUserCreated) {
                alert('you did not create this thread')
                return {...state}
            }
            // current user has to equal userCreated
            return {
                ...state,
                threadList: state.threadList.filter(cThread => cThread.id !== action.thread.id)
            }
        case ON_THREAD_SELECT: //this will select a thread and chatList
            console.log("this is a test")
            return {
                ...state,
                selectedThread: null,
                selectedChat: null
            }
        case ON_THREAD_RELEASE:
            console.log("you have released the thread")
            return {
                ...state,
                selectedThread: null,
                selectedChat: null
            }
        case ON_THREAD_SELECT_TO_EDIT:

            if (state.currentUser !== action.thread.userCreated){
                //if (!newUserCreated) {
                alert('you did not create this thread')
                return {...state}
            }
            return {
                ...state,
                selectedThreadToEdit: action.thread
            }
        case ON_THREAD_EDIT:
            return {
                ...state,
                selectedThreadToEdit: null,
                threadList: state.threadList.map((thread) => {
                    if (action.thread.id === thread.id) {
                        return action.thread
                    }

                    return thread
                })
            }
        //currently mimicking ON_SELECT_THREAD
        case ON_THREAD_CHAT:
            if(action.thread.invitedUser !== ''){
                if (state.currentUser !== action.thread.userCreated && state.currentUser !== action.thread.invitedUser){
                    //if (!newUserCreated) {
                    alert('this is a private chat')
                    return {...state}
                }
            }
            return {
                //returning the selected thread as thread.
                ...state,
                selectedThread: action.thread,
                selectedChatList: null
            }
        case ON_CHAT:
            console.log(state.chatList)
            return {
                ...state,
                chatList: [...state.chatList, action.message],
            }


        default:
            return {
                ...state
            }

    }
}