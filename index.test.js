const {stringLength, reverseString, calculator, capitalize} = require('./index');

describe('String character count', () => {
  test('Returns character count of boy', () => {
    expect(stringLength('boy')).toBe(3);
  });
  
  test('Returns error if string has less than 1 character', () => {
    expect(() => stringLength('')).toThrow(Error);
  });
  
  test('Returns error if string has over 10 characters', () => {
    expect(() => stringLength('Over 10 characters')).toThrow(Error);
  });
})

describe('Reverse string', () => {
  test('Returns the string in reverse order', () => {
    expect(reverseString('boy')).toBe('yob');
  });  
})

describe('Calculator', () => {
  const calcTest1 = new calculator ([20, 5, 2]);
  const calcTest2 = new calculator ([300, 2]);
  const calcTest3 = new calculator ([4, 1, 11]);

  describe('Calculator add method', () => {
    test('Returns the total sum of arr', () => {
      expect(calcTest1.add()).toBe(27);
      expect(calcTest2.add()).toBe(302);
      expect(calcTest3.add()).toBe(16);
    });
  })
  
  describe('Calculator subtract method', () => {
    test('Returns the difference of arr', () => {
      expect(calcTest1.subtract()).toBe(13);
      expect(calcTest2.subtract()).toBe(298);
      expect(calcTest3.subtract()).toBe(-8);
    });
  })  

  describe('Calculator multiply method', () => {
    test('Returns the product of arr items', () => {
      expect(calcTest1.multiply()).toBe(200);
      expect(calcTest2.multiply()).toBe(600);
      expect(calcTest3.multiply()).toBe(44);
    });
  })
  
  describe('Calculator divide method', () => {
    test('Returns the quotient of arr items', () => {
      expect(calcTest1.divide()).toBe(2);
      expect(calcTest2.divide()).toBe(150);
      expect(calcTest3.divide()).toBe(0.364);
    });
  })    
})

describe('Capitalize a string', () => {
  test('Return string in uppper case', () => {
    expect(capitalize('code')).toBe('Code');
  });
})