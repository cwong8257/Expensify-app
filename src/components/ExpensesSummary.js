import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, visibleExpensesCount, visibleExpensesTotal }) => {
  const expenseWord = expenseCount => (expenseCount === 1 ? 'expense' : 'expenses');
  const hiddenExpensesCount = expensesCount - visibleExpensesCount;
  const formattedExpenseTotal = numeral(visibleExpensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{visibleExpensesCount}</span> {expenseWord(visibleExpensesCount)} totalling{' '}
          <span>{formattedExpenseTotal}</span>
        </h1>
        {!hiddenExpensesCount ? (
          <span className="page-header__sub-title">Showing all expenses</span>
        ) : (
          <span className="page-header__sub-title">
            Not showing <span>{hiddenExpensesCount}</span> {expenseWord(hiddenExpensesCount)} because of filters
          </span>
        )}
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => {
  const visibleExpenses = selectVisibleExpenses(expenses, filters);

  return {
    expensesCount: expenses.length,
    visibleExpensesCount: visibleExpenses.length,
    visibleExpensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
