import "../Services.css";
import "../../../App.css";
import {useNavigate} from "react-router-dom";

let House = (props) => {

    const navigate = useNavigate();

    let deleteHouse = () => {
        props.deleteHouse(props.id);
    }

    let redirectDescription = (id) => {
        navigate(`/houseDescription/${id}`)
    }

    return (
        <div className="House">
            <img src={props.image} alt="house" />
            <div className="House_name">
                <p>{props.name}</p>
            </div>
            <img src="./images/delete.png" alt="delete" onClick={deleteHouse} className="deleteIcon" />
            <button onClick={() => {redirectDescription(props.id)}}>Подробнее</button>
        </div>
    )
}

export default House;