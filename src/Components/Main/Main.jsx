import "./Main.css";
import "../../App.css";

let Main = () => {
    return (
        <div className="Main">
            <div className="container">
                <div className="Main_full">
                    <div className="Main_image">
                        <img src="./images/main.png" alt="" />
                        <div className="Main_slogan">
                            <p>Ваш дом - наша забота.</p>
                        </div>
                    </div>
                    <div className="Main_infa">
                        <h3>Строительство частных домов и коттеджей</h3>
                        <p>Строительство малоэтажных домов, коттеджей, модульных конструкций, реализация и разработка различных 
                            индивидуальных проектов - наша главная задача. Грамотный подход к делу, использование современных технологий 
                            и ответственность застройщика. Мы поможем вам в выборе участка, подборке стройматериалов и оформим полный пакет документов,
                            ведь <b>ваш дом - наша забота</b>
                        </p>
                    </div>
                    <div className="Main_special">
                        <div className="Main_special_1">
                            <img src="./images/main1.png" alt="" />
                            <p>Специальное предложение</p>
                        </div>
                        <div className="Main_special_2">
                            <img src="./images/main2.png" alt="derevo" />
                            <button>Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;