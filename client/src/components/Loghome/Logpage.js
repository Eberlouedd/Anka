import React, {useState} from 'react'
import {signin, signup, closeSignin, start, closeSignup, signinToUp}  from '../../style/Animjs/animation'
import axios from 'axios'
start()
const Logpage = () =>{
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [controlPass, setControlPass] = useState('')
    const [birthday, setBirthday] = useState('')
    const [gender, setGender] = useState('')

    const mailerror = document.querySelector('.mailwarning')
    const passworderror = document.querySelector('.passwordwarning')
    const passerror = document.querySelector('.passerror')
    const controlpasserror = document.querySelector('.controlpasserror')
    const usererror = document.querySelector('.usererror')
    const emailerror = document.querySelector('.emailerror')
    const birthdayerror = document.querySelector('.birthdayerror')
    const gendererror = document.querySelector('.gendererror')

        const handleLogin = (e) =>{
            e.preventDefault()
            axios({
                method: 'post',
                url: 'http://localhost:8080/user/signin',
                withCredentials: true,
                data: {
                    mail, 
                    password,
                },
            })
            .then((res) =>{
                  if(res.data.mailerr || res.data.passworderr){
                      mailerror.innerHTML = res.data.mailerr
                      passworderror.innerHTML = res.data.passworderr
                  }else{
                      window.location = '/'
                  }
              })
              .catch((err) =>{
                  console.log(err)
              })
        }

        const handleRegiste = async (e) =>{
            e.preventDefault()

            if(pass !== controlPass){
                controlpasserror.innerHTML = 'les mots de passe ne correspondent pas'
            }else{
                await axios({
                    method: 'post',
                    url: 'http://localhost:8080/user/signup',
                    data: {
                        username,
                        email,
                        pass,
                        birthday,
                        gender,
                    },
                })
                .then((res) => {
                    console.log('oui ' + res.data)
                    if(!res.data.message){
                        console.log(res.data)
                        usererror.innerHTML = res.data.username
                        passerror.innerHTML = res.data.password
                        emailerror.innerHTML = res.data.mail
                        birthdayerror.innerHTML = res.data.birthday
                        gendererror.innerHTML = res.data.gender

                    }else{
                        
                        usererror.innerHTML = ''
                        passerror.innerHTML = ''
                        emailerror.innerHTML = ''
                        birthdayerror.innerHTML = ''
                        gendererror.innerHTML = ''
                       
                    }
                    console.log('enregisté')
                })
                .catch(err => console.log('oui'))
            }

        }

    return(
        <div className="container">
            <div className="title">
            <h1 className="welcom"><span>Welcome</span> <span>to</span> <span>Anka</span></h1>
            </div>
            <div className="button">
            <button className="signin buttonsign" onClick= {signin}>Sign in</button>
            <button className="signup buttonsign" onClick= {signup}>Sign up</button>
            </div>
            
            
            <div id="overlayIn">
            <div className="in">
            <div className="closein" onClick={closeSignin}>
            <span className="closebutton"></span>
                            <span className="closebutton"></span>
                            </div>
                            <h1 className="connin">Sign in</h1>
                            <form className="formin" onSubmit={handleLogin} autoComplete="on">
                            <input className="pseudo" type="text" name="mail" placeholder="Username" onChange={(e) => setMail(e.target.value)} value= {mail}/>
                            <div className="mailwarning"></div>
                            <input className="password" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            <div className="passwordwarning"></div>
                            <input className="subin" type="submit" value="Connexion"/>
                            
                            </form>
                        <p className="notmember">Not a member ? <span className="url" onClick={signinToUp}>Signup</span></p>
                        </div>
                        <div className="up">
                    <div className="closeup" onClick={closeSignup}>
                        <span className="closebutton"></span>
                        <span className="closebutton"></span>
                    </div>
                    <h1 className="connup">Sign up</h1>
                    <form className="formup" action="" onSubmit={handleRegiste} name="Inscription" target="" autoComplete="on">
                        <input className="username" type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username"/>
                        <div className="usererror"></div>
                        <input className="mail" type="email" name="mail" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email"/>
                        <div className="emailerror"></div>
                        <input className="mdp" type="password" name="password" onChange={(e) => setPass(e.target.value)} value={pass} placeholder="Password"/>
                        <div className="passerror"></div>
                        <input className="mdpc" type="password" onChange={(e) => setControlPass(e.target.value)} value={controlPass} placeholder="Confirm password"/>
                        <div className="controlpasserror"></div>
                        <input className="date" type="date" name="birthday" onChange={(e) => setBirthday(e.target.value)} value={birthday} placeholder="birthday"/>
                        <div className="birthdayerror"></div>
                        <div className="genre">
                            <input id="homme" type="radio" name="gender" onChange={(e) => setGender(e.target.value)} value="man"/><label htmlFor="homme" className="genderinf">Man</label>
                            <input id="femme" type="radio" name="gender" onChange={(e) => setGender(e.target.value)} value="woman"/><label htmlFor="femme" className="genderinf">Woman</label>
                            <input id="autre" type="radio" name="gender" onChange={(e) => setGender(e.target.value)} value="other"/><label htmlFor="autre" className="genderinf">Other</label>
                        </div>
                        <div className="gendererror"></div>
                        <input className="subup" type="submit" value="Register"/>
                    </form>
                </div>
            </div>
            </div>
    )
}

export default Logpage