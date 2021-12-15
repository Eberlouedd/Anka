import React, {useContext} from 'react'
import {UidContext} from '../components/context'
import Profil from '../components/HomeCon/Profil'
import Logpage from '../components/Loghome/Logpage'


const Home = () => {
    const uid = useContext(UidContext)
    return(
        <div className="home">
        {uid ? (
            <Profil />
        ) : (
            <Logpage />
            
            )}
        </div>
        )
}
    
    export default Home