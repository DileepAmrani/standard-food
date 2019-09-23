import { createStore, applyMiddleware } from 'redux'
import reducer from '../Redux/reducer'
import thunk from 'redux-thunk'
 


let store = createStore(reducer, applyMiddleware(thunk))

export {
    store
}