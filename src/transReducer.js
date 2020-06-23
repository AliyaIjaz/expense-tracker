import { TransactionContext } from "./transContext";

const TransactionReducer = (state, action)=>{
    switch(action.type) {
        case 'Add_transaction': {
            return  [action.payload, ...state]
            }  
        
        case 'DEL_transaction': {
           return  state.filter(transaction=>transaction.id !== action.payload)
    }
        default:
            return state;

    }
}

export default TransactionReducer;