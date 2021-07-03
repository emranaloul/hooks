import React, { useEffect, useState} from 'react';
import jwt from 'jsonwebtoken'; 
import superagent from 'superagent';
import cookie from 'react-cookies';

const API = 'https://auth-server-401.herokuapp.com';
const SECRET = 'supersecret';

export const AuthContext = React.createContext();


const AuthProvider = (props) =>{
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState({});


    
    const login = async (username,password) => {
        try {
            const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
            validateToken(response.body.token);
        } catch (error) {
            console.error('Login Failed',error.message);
        }
    }
    
    const validateToken = (token) => {
        try {
            const user = jwt.decode(token)
            setLoginState(!!user,token, user)
            } catch (error) {
                console.error('User is not verified', error.message);
                setLoginState(false,null,{})
            }
    }
    const setLoginState = (loggedIn, token , user) => {
        cookie.save('auth', token, user);
        setToken(token);
        setLoggedIn(loggedIn);
        setUser(user);
    }

    const logout = () => {
        setToken(null);
        setLoggedIn(false);
        setUser({});
    }

    useEffect( () => {
        const token = cookie.load('auth');
        validateToken(token)
    },[])

    const signup = async (username, email, password, role) => {
        try {
            
            let body = { username:username, email:email, password:password, role:role};

            let response = await superagent.post(`${API}/signup`).send(body)
            console.log("🚀 ~ file: auth.js ~ line 56 ~ signup ~ response", response)

        } catch (error) {
            console.error('failed signup',error.message)
        }

    }
    
    let state = {
        loggedIn: loggedIn,
        token: token,
        login: login,
        user: user,
        logout: logout,
        signup: signup
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;