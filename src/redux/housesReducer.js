const ADD_HOUSE = "ADD_HOUSE";
const UPDATE_NEW_HOUSES_TEXT = "UPDATE_NEW_HOUSES_TEXT";
const SET_HOUSE = "SET_HOUSE"
const DELETE_HOUSE = "DELETE_HOUSE"
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER"
const PUT_HOUSE = "PUT_HOUSE"
const UPDATE_IMAGE = "UPDATE_IMAGE"


let initialState = {
    houses: [
        // {
        //     name: "Из газобетона",
        //     image: "./images/House1.png",
        //     id: 1,
        //     description: ""
        // },
        // {
        //     name: "Из кирпича",
        //     image: "./images/House2.png",
        //     id: 2,
        //     description: ""
        // },
        // {
        //     name: "Из дерева",
        //     image: "./images/House3.png",
        //     id: 3,
        //     description: ""
        // },
        // {
        //     name: "Из керамических кирпичей",
        //     image: "./images/House4.png",
        //     id: 4,
        //     description: ""
        // },

    ],

    newHouseName: "",
    newHouseDescription: "",
    newImage: "",
    isLoad: true,
    totalHouses: 0

}

const housesReducer = (state = initialState, action) => {
  
    switch(action.type){
        case ADD_HOUSE: { 
            let postData = {
                name: state.newHouseName,
                description: state.newHouseDescription,
                image: state.newImage || "./images/House4.png",
                id: state.houses.length + 1,
            }
            fetch("http://localhost:8080/houses", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json(postData);
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.error(error);
        });
    
            return {
                ...state,
                houses: [...state.houses, postData],
                newHouseName: "",
                newHouseDescription: "",
                newImage: ""
            }
        }

        case DELETE_HOUSE: {
            fetch(`http://localhost:8080/houses/${action.id}`, {
                method: 'DELETE',
            })
            .then(function(response) {
                if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
                }
                
                console.log("Дом успешно удален");
            })
            .catch(function(error) {
                console.error('Произошла ошибка:', error);
            });
            const filtredhouses = state.houses.filter(house => house.id != action.id);
            return {
                ...state,
                houses: filtredhouses
            };
        }


        case TOGGLE_PRELOADER: {
            return {...state, isLoad: action.status}
        }

        case UPDATE_NEW_HOUSES_TEXT: {
            return {
                ...state,
                newHouseName: action.newHouseNameText,
                newHouseDescription: action.newHouseDescriptionText,
                newImage: action.newImage
            }
           
        }

        case UPDATE_IMAGE: {
            return {
                ...state,
                houses: state.houses.map(house => {
                    if (house.id === action.id) {
                        return {
                            ...house,
                            image: action.image
                        };
                    }
                    return house;
                })
            };
        }

        case SET_HOUSE: {
            return {
                ...state,
                houses: action.houses,
                totalHouses: action.houses.length
            }
        }

        case PUT_HOUSE: {
            let updateHouse = {...action.house, description: state.newHouseDescription, name: state.newHouseName, image: state.newImage }

            fetch(`http://localhost:8080/houses/${action.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateHouse)
            }) 
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('PUT запрос выполнен успешно:', data);
            })
            .catch(error => {
                console.error('Возникла ошибка при выполнении PUT запроса:', error);
         });
         return {
            ...state,
            houses: state.houses.map(house => {
                if(house.id === action.id){
                    return{
                        ...house,
                        name: state.newHouseName,
                        description: state.newHouseDescription,
                        image: state.newImage
                    }
                }
                return house;
            })
         }
        }

        default: 
            return state;
    }

};


export const togglePreloader = (status) => ({type: TOGGLE_PRELOADER, status: status})

export const addHouse = () => ({type: ADD_HOUSE});

export const updateNewHousesText = (newHouseName, newHouseDescription, newImage) => ({type: UPDATE_NEW_HOUSES_TEXT, newHouseNameText: newHouseName, newHouseDescriptionText: newHouseDescription, newImage});

export const setHouse= (houses) => ({type: SET_HOUSE, houses: houses});

export const deleteHouse = (id) => ({type: DELETE_HOUSE, id: id})

export const saveChanges = (id, house) => ({type: PUT_HOUSE, id: id, house: house})

export const updateImage = (id, image) => ({type: UPDATE_IMAGE, id: id, image: image})

export default housesReducer;