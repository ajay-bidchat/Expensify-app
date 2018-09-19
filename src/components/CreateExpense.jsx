import React from 'react';
import AddExpenseForm from './AddExpenseForm.jsx';
import {addExpense} from '../actions/expenses';
import {connect} from 'react-redux';

const CreateExpense = (props) => (
    <div>
        <h1>Create Expense</h1>
        <AddExpenseForm onSubmit={(newExpense) => {
            const id = Math.floor(Math.random() * 9999 + 99);
            props.dispatch(addExpense({
                ...newExpense,
                id
            }));
            props.history.push('/');
        }}/>
    </div>
);

export default connect()(CreateExpense);