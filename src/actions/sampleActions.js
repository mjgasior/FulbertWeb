import * as actionTypes from './actionTypes';

export function textLoaderAction(text) {
    return { type: actionTypes.LOAD_TEXT_ACTION, text };
}
