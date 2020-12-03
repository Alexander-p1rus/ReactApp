const addPost = 'ADD-POST'
const updatePostAction = 'UPDATE-POST-TEXT'

let initState = {
    postItems: [
        {postText: 'privet', likeCount: 8},
        {postText: 'kak dela', likeCount: 8},
        {postText: 'top posti', likeCount: 8}
    ],
    newPostText: ""
}

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case addPost:
            let textPost = state.newPostText
            return {
                ...state,
                postItems: [...state.postItems, {likeCount: 0, postText: textPost}],
                newPostText: ""
            }

        case updatePostAction:
            return {
                ...state,
                newPostText: action.text
            }

        default:
            return state

    }
}

export const updatePostActionCreater = (text) => {
    return {type: updatePostAction, text: text}
}

export const addPostActionCreater = () => {
    return {type: addPost}
}

export default profileReducer
