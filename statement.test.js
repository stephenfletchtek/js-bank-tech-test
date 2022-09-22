const Statement = require('./statement')

describe('Statement class', () => {
  it('no transactions', () => {
    const statement = new Statement;
    const mockBankAccount = { allTransactions: () => [] }
    const result = statement.createStatement(mockBankAccount)
    expect(result).toEqual('date || credit || debit || balance')
  })
})
