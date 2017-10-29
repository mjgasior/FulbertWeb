import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loadTextReducer(state = initialState.myText, action) {
    switch(action.type) {
        case types.LOAD_TEXT_ACTION:
            return action.text;
        default:
            return state;
    }
}