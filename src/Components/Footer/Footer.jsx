import "./Footer.css";
import "../../App.css";

let Footer = () => {

    return (
        <div className="Footer">
            <div className="container">
                <div className="wrapper">
                    <div className="Footer_infa">
                        <img src="./images/logo.png" alt="" />
                        <div className="logo_text">
                            <p className="subText">строительная компания</p>
                            <h1>Славяновский <br /> Терем</h1>
                        </div>
                    </div>
                        
                    <div className="slogan">
                        <p>Опыт работы более 15 лет.</p>
                        <p>Строительство домов под ключ на территории Пермского края.</p>
                    </div>
                        
                </div>
            
            </div>
            
        </div>
    );
};

export default Footer;