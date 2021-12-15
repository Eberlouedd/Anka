import React, {useState, useEffect} from "react"
import Routes from "./components/Routes"
import {UidContext} from './components/context'
import axios from 'axios'
import { useDispatch } from "react-redux"
import {getUser} from './action/userActions'
import {getWork} from './action/workAction'

function App() {

  const [uid, setUid] = useState(null)
  const dispatch = useDispatch()
  useEffect( () =>{
    const fetchCookie = async () =>{
      await axios({
        method: 'get',
        url: 'http://localhost:8080/checkConnexion',
        withCredentials: true,
      })
      .then((res) => {
        setUid(res.data)
      })
      .catch(err => console.log('connexion refused'))
      if(uid){ 
        dispatch(getUser(uid))
        dispatch(getWork(uid))
      }
    }
    fetchCookie()
  }, [uid, dispatch])

  return (
    <UidContext.Provider value={uid}>
      <Routes/>
    </UidContext.Provider>
  );
}

export default App;
