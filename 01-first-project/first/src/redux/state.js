const addPost = 'ADD-POST'
const updatePostAction = 'UPDATE-POST-TEXT'
const updateMessageText = 'UPDATE-MESSAGE-TEXT'
const addMessage = 'ADD-MESSAGE'

let store = {
    _state: {
        profileState: {
            postItems: [
                {postText: 'privet', likeCount: 8},
                {postText: 'kak dela', likeCount: 8},
                {postText: 'top posti', likeCount: 8}
            ],
            newPostText: ""
        },

        dialogsState: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Sasha',
                    avatar: "https://www.nivasposad.ru/school/homepages/all_kurs/konkurs2013/web-pages/web/zubarev_ilja/images/pirates/mugivari/luffy/do.png"
                },
                {
                    id: 2,
                    name: 'Anya',
                    avatar: 'https://pm1.narvii.com/6530/8d2724911a6d29adcbca20a60f7b910bc7899741_hq.jpg'
                },
                {
                    id: 3,
                    name: 'Ilya',
                    avatar: 'https://purmix.ru/images/uroki/karand/anime/kak_narisovat_monki_d_luffi_iz_One_Piece_pojetapno.jpg'
                }
            ],
            messageData: [
                {id: 1, message: 'hello mujiki'},
                {id: 2, message: 'Kak dela'},
                {id: 3, message: '4to novogo'}
            ],
            newMessageText: ""

        }

    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callback = observer;
    },

    _callback() {
        console.log(1)
    },

    updatePostText(text) {
        this._state.profileState.newPostText = text
        this._callback();
    },

    addPost() {

        let Data = {
            postText: this._state.profileState.newPostText,
            likeCount: 0
        }

        this._state.profileState.postItems.push(Data)
        this._callback();
        this._state.profileState.newPostText = ''

    },

    dispatch(action) {
        if (action.type == addPost) {
            let Data = {
                postText: this._state.profileState.newPostText,
                likeCount: 0
            }

            this._state.profileState.postItems.push(Data)
            this._callback();
            this._state.profileState.newPostText = ''

        } else if (action.type == updatePostAction) {
            this._state.profileState.newPostText = action.text
            this._callback();
        } else if (action.type == updateMessageText) {
            this._state.dialogsState.newMessageText = action.text
            this._callback()
        } else if (action.type == addMessage) {
            let Data = {
                id: this._state.dialogsState.messageData.length + 1,
                message: this._state.dialogsState.newMessageText
            }

            this._state.dialogsState.messageData.push(Data)
            this._state.dialogsState.newMessageText = ''
            this._callback();
        }
    }


}

export const updateMessageActionCreater =(text)=>{
    return {type:'UPDATE-MESSAGE-TEXT',text:text}
}

export const addMessageActionCreater=()=>{
    return {type:'ADD-MESSAGE'}
}

export const updatePostActionCreater = (text) => {
    return {type: updatePostAction, text: text}
}

export const addPostActionCreater = () => {
    return {type: addPost}
}

export default store


