import "./Services.css";
import "../../App.css";
import Services from "./Services";
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { useEffect } from "react";
import { togglePreloader, addHouse, deleteHouse, updateNewHousesText, setHouse, saveChanges, updateImage } from "../../redux/housesReducer";
import { getNewHouseName, getNewId } from "../../redux/housesSelector";


let ServicesContainer = (props) => {

    useEffect(() => {

        props.togglePreloader(true)

        fetch("http://localhost:8080/houses")
     .then(function(response) {
         if (!response.ok) {
         throw new Error(`Ошибка: ${response.status}`);
         }
         
         return response.json();
     })
     .then(function(data) {
         props.setHouse(data);
         props.togglePreloader(false);
     })
     .catch(function(error) {
         console.error('Произошла ошибка:', error);
     });

 }, [])

    return <Services {...props}/>
}



function mapStateToProps(state){
    return{
        housesPage:state.housesPage,
        materialsPage:state.materialsPage,
        id: getNewId(state),
        name: getNewHouseName(state),

    }
}

// function mapDispatchToProps(dispatch){
//     return{
//         addHouse:()=>{
//             dispatch(addHouseActionCreater())
//         },
//         updateNewHousesText:(newHouseName, newHouseDescription)=>{
//             dispatch(updateNewHousesTextActionCreater(newHouseName, newHouseDescription))
//         },
//         setHouse:(house) => {
//             dispatch(setHouseActionCreator(house))
//         },
//         deleteHouse: (id) => {
//             dispatch(deleteHouseActionCreater(id))
//         },
//         togglePreloader: (status) => {
//             dispatch(togglePreloaderActionCreater(status))
//         }
//     }
// }

let AuthRedirect = withAuthRedirect(ServicesContainer)

export default connect(mapStateToProps, {addHouse,updateNewHousesText,setHouse,deleteHouse,togglePreloader, saveChanges, updateImage})(AuthRedirect)