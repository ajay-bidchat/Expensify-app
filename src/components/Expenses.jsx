import React from 'react';
import {connect} from 'react-redux';
import Expense from './Expense.jsx';

const Expenses = (props) => (
    <div>
        <p>There are {props.expenses.length} expense(s)</p>
        {
            props.expenses.map((expense) => <Expense key={expense.id} {...expense}/>)
        }
    </div>
);

const mapStateToProps = (state) => ({
    expenses: state.expenses
});

export default connect(mapStateToProps)(Expenses);
