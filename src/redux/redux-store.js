import {combineReducers, legacy_createStore as createStore} from 'redux';
import housesReducer from "./housesReducer";
import reviewsReducer from "./reviewsReducer";
import materialsReducer from './materialsReducer';


let reducers = combineReducers({
    housesPage: housesReducer,
    materialsPage: materialsReducer,
    reviewsPage: reviewsReducer,
});

let store = createStore(reducers);



export default store;