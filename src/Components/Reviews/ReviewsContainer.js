import "./Reviews.css";
import "../../App.css";
import React, { useEffect } from "react";
import  { addReviewsActionCreater, updateNewReviewsTextActionCreater } from "../../redux/store";
import Reviews from "./Reviews";
import { connect } from "react-redux";
import { deleteReviewsActionCreator, setReviewsActionCreator } from "../../redux/reviewsReducer";
import withAuthRedirect from "../HOC/withAuthRedirect";


let ReviewsContainerComponent = (props) => {

    useEffect(() => {
        fetch("http://localhost:8080/reviews")
     .then(function(response) {
         if (!response.ok) {
         throw new Error(`Ошибка: ${response.status}`);
         }
         
         return response.json();
     })
     .then(function(data) {
         props.setReviews(data);
     })
     .catch(function(error) {
         console.error('Произошла ошибка:', error);
     });

 }, [])

    return <Reviews {...props}/>
}

function mapStateToProps(state){
    return{
        reviewsPage: state.reviewsPage
    }
}

function mapDispatchToProps(dispatch){
    return{
        addReviews:()=>{
            dispatch(addReviewsActionCreater())
        },
        updateNewReviewstext:(text)=>{
            dispatch(updateNewReviewsTextActionCreater(text))
        },
        setReviews: (reviews) => {
            dispatch(setReviewsActionCreator(reviews))
        },
        deleteReviews: (id) => {
            dispatch(deleteReviewsActionCreator(id))
        }   
    }
}

let AuthRedirect = withAuthRedirect(ReviewsContainerComponent)

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirect)

// let ReviewsContainer= connect(mapStateToProps, mapDispatchToProps)(ReviewsContainerComponent);    
// export default ReviewsContainer;