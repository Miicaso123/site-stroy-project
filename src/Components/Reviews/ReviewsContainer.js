import "./Reviews.css";
import "../../App.css";
import React from "react";
import  { addReviewsActionCreater, updateNewReviewsTextActionCreater } from "../../redux/store";
import Reviews from "./Reviews";
import { connect } from "react-redux";



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
        }
    }
}


let ReviewsContainer= connect(mapStateToProps, mapDispatchToProps)(Reviews)
export default ReviewsContainer;