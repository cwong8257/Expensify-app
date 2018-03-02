import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';
import RemoveExpenseModal from './RemoveExpenseModal';

export class EditExpensePage extends React.Component {
  state = {
    isModalOpen: false
  };
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  handleOpenRemoveExpenseModal = e => {
    this.setState(() => ({ isModalOpen: true }));
  };
  handleCloseRemoveExpenseModal = e => {
    this.setState(() => ({ isModalOpen: false }));
  };
  handleRemoveExpense = e => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className="button button--secondary" onClick={this.handleOpenRemoveExpenseModal}>
            Remove Expense
          </button>
        </div>
        <RemoveExpenseModal
          expenseDescription={this.props.expense.description}
          isOpen={this.state.isModalOpen}
          handleRemoveExpense={this.handleRemoveExpense}
          handleCloseRemoveExpenseModal={this.handleCloseRemoveExpenseModal}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => {
    dispatch(startEditExpense(id, expense));
  },
  startRemoveExpense: id => {
    dispatch(startRemoveExpense(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
