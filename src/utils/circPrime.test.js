import circPrime from './circPrime';

describe('validatePassword  characters >=4', () => {
  describe('success returns true if valid and false if invalid', () => {
    it('should return true', () => {
      expect(circPrime()).toBe([2, 3, 5, 7]);
    });
  });
});
