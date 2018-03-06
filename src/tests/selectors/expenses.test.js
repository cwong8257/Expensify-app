import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    order: 'ascending',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    order: 'ascending',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    order: 'ascending',
    startDate: undefined,
    endDate: moment(0)
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});

test('should sort by date in ascending order', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    order: 'ascending',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test('should sort by date in descending order', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    order: 'descending',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount in ascending order', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    order: 'ascending',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});

test('should sort by amount in descending order', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    order: 'descending',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
