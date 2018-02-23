import React from 'react';
import { connect } from 'react-redux';
import SelectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
    )}
  </div>
);

const mapStateToProps = ({ expenses, filters }) => ({ expenses: SelectExpenses(expenses, filters) });

export default connect(mapStateToProps)(ExpenseList);
