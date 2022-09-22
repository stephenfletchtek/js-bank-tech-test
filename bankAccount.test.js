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
})
