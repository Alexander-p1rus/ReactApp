import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";


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

    dispatch(action) {
        this._state.profileState = profileReducer(this._state.profileState, action)
        this._state.dialogsState = messageReducer(this._state.dialogsState, action)
        this._callback();
    }
}


export default store


