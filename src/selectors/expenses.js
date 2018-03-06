import moment from 'moment';

export default (expenses, { text, sortBy, order, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date' && order === 'ascending') {
        return a.createdAt > b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount' && order === 'ascending') {
        return a.amount > b.amount ? 1 : -1;
      } else if (sortBy === 'date' && order === 'descending') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount' && order === 'descending') {
        return a.amount < b.amount ? 1 : -1;
      } else {
        return 0;
      }
    });
};
