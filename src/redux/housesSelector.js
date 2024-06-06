

export const getNewId = (state) => {
    return state.housesPage.houses.length + 1
}

export const getNewHouseName = (state) => {
    return state.housesPage.newHouseName
}