const sortArrayByArrayKey = (arrayKey, array) => {
  const sortCriteria = (a, b) => {
    const sortBy = (a[arrayKey] < b[arrayKey]) ? 1 : -1;
    return sortBy;
  };
  const sortedArray = array.sort(sortCriteria).slice(0, array.length);
  return sortedArray;
};

export default sortArrayByArrayKey;
