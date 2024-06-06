
import "../../../../App.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import HouseDescription from "./HouseDescription";
import { useParams } from "react-router-dom";
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import {updateNewHousesText, saveChanges, updateImage} from "../../../../redux/housesReducer";


let HouseDescriptionContainer = (props) => {

    const {id} = useParams();
    const [oneHouse, setOneHouse] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/houses/${id}`)
     .then(function(response) {
         if (!response.ok) {
         throw new Error(`Ошибка: ${response.status}`);
         }
         
         return response.json();
     }) 
     .then(function(data) {
        setOneHouse(data)
     })
     .catch(function(error) {
         console.error('Произошла ошибка:', error);
     });

     return () => {
         console.log("Я пропал")
     }
 }, [props.housesPage.house, id])

    return <HouseDescription {...props} oneHouse = {oneHouse}/>
}



function mapStateToProps(state){
    return{
        housesPage:state.housesPage,
    }
}



let AuthRedirect = withAuthRedirect(HouseDescriptionContainer)

export default connect(mapStateToProps, {updateNewHousesText, saveChanges, updateImage})(AuthRedirect)