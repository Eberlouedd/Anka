import React from 'react'
import axios from 'axios'
import cookie from 'js-cookie'



const Logout = () =>{

    const suppCookie = (cookiesName) =>{
        if(window !== 'undefined'){
            cookie.remove(cookiesName, {expiresIn: 1})
        }
    }

    const logout = async () =>{
        await axios({
            methode: 'get',
            url:'http://localhost:8080/user/logout',
            withCredentials: true,
        })
        .then(() => suppCookie('jwt'))
        .catch((err) => console.log(err))

        window.location = '/'
    }

    return(
        <div className="logout-image-container" onClick={logout}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/OOjs_UI_icon_logOut-ltr-invert.svg/1024px-OOjs_UI_icon_logOut-ltr-invert.svg.png" className="logout" alt="logout"/>
        </div>
    )
}

export default Logout