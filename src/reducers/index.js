
import { combineReducers} from 'redux'
const counterReducer = (state = 0 , action) => {
    switch (action.type) {
      case 'INCREASE_COUNTER':
        return state + 1
  
      default:
        return state
    }
  }
  
  const postReducer = (state = [] , action) => {
      switch (action.type) {
          case 'CREATE_POST':
            
            return [...state,{title : action.title , content : action.content}]
          default:
            return state
        }
  }
  
  const reducer = combineReducers({
      counter : counterReducer,
      posts : postReducer,
  })


  export default reducer