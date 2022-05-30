
/*
function reducer (state, action) {
 switch (action.type) {
     case 'number_add2':
         return {...state, number: state.number + 2}
         case 'login':
             return {...state, user : {name: action.payload}}
         default:
             return state
             */
         
import {numberReducer} from './number'
import  {userReducer} from './user'
    
             export    function reducer (state, action) {
            let newState = numberReducer(state,action)
               return userReducer(newState,action)
}