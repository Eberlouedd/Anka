import axios from 'axios'

export const GET_WORK = 'GET_WORK'
export const CREATE_WORKSPACE = 'CREATE_WORKSPACE'
export const ADD_QUEST = 'ADD_QUEST'
export const UPDATE_OBJECTIF = 'UPDATE_OBJECTIF'
export const DELETE_QUEST = 'DELETE_QUEST'
export const ADD_DEL_CHECKED = 'ADD_DEL_CHECKED'

export const getWork = (uid) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: 'http://localhost:8080/user/workspace/' + uid,
        })
            .then((res) => {
                dispatch({ type: GET_WORK, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}

export const defineWork = (objectif, id) => {
    console.log(objectif);
    return (dispatch) => {
        return axios({
            method: 'post',
            url: 'http://localhost:8080/user/workspace/' + id,
            data: { objectif },
        })
            .then((res) => {
                dispatch({ type: CREATE_WORKSPACE, payload: objectif })
            })
            .catch((err) => console.log(err))
    }
}

export const addQuest = (quest, id) => {
    return (dispatch) => {
        return axios({
            method: 'put',
            url: 'http://localhost:8080/user/workspace/quest/' + id,
            data: { quest }
        })
            .then((res) => {
                return axios({
                    method: 'get',
                    url: 'http://localhost:8080/user/workspace/' + id,
                })
                    .then((res) => {
                        dispatch({ type: ADD_QUEST, payload: res.data.quest })
                    })
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    }
}


export const updateObjectif = (objectif, id) => {
    return (dispatch) => {
        return axios({
            method: 'put',
            url: 'http://localhost:8080/user/workspace/updateObjectif/' + id,
            data: { objectif }
        })
            .then((res) => {
                dispatch({ type: UPDATE_OBJECTIF, payload: res.data.objectif })
            })
            .catch((err) => console.log(err))
    }
}

export const delQuest = (newQuestList, checkedId, id) => {
    return (dispatch) => {
        return axios({
            method: 'delete',
            url: 'http://localhost:8080/user/workspace/deleteQuest/' + id,
            data: { newQuestList, checkedId }
        })
            .then((res) => {
                dispatch({ type: DELETE_QUEST, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}

export const addDelChecked = (checkedId, id) => {
    return (dispatch) => {
        return axios({
            method: 'put',
            url: 'http://localhost:8080/user/workspace/checkedQuest/' + id,
            data: { checkedId }
        })
            .then((res) => {
                dispatch({ type: ADD_DEL_CHECKED, payload: res.data.checkedQuest })
            })
            .catch((err) => console.log(err))
    }
}
