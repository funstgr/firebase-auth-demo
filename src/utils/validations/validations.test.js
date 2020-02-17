import {
  validatePassword, validateUsername, validateFirstname, validateLastname,
} from './validations';

describe('validatePassword  characters >=4', () => {
  describe('success returns true if valid and false if invalid', () => {
    it('should return true', () => {
      expect(validatePassword('1234')).toBe(true);
    });

    it('should return true', () => {
      expect(validatePassword('#@fg')).toBe(true);
    });

    it('should return true', () => {
      expect(validatePassword('12fg')).toBe(true);
    });

    it('should return false', () => {
      expect(validatePassword('#@f')).toBe(false);
    });
  });
});

describe('validateUsername  alphanumeric characters >=4', () => {
  describe('success returns true if valid and false if invalid', () => {
    it('should return true', () => {
      expect(validateUsername('1234')).toBe(true);
    });

    it('should return false', () => {
      expect(validateUsername('#@fg')).toBe(false);
    });

    it('should return false', () => {
      expect(validateUsername('abcd')).toBe(true);
    });

    it('should return false', () => {
      expect(validateUsername('Abcd')).toBe(true);
    });
  });
});

describe('validateFirstname  alpha characters >=2', () => {
  describe('success returns true if valid and false if invalid', () => {
    it('should return true', () => {
      expect(validateFirstname('1234')).toBe(false);
    });

    it('should return false', () => {
      expect(validateFirstname('#@fg')).toBe(false);
    });

    it('should return false', () => {
      expect(validateFirstname('abcd')).toBe(true);
    });

    it('should return false', () => {
      expect(validateFirstname('Abcd')).toBe(true);
    });

    it('should return false', () => {
      expect(validateFirstname('A')).toBe(false);
    });
  });
});

describe('validateLastname alpha characters >=2', () => {
  describe('success returns true if valid and false if invalid', () => {
    it('should return true', () => {
      expect(validateLastname('1234')).toBe(false);
    });

    it('should return false', () => {
      expect(validateLastname('#@fg')).toBe(false);
    });

    it('should return false', () => {
      expect(validateLastname('abcd')).toBe(true);
    });

    it('should return false', () => {
      expect(validateLastname('Abcd')).toBe(true);
    });

    it('should return false', () => {
      expect(validateLastname('A')).toBe(false);
    });
  });
});
