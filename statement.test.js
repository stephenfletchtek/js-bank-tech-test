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
    mockBankAccount.allTransactions = () => [[new Date('2022-09-20'), 100, 100]]
    const result = statement.createStatement(mockBankAccount)
    expect(result).toEqual("date || credit || debit || balance\n20/09/2022 || 100.00 || || 100.00")
  })

  it('single credit of 3.1415927', () => {
    const statement = new Statement;
    const mockBankAccount = {}
    mockBankAccount.allTransactions = () => [[new Date('2022-09-20'), 3.1415927, 3.1415927]]
    const result = statement.createStatement(mockBankAccount)
    expect(result).toEqual("date || credit || debit || balance\n20/09/2022 || 3.14 || || 3.14")
  })

  it('withdrawal of 50', () => {
    const statement = new Statement;
    const mockBankAccount = {}
    mockBankAccount.allTransactions = () => [[new Date('2022-09-20'), -50, -50]]
    const result = statement.createStatement(mockBankAccount)
    expect(result).toEqual("date || credit || debit || balance\n20/09/2022 || || 50.00 || -50.00")
  })

  it('two transactions', () => {
    const statement = new Statement;
    const mockBankAccount = {}
    mockBankAccount.allTransactions = () => [[new Date('2022-09-20'), 200, 200], [new Date('2022-11-01'), -50, 150]]
    const result = statement.createStatement(mockBankAccount)
    const header = "date || credit || debit || balance\n"
    const line1 = "01/11/2022 || || 50.00 || 150.00\n"
    const line2 = '20/09/2022 || 200.00 || || 200.00'
    expect(result).toEqual(header + line1 + line2)
  })
})
