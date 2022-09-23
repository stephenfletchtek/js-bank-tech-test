const Statement = require('./statement')

describe('Statement class', () => {
  beforeEach(() => {
    this.statement = new Statement;
    this.mockBankAccount = {};
    this.header = 'date || credit || debit || balance';
  })

  it('no transactions', () => {
    this.mockBankAccount.allTransactions = () => []
    const result = this.statement.createStatement(this.mockBankAccount)
    expect(result).toEqual(this.header)
  })

  it('single credit of 200', () => {
    this.mockBankAccount.allTransactions = () => [[new Date('2022-09-20'), 200, 200]]
    const result = this.statement.createStatement(this.mockBankAccount)
    expect(result).toEqual(this.header + "\n20/09/2022 || 200.00 || || 200.00")
  })

  it('single credit of 100', () => {
    this.mockBankAccount.allTransactions = () => [[new Date('2022-09-20'), 100, 100]]
    const result = this.statement.createStatement(this.mockBankAccount)
    expect(result).toEqual(this.header + "\n20/09/2022 || 100.00 || || 100.00")
  })

  it('single credit of 3.1415927', () => {
    this.mockBankAccount.allTransactions = () => [[new Date('2022-09-20'), 3.1415927, 3.1415927]]
    const result = this.statement.createStatement(this.mockBankAccount)
    expect(result).toEqual(this.header + "\n20/09/2022 || 3.14 || || 3.14")
  })

  it('withdrawal of 50', () => {
    this.mockBankAccount.allTransactions = () => [[new Date('2022-09-20'), -50, -50]]
    const result = this.statement.createStatement(this.mockBankAccount)
    expect(result).toEqual(this.header + "\n20/09/2022 || || 50.00 || -50.00")
  })

  it('two transactions', () => {
    this.mockBankAccount.allTransactions = () =>
      [[new Date('2022-09-20'), 200, 200], [new Date('2022-11-01'), -50, 150]]
    const result = this.statement.createStatement(this.mockBankAccount)
    const line1 = "\n01/11/2022 || || 50.00 || 150.00"
    const line2 = "\n20/09/2022 || 200.00 || || 200.00"
    expect(result).toEqual(this.header + line1 + line2)
  })
})
