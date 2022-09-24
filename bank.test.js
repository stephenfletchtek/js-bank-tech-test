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
    const date = new Date('2022-09-19')
    this.mockBankAccount.transact = (arg) => [date, arg]
    expect(this.bank.deposit(200)).toEqual([date, 200])
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
    const date = new Date('2022-09-20')
    this.mockBankAccount.transact = (arg) => [date, arg]
    expect(this.bank.withdraw(200)).toEqual([date, -200])
  })
})