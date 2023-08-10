import { combineReducers } from 'redux';
import queryReducer from './queryReducer';

const rootReducer = combineReducers({
    queryReducer: queryReducer,
});

export default rootReducer;

