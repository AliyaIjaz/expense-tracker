import React, {useContext, useState} from 'react';
import { TransactionContext } from './transContext';

function Child() {

  let {transactions, addTransaction} = useContext(TransactionContext);
  let {transaction, delTransaction} = useContext(TransactionContext);
  let [newDesc, setDesc] = useState(" ");
  let [newAmount, setAmount] = useState(0);  

  const handleAddition = (event)=>{
    event.preventDefault();
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
      id: Math.floor(Math.random()*10000)
    })
    setAmount("");
    setDesc("");
  }

  const deleteEntry = (id) => {
    delTransaction(id);
  }
  

  const getIncome = () => {
    let income = 0;
    for (var i=0; i<transactions.length; i++) {
      if(transactions[i].amount > 0)
      income +=transactions[i].amount;
    }
    return income;
  }
  const getExpense = () => {
    let expense = 0;
    for (var i=0; i<transactions.length; i++) {
      if(transactions[i].amount < 0)
      expense +=transactions[i].amount;
    }
    return expense;
  }
  return (
    <div className="container">
      <h1 className='text-center'>Expense Tracker</h1>
      <h3>Your Balance <br /> ${getIncome() + getExpense()}</h3>

      <div className = "expense-container">
           <h3>INCOME <br />${getIncome()}</h3>
          <h3>EXPENSE<br />${getExpense()}</h3>

      </div>
      <div>
          <h3>HISTORY</h3>
          <hr />
          <ul className="transaction-list">
              {transactions.map((transObj, ind)=>{
                  return (
                    <li  className = "del" onClick = {()=>deleteEntry(transObj.id)}>
                   <span>{transObj.desc}</span>
                  <span>${transObj.amount}</span>
                </li>
                  )
              })}

          </ul>
          <h3>Add New Transaction</h3>
          <hr />

          <form className = "transaction-form" onSubmit={handleAddition}>
              <label>
                  Enter Description <br />
                  <input type="text" 
                    value = {newDesc}
                    placeholder="Description"
                    onChange={(ev)=>{setDesc(ev.target.value)}}
                    required/>
              </label>
              <br />
              <label>
                  Enter Amount <br />
                  <input type="number" 
                    value = {newAmount}
                    placeholder = "Amount"
                    onChange={(ev)=>{setAmount(ev.target.value)}}
                    required />
              </label>
              <br />
              <input type="submit" value="Add Transaction"/> 
          </form>
      </div>
    </div>
  );
}

export default Child;
