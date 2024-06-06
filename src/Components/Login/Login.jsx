import "./Login.css";
import "../../App.css";
import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



let Login = (props) => {

    const navigate = useNavigate()
    const [eyes, setEyes] = useState(false);
    const [newUser, setNewUser] = useState({
        email: null,
        password: null,
    })

    let signIn = () => {
        debugger
        fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json();
        })
        .then((data)=>{
            localStorage.setItem('user', JSON.stringify({...data.user, accessToken: data.accessToken}))
            navigate('/')
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    return (
        <div className="login">
            <div className="contain">
                <form action="" className="form">
                    <h1>Логин</h1>
                    <input type="text" placeholder="email" onChange={(e)=>setNewUser({...newUser, email: e.target.value})}/>
                    <input type={eyes? "text" : "password"} className="password-input" placeholder="password" onChange={(e)=>setNewUser({...newUser, password: e.target.value})}/>
                    {
                        eyes ? (
                            <span className="eye-icon" onClick={()=>(setEyes(false))}><FaEye /></span>
                        )
                        :
                        (
                            <span className="eye-icon" onClick={()=>(setEyes(true))}><FaEyeSlash /></span>
                        )
                    }
                    
                    <button className="btnn" type="button" onClick={signIn} >Войти</button>
                    <Link to="/register">Зарегистрироваться</Link>
                </form>
            </div>
         
        </div>
        
    );
};

export default Login;