// テスト対象クラスの読み込み
var Calculator = require('../my_modules/Calculator')
var calc = new Calculator()

describe('Calculator', () => {  // Calculatorクラスの
  describe('sum()', () => {     // sum()メソッドで
    it('sum(1, 2) = 3', () => { // 1, 2を渡したら3が返ってくるかテスト
      expect(calc.sum(1, 2)).toBe(3)
    })
    it('sum("99", "100") = 199', () => { // "99", "100"を渡したら199が返ってくるかテスト
      expect(calc.sum('99', '100')).toBe(199)
    })
  })
})
