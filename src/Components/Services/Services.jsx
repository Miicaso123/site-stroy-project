import "./Services.css";
import "../../App.css";
import ServicesHouse from "./ServiceHouse/ServicesHouse";
import ServicesMaterial from "./ServiceMaterial/ServicesMaterial";
import React from "react";
import { addHouseActionCreater, updateNewHousesTextActionCreater } from "../../redux/store";

let Services = (props) => {
    const newHouseName = React.useRef();
    const newHouseDescription = React.useRef();

    let addHouse = () => {
        props.dispatch(addHouseActionCreater())
    }

    let updateNewHousesText = () => {
        props.dispatch(updateNewHousesTextActionCreater(newHouseName.current.value, newHouseDescription.current.value));
    }
    
    
    return (
        <div className="Services">
            <div className="container">
                <h2>Строительство коттеджей</h2>
                <div className="form">
                    <p>Добавить дом</p>
                    <input type="text" placeholder="Название дома" ref={newHouseName} value = {props.state.newHouseName} onChange={updateNewHousesText}/>
                    <input type="text" placeholder="Описание" ref={newHouseDescription} value={props.state.newHouseDescription} onChange={updateNewHousesText}/>
                    <button onClick={addHouse}>Submit</button>
                </div>
                <ServicesHouse state={props.state}/>
                <h2>Строительные материалы</h2>
                <ServicesMaterial state={props.state}/>
            </div>
        </div>
    )
}

export default Services;