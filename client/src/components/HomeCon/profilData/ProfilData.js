import React from 'react'
import {useSelector} from 'react-redux'
import UpdateForm from './UpdateForm'
import Logout from './Logout'


const ProfilData= () =>{
    const userData = useSelector((state) => state.userReducer)
    const userDataWork = useSelector((state) => state.workReducer)

    let grade = 0

    if(userDataWork.quest !== undefined && userDataWork.checkedQuest !== undefined ){
        if(userDataWork.quest.length !== 0){
            grade = (100 / userDataWork.quest.length) * userDataWork.checkedQuest.length
        }
    }



    return(
        <div className="profil">
            <Logout/>
            <div className="data-profil">
                <img src={userData.picture} alt="profil" className="profil-picture" />
                <h1 className="dynamic">{userData.username}</h1>
                <div>
                <label htmlFor="xp" className="lvlInfo">{userData.lvl} : </label><progress max="100" id="xp" className="progressbar" value={userData.xp} />
                </div>
                <div>
                <label htmlFor="objectif" className="lvlInfo">Objectif : </label><progress max="100" id="objetif" className="progressbar" value={grade} />
                </div>
                <div>
                    <p className="lvlInfo">objectif : {userDataWork.objectif}</p>
                </div>
                <UpdateForm />
            </div>
                       
        
        </div>
    )
}

export default ProfilData