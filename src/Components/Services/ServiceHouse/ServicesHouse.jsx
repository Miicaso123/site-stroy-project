import "../Services.css";
import "../../../App.css";
import House from "./House";

let ServicesHouse = (props) => {
    return (
        <div className="ServicesHouse">
           {
            props.state.houses.map((house) => (
                <House name = {house.name} image = {house.image} id = {house.id} key = {house.id}/>
            )
            )
           }
        </div>
    );
};

export default ServicesHouse;

