import sortArray from './sort';
import testData from './unsortedTestData';
import sortedTestData from './sortedTestData';

describe('tests the array sorter', () => {
  it('tests the array sorter on the unsorted cars array by a key in the array', () => {
    const arrayKey = 'rating';
    expect(sortArray(arrayKey, testData.restaurants)).toEqual(sortedTestData);
  });
});
