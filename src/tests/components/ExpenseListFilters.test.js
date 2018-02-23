import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const event = {
    target: {
      value: 'New Text'
    }
  };
  wrapper.find('input').simulate('change', event);
  expect(setTextFilter).toHaveBeenLastCalledWith(event.target.value);
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  const event = {
    target: {
      value: 'date'
    }
  };
  wrapper.find('select').simulate('change', event);
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const event = {
    target: {
      value: 'amount'
    }
  };
  wrapper.find('select').simulate('change', event);
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  wrapper.find('DateRangePicker').simulate('datesChange', altFilters);
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').simulate('focusChange', calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
