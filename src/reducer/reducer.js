import {DATA,SEARCH,ADD} from '../actions/action'
import arrayData from '../data.json'

const initialState = arrayData


console.log(initialState,'initialState')
export const reducers = (state = initialState, action) => {
    if(action.type === DATA) {
        return initialState
    } else if(action.type === SEARCH) {
        console.log(action,'d')
        return action.data
    } else if(action.type === ADD) {
        console.log([...initialState, action.data],'dsdd')
        return [...initialState, action.data]
    }
     else {
        return state
    }
}

export default reducers