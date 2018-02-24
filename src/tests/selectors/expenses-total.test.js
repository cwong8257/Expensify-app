import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const data = [];
  const result = selectExpensesTotal(data);
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  const data = [expenses[1]];
  const result = selectExpensesTotal(data);
  expect(result).toBe(expenses[1].amount);
});

test('should correctly add up multiple expenses', () => {
  const data = expenses;
  const result = selectExpensesTotal(data);
  expect(result).toBe(114195);
});
