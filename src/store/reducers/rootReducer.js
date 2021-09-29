import authReducer from './authReducer'
import projectReducer from './projectReducer'
import taskReducer from './taskReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

// Pass this to the store
const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
	task: taskReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
})

export default rootReducer