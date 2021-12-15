import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addDelChecked, addQuest, defineWork, delQuest} from '../../../action/workAction'
import UpdateObjectif from './UpdateObjectif'
import Reset from './Reset'
import axios from 'axios'

const Workspace = () =>{

    const [questForm, setQuestForm] = useState(false)
    const [objectif, setObjectif] = useState('')
    const [quest, setQuest] = useState('')
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.userReducer)
    const userDataWork = useSelector((state) => state.workReducer)
     
       
    const handleWork = (e) => {
        e.preventDefault()
        if(objectif === ''){
            console.log('non')
        }else{
            
            dispatch(defineWork(objectif, userData._id))
        }

    }

    const handleQuest = (e) => {
        e.preventDefault()
        if(quest === ''){
            setQuestForm(false)
        }else{
            if(userDataWork.quest.length <= 19){
                dispatch(addQuest(quest, userData._id))
                setQuest('')
            }else{
                document.querySelector('.errorQuest').innerHTML = 'tu ne peux stoquer que 20 quêtes'
            }
        }
    }

    const handleDelQuest = (e) => {
        let newQuestList = userDataWork.quest
        newQuestList.splice(e, 1)
        dispatch(delQuest(newQuestList, e, userData._id))
    }

    const handleCheck = async (e) => {
            dispatch(addDelChecked(e, userData._id))
            if(userDataWork.checkedQuest.length === userDataWork.quest.length - 1){
                alert('Bravo !')
                await axios({
                    method: 'put',
                    url: 'http://localhost:8080/user/update/xp/' + userData._id,
                    data: {
                        lvl: userData.lvl,
                        nbQuest: userDataWork.quest.length,
                        xp: userData.xp
                    }
                })
                await axios({
                    method: 'delete',
                    url: 'http://localhost:8080/user/workspace/deleteWork/' + userData._id,
                })
                .then((res) => {
                    window.location= '/'
                })
                .catch((err) => console.log(err))
                
            }
    }
    return(
        <div className="workspace">
            <div className="quest-space">
            <h1 className="titlework">Quest list</h1>
                { userDataWork.objectif === undefined && 
                    
                    <form action="" onSubmit={handleWork} className="formobjectif">
                        <label className="titlepostob">Choose your objectif : </label><br />
                        <input type="text" className="objectif-post" onChange={(e) => {setObjectif(e.target.value)}} value={objectif}/><br/>
                        <input type="submit" value="valider" className="subobjectif"/>
                    </form>
                }
                { userDataWork.objectif !== undefined && questForm === false && userDataWork.quest !== undefined &&
                    <>
                        <Reset />
                        <UpdateObjectif />
                        
                        <div>{ 
                            userDataWork.quest.map((questEnum, key) => {
                                if(userDataWork.checkedQuest.includes(key)){
                                    return <div key={key} className="questList">
                                                <button onClick={handleDelQuest.bind(this, key)} className="delquest">
                                                    <span className="delquesticone"></span>
                                                    <span className="delquesticone"></span>
                                                </button>
                                                <input id={key} type="checkbox" onChange={handleCheck.bind(this, key)} defaultChecked={true}/>
                                                <label htmlFor={key}>{questEnum}</label>
                                            </div>
                                }else{
                                    return <div key={key} className="questList">
                                                <button onClick={handleDelQuest.bind(this, key)} className="delquest">
                                                    <span className="delquesticone"></span>
                                                    <span className="delquesticone"></span>
                                                </button>
                                                <input id={key} type="checkbox" onChange={handleCheck.bind(this, key)}/>
                                                <label htmlFor={key}>{questEnum}</label>
                                            </div>
                                }
                            })      
                        }
                        </div>
                        <button className="workinteract" onClick={() => {setQuestForm(true)}}>add quest</button>
                        
                    </>
                        
                }
                { userDataWork.objectif !== undefined && questForm && userDataWork.quest !== undefined &&
                    <>
                        <Reset />
                        <UpdateObjectif />
                       
                        <div>{  
                            
                            userDataWork.quest.map((questEnum, key) => {
                                if(userDataWork.checkedQuest.includes(key)){
                                    return <div key={key}><button onClick={handleDelQuest.bind(this, key)}>croix</button><input id={key} type="checkbox" defaultChecked={true}/><label htmlFor={key}>{questEnum}</label></div>
                                }else{
                                    return <div key={key}><button onClick={handleDelQuest.bind(this, key)}>croix</button><input id={key} type="checkbox"/><label htmlFor={key}>{questEnum}</label></div>
                                }
                            })                 
                        }
                        <div className="errorQuest"></div>
                        </div>
                        <form action="" onSubmit={handleQuest} className="questForm">
                            <input type="text" onChange={(e) => {setQuest(e.target.value)}} value={quest} />
                            <input type="submit" value="Ajouter" className="workinteract"/> 
                        </form>
                    </>
                }
                
            </div>
        </div>
    )
}

export default Workspace