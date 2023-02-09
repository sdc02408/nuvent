import { DATA, SEARCH, ADD, DELETE, UPDATE} from '../actions/action'
import arrayData from '../data.json'

//json 데이터
const initialState = arrayData;

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case DATA:
            return initialState
        case SEARCH:
            return state.filter((menu) => menu.menu_name.includes(action.data))
        case ADD:
            return [...state, action.data]
        case DELETE:
            return [...state.filter((menu) =>  menu.idx !== action.idx )]
        case UPDATE:
            return [...state.map((item) => item.idx === action.data.idx ? action.data : item )]
        default:
            return state;
    }
}

export default reducers