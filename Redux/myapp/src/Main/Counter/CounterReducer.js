import { INCREMENT,DECREMENT, increment } from "./Action";
const initstate={
    count:0
}
 
export const CounterReducer=(state=initstate,action)=>{
    switch(action.type){
          case INCREMENT:
        return{
            ...state,
            count:state.count+action.payload
        }
          case DECREMENT:
        return{
            ...state,
            count:state.count-action.payload
        }
        default:
            return state
    }
}