const ADD_REVIEWS = "ADD_REVIEWS";
const UPDATE_NEW_REVIEWS_TEXT = "UPDATE_NEW_REVIEWS_TEXT";
const SET_REVIEWS = "SET_REVIEWS";
const DELETE_REVIEWS = "DELETE_REVIEWS";

let initialState = {
    reviews: [
        // {
        //     id: 1,
        //     review:"Лучший сайт!!!",
        // },
        // {
        //     id: 2,
        //     review:"Спасибо менеджеру за качественную работу",
        // },
        // {
        //     id: 3,
        //     review:"Отличная компания! Все для клиента!",
        // },

    ],

    newReviews: "",
    totalReviews: 0
}



const reviewsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_REVIEWS: {
            let newRew = {
                review: state.newReviews,
                id: state.reviews.length+1,
                user: JSON.parse(localStorage.getItem("user"))
            }
            fetch("http://localhost:8080/reviews", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newRew),
            })
            .then(function(response) {
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                return response.json(newRew);
            })
            .then(function(data) {
                console.log(data);
            })
            .catch(function(error) {
                console.error(error);
            });
        
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

        case SET_REVIEWS: {
            return {
                ...state,
                reviews: action.reviews,
                totalReviews: action.reviews.length
            }
        }

        case DELETE_REVIEWS: {
            const filtredReviews = state.reviews.filter(review => review.id != action.id);
            
            fetch(`http://localhost:8080/reviews/${action.id}`, {
                method: 'DELETE',
            })
            .then(function(response) {
                if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
                }
                
                console.log("Коммент успешно удален");
            })
            .catch(function(error) {
                console.error('Произошла ошибка:', error);
            });
            
            return {
                ...state,
                reviews: filtredReviews
            };
        }

        default:
            return state;
    };

};


export const addReviewsActionCreater = () => ({type: ADD_REVIEWS});

export const updateNewReviewsTextActionCreater = (newReviews) => ({type: UPDATE_NEW_REVIEWS_TEXT, newReviewsText: newReviews});

export const setReviewsActionCreator = (reviews) => ({type: SET_REVIEWS, reviews: reviews});

export const deleteReviewsActionCreator = (id) => ({type: DELETE_REVIEWS, id: id});

export default reviewsReducer;