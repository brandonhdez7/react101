//this is the reducer

// To make a RootReducer:
// 1. Get combineReducers method from redux
// 2. Call combineReducers method an pass it an object
// 3. Each key/property of the object, will be a single piece of application/redux state
// 4. Each value will be a single reducer (imported)

import {combineReducers} from 'redux'//1
import weatherReducers from './weatherReducers';
import stockReducers from './stockReducers';

const rootReducer = combineReducers({
    weather: weatherReducers, //3 //4
    stocks: stockReducers
});

export default rootReducer