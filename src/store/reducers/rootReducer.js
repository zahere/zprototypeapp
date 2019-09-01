import authReducer from './authReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase'
import { loadingBarReducer } from 'react-redux-loading-bar'

const appReducer = combineReducers({
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
     loadingBar: loadingBarReducer,
});

const rootReducer = (state, action) => {
    if (action.type === "SIGNOUT_SUCCESS") {
        state = undefined;
    }
    return appReducer(state, action)
};

export default rootReducer
