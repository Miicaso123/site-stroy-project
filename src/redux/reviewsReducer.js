const ADD_REVIEWS = "ADD_REVIEWS";
const UPDATE_NEW_REVIEWS_TEXT = "UPDATE_NEW_REVIEWS_TEXT";

let initialState = {
    reviews: [
        {
            id: 1,
            review:"Лучший сайт!!!",
        },
        {
            id: 2,
            review:"Спасибо менеджеру за качественную работу",
        },
        {
            id: 3,
            review:"Отличная компания! Все для клиента!",
        },

    ],

    newReviews: "",
}



const reviewsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_REVIEWS: {
            let newRew = {
                review: state.newReviews,
                id: state.reviews.length+1,
            }
            // state.reviews.push(newRew)

            return {
                ...state,
                reviews: [...state.reviews, newRew],
                newReviews: "",

            }
        }
        case UPDATE_NEW_REVIEWS_TEXT: {
            return {
                ...state,
                newReviews: action.newReviewsText,
            }
        
        }

        default:
            return state;
    };

};


export default reviewsReducer;