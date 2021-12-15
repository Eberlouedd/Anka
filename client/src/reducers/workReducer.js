import {ADD_QUEST, GET_WORK, CREATE_WORKSPACE, UPDATE_OBJECTIF, DELETE_QUEST, ADD_DEL_CHECKED } from "../action/workAction"


const initialState = {}

export default function workReducer(state = initialState, action){
    switch(action.type){
        case GET_WORK:
            return action.payload

        case CREATE_WORKSPACE:
            return{
                ...state,
                objectif: action.payload,
                quest: [],
                checkedQuest: [] 
            }
        case ADD_QUEST:
            return{
                ...state,
                quest: action.payload
            }
        case UPDATE_OBJECTIF:
            return{
                ...state,
                objectif: action.payload
            }
        case DELETE_QUEST:
            return{
                ...state,
                quest: action.payload.quest,
                checkedQuest: action.payload.checkedQuest
            }
        case ADD_DEL_CHECKED:
            return{
                ...state,
                checkedQuest: action.payload
            }
        default:
            return state
    }
}