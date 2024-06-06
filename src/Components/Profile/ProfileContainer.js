
import "../../App.css";
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { useEffect } from "react";
import Profile from "./Profile";



let ProfileContainer = ({authUser, totalHouses, totalReviews, ...props}) => {

//     useEffect(() => {

//         props.togglePreloader(true)

//         fetch("http://localhost:8080/houses")
//      .then(function(response) {
//          if (!response.ok) {
//          throw new Error(`Ошибка: ${response.status}`);
//          }
         
//          return response.json();
//      })
//      .then(function(data) {
//          props.setHouse(data);
//          props.togglePreloader(false);
//      })
//      .catch(function(error) {
//          console.error('Произошла ошибка:', error);
//      });

//      return () => {
//          console.log("Я пропал")
//      }
//  }, [])

    return <Profile {...props} authUser = {authUser} totalHouses = {totalHouses} totalReviews = {totalReviews}/>
}



function mapStateToProps(state){
    let authUser = localStorage.getItem("user")
    return{
        totalHouses: state.housesPage.totalHouses,
        totalReviews: state.reviewsPage.totalReviews,
        authUser,
        ...state
    }
}



let AuthRedirect = withAuthRedirect(ProfileContainer)

export default connect(mapStateToProps, {})(AuthRedirect)