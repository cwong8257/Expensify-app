import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import RemoveExpenseModal from '../../components/RemoveExpenseModal';
import expenses from '../fixtures/expenses';

let expense, startEditExpense, handleOpenRemoveExpenseModal, history, wrapper;

beforeEach(() => {
  expense = expenses[0];
  startEditExpense = jest.fn();
  handleOpenRemoveExpenseModal = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      startEditExpense={startEditExpense}
      handleOpenRemoveExpenseModal={handleOpenRemoveExpenseModal}
      history={history}
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should open removeExpenseModal', () => {
  wrapper.find('button').simulate('click');
  expect(wrapper.find(RemoveExpenseModal).prop('isOpen')).toEqual(true);
});
