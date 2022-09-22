const Statement = require('./statement')

describe('Statement class', () => {
  it('no transactions', () => {
    const statement = new Statement;
    const mockBankAccount = { allTransactions: () => [] }
    const result = statement.createStatement(mockBankAccount)
    expect(result).toEqual('date || credit || debit || balance')
  })

  it('single credit', () => {
    const statement = new Statement;
    const mockBankAccount = {}
    mockBankAccount.allTransactions = () => [[new Date('2022-09-20'), 200, 200]]
    const result = statement.createStatement(mockBankAccount)
    expect(result).toEqual("date || credit || debit || balance\n20/09/2022 || 200.00 || || 200.00")
  })
})
