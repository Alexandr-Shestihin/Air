import { combineReducers, createStore } from "redux";
import airReducer from './air-Reducer';

const reducers = combineReducers({
   airReducer
});

const store = createStore(reducers);
export default store;