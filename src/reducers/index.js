import { combineReducers } from 'redux';
import loadTextReducer from './sampleReducer';

const rootReducer = combineReducers({
    myText: loadTextReducer
});

export default rootReducer;