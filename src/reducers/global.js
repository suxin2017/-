import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
    navigationBarTitleText: '思潮儿童美术班作品竞赛'
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     default:
       return state
  }
}
