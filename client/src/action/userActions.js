import axios from 'axios'

export const GET_USER = 'GET_USER'
export const UPLOAD_PICTURE = 'UPLOAD_PICTURE'
export const UPDATE_USERNAME = 'UPDATE_USERNAME'


export const getUser = (uid) =>{
    return(dispatch) => {
        return axios
            .get('http://localhost:8080/user/' + uid)
            .then((res) => {
                dispatch({type: GET_USER, payload: res.data})
            })
            .catch((err) => console.log(err))
    }
}

export const uploadPicture = (data, id) => {
    return(dispatch) => {
        return axios
            .post('http://localhost:8080/user/update/updateProfilPicture', data)
            .then(res => {
                return axios
                    .get('http://localhost:8080/user/' + id)
                    .then((res) => {
                        dispatch({type: UPLOAD_PICTURE, payload: res.data.picture})
                    })
                
            })
            .catch((err) => console.log(err))
    }
}

export const updateUsername = (newUsername, id) => {
    return(dispatch) => {
        return axios({
            method: 'put',
            url: 'http://localhost:8080/user/update/' + id,
            data: { newUsername },
        })
        .then((res) => {
            dispatch({type: UPDATE_USERNAME, payload: newUsername})
        })
        .catch((err) => console.log(err))
    }
}

