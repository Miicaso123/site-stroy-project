import "./Services.css";
import "../../App.css";
import ServicesHouse from "./ServiceHouse/ServicesHouse";
import ServicesMaterial from "./ServiceMaterial/ServicesMaterial";
import React, { useEffect } from "react";
import { addHouseActionCreater, setHouse, updateNewHousesTextActionCreater } from "../../redux/store";
import PreLoader from "../PreLoader/PreLoader";

let Services = (props) => {

    const newHouseName = React.useRef();
    const newHouseDescription = React.useRef();

    let addHouse = () => {
        props.addHouse();
    }

    let updateNewHousesText = () => {
        props.updateNewHousesText(newHouseName.current.value, newHouseDescription.current.value)
    }

    
    return (
        <div className="Services">
            {
                props.housesPage.isLoad ? <PreLoader/>
                :
                (<div className="container">
                    <h2>Строительство коттеджей</h2>
                    <div className="form">
                        <p>Добавить дом</p>
                        <input type="text" placeholder="Название дома" ref={newHouseName} value = {props.newHouseName} onChange={updateNewHousesText}/>
                        <input type="text" placeholder="Описание" ref={newHouseDescription} value={props.housesPage.newHouseDescription} onChange={updateNewHousesText}/>
                        <button className="servises_btn" onClick={addHouse}>Submit</button>
                    </div>
                    <ServicesHouse state={props.housesPage} deleteHouse = {props.deleteHouse}/>
                    <h2>Строительные материалы</h2>
                    <ServicesMaterial state={props.materialsPage}/>
                </div>)
            }

            
        </div>
    )
}

export default Services;