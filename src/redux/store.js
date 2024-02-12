const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";
const ADD_REVIEWS = "ADD_REVIEWS";
const UPDATE_NEW_REVIEWS_TEXT = "UPDATE_NEW_REVIEWS_TEXT";

let store = {
    _state: {
        houses: [
            {
                name: "Из газобетона",
                image: "./images/House1.png",
                id: 1,
                description: ""
            },
            {
                name: "Из кирпича",
                image: "./images/House2.png",
                id: 2,
                description: ""
            },
            {
                name: "Из дерева",
                image: "./images/House3.png",
                id: 3,
                description: ""
            },
            {
                name: "Из керамических кирпичей",
                image: "./images/House4.png",
                id: 4,
                description: ""
            },

        ],

        materials: [
            {
                name: "Газобетон",
                image: "./images/Material1.png",
                id: 1,
            },
            {
                name: "Цемент",
                image: "./images/Material2.png",
                id: 2,
            },
            {
                name: "Арматура",
                image: "./images/Material3.png",
                id: 3,
            },
            {
                name: "Доска",
                image: "./images/Material4.png",
                id: 4,
            },

        ],

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


        newHouseName: "",
        newHouseDescription: "",
        newReviews: "",
        newMaterialName: "",
        newMaterialDescription: "",
    },

    getState(){
        return this._state;
    },

    _callSubscribe(){
        console.log("state changed");
    },

    subscribe(observer) {
        this._callSubscribe = observer;
    },


    dispatch(action) {
        if(action.type === ADD_HOUSE){
            let newHouse = {
                name: this.getState().newHouseName,
                description: this.getState().newHouseDescription,
                image: "./images/House2.png",
                id: this.getState().houses.length + 1,
            }
            this.getState().houses.push(newHouse);
            this._callSubscribe(store);
        }
        else if(action.type === UPDATE_NEW_HOUSES_TEXT){
            this.getState().newHouseName = action.newHouseNameText;
            this.getState().newHouseDescription = action.newHouseDescriptionText;
            this._callSubscribe(store);
        }
        else if(action.type === ADD_REVIEWS) {
            let newRew = {
                review: this.getState().newReviews,
                id: this.getState().reviews.length+1,
            }
            this.getState().reviews.push(newRew)
            this._callSubscribe(store);
        }
        else if(action.type === UPDATE_NEW_REVIEWS_TEXT) {
            this.getState().newReviews = action.newReviewsText;
            this._callSubscribe(store);
        }

    }
}



export const addHouseActionCreater = () => ({type: ADD_HOUSE});

export const updateNewHousesTextActionCreater = (newHouseName, newHouseDescription) => ({type: UPDATE_NEW_HOUSES_TEXT, newHouseNameText: newHouseName, newHouseDescriptionText: newHouseDescription});

export const addReviewsActionCreater = () => ({type: ADD_REVIEWS});

export const updateNewReviewsTextActionCreater = (newReviews) => ({type: UPDATE_NEW_REVIEWS_TEXT, newReviewsText: newReviews});

export default store;
