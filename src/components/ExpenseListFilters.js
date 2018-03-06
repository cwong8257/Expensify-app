import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  ascendingOrder,
  descendingOrder,
  setStartDate,
  setEndDate
} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = e => {
    const sort = e.target.value;
    if (sort === 'date') {
      this.props.sortByDate();
    } else if (sort === 'amount') {
      this.props.sortByAmount();
    }
  };
  onOrderChange = e => {
    const order = e.target.value;
    if (order === 'ascending') {
      this.props.ascendingOrder();
    } else if (order === 'descending') {
      this.props.descendingOrder();
    }
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search expenses"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__row">
            <div className="input-group__item">
              <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
              </select>
            </div>
            <div className="input-group__item">
              <select className="select" value={this.props.filters.order} onChange={this.onOrderChange}>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId="startDateId"
            endDate={this.props.filters.endDate}
            endDateId="endDateId"
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
            block={true}
            small={true}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ filters: state.filters });
const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  ascendingOrder: () => dispatch(ascendingOrder()),
  descendingOrder: () => dispatch(descendingOrder()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
