import {DATA,SEARCH,ADD} from '../actions/action'
import arrayData from '../data.json'

const initialState = arrayData


console.log(initialState,'initialState')
export const reducers = (state = initialState, action) => {
    if(action.type === DATA) {
        console.log('초기 리듀서',initialState)
        return initialState
    } else if(action.type === SEARCH) {
        console.log(initialState, state, action.data,'검색 리듀서')
        return state.filter((menu) => menu.menu_name.includes(action.data))

    } else if(action.type === ADD) {
        console.log([...state, action.data],'추가 리듀서')
        return [...state, action.data]

    }
     else {
        return state
    }
}

export default reducers