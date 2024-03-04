import "./Reviews.css";
import "../../App.css";
import React from "react";
import reviewsReducer from "../../redux/reviewsReducer";

let Reviews = (props) => {
    const review = React.useRef();
    // console.log(props);

    let addReviews = () => {
        props.addReviews();
    }
    
    let updateNewReviewstext = () => {
        props.updateNewReviewstext(review.current.value)
    }
    
    return (
        <div className="Reviews">
                <div className="formReview">
                    <p>Оставить отзыв</p>
                    <textarea ref={review} value={props.reviewsPage.newReviews} onChange={updateNewReviewstext}></textarea>
                    <button onClick={addReviews}>ок</button>
                </div>
                {
                    props.reviewsPage.reviews.map((newRew) =>(
                        <div className="review block" key={newRew.id}>
                            <p> {newRew.review} </p>
                        </div>
                    ))
                }
        </div>
    );
}

export default Reviews;