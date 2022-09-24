const Bank = require('./bank')

describe('Bank class', () => {
  beforeEach(() => {
    this.mockBankAccount = {};
    this.mockStatement = {};
    this.bank = new Bank(this.mockBankAccount, this.mockStatement);
    this.header = 'date || credit || debit || balance';
  })

  it('showStatement method', () => {
    this.mockStatement.createStatement = jest.fn()
    this.bank.showStatement()
    expect(this.mockStatement.createStatement).toHaveBeenCalledTimes(1)
    expect(this.mockStatement.createStatement).toHaveBeenCalledWith(this.mockBankAccount)
  })

  it('deposit 200 into bank', () => {
    this.mockBankAccount.transact = jest.fn()
    this.bank.deposit(200)
    expect(this.mockBankAccount.transact).toHaveBeenCalledTimes(1)
    expect(this.mockBankAccount.transact).toHaveBeenCalledWith(200)
  })

  it('wrong number of arguments given', () => {
    expect(() => {
      this.bank.deposit();
    }).toThrow('method takes a positive number as an argument');
  });

  it('rejects zero deposit', () => {
    expect(() => {
      this.bank.deposit(0);
    }).toThrow('method takes a positive number as an argument')
  });

  it('negative deposit', () => {
    expect(() => {
      this.bank.deposit(-25);
    }).toThrow('method takes a positive number as an argument')
  });

  it('rejects string argument', () => {
    expect(() => {
      this.bank.deposit('loada money');
    }).toThrow('method takes a positive number as an argument')
  });

  it('withdraw 200 from bank', () => {
    this.mockBankAccount.transact = jest.fn()
    this.bank.withdraw(200)
    expect(this.mockBankAccount.transact).toHaveBeenCalledTimes(1)
    expect(this.mockBankAccount.transact).toHaveBeenCalledWith(-200)
  })
})