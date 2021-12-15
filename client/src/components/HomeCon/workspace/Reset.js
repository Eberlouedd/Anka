import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Reset = () => {

    const userData = useSelector((state) => state.userReducer)
    const handleReset = async(e) => {
        await axios({
            method: 'delete',
            url: 'http://localhost:8080/user/workspace/deleteWork/' + userData._id,
        })
        .then((res) => {
            window.location= '/'
        })
        .catch((err) => console.log(err))
    }
    return(
        <>
            <img src="‎img/reset.png" alt="reset" onClick={handleReset} title="Reset your workspace" className="reset"/>
        </>
    )
}

export default Reset