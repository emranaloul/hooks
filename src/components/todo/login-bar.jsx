import React, { useEffect, useState, useContext} from 'react';
import If from './if';
import './login.scss';
import { AuthContext} from '../../context/auth'


const LoginBar = props => {
    const context =  useContext(AuthContext);
    
    const [signup, setSignup] = useState(false)
    let state = { 
        signup : signup,
    }
    const handlerSignup = ()=>{
        setSignup(state.signup === false? true : false) 
    }

    const loginHandler  = e => {
        e.preventDefault()
        context.login(e.target.username.value, e.target.password.value)
    }

    const signupHandler = (e)=>{
        e.preventDefault()
        context.signup(e.target.username.value,e.target.email.value ,e.target.password.value, e.target.role.value)
        handlerSignup()
    }
    return(
        <>
        <div id="loginbar">

        <h2>TODO</h2>
        <If condition={!context.loggedIn}>
        <form id='loginForm' onSubmit={ (e)=> loginHandler(e)}>
            <input type='text' id='username' placeholder='username'></input>
            <input type='password' id='password' placeholder='password'></input>
            <button type='submit'>Login</button>

        </form>
        </If>
        <If condition={!context.loggedIn}>

        <button type='Click' onClick= {handlerSignup}>Signup</button>
        </If>

        <If condition={context.loggedIn}>
        <button type='Click' onClick={context.logout}>logout</button>
        </If>
        </div>
        <div id='signupspace'>
        <If condition={signup}>

        <form id='signup' onSubmit={(e)=> signupHandler(e)}>
            <fieldset>
                <legend>Sign-Up</legend>
            <input type='text' name='username' id='username' placeholder='username'></input><br></br>
            <input type='text' name='email' id='email' placeholder='email'></input><br></br>
            <input type='password' name='password' id='password' placeholder='password'></input><br></br>
            <select name='role'>
                <option value='user'>user</option>
                <option value='editor'>editor</option>
                <option value='writer'>writer</option>
                <option value='admin'>admin</option>
            </select>
            <button id='signupBtn'>Signup</button>

            </fieldset>
        </form>
        </If>
</div>

    
        </>
    )
}

export default LoginBar