import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/style.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './stores/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
// import {setEndDate, setStartDate, setTextFilter,sortByAmount, sortByDate} from './actions/filters';

const store = configureStore();

store.subscribe((state) => {
    console.log(store.getState());
});

store.dispatch(addExpense({
    id: 1,
    note: 'Bought Pen',
    amount: 1000,
    createdAt: 1234567890,
    description: 'Bought the best pen ever'
}));

store.dispatch(addExpense({
    id: 2,
    note: 'A&TW',
    amount: 15000,
    createdAt: 4234567890,
    description: 'Ant-man & The Wasp'
}));

store.dispatch(addExpense({
    id: 3,
    note: 'Water Bottle',
    amount: 50000,
    createdAt: 9234567890,
    description: 'Bought the best water bottle ever'
}));


// store.dispatch(setTextFilter('aaloo'));
// store.dispatch(setEndDate(10203));
// store.dispatch(setStartDate(0));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));