import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUsername, uploadPicture } from '../../../action/userActions'


const UpadatePicture = () => {

    const [picture, setPicture] = useState()
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()
    const userData = useSelector(((state) => state.userReducer))
    const [updateSwitch, setUpdateSwitch] = useState(false)


    const handlePicture = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('_id', userData._id)
        data.append('file', picture)
        
        dispatch(uploadPicture(data, userData._id))
        if(username !== ''){
            dispatch(updateUsername(username, userData._id))
            setUsername('')
        }
        setUpdateSwitch(false)
        
    }
    
    return(
        <div>
            <div className="formulaire-edision">
                {updateSwitch ? (
                    <>
                        <form action="" onSubmit={handlePicture}  className="updateObjectifForm">
                            <input type="file"  accept=".jpg, .jpeg, .png" onChange={(e) => setPicture(e.target.files[0])}/><br/>
                            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username}/><br/>
                            <input type="submit" value="change"/>
                        </form>
                        <button className="edit-switch" onClick={() => setUpdateSwitch(false)}>Quit</button>
                    </>
                ) : ( 

                    <button className="edit-switch" onClick={() => setUpdateSwitch(true)}>Edit</button>

                )}
                    
            </div>
        </div>
    )
}

export default UpadatePicture