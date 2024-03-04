


let initialState  = {
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

    newMaterialName: "",
    newMaterialDescription: "",
}


const materialsReducer = (state = initialState, action) => {
    

    return state;
};


export default materialsReducer;