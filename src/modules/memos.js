export const ON_REGISTAR = 'memos/ON_REGISTAR';
export const ON_LOGIN = 'memos/ON_LOGIN';
export const ON_LOGOUT = 'memos/ON_LOGOUT';
export const ON_THREAD_ADD = 'memos/ON_MEMO_ADD';
export const ON_THREAD_DELETE = 'memos/ON_THREAD_DELETE';
export const ON_THREAD_SELECT = 'memos/ON_THREAD_SELECT';
export const ON_THREAD_EDIT = 'memos/ON_THREAD_EDIT';
export const ON_THREAD_CHAT = 'memos/ON_THREAD_CHAT';


const initState = {

    userList: [],
    loggedIn: false,
    currentUser: false,
    userCreated: false,
    invitedUser: false,
    logOut: false, //idk if i need this.

    threadList: [], //this is the memoInput & memoList, with a list of all chats,
    selectedThread: null,//message board - shows the messages ie Memos

    memoList: [],
}

export function reducer(state = initState, action) {
    switch (action?.type) {
        case ON_REGISTAR:
            //doesnt allow duplicate usernames
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
            const foundUser = state.userList.find(
                user => user.username === action.loginInfo.username && user.password === action.loginInfo.password);
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
            const invitedUser = state.userList.find(user => user.username === action.thread.invitedUser);
            if (!invitedUser) {
                alert('invalid invite')
                return {...state}
            }
            return {
                ...state,
                threadList:
                    [...state.threadList,
                    action.thread ],
                invitedUser: action.thread.invitedUser,
                userCreated: action.thread.userCreated,
            }
        case ON_THREAD_DELETE:
            console.log(action.thread.userCreated)
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
        case ON_THREAD_SELECT:
            if (state.currentUser !== action.thread.userCreated){
                //if (!newUserCreated) {
                alert('you did not create this thread')
                return {...state}
            }
            return {
                ...state,
                selectedThread: action.thread
            }
        case ON_THREAD_EDIT:
            return {
                ...state,
                selectedThread: null,
                threadList: state.threadList.map((thread) => {
                    if (action.thread.id === thread.id) {
                        return action.thread
                    }

                    return thread
                })
            }
        case ON_THREAD_CHAT:
            console.log(action.memoList)
            console.log(action.thread.posts)
            if (state.currentUser !== action.thread.userCreated && state.currentUser !== action.thread.invitedUser){
                //if (!newUserCreated) {
                alert('this is a private chat')
                return {...state}
            }
            return {
                ...state,
                memoList: action.thread.posts
            }
        default:
            return {
                ...state
            }

    }
}