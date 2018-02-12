var Calculator = require('../my_modules/Calculator')
var calculator = new Calculator()

describe('Calculator', () => {
  describe('sum()', () => {
    it('sum(1, 2) = 3', () => {
      expect(calculator.sum(1, 2)).toBe(3)
    })
    it('sum("99", "100") = 199', () => {
      expect(calculator.sum('99', '100')).toBe(199)
    })
  })
})
