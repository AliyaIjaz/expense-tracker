import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
    //{amount: 1000, desc: "Cash"},
    //{amount: -50, desc: "Book"},
    //{amount: 100, desc: "Camera"}
]

export const TransactionContext = createContext(initialTransactions);


export const TransactionProvider = ({children}) =>{

    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
     
    function addTransaction(transObj){
        dispatch({
           type: "Add_transaction",
           payload: {
               amount: transObj.amount,
               desc: transObj.desc,
               id: transObj.id
           }, 
        })

    }

    function delTransaction(id){
        dispatch({
           type: "DEL_transaction",
           payload: id
           // {
            //   amount: transObj.amount,
             //  desc: transObj.desc,
              // id: transObj.id
         //  }, 
        })

    }
     
    return(
        <TransactionContext.Provider value = {{
          transactions: state,
          addTransaction: addTransaction,
          delTransaction: delTransaction
        }}>
          {children}
        </TransactionContext.Provider>
    )
    
    
}