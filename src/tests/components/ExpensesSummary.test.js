import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={26263435} />);
  expect(wrapper).toMatchSnapshot();
});
