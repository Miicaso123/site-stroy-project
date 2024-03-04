const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";


let initialState = {
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

    newHouseName: "",
    newHouseDescription: "",

}

const housesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_HOUSE: {
            let newHouse = {
                name: state.newHouseName,
                description: state.newHouseDescription,
                image: "./images/House2.png",
                id: state.houses.length + 1,
            }
            // state.houses.push(newHouse);

            return {
                ...state,
                houses: [...state.houses, newHouse],
                newHouseName: "",
                newHouseDescription: "",
            }
        }
        case UPDATE_NEW_HOUSES_TEXT: {
            return {
                ...state,
                newHouseName: action.newHouseNameText,
                newHouseDescription: action.newHouseDescriptionText
            }
           
        }

        default: 
            return state;
    }

};


export default housesReducer;