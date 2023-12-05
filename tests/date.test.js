const { formatDate } = require('../lib/date');

describe('date.js', () => {
  test('formatDate returns correct formatted date', () => {
    // Replace this with a specific date for testing
    const testDate = new Date('August 2, 2022');
    const formattedDate = formatDate(testDate);
    expect(formattedDate).toBe('August 2, 2022');
  });
});
