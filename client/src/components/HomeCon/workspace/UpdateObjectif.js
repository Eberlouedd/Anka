import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateObjectif } from '../../../action/workAction'

const UpdateObjectif = () => {
    const [update, setUpdate] = useState(false)
    const [newObjectif, setNewObject] = useState('')
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.userReducer)
    const handleObjectif = (e) => {
        e.preventDefault()
        if(newObjectif !== ''){
            dispatch(updateObjectif(newObjectif, userData._id))
        }
        setUpdate(false)
        
    }

    return(
        <div className="updateObjectif">
            {!update ? (
                <button className="workinteract" onClick={() => {setUpdate(true)}}>Update objectif</button>
            ) : (
                <form action="" onSubmit={handleObjectif}>
                    <input type="text" onChange={(e) => {setNewObject(e.target.value)}} value={newObjectif}/>
                    <input type="submit" value="valider"/>
                </form>
            )}
        </div>
    )
}

export default UpdateObjectif