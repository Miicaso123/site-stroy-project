import "./Reviews.css";
import "../../App.css";
import React from "react";
import { addReviewsActionCreater, updateNewReviewsTextActionCreater } from "../../redux/store";

let Reviews = (props) => {
    const newReviews = React.useRef();
    console.log(props);

    let addReviews = () => {
        props.dispatch(addReviewsActionCreater());
    }
    
    let updateNewReviewstext = () => {
        props.dispatch(updateNewReviewsTextActionCreater(newReviews.current.value))
    }
    
    return (
        <div className="Reviews">
                <div className="formReview">
                    <p>Оставить отзыв</p>
                    <textarea ref={newReviews} value={props.state.newReviews} onChange={updateNewReviewstext}></textarea>
                    <button onClick={addReviews}>ок</button>
                </div>
                {
                    props.state.reviews.map((review) =>(
                        <div className="review block" key={review.id}>
                            <p> {review.review} </p>
                        </div>
                    ))
                }
        </div>
    );
}

export default Reviews;