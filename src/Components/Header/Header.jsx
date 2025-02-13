import "./Header.css";
import "../../App.css";
import { NavLink, useNavigate } from "react-router-dom";




let Header = () => {

    const navigate = useNavigate()

    let currentUser = JSON.parse(localStorage.getItem('user'))

    let logOut = () => {
        localStorage.removeItem("user")
        navigate("/")
    }
    return (
        <div className="Header">
            <div className="container">
                <div className="wrapper1">
                    <div className="Header_left">
                        <img src="./images/logo.png" alt="" />
                        <div className="logo_text1">
                            <p className="subText1">строительная компания</p>
                            <h1>Славяновский <br /> Терем</h1>
                        </div>
                    </div>
                    <div className="line">

                    </div>
                    <div className="Header_right">
                        <div className="Header_right_wrapper">
                            <div className="slogan1">
                                <p>Опыт работы более 15 лет.</p>
                                <p>Строительство домов под ключ на территории Пермского края.</p>
                            </div>
                            <div className="contacts">
                                <img src="./images/vk.png" alt="" />
                                <img className="phoneLogo" src="./images/phone.png" alt="" />
                                <p>+7 902 471-07-79</p>
                                <NavLink to= "/profile"><img src="./images/profile.png" alt="no" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to = "/" className={(navData) => (navData.isActive ? "active" : "")}>Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/services">Услуги</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/projects">Проекты</NavLink>
                        </li>
                        <li>
                            <NavLink to = "/reviews">Отзывы</NavLink>
                        </li>
                        {
                            currentUser!= null ? 
                            (<li onClick={logOut}>
                                Выйти
                            </li>) : 
                            (<li onClick={()=>{navigate("/login")}} >
                                Войти
                            </li>)
                        }
                    </ul>
                </nav>
            
            </div>
            

        </div>
    );
};

export default Header;