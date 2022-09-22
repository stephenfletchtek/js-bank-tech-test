const BankAccount = require('./bankAccount')

describe('BankAccount class', () => {
  it('has 0 opening balance', () => {
    const bankAccount = new BankAccount;
    expect(bankAccount.openingBalance).toBe(0);
  })

  it('opens with 100 balance', () => {
    const bankAccount = new BankAccount(100);
    expect(bankAccount.openingBalance).toBe(100);
  })

  it('has no transactions', () => {
    const bankAccount = new BankAccount;
    expect(bankAccount.allTransactions()).toEqual([])
  })

  it('adds 200 on 20/09/2022', () => {
    const date = new Date('2022-09-20')
    const bankAccount = new BankAccount(0, date);
    expect(bankAccount.transact(200)).toEqual([date.valueOf(), 200])
    expect(bankAccount.allTransactions()).toEqual([[date.valueOf(), 200, 200]])
  })
})
