import { combineReducers } from 'redux';
//import loaderboardReducer from './loaderboardReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers (
    { 
        //dashboard : loaderboardReducer,
        firestore : firestoreReducer
    }
);

export default rootReducer ;