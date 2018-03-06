import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters';
import selectVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({
  expensesCount,
  visibleExpensesCount,
  visibleExpensesTotal,
  setTextFilter,
  setStartDate,
  setEndDate
}) => {
  const expenseWord = expenseCount => (expenseCount === 1 ? 'expense' : 'expenses');
  const hiddenExpensesCount = expensesCount - visibleExpensesCount;
  const formattedExpenseTotal = numeral(visibleExpensesTotal / 100).format('$0,0.00');

  const handleClearFilters = e => {
    setTextFilter();
    setStartDate(null);
    setEndDate(null);
  };

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
          <button className="button button--secondary" onClick={handleClearFilters}>
            Clear Filters
          </button>
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

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesSummary);
