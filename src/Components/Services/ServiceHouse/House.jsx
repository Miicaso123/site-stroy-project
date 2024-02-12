import "../Services.css";
import "../../../App.css";

let House = (props) => {
    return (
        <div className="House">
            <img src={props.image} alt="house" />
            <div className="House_name">
                <p>{props.name}</p>
            </div>
            <button>Подробнее</button>
        </div>
    )
}

export default House;