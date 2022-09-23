const Statement = require('./statement')

describe('Statement class', () => {
  it('no transactions', () => {
    const statement = new Statement;
    const mockBankAccount = { allTransactions: () => [] }
    const result = statement.createStatement(mockBankAccount)
    expect(result).toEqual('date || credit || debit || balance')
  })

  it('single credit of 200', () => {
    const statement = new Statement;
    const mockBankAccount = {}
    mockBankAccount.allTransactions = () => [[new Date('2022-09-20'), 200, 200]]
    const result = statement.createStatement(mockBankAccount)
    expect(result).toEqual("date || credit || debit || balance\n20/09/2022 || 200.00 || || 200.00")
  })

  it('single credit of 100', () => {
    const statement = new Statement;
    const mockBankAccount = {}
    mockBankAccount.allTransactions = () => [[new Date('2022-11-20'), 100, 100]]
    const result = statement.createStatement(mockBankAccount)
    expect(result).toEqual("date || credit || debit || balance\n20/11/2022 || 100.00 || || 100.00")
  })

  it('single credit of 3.1415927', () => {
    const statement = new Statement;
    const mockBankAccount = {}
    mockBankAccount.allTransactions = () => [[new Date('2022-09-20'), 3.1415927, 3.1415927]]
    const result = statement.createStatement(mockBankAccount)
    expect(result).toEqual("date || credit || debit || balance\n20/09/2022 || 3.14 || || 3.14")
  })
})
