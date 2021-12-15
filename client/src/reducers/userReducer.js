import { GET_USER, UPDATE_USERNAME, UPLOAD_PICTURE } from "../action/userActions"

const initilState = {}

export default function userReducer(state = initilState, action){
    switch(action.type){
        case GET_USER:
            return action.payload
        case UPLOAD_PICTURE:
            return {
                ...state,
                picture: action.payload,
            }
        case UPDATE_USERNAME:
            return{
                ...state,
                username: action.payload,
            }
        default:
            return state
    }
}