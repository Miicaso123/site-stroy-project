import {combineReducers, legacy_createStore as createStore} from 'redux';
import housesReducer from "./housesReducer";
import reviewsReducer from "./reviewsReducer";
import materialsReducer from './materialsReducer';
import usersReducer from './usersReducer';


let reducers = combineReducers({
    housesPage: housesReducer,
    materialsPage: materialsReducer,
    reviewsPage: reviewsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);



export default store;