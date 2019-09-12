import { combineReducers } from 'redux';
import { carSalesReducer } from './carSalesReducer.js';

export default combineReducers({
    carSales: carSalesReducer
});