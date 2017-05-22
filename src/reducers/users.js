import {
  GET_USERS 
} from '../actions/types'; 


export default function(state = [], action){
  switch(action.type){
    case GET_USERS: 
      console.log(action.payload); 
      return [...state, ...action.payload.data] ; 

    default: 
      return state; 
  }
}
