export const ON_REGISTAR = 'memos/ON_REGISTAR';
// export const ON_LOGIN = 'memos/ON_LOGIN';
export const ON_LOGIN_REQUEST = 'memos/ON_LOGIN_REQUEST';
export const ON_LOGIN_PASSED = 'memos/ON_LOGIN_PASSED';
export const ON_LOGIN_FAILED = 'memos/ON_LOGIN_FAILED';
export const ON_LOGOUT = 'memos/ON_LOGOUT';

export const ON_THREAD_ADD = 'memos/ON_MEMO_ADD';
export const GET_THREAD_LIST = 'memos/GET_THREAD_LIST';
export const ON_THREAD_DELETE = 'memos/ON_THREAD_DELETE';
export const ON_THREAD_SELECT = 'memos/ON_THREAD_SELECT';
export const ON_THREAD_SELECT_TO_EDIT = 'memos/ON_THREAD_SELECT_TO_EDIT';
export const ON_THREAD_EDIT = 'memos/ON_THREAD_EDIT';

export const ON_THREAD_CHAT = 'memos/ON_THREAD_CHAT';
export const ON_CHAT_ADD = 'memos/ON_CHAT_ADD';
export const ON_MESSAGE_SELECT_TO_EDIT = 'memos/ON_MESSAGE_SELECT_TO_EDIT';
export const ON_MESSAGE_DELETE = 'memo/ON_MESSAGE_DELETE';
export const ON_MESSAGE_EDIT = 'memos/ON_MESSAGE_EDIT';

// export const ON_CHAT = 'memos/ON_CHAT'
export const ON_THREAD_RELEASE = 'memos/ON_THREAD_RELEASE';

const initState = {

    userList: [],//this will be stored

    loggedIn: false,
    loginPending: false,
    loginFailed: false,
    regiMessage: "",

    token: null,
    currentUser: false,
    logOut: false, //idk if i need this.

    threadList: [],//this will be stored
    selectedThread: null,
    selectedThreadToEdit: null,
    threadEditing: false,

    chatList: [],//this will be stored
    selectedMessageToEdit: null,
    messageEditing: false

}

export function reducer(state = initState, action) {
    switch (action?.type) {
        // case ON_REGISTAR:
        //     //does not allow duplicate usernames
        //     const existingUser = state.userList.find(user => user.username === action.regInfo.username)
        //     if (existingUser || action.regInfo.username === '' || action.regInfo.password === '') {
        //         alert('invalid username or password: please try again')
        //         return {...state}
        //     }
        //     // alert('successful registar')
        //     return {
        //         ...state,
        //         userList: [...state.userList, action.regInfo]
        //     }
        case ON_REGISTAR:
            // does not allow duplicate usernames
            const existingUser = state.userList.find(user => user.username === action.regInfo.username)
            if (existingUser || action.username === '' || action.password === '') {
                alert('invalid username or password: please try again')
                return {
                    ...state,
                    regiMessage: ""
                }
            }
            // alert('successful registar')
            return {
                ...state,
                userList: [...state.userList, action.regInfo],
                regiMessage: "success!!!... you may log in"
            }
        // case ON_LOGIN:
        //     const foundUser = state.userList.find(user => user.username === action.loginInfo.username && user.password === action.loginInfo.password);
        //     if (!foundUser) {
        //         alert('invalid login')
        //         return {...state}
        //     }
        //         // alert('valid login')
        //     return {
        //         ...state,
        //         currentUser: action.loginInfo.username,
        //         loggedIn: true
        //         }
        case ON_LOGIN_REQUEST:
            // if you uncomment this, this bug will happen: it wont let you sign in right after you make a user.
            // but it will eliminate the error of signing in without a username in the db. --->
            // const foundUser = state.userList.find(user => user.username === action.loginInfo.username && user.password === action.loginInfo.password);
            //     if (!foundUser) {
            //         alert('invalid login')
            //         return {...state}
            //     }
            //         alert('valid login')
            return {
                ...state,
                loginPending: true
            }

        case ON_LOGIN_PASSED:
            return {
                ...state,
                loggedIn: true,
                loginPending: false,
                loginFailed: false,
                token: action.token,
                currentUser: action.username
            }

        case ON_LOGIN_FAILED:
            return {
                ...state,
                loginPending: false,
                loginFailed: true
            }
        case ON_LOGOUT:
            return {
                ...state,
                loggedIn: false,
                currentUser: null
            }
        case GET_THREAD_LIST:
            return {
                ...state,
                threadList: action.threadList
            }
        case ON_THREAD_ADD:
            if (action.thread.title === '') {
                alert('please enter a title...')
                return {...state}
            }
            return {
                ...state,
                threadList:
                    [...state.threadList, action.thread ],
            }
        // case ON_THREAD_SELECT: //this will select a thread and chatList
        //     console.log("this is a test")
        //     return {
        //         ...state,
        //         selectedThread: null,
        //         selectedChat: null
        //     }
        case ON_THREAD_RELEASE:
            return {
                ...state,
                selectedThread: null,
                selectedMessageToEdit: null
            }
        case ON_THREAD_SELECT_TO_EDIT: // COME BACK TO THIS ONE.
            if (state.currentUser !== action.thread.userCreated){
                //if (!newUserCreated) {
                alert('you did not create this thread...')
                return {...state}
            }
            return {
                ...state,
                selectedThreadToEdit: action.thread,
                threadEditing: true
            }
        case ON_THREAD_EDIT:
            return {
                ...state,
                threadEditing: false,
                selectedThreadToEdit: null,
                // threadList: state.threadList.map((thread) => {
                //     if (action.thread.id === thread.id) {
                //         return action.thread
                //     }
                //     return thread
                // })
            }
        // case ON_THREAD_DELETE:
        //     //const newUserCreated = state.userList.find(user => user.username === action.thread.userCreated);
        //     //console.log(newUserCreated)
        //     if (state.currentUser !== action.thread.userCreated){
        //         //if (!newUserCreated) {
        //         alert('you did not create this thread...')
        //         return {...state}
        //     }
        //     // current user has to equal userCreated
        //     return {
        //         ...state,
        //         threadList: state.threadList.filter(createdThread => createdThread.id !== action.thread.id)
        //     }
        case ON_THREAD_CHAT:
            if(action.thread.invitedUser !== ''){
                if (state.currentUser !== action.thread.userCreated && state.currentUser !== action.thread.invitedUser){
                    //if (!newUserCreated) {
                    alert('this is a private chat...')
                    return {...state}
                }
            }
            return {
                //returning the selected thread as thread.
                ...state,
                selectedThread: action.thread,
                // selectedChatList: null
            }
        // case ON_CHAT:
        //     console.log(state.chatList)
        //     return {
        //         ...state,
        //         chatList: [...state.chatList, action.message],
        //     }
        case ON_CHAT_ADD:
            if (action.message.message === '') {
                alert('please enter a message...')
                return {...state}
            }
            return {
                ...state,
                chatList: [...state.chatList, action.message],
            }
        case ON_MESSAGE_SELECT_TO_EDIT:
            if (state.currentUser !== action.message.userCreated){
                //if (!newUserCreated) {
                alert('you did not create this message...')
                return {...state}
            }
            return {
                ...state,
                selectedMessageToEdit: action.message
            }
        case ON_MESSAGE_EDIT:
            return {
                ...state,
                selectedMessageToEdit: null,
                chatList: state.chatList.map((message) => {
                    if (action.message.id === message.id) {
                        return action.message
                    }
                    return message
                })
            }
        case ON_MESSAGE_DELETE:
            if (state.currentUser !== action.message.userCreated){
                //if (!newUserCreated) {
                alert('you did not create this message...')
                return {...state}
            }
            // current user has to equal userCreated!!!!
            return {
                ...state,
                chatList: state.chatList.filter(createdMessage => createdMessage.id !== action.message.id)
            }
        default:
            return {
                ...state
            }

    }
}

//REDUX FUNCTIONS

export function initiateLogin(loginInfo) {
    return async function sideEffect(dispatch, getState) {
        dispatch({type: ON_LOGIN_REQUEST}) // notify the fe code that we are waiting to see if our creds were correct

        try {
            const response = await fetch(`http://localhost:8080/login?username=${loginInfo.username}&password=${loginInfo.password}`)

            if (response.ok) {
                const username = loginInfo.username
                const token = await response.json();
                dispatch({type: ON_LOGIN_PASSED, token: token, username: username});
            }
        } catch(e) {
            dispatch({type: ON_LOGIN_FAILED})
        }
    }
}

export function initiateRegistar(regInfo) {
    return async function sideEffect(dispatch, getState) {
        try {
            const response = await fetch(`http://localhost:8080/registar?username=${regInfo.username}&password=${regInfo.password}`)
            if (response.ok) {
                const id = regInfo.id
                const username = regInfo.username
                const password = regInfo.password
                dispatch({type: ON_REGISTAR, regInfo: {id: id, username: username, password: password}});
            }
        } catch(e) {
            dispatch({type: ON_LOGIN_FAILED})
        }
    }
}

export function initiateCreateThread(thread) {
    return async function sideEffect(dispatch) {
        // dispatch({type: CREATE_THREAD})
        try {
            const response = await fetch("http://localhost:8080/createThread", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', // willing to accept
                    'Content-Type': 'application/json' //defining what we are sending
                },
                body: JSON.stringify(thread)
            })
        } catch (e) {console.log(e)}
    }
}

export function getThreadList() {
    return async function sideEffect(dispatch, getState) {
        try{
            const response = await fetch("http://localhost:8080/getThreadList")
            const thread = await response.json();
            dispatch({type : GET_THREAD_LIST, threadList: thread })
        } catch(e){}
    }
}

export function editThread(threadObj, id) {

    // new object
    // the username for the user to update
    return async function sideEffect(dispatch) {
        try {
            const response = await fetch(`http://localhost:8080/editThread/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json', // willing to accept
                    'Content-Type': 'application/json', //defining what we are sending
                    "Access-Control-Allow-Origin" : "*"
                },
                body: JSON.stringify(threadObj)
            })
            if (response.ok)
                console.log("update successful")
            else {
                console.log("update not successful")
            }
            dispatch(getThreadList())
            dispatch({type: ON_THREAD_EDIT})

        } catch(e) {
            console.log(e)
        }
    }

}

export function deletingThread(id) {
    return async function sideEffect(dispatch) {
        try {
            const response = await fetch(`http://localhost:8080/deleteThread/${id}`, {
                method: 'DELETE',
                headers: {
                    "Access-Control-Allow-Origin" : "*"
                }
            })
            if (response.ok)
                console.log("delete successful")
            else {
                console.log("delete not successful")

            }
            dispatch(getThreadList())
        } catch(e) {
            console.log(e)
        }
    }
}
















