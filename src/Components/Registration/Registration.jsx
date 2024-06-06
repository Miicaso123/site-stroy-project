import "./Registration.css";
import "../../App.css";
import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";




let Registration = (props) => {

    const navigate = useNavigate()
    const [eyes, setEyes] = useState(false);
    const [newUser, setNewUser] = useState({
        email: null,
        password: null,
        name: null,
        surname: null,
        urlImg: null,
        country: null
    })

    let handleCreateUser = () => {
        fetch("http://localhost:8080/register", {
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
        .then(function(data) {
            props.createUser(data);
            localStorage.setItem('user', JSON.stringify({...data.user, accessToken: data.accessToken}))
            navigate("/");
        })
        .catch(function(error) {
            console.error(error);
        });
    }

    return (
        <div className="registration">
            <div className="containn">
                <form action="" className="formm">
                    <h1>Регистрация</h1>
                    <input type="text" placeholder="email" onChange={(e)=>setNewUser({...newUser, email: e.target.value})}/>
                    <input type={eyes? "text" : "password"} className="password-register" placeholder="password" onChange={(e)=>setNewUser({...newUser, password: e.target.value})}/>
                    {
                        eyes ? (
                            <span className="eye-register" onClick={()=>(setEyes(false))}><FaEye /></span>
                        )
                        :
                        (
                            <span className="eye-register" onClick={()=>(setEyes(true))}><FaEyeSlash /></span>
                        )
                    }
                    <input type="text" placeholder="Имя" onChange={(e)=>setNewUser({...newUser, name: e.target.value})}/>
                    <input type="text" placeholder="Фамилия" onChange={(e)=>setNewUser({...newUser, surname: e.target.value})}/>
                    <input type="text" placeholder="Ваша фотография" onChange={(e)=>setNewUser({...newUser, urlImg: e.target.value})}/>
                    <input type="text" placeholder="Страна" onChange={(e)=>setNewUser({...newUser, country: e.target.value})}/>
                    <button className="btnnn" type="button" onClick={handleCreateUser}>Создать аккаунт</button>
                    <Link to="/login">У меня есть аккаунт</Link>
                </form>
            </div>
           
        </div>
        
    );
};

export default Registration;