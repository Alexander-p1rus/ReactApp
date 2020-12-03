const updateMessageText = 'UPDATE-MESSAGE-TEXT'
const addMessage = 'ADD-MESSAGE'

let initState={
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

const messageReducer = (state=initState, action) => {

    switch (action.type) {
        case updateMessageText:
            return{
                ...state,
                newMessageText:action.text
            }

        case addMessage:
            let message=state.newMessageText
            return {
                ...state,
                messageData:[ ...state.messageData,{id:state.messageData.length+1,message:message}],
                newMessageText:""
            }

        default:
            return state
    }
}
export const updateMessageActionCreater = (text) => {
    return {type: 'UPDATE-MESSAGE-TEXT', text: text}
}

export const addMessageActionCreater = () => {
    return {type: 'ADD-MESSAGE'}
}

export default messageReducer