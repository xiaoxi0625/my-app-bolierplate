import { combineReducers, Reducer } from 'redux';
import User from './reducers/user_reducer';


const appReducer: Reducer = combineReducers({
    User,
});

export default appReducer;
