import "./Reviews.css";
import "../../App.css";
import React from "react";
import { CiStar } from "react-icons/ci";


let Reviews = (props) => {
    const review = React.useRef();

    let deleteReviews = (id) =>{
        props.deleteReviews(id)
    }

    let addReviews = () => {
        props.addReviews({
            id:props.authUser.id,
            name:props.authUser.name,
            surname:props.authUser.surname,
            email:props.authUser.email,
            urlImg:props.authUser.urlImg
        });
        review.current.value = "";
    }
    
    let updateNewReviewstext = () => {
        props.updateNewReviewstext(review.current.value)
    }
    
    return (
        <div className="Reviews">
                <div className="formReview">
                    <p>Оставить отзыв</p>
                    <textarea ref={review} value={props.reviewsPage.newReviews} onChange={updateNewReviewstext}></textarea>
                    <button type="button" onClick={addReviews}>ок</button>
                </div>
                {
                    props.reviewsPage.reviews.map((newRew) =>(
                        <div className="review-container" key={newRew.id}>
                            <div className="review-block">
                                <div className="review-top">
                                    <div className="review-profile">
                                        <div className="review-img">
                                            <img src={ newRew.user ? (newRew.user.urlImg) : ("https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg")} />
                                        </div>
                                        <div className="review-username">
                                            <strong>{newRew.user ? (newRew.user.name) : ("User")}</strong>
                                            <span>{newRew.user ? (newRew.user.email) : ("user@gmail.com")}</span>
                                        </div>
                                    </div>

                                    <div className="review-reviews">
                                        <CiStar style={{ backgroundColor: 'gold' }}/>
                                        <CiStar style={{ backgroundColor: 'gold' }}/>
                                        <CiStar style={{ backgroundColor: 'gold' }}/>
                                        <CiStar style={{ backgroundColor: 'gold' }}/>
                                        <CiStar style={{ backgroundColor: 'gold' }}/>
                                    </div>
                                    
                                </div>
                                
                                <div className="review-comment">
                                    <p> {newRew.review} </p>
                                    {
                                        newRew.user.email == props.authUser.email
                                        ?
                                        (<img src="./images/deleteicon.png" alt="delete" onClick={() => {deleteReviews(newRew.id)}} className="deleteReview"/>)
                                        :
                                        (
                                        <div></div>
                                        )
                                    }
                                </div>

                            </div>
                        </div>
                    ))
                }
        </div>
    );
}

export default Reviews;