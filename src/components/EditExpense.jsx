import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

import AddExpenseForm from './AddExpenseForm.jsx';

class EditExpense extends React.Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove() {
        this.props.dispatch(removeExpense(this.props.expense.id));
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Edit Expenses</h1>
                    <AddExpenseForm expense={this.props.expense} onSubmit={(updatedExpense) => {
                        thisprops.dispatch(editExpense(this.props.expense.id, updatedExpense));
                        this.props.history.push('/');
                    }} />
                    <button onClick={this.onRemove}>Remove Expense</button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id == props.match.params.id)
});

export default connect(mapStateToProps)(EditExpense);