import "../Services.css";
import "../../../App.css";

let Material = (props) => {
    return (
        <div className="Material">
            <img src={props.image} alt="material" />
            <div className="Material_name">
                <p>{props.name}</p>
            </div>
            <button>Подробнее</button>
        </div>
    )
}

export default Material;