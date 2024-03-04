import "./Login.css";
import "../../../App.css";
import React from "react";




let Login = () => {
    return (
        <div className="login">
            <div className="contain">
                <div className="main-box">
                    <h1>Login</h1>
                    <form action="">
                        <div className="input-box">
                            <span className="icon"> <img src="./images/env.png" /></span>
                            <input type="email" required/>
                            <label>Email</label>
                        </div>

                        <div className="input-box">
                            <span className="icon"> <img src="./images/lock.png" /></span>
                            <input type="password" required/>
                            <label>Password</label>
                        </div>

                        <div className="check">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <a href="#">Forget Password</a>
                        </div>

                        <button className="btn">Login</button>

                        <div className="register">
                            <p>Don't have an account? <a href="#" className="register-link">Sign Up!</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default Login;