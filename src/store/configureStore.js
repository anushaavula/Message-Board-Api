import { createStore, combineReducers ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import messagesReducer from '../reducers/messagesReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        
        messages: messagesReducer
         
    }),applyMiddleware(thunk))
    return store 
}

export default configureStore